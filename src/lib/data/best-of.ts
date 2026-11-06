// Single source of truth for the dated best-of edition.
//
// The monthly refresh bumps BEST_OF_EDITION together with the page's LAST_UPDATED
// and NEXT_EDITION. Every link label reads from here, so a month name cannot drift
// behind the page it points at (the home page and category pages both said October
// while the page itself said November).
export const BEST_OF_EDITION = 'November 2026';
export const BEST_OF_NEXT_EDITION = '2026-12-01';
