import { error } from '@sveltejs/kit';

export async function GET() {
    const robots = `User-agent: *
Allow: /
Sitemap: https://predictiontools.directory/sitemap.xml`;

    return new Response(robots, {
        headers: {
            'Content-Type': 'text/plain'
        }
    });
}
