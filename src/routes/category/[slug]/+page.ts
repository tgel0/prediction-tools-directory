import { error } from '@sveltejs/kit';
import tools from '$lib/data/tools.json';
import categories from '$lib/data/categories.json';
import { categoryToSlug, slugToCategory } from '$lib/data/schema';
import type { PageLoad, EntryGenerator } from './$types';

export const load: PageLoad = ({ params }) => {
    const categorySlug = params.slug;
    const categoryName = slugToCategory(categorySlug);

    if (!categoryName) {
        throw error(404, 'Category not found');
    }

    const filteredTools = tools.filter((tool) => tool.category === categoryName)
        .sort((a, b) => {
            if (a.isActive === false && b.isActive !== false) return 1;
            if (a.isActive !== false && b.isActive === false) return -1;
            return 0;
        });

    const description = categories[categoryName] || `Discover the top-rated tools and resources in the ${categoryName} category specifically curated for the prediction market ecosystem.`;

    return {
        categoryName,
        filteredTools,
        categorySlug,
        description
    };
};

export const entries: EntryGenerator = () => {
    const categoriesList = [...new Set(tools.map((t) => t.category).filter((c) => c !== ''))];
    return categoriesList.map((c) => ({ slug: categoryToSlug(c) }));
};
