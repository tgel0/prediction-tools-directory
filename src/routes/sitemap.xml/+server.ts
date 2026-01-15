import tools from '$lib/data/tools.json';

export async function GET() {
    const site = 'https://predictiontools.directory';
    const pages = [
        '/',
        '/submit',
        '/privacy',
        '/terms'
    ];

    // Get unique categories and format slugs
    const categories = [...new Set(tools.map(tool => tool.category))];

    const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
    xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
>
    ${pages
            .map(
                (page) => `
    <url>
        <loc>${site}${page}</loc>
        <changefreq>daily</changefreq>
        <priority>${page === '/' ? '1.0' : '0.8'}</priority>
    </url>
    `
            )
            .join('')}
    ${categories
            .map(
                (category) => `
    <url>
        <loc>${site}/category/${category.toLowerCase().replace(/ /g, '-')}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>
    `
            )
            .join('')}
    ${tools
            .map(
                (tool) => `
    <url>
        <loc>${site}/tool/${tool.slug}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>
    `
            )
            .join('')}
</urlset>`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml'
        }
    });
}
