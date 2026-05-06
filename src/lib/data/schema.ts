export const CATEGORIES = [
	'Platforms',
	'Trading Terminals',
	'AI Agents & Bots',
	'Market Intelligence',
	'Analysis Tools',
	'Information & OSINT',
	'Infrastructure & APIs'
] as const;

export const PRICING_OPTIONS = ['Free', 'Freemium', 'Paid', 'Custom'] as const;
export const ACCESS_OPTIONS = ['Public', 'Waitlist', 'Invite-only'] as const;
export const STATUS_OPTIONS = ['active', 'inactive', 'acquired', 'shut-down'] as const;

export type ToolCategory = (typeof CATEGORIES)[number];
export type PricingOption = (typeof PRICING_OPTIONS)[number];
export type AccessOption = (typeof ACCESS_OPTIONS)[number];
export type StatusOption = (typeof STATUS_OPTIONS)[number];

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
	pricing?: string;
	access?: string;
	metadata?: Record<string, string>;

	// Extended enrichment fields
	pricingDetails?: string;
	blockchain?: string[];
	supportedMarkets?: string[];
	platform?: string[];
	features?: string[];
	xHandle?: string;
	websiteName?: string;
	status?: string;
	acquiredBy?: string;
	addedDate?: string;
	lastVerified?: string;
};

export const categoryToSlug = (category: string): string =>
	category.toLowerCase().replace(/\s+/g, '-');

export const slugToCategory = (slug: string): ToolCategory | undefined =>
	CATEGORIES.find((category) => categoryToSlug(category) === slug);
