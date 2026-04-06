import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toolsPath = path.resolve(__dirname, '../src/lib/data/tools.json');

const VALID_CATEGORIES = new Set([
	'Platform',
	'Analytics',
	'Trading Terminal',
	'Infrastructure'
]);

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
