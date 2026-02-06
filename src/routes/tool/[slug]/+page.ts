import { error } from '@sveltejs/kit';
import tools from '$lib/data/tools.json';
import type { PageLoad, EntryGenerator } from './$types';

export const load: PageLoad = ({ params }) => {
    const tool = tools.find((t) => t.slug === params.slug);

    if (!tool) {
        throw error(404, 'Tool not found');
    }

    const relatedTools = tools
        .filter((t) => t.category === tool.category && t.id !== tool.id)
        .slice(0, 3);

    return {
        tool,
        relatedTools
    };
};

export const entries: EntryGenerator = () => {
    return tools.map((tool) => ({ slug: tool.slug }));
};
