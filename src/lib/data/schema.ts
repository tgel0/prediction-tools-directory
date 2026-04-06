export const CATEGORIES = [
	'Platform',
	'Analytics',
	'Trading Terminal',
	'Infrastructure'
] as const;

export type ToolCategory = (typeof CATEGORIES)[number];

export type Tool = {
	id: string;
	name: string;
	slug: string;
	shortDescription: string;
	description: string;
	// JSON imports are typed broadly as string; category validity is enforced in validate-tools.mjs.
	category: string;
	url: string;
	xUrl: string;
	tags: string[];
	isPromoted?: boolean;
	isActive?: boolean;
};

export const categoryToSlug = (category: string): string =>
	category.toLowerCase().replace(/\s+/g, '-');

export const slugToCategory = (slug: string): ToolCategory | undefined =>
	CATEGORIES.find((category) => categoryToSlug(category) === slug);
