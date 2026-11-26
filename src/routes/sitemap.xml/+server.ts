import tools from '$lib/data/tools.json';
import { categoryToSlug } from '$lib/data/schema';
import { comparePairs } from '$lib/data/compare';

export const prerender = true;

function escapeXml(unsafe: string) {
    return unsafe.replace(/[<>&"']/g, (c) => {
        switch (c) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '"': return '&quot;';
            case "'": return '&apos;';
            default: return c;
        }
    });
}

export async function GET() {
    const site = 'https://predictiontools.directory';
    const pages = [
        '/',
        '/submit',
        '/privacy',
        '/terms'
    ];

    // One entry per researched pair, derived from `compareWith` on the records: hand-written
    // pages keep their own slug, generated ones follow <a>-vs-<b> in alphabetical order.
    const compareSlugs = comparePairs().map((pair) => pair.slug);

    // Hand-maintained editorial pages. A dated monthly edition is not a daily page, so it gets
    // its own changefreq rather than riding on the 'daily' static list above.
    const editorialPages = [
        '/best/prediction-market-platforms'
    ];

    // Reference pages that explain the market rather than list tools. They change when the law
    // does, which is more often than a monthly edition but less often than the directory.
    const referencePages = [
        '/learn/prediction-markets'
    ];

    const categories = [...new Set(tools.map(tool => tool.category))];

    // <lastmod> is optional in the sitemap protocol, so pages without a data-backed date
    // (static, editorial, reference) simply omit it. Tool pages use the record's
    // lastVerified; categories and compare pages use the newest lastVerified of their
    // members, so a re-verified tool also bumps the pages that list it.
    const newestVerified = (list: { lastVerified?: string }[]) =>
        list.reduce((max, t) => (t.lastVerified && t.lastVerified > max ? t.lastVerified : max), '');

    const comparePairsList = comparePairs();
    const compareBySlug = new Map(comparePairsList.map((pair) => [pair.slug, pair]));

    type UrlEntry = {
        loc: string;
        changefreq: string;
        priority: string;
        lastmod?: string;
    };

    const urlEntries: UrlEntry[] = [
        ...pages.map(page => ({
            loc: `${site}${page}`,
            changefreq: 'daily',
            priority: page === '/' ? '1.0' : '0.8'
        })),
        ...categories.map(category => ({
            loc: `${site}/category/${categoryToSlug(category)}`,
            changefreq: 'weekly',
            priority: '0.8',
            lastmod: newestVerified(tools.filter(tool => tool.category === category))
        })),
        ...tools.map(tool => ({
            loc: `${site}/tool/${tool.slug}`,
            changefreq: 'weekly',
            priority: '0.9',
            lastmod: tool.lastVerified ?? ''
        })),
        ...compareSlugs.map(slug => {
            const pair = compareBySlug.get(slug);
            return {
                loc: `${site}/compare/${slug}`,
                changefreq: 'weekly',
                priority: '0.8',
                lastmod: pair ? newestVerified([pair.a, pair.b]) : ''
            };
        }),
        ...editorialPages.map(page => ({
            loc: `${site}${page}`,
            changefreq: 'monthly',
            priority: '0.9'
        })),
        ...referencePages.map(page => ({
            loc: `${site}${page}`,
            changefreq: 'weekly',
            priority: '0.9'
        }))
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries.map(entry => `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>${entry.lastmod ? `
    <lastmod>${entry.lastmod}</lastmod>` : ''}
  </url>`).join('\n')}
</urlset>`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600'
        }
    });
}
