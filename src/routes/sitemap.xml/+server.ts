import tools from '$lib/data/tools.json';
import { categoryToSlug } from '$lib/data/schema';

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

    const categories = [...new Set(tools.map(tool => tool.category))];

    const urlEntries = [
        ...pages.map(page => ({
            loc: `${site}${page}`,
            changefreq: 'daily',
            priority: page === '/' ? '1.0' : '0.8'
        })),
        ...categories.map(category => ({
            loc: `${site}/category/${categoryToSlug(category)}`,
            changefreq: 'weekly',
            priority: '0.8'
        })),
        ...tools.map(tool => ({
            loc: `${site}/tool/${tool.slug}`,
            changefreq: 'weekly',
            priority: '0.9'
        }))
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries.map(entry => `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600'
        }
    });
}
