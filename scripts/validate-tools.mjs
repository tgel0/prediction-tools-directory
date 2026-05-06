import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toolsPath = path.resolve(__dirname, '../src/lib/data/tools.json');

const VALID_CATEGORIES = new Set([
	'Platforms',
	'Trading Terminals',
	'AI Agents & Bots',
	'Market Intelligence',
	'Analysis Tools',
	'Information & OSINT',
	'Infrastructure & APIs'
]);

const VALID_PRICING = new Set(['Free', 'Freemium', 'Paid', 'Custom']);
const VALID_ACCESS = new Set(['Public', 'Waitlist', 'Invite-only']);
const VALID_STATUS = new Set(['active', 'inactive', 'acquired', 'shut-down']);

const requiredStringFields = [
	'id',
	'name',
	'slug',
	'shortDescription',
	'description',
	'category',
	'url',
	'xUrl'
];

const errors = [];
const warnings = [];

let tools = [];

try {
	tools = JSON.parse(fs.readFileSync(toolsPath, 'utf8'));
} catch (error) {
	console.error('Failed to parse tools JSON:', error);
	process.exit(1);
}

if (!Array.isArray(tools)) {
	console.error('tools.json must contain an array');
	process.exit(1);
}

const seenIds = new Set();
const seenSlugs = new Set();
const counts = {};

for (const [index, tool] of tools.entries()) {
	const label = `index ${index}${tool?.slug ? ` (${tool.slug})` : ''}`;

	if (!tool || typeof tool !== 'object') {
		errors.push(`${label}: item must be an object`);
		continue;
	}

	for (const field of requiredStringFields) {
		if (field === 'category') {
            if (typeof tool[field] !== 'string') {
			    errors.push(`${label}: "${field}" must be a string`);
            }
		} else if (typeof tool[field] !== 'string' || tool[field].trim().length === 0) {
			errors.push(`${label}: "${field}" must be a non-empty string`);
		}
	}

	if (tool.id) {
		if (seenIds.has(tool.id)) {
			errors.push(`${label}: duplicate id "${tool.id}"`);
		}
		seenIds.add(tool.id);
	}

	if (tool.slug) {
		if (seenSlugs.has(tool.slug)) {
			errors.push(`${label}: duplicate slug "${tool.slug}"`);
		}
		seenSlugs.add(tool.slug);

		if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(tool.slug)) {
			errors.push(`${label}: slug must be kebab-case`);
		}
	}

	if (tool.category !== "" && !VALID_CATEGORIES.has(tool.category)) {
		errors.push(`${label}: invalid category "${tool.category}"`);
	}

	for (const urlField of ['url', 'xUrl']) {
		if (typeof tool[urlField] !== 'string') {
			continue;
		}

		try {
			const parsed = new URL(tool[urlField]);
			if (!['http:', 'https:'].includes(parsed.protocol)) {
				errors.push(`${label}: "${urlField}" must use http/https`);
			}
		} catch {
			errors.push(`${label}: "${urlField}" must be a valid URL`);
		}
	}

	if (!Array.isArray(tool.tags)) {
		errors.push(`${label}: "tags" must be an array`);
	} else {
		const tagSet = new Set();
		for (const tag of tool.tags) {
			if (typeof tag !== 'string' || tag.trim().length === 0) {
				errors.push(`${label}: all tags must be non-empty strings`);
				continue;
			}
			const normalizedTag = tag.trim().toLowerCase();
			if (tagSet.has(normalizedTag)) {
				errors.push(`${label}: duplicate tag "${tag}"`);
			}
			tagSet.add(normalizedTag);
		}
	}

	if (typeof tool.isPromoted !== 'undefined' && typeof tool.isPromoted !== 'boolean') {
		errors.push(`${label}: "isPromoted" must be a boolean when provided`);
	}

	if (typeof tool.isActive !== 'undefined' && typeof tool.isActive !== 'boolean') {
		errors.push(`${label}: "isActive" must be a boolean when provided`);
	}

	if (typeof tool.shortDescription === 'string' && tool.shortDescription.length > 120) {
		warnings.push(`${label}: shortDescription is long (${tool.shortDescription.length} chars)`);
	}

	// Validate new fields

	if (tool.pricing !== undefined && !VALID_PRICING.has(tool.pricing)) {
		errors.push(`${label}: invalid pricing "${tool.pricing}" — must be one of: ${[...VALID_PRICING].join(', ')}`);
	}

	if (tool.access !== undefined && !VALID_ACCESS.has(tool.access)) {
		errors.push(`${label}: invalid access "${tool.access}" — must be one of: ${[...VALID_ACCESS].join(', ')}`);
	}

	if (tool.status !== undefined && !VALID_STATUS.has(tool.status)) {
		errors.push(`${label}: invalid status "${tool.status}" — must be one of: ${[...VALID_STATUS].join(', ')}`);
	}

	if (tool.blockchain !== undefined) {
		if (!Array.isArray(tool.blockchain)) {
			errors.push(`${label}: "blockchain" must be an array`);
		} else {
			for (const b of tool.blockchain) {
				if (typeof b !== 'string' || b.trim().length === 0) {
					errors.push(`${label}: all blockchain entries must be non-empty strings`);
				}
			}
		}
	}

	if (tool.supportedMarkets !== undefined) {
		if (!Array.isArray(tool.supportedMarkets)) {
			errors.push(`${label}: "supportedMarkets" must be an array`);
		} else {
			for (const m of tool.supportedMarkets) {
				if (typeof m !== 'string' || m.trim().length === 0) {
					errors.push(`${label}: all supportedMarkets entries must be non-empty strings`);
				}
			}
		}
	}

	if (tool.platform !== undefined) {
		if (!Array.isArray(tool.platform)) {
			errors.push(`${label}: "platform" must be an array`);
		} else {
			for (const p of tool.platform) {
				if (typeof p !== 'string' || p.trim().length === 0) {
					errors.push(`${label}: all platform entries must be non-empty strings`);
				}
			}
		}
	}

	if (tool.features !== undefined) {
		if (!Array.isArray(tool.features)) {
			errors.push(`${label}: "features" must be an array`);
		} else {
			for (const f of tool.features) {
				if (typeof f !== 'string' || f.trim().length === 0) {
					errors.push(`${label}: all feature entries must be non-empty strings`);
				}
			}
		}
	}

	if (tool.pricingDetails !== undefined && (typeof tool.pricingDetails !== 'string' || tool.pricingDetails.trim().length === 0)) {
		errors.push(`${label}: "pricingDetails" must be a non-empty string when provided`);
	}

	if (tool.metadata !== undefined && (typeof tool.metadata !== 'object' || tool.metadata === null || Array.isArray(tool.metadata))) {
		errors.push(`${label}: "metadata" must be a Record<string, string> when provided`);
	}

	counts[tool.category] = (counts[tool.category] || 0) + 1;
}

if (warnings.length > 0) {
	console.warn('Validation warnings:');
	for (const warning of warnings) {
		console.warn(`- ${warning}`);
	}
}

if (errors.length > 0) {
	console.error('Validation errors:');
	for (const message of errors) {
		console.error(`- ${message}`);
	}
	process.exit(1);
}

console.log(`Validated ${tools.length} tools successfully.`);
console.log('Category counts:', counts);
