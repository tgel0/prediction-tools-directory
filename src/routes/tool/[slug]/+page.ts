import { error } from '@sveltejs/kit';
import tools from '$lib/data/tools.json';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
    const tool = tools.find((t) => t.slug === params.slug);

    if (!tool) {
        throw error(404, 'Tool not found');
    }

    return {
        tool
    };
};
