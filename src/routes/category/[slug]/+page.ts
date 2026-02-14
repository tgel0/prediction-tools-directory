import { error } from '@sveltejs/kit';
import tools from '$lib/data/tools.json';
import { categoryToSlug, slugToCategory } from '$lib/data/schema';
import type { PageLoad, EntryGenerator } from './$types';

export const load: PageLoad = ({ params }) => {
    const categorySlug = params.slug;
    const categoryName = slugToCategory(categorySlug);

    if (!categoryName) {
        throw error(404, 'Category not found');
    }

    const filteredTools = tools.filter((tool) => tool.category === categoryName);

    return {
        categoryName,
        filteredTools,
        categorySlug
    };
};

export const entries: EntryGenerator = () => {
    const categories = [...new Set(tools.map((t) => t.category).filter((c) => c !== ''))];
    return categories.map((c) => ({ slug: categoryToSlug(c) }));
};
