import tools from '$lib/data/tools.json';
import type { PageLoad, EntryGenerator } from './$types';

export const load: PageLoad = ({ params }) => {
    const categorySlug = params.slug;

    // Helper to format slug back to Title Case or display name
    // We try to find a matching tool category first
    const categoryName =
        tools.find(
            (t) => t.category.toLowerCase().replace(/ /g, "-") === categorySlug,
        )?.category || categorySlug.replace(/-/g, " ");

    const filteredTools = tools.filter(
        (tool) =>
            tool.category.toLowerCase().replace(/ /g, "-") === categorySlug,
    );

    return {
        categoryName,
        filteredTools,
        categorySlug
    };
};

export const entries: EntryGenerator = () => {
    const categories = [...new Set(tools.map(t => t.category).filter(c => c !== ""))];
    return categories.map(c => ({ slug: c.toLowerCase().replace(/ /g, '-') }));
};
