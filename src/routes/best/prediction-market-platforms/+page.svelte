<script lang="ts">
  import tools from '$lib/data/tools.json';

  // This page is a monthly edition. Bump EDITION + LAST_UPDATED together, re-check every
  // source below, and update NEXT_EDITION. See "How this page is kept current".
  const EDITION = 'November 2026';
  const LAST_UPDATED = '2026-11-03';
  const NEXT_EDITION = '2026-12-01';

  type Source = {
    id: string;
    short: string;
    label: string;
    url: string;
    date: string;
    note?: string;
  };

  // Every figure below traces to one of these. The date is when we read it; where the
  // source publishes its own effective date, that is noted separately.
  const sources: Source[] = [
    {
      id: 'kalshi-fees',
      short: 'Kalshi fee schedule',
      label: 'Kalshi — Fee schedule (live page)',
      url: 'https://kalshi.com/fee-schedule',
      date: '2026-11-03',
      note: 'Standard taker multiplier 1, fee range $0.07–$1.75 per 100 contracts. Page listed "no upcoming fee changes scheduled" when read.'
    },
    {
      id: 'kalshi-fee-pdf',
      short: 'Kalshi fee PDF',
      label: 'Kalshi — Fee Schedule (PDF)',
      url: 'https://kalshi.com/docs/kalshi-fee-schedule.pdf',
      date: '2026-11-03',
      note: 'Document states "Last updated and effective: July 7, 2026".'
    },
    {
      id: 'kalshi-api',
      short: 'Kalshi API docs',
      label: 'Kalshi — API documentation (REST, WebSocket, FIX)',
      url: 'https://docs.kalshi.com/',
      date: '2026-11-03'
    },
    {
      id: 'kalshi-intl',
      short: 'Kalshi international',
      label: 'Kalshi Help Center — Can I trade on Kalshi from outside the United States?',
      url: 'https://help.kalshi.com/en/articles/14026044-can-i-trade-on-kalshi-from-outside-the-united-states',
      date: '2026-11-03'
    },
    {
      id: 'kalshi-member-agreement',
      short: 'Kalshi Member Agreement',
      label: 'Kalshi — Member Agreement (restricted jurisdictions)',
      url: 'https://kalshi.com/docs/kalshi-member-agreement.pdf',
      date: '2026-11-03',
      note: 'Version dated 2026-10-01. The restricted list is Section VI and runs to 55 jurisdictions this version; it changes between versions, so check the version date on the PDF.'
    },
    {
      id: 'kalshi-lip',
      short: 'Kalshi liquidity programme',
      label: 'Kalshi Help Center — Liquidity Incentive Program',
      url: 'https://help.kalshi.com/en/articles/13823851-liquidity-incentive-program',
      date: '2026-11-03',
      note: 'Program end date 2027-01-01. US members only — international users are ineligible for rewards.'
    },
    {
      id: 'coindesk-states',
      short: 'CoinDesk on state blocks',
      label: 'CoinDesk — "Kalshi off-limits in multiple states"',
      url: 'https://www.coindesk.com/news-analysis/2026/08/21/kalshi-off-limits-in-multiple-states-as-prediction-markets-cftc-team-up-for-battle',
      date: '2026-10-21',
      note: 'Article published 2026-08-22. The publisher now blocks automated re-reads, so this is the last date it was read.'
    },
    {
      id: 'pm-fees',
      short: 'Polymarket fees',
      label: 'Polymarket Documentation — Fees (category table)',
      url: 'https://docs.polymarket.com/trading/fees',
      date: '2026-11-03'
    },
    {
      id: 'pm-geo',
      short: 'Polymarket geoblocks',
      label: 'Polymarket Documentation — Geographic Restrictions',
      url: 'https://docs.polymarket.com/api-reference/geoblock',
      date: '2026-11-03',
      note: 'Three tiers: full block, close-only on frontend and API, close-only on the frontend. More than forty jurisdictions sit in the first two.'
    },
    {
      id: 'pm-rebates',
      short: 'Polymarket maker rebates',
      label: 'Polymarket Documentation — Maker Rebates Program',
      url: 'https://docs.polymarket.com/programs/maker-rebates',
      date: '2026-11-03',
      note: 'Rebates paid daily in pUSD, funded by taker fees; category shares run 15% (sports) to 25% (most others), 20% on crypto and none on combos.'
    },
    {
      id: 'pm-api',
      short: 'Polymarket API docs',
      label: 'Polymarket Documentation — APIs, SDKs and tools',
      url: 'https://docs.polymarket.com/',
      date: '2026-11-03'
    },
    {
      id: 'pm-markets',
      short: 'Polymarket markets',
      label: 'Polymarket — live markets',
      url: 'https://polymarket.com/markets',
      date: '2026-11-03'
    },
    {
      id: 'pm-us-fees',
      short: 'Polymarket US fee schedule',
      label: 'Polymarket US Documentation — Fee Schedule',
      url: 'https://docs.polymarket.us/fees',
      date: '2026-11-03',
      note: 'Taker coefficient 0.0695 (Table Tennis 0.10), maker rebate tiers from $10m of prior-month maker volume, weekly taker rebates. Combo curve coefficient raised from 0.06 to 0.085 at 10pm ET on 2026-10-28.'
    },
    {
      id: 'pm-us-docs',
      short: 'Polymarket US docs',
      label: 'Polymarket US Documentation',
      url: 'https://docs.polymarket.us/',
      date: '2026-11-03'
    },
    {
      id: 'rh-fees',
      short: 'Robinhood event contracts overview',
      label: 'Robinhood Help Center — Event contracts overview',
      url: 'https://robinhood.com/us/en/support/articles/event-contracts-overview/',
      date: '2026-11-03',
      note: 'Probability-weighted commission from 2026-06-01; Maryland, Michigan and Nevada residents cannot trade sports contracts. Eligibility and state restrictions on the same page.'
    },
    {
      id: 'rh-trading',
      short: 'Robinhood trading event contracts',
      label: 'Robinhood Help Center — Trading event contracts',
      url: 'https://robinhood.com/us/en/support/articles/trading-event-contracts/',
      date: '2026-11-03',
      note: 'States prediction markets are mobile-app only, view-only on web, and not available in Robinhood Legend.'
    },
    {
      id: 'rh-how',
      short: 'Robinhood event contract mechanics',
      label: 'Robinhood Help Center — How event contracts work',
      url: 'https://robinhood.com/us/en/support/articles/how-event-contracts-work/',
      date: '2026-11-03',
      note: 'Disclosures name KalshiEX, ForecastEX, Rothera and NADEX. The event-contracts overview on the same site also names Crypto.com Derivatives North America, so the two pages do not list the same partners.'
    },
    {
      id: 'rh-launch',
      short: 'Robinhood prediction markets launch',
      label: 'Robinhood Newsroom — Robinhood Launches Prediction Markets Hub (2025-03-17)',
      url: 'https://robinhood.com/us/en/newsroom/robinhood-prediction-markets-hub',
      date: '2026-11-03'
    },
    {
      id: 'rh-football',
      short: 'Robinhood football launch',
      label: 'Robinhood Newsroom — Pro and College Football Prediction Markets (2025-08-19)',
      url: 'https://robinhood.com/newsroom/pro-and-college-football-prediction-markets',
      date: '2026-11-03'
    },
    {
      id: 'rh-cryptocom',
      short: 'Robinhood / Crypto.com routing',
      label: 'Robinhood Newsroom — Teams Up With Crypto.com and OG.com (2026-09-08)',
      url: 'https://robinhood.com/us/en/newsroom/robinhood-cryptocom/',
      date: '2026-11-03',
      note: 'Football contracts routed to OG.com from 2026-09-08; Rothera routing began in June 2026.'
    },
    {
      id: 'rh-legend',
      short: 'Robinhood Legend market data',
      label: 'Robinhood Help Center — Market data sources for Robinhood Legend',
      url: 'https://robinhood.com/us/en/support/articles/market-data-sources-for-robinhood-legend/',
      date: '2026-11-03',
      note: 'States event contract positions do not appear in Legend.'
    },
    {
      id: 'rh-docs',
      short: 'Robinhood developer docs',
      label: 'Robinhood — Developer documentation (Crypto Trading API)',
      url: 'https://docs.robinhood.com/',
      date: '2026-11-03',
      note: 'Covers the Robinhood Crypto Trading API only. No event-contract section.'
    },
    {
      id: 'rh-learn',
      short: 'Robinhood prediction markets library',
      label: 'Robinhood Learn — Prediction markets explained',
      url: 'https://robinhood.com/us/en/learn/prediction-markets/',
      date: '2026-11-03',
      note: 'Its category guides (sports, politics, economics, climate, entertainment, technology, education, crypto) are the basis for the market-types column.'
    }
  ];

  const src = Object.fromEntries(sources.map((s) => [s.id, s])) as Record<string, Source>;

  type Venue = {
    slug: string;
    name: string;
    // Where the venue detail actually lives. Polymarket US is covered inside the comparison page
    // rather than in a profile of its own, so it points there instead of inventing a route.
    profileHref: string;
    profileLabel: string;
    product: string;
    accent: string;
    bestFor: string;
    fees: string;
    feeNote: string;
    feeSources: string[];
    markets: string;
    marketSources: string[];
    eligibility: string;
    eligibilitySources: string[];
    liquidity: string;
    liquiditySources: string[];
    api: string;
    apiSources: string[];
    watchOut: string;
  };

  // Ordered by who each venue suits, not by a score. No composite rankings: the honest
  // answer is that eligibility removes most options before fees are worth comparing.
  const venues: Venue[] = [
    {
      slug: 'kalshi',
      name: 'Kalshi',
      profileHref: '/tool/kalshi',
      profileLabel: 'FULL PROFILE',
      product: 'CFTC-regulated exchange',
      accent: 'neon-blue',
      bestFor: 'US traders who want a regulated exchange, a bank rail, and the widest event menu.',
      fees: '0.07 × contracts × p × (1 − p), rounded up — $1.75 per 100 at 50¢',
      feeNote:
        'Standard multiplier 1. Maker fees are zero on most series and apply only on the ones the schedule names. Combos carry maker fees at 50% of taker.',
      feeSources: ['kalshi-fees', 'kalshi-fee-pdf'],
      markets: 'Elections and midterms, politics, sports, culture, crypto, commodities, climate, economics, finance, tech and science, mentions.',
      marketSources: ['kalshi-fees'],
      eligibility:
        'US residents, plus the countries its Member Agreement still allows — the restricted list is Section VI of that document, not the marketing site, and runs to 55 jurisdictions in the current version, the UK, France, Germany, Italy and Australia among them. Sports contracts are blocked in several US states where regulators have won court orders.',
      eligibilitySources: ['kalshi-intl', 'kalshi-member-agreement', 'coindesk-states'],
      liquidity:
        'Runs a Liquidity Incentive Program — US members only, and dated to end 2027-01-01 — and keeps maker fees at zero on most of the book, a signal it is buying depth rather than charging for it.',
      liquiditySources: ['kalshi-lip', 'kalshi-fees'],
      api: 'Yes. REST, WebSocket and FIX for event contracts, plus a demo environment and a second API set for its perpetual futures.',
      apiSources: ['kalshi-api'],
      watchOut: 'Per-series fee exceptions and state blocks both change; read the schedule and the app, not a summary.'
    },
    {
      slug: 'polymarket',
      name: 'Polymarket',
      profileHref: '/tool/polymarket',
      profileLabel: 'FULL PROFILE',
      product: 'International, on-chain venue',
      accent: 'neon-green',
      bestFor: 'Traders outside the US who want self-custody, crypto rails and politics or geopolitics markets.',
      fees: '0.04–0.07 × shares × p × (1 − p) — $1.00 per 100 at 50¢ in politics, $1.75 in crypto',
      feeNote:
        'Makers are never charged. Geopolitics and world-events markets are fee-free, and there are no Polymarket fees to deposit or withdraw USDC.',
      feeSources: ['pm-fees'],
      markets: 'Politics, geopolitics, sports, crypto, economics, finance, culture, tech, weather.',
      marketSources: ['pm-fees', 'pm-markets'],
      eligibility:
        'Outside the US, and only in the jurisdictions its geoblock still serves. More than forty are close-only or fully blocked — the UK, France, Germany, Italy, Poland, Belgium, Australia, Brazil and Singapore among them — and Ireland, Japan, the Netherlands and South Korea are close-only on the frontend while the API stays open. An email address or a wallet is enough to open an account.',
      eligibilitySources: ['pm-geo'],
      liquidity:
        'Taker fees fund a maker rebate paid daily in pUSD — 25% of the fee in most categories, 20% in crypto, 15% in sports and nothing on combos — and takers earn a tiered rebate of 3% to 50% by 30-day weighted volume.',
      liquiditySources: ['pm-rebates'],
      api: 'Yes. Documented CLOB API with SDKs; the same docs cover market data and order placement.',
      apiSources: ['pm-api'],
      watchOut: 'It is not one product: Polymarket US is a separate venue with separate fees, currency and users.'
    },
    {
      slug: 'polymarket-us',
      name: 'Polymarket US',
      profileHref: '/compare/polymarket-vs-kalshi',
      profileLabel: 'COMPARISON PAGE',
      product: 'CFTC-regulated US venue',
      accent: 'neon-green',
      bestFor: 'US traders who want Polymarket-style markets in USD with KYC and no wallet.',
      fees: '0.0695 × contracts × p × (1 − p) — $1.74 per 100 at 50¢; table tennis 0.10; a 50¢ combo costs $2.00',
      feeNote:
        'Combos take a second curve that adds 0.085 × (1 − p)⁴ to the same expression, raised from 0.06 on 2026-10-28. Maker rebate runs from −0.0035 to −0.0104 by volume tier and is applied at the trade, but the bottom tier — under $10m of prior-month maker volume — pays nothing. Taker rebates are paid weekly by tier.',
      feeSources: ['pm-us-fees'],
      markets: 'Sports including table tennis, crypto, politics and economics — the categories its own fee schedule prices.',
      marketSources: ['pm-us-fees'],
      eligibility: 'US residents, with identity verification and a USD account.',
      eligibilitySources: ['pm-us-docs', 'pm-us-fees'],
      liquidity:
        'Pays makers a tiered rebate and takers a weekly rebate, both scaled to the previous month’s volume; combo fills earn no maker rebate at all.',
      liquiditySources: ['pm-us-fees'],
      api: 'Yes, but separate from the international docs — Polymarket US publishes its own documentation site.',
      apiSources: ['pm-us-docs'],
      watchOut:
        'The fee schedule was rewritten on 2026-10-19 and the combo curve rose again on 2026-10-28, so any comparison written before those dates quotes numbers that no longer apply.'
    },
    {
      slug: 'robinhood',
      name: 'Robinhood',
      profileHref: '/tool/robinhood',
      profileLabel: 'FULL PROFILE',
      product: 'Brokerage reselling exchange contracts',
      accent: 'neon-green',
      bestFor: 'US Robinhood users who want event contracts inside an app and account they already have.',
      fees: '10% (5% with Gold) × contracts × p × (1 − p), capped at $0.01/contract — $1.00 per 100 at 50¢, before exchange fees',
      feeNote:
        'The cap binds across roughly 28¢–72¢, so the commission is $1.00 per 100 there with or without Gold. Partners add their own fee, up to about $0.01 per contract, on opening and closing.',
      feeSources: ['rh-fees'],
      markets: 'Sports and football, politics and elections, economics and financial data, crypto, climate and weather, commodities, entertainment, technology and education, plus custom combos of up to 10 legs on football and basketball.',
      marketSources: ['rh-learn', 'rh-fees'],
      eligibility:
        'US residents 18+, with an individual brokerage account plus a separately approved derivatives account. Maryland, Michigan and Nevada residents cannot trade sports contracts.',
      eligibilitySources: ['rh-fees'],
      liquidity:
        'Routes orders to KalshiEX, ForecastEX, Rothera and NADEX — and, for a selection of football contracts since 2026-09-08, to Crypto.com’s Derivatives North America, which trades as OG.com — instead of running a book. 13.6 billion contracts traded on Robinhood in Q2 2026.',
      liquiditySources: ['rh-how', 'rh-cryptocom'],
      api: 'No. There is no published event-contract API, and trading is mobile-app only — view-only on web, absent from Legend.',
      apiSources: ['rh-trading', 'rh-legend', 'rh-docs'],
      watchOut: 'No order-book depth in the app, no desktop trading, and no way to automate it.'
    }
  ];

  const featured = new Set(venues.map((v) => v.slug).filter((s) => s !== 'polymarket-us'));
  const otherPlatforms = tools.filter(
    (t) => t.category === 'Platforms' && !featured.has(t.slug) && t.status !== 'shut-down'
  );
</script>

<svelte:head>
  <title>Best prediction market platforms — {EDITION} | predictiontools.directory</title>
  <meta
    name="description"
    content="A dated comparison of the main prediction market platforms: fees at the same trade, market types, who can trade where, liquidity signals and documented API access. Facts checked {LAST_UPDATED}."
  />
  <link rel="canonical" href="https://predictiontools.directory/best/prediction-market-platforms" />

  <!-- Open Graph -->
  <meta property="og:type" content="article" />
  <meta property="og:title" content="Best prediction market platforms — {EDITION}" />
  <meta
    property="og:description"
    content="Fees, market types, eligibility, liquidity and API access for the main platforms, each with a source and a date checked."
  />
  <meta property="og:url" content="https://predictiontools.directory/best/prediction-market-platforms" />
  <meta property="og:image" content="https://predictiontools.directory/og-image.png" />
  <meta property="og:site_name" content="predictiontools.directory" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@predictiontools" />
  <meta name="twitter:title" content="Best prediction market platforms — {EDITION}" />
  <meta
    name="twitter:description"
    content="Same trade, four venues, with the arithmetic shown. Fees, access, liquidity and API access, checked {LAST_UPDATED}."
  />
  <meta name="twitter:image" content="https://predictiontools.directory/og-image.png" />

  <!-- JSON-LD -->
  {@html `<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best prediction market platforms — ' + EDITION,
    url: 'https://predictiontools.directory/best/prediction-market-platforms',
    description:
      'A dated comparison of prediction market platforms: fees at the same trade, market types, eligibility, liquidity signals and documented API access.',
    datePublished: '2026-10-21',
    dateModified: LAST_UPDATED,
    author: {
      '@type': 'Organization',
      name: 'predictiontools.directory',
      url: 'https://predictiontools.directory'
    },
    about: [
      { '@type': 'SoftwareApplication', name: 'Kalshi', applicationCategory: 'Prediction Market', url: 'https://kalshi.com' },
      { '@type': 'SoftwareApplication', name: 'Polymarket', applicationCategory: 'Prediction Market', url: 'https://polymarket.com' },
      { '@type': 'SoftwareApplication', name: 'Polymarket US', applicationCategory: 'Prediction Market', url: 'https://polymarket.us' },
      { '@type': 'SoftwareApplication', name: 'Robinhood', applicationCategory: 'Prediction Market', url: 'https://robinhood.com/us/en/prediction-markets/' }
    ]
  })}</script>`}
</svelte:head>

<div class="max-w-6xl mx-auto">
  <!-- Breadcrumb -->
  <nav class="flex mb-8 font-mono text-xs sm:text-sm tracking-tight" aria-label="Breadcrumb">
    <ol class="flex items-center space-x-2 text-dim-gray">
      <li><a href="/" class="hover:text-white transition-colors uppercase">HOME</a></li>
      <li class="flex items-center space-x-2">
        <span>/</span>
        <span class="text-gray-500 uppercase">BEST</span>
      </li>
      <li class="flex items-center space-x-2">
        <span>/</span>
        <span class="text-white uppercase">PREDICTION MARKET PLATFORMS</span>
      </li>
    </ol>
  </nav>

  <!-- Hero -->
  <header class="space-y-5 py-6 mb-8 border-b border-terminal-slate pb-8">
    <h1 class="text-3xl sm:text-5xl font-black font-sans tracking-tighter text-white uppercase leading-tight">
      Best prediction market<br />
      <span class="text-neon-green">platforms</span>
      <span class="text-gray-500 text-2xl sm:text-3xl align-middle ml-3">— {EDITION}</span>
    </h1>
    <p class="text-lg text-gray-300 max-w-3xl font-mono leading-relaxed">
      Four venues do most of the volume, and they are not interchangeable. Two are exchanges, one is
      a US-only version of an exchange, and one is a brokerage reselling other people's contracts.
      Below is what each charges on the same trade, who is allowed to use it, and what you can
      automate. Every number links to the source we read.
    </p>
    <div class="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-gray-500">
      <span class="text-neon-green uppercase tracking-wider">Last updated {LAST_UPDATED}</span>
      <span class="text-terminal-slate">|</span>
      <span>Edition: {EDITION}</span>
      <span class="text-terminal-slate">|</span>
      <span>{sources.length} sources, listed at the bottom</span>
    </div>
  </header>

  <!-- What changed this edition -->
  <section class="mb-12" aria-labelledby="changes">
    <h2 id="changes" class="text-2xl font-black text-white uppercase tracking-tight mb-3 flex items-center">
      <span class="text-neon-green mr-2">◷</span> What changed since the last edition
    </h2>
    <div class="border-l-2 border-neon-green pl-5 space-y-3 font-mono text-sm text-gray-300 leading-relaxed">
      <p>
        Polymarket US made combos dearer. The coefficient on the second term of its combo curve went
        from 0.06 to 0.085 at 10pm ET on 2026-10-28, so a 100-contract combo at 50¢ now costs $2.00
        rather than $1.92, and a 10¢ combo $1.18 rather than $1.02. The standard 0.0695 taker
        coefficient did not move
        <a href={src['pm-us-fees'].url} target="_blank" rel="noopener noreferrer"
          class="text-neon-green underline decoration-dotted underline-offset-2">(Polymarket US, {src['pm-us-fees'].date})</a>.
        Its maker rebate is tiered as well: a maker under $10m of prior-month volume now gets nothing
        back, where every maker used to receive a flat rebate.
      </p>
      <p>
        Robinhood closed Michigan. Maryland, Michigan and Nevada residents cannot trade sports
        contracts at all — Michigan had been close-only since September
        <a href={src['rh-fees'].url} target="_blank" rel="noopener noreferrer"
          class="text-neon-green underline decoration-dotted underline-offset-2">(Robinhood, {src['rh-fees'].date})</a>.
        Polymarket's geoblock page now sorts jurisdictions into three tiers — full block, close-only
        on frontend and API, and close-only on the frontend — with more than forty in the first two
        <a href={src['pm-geo'].url} target="_blank" rel="noopener noreferrer"
          class="text-neon-green underline decoration-dotted underline-offset-2">(Polymarket, {src['pm-geo'].date})</a>.
      </p>
      <p>
        Kalshi held still on price: the schedule listed no upcoming changes, the standard taker
        multiplier is still 1, and the fee PDF is still the 2026-07-07 version
        <a href={src['kalshi-fees'].url} target="_blank" rel="noopener noreferrer"
          class="text-neon-green underline decoration-dotted underline-offset-2">(Kalshi, {src['kalshi-fees'].date})</a>.
        Its Member Agreement names 55 restricted jurisdictions, India among them
        <a href={src['kalshi-member-agreement'].url} target="_blank" rel="noopener noreferrer"
          class="text-neon-green underline decoration-dotted underline-offset-2">(Kalshi, {src['kalshi-member-agreement'].date})</a>,
        and the Liquidity Incentive Program is US-only and dated to end 2027-01-01.
      </p>
    </div>
  </section>

  <!-- How to pick -->
  <section class="mb-12" aria-labelledby="how-to-pick">
    <h2 id="how-to-pick" class="text-2xl font-black text-white uppercase tracking-tight mb-3 flex items-center">
      <span class="text-neon-green mr-2">→</span> How to pick, in the order that matters
    </h2>
    <div class="border border-terminal-slate bg-terminal-dark p-6">
      <ol class="space-y-4 text-gray-300 font-mono text-sm leading-relaxed list-decimal list-inside">
        <li>
          <span class="text-white font-bold">Eligibility decides for most people.</span>
          Polymarket International is closed to the US and to a long list of countries; Polymarket US
          and Robinhood are US-only; Kalshi is the only one of the four that serves US residents and a
          set of international ones from the same account. If only one venue accepts you, the fee
          comparison is trivia.
        </li>
        <li>
          <span class="text-white font-bold">Then price the fee you will actually pay.</span>
          All four formulas scale with <code class="text-neon-green">p × (1 − p)</code>, so they
          converge near 50¢ and diverge at the extremes. Price the trade you intend to make, not the
          headline rate — a 10¢ longshot and a 90¢ favourite cost a fraction of a 50¢ trade on every
          venue here.
        </li>
        <li>
          <span class="text-white font-bold">Then check depth on the exact market.</span>
          None of these venues publishes a comparable depth figure, and market counts are not depth.
          Open the market, look at the spread and the size on the touch, and ask whether your order
          survives it. Robinhood does not show full book depth at all, which is its own answer for
          size-sensitive trading.
        </li>
        <li>
          <span class="text-white font-bold">Only then consider automation.</span>
          Kalshi and both Polymarket venues document APIs. Robinhood does not publish one for event
          contracts, and trading there is app-only, so any workflow you build around it is manual.
        </li>
      </ol>
      <p class="text-gray-400 font-mono text-xs leading-relaxed mt-5 pt-4 border-t border-terminal-slate">
        New to event contracts? What they are and how each venue came to be regulated is covered,
        with sources, in
        <a href="/learn/prediction-markets" class="text-neon-green underline decoration-dotted underline-offset-2 hover:text-white transition-colors">what is a prediction market, and is Kalshi legal?</a>.
      </p>
    </div>
  </section>

  <!-- Comparison table -->
  <section class="mb-8" aria-labelledby="table">
    <h2 id="table" class="text-2xl font-black text-white uppercase tracking-tight mb-3 flex items-center">
      <span class="text-neon-green mr-2">⊞</span> The comparison
    </h2>
    <p class="text-gray-400 font-mono text-sm leading-relaxed mb-6">
      Prices are per 100 contracts held to settlement, bought at 50¢, calculated with each venue's own
      published formula. They exclude the exchange fee that Robinhood layers on top, which is noted in
      its row.
    </p>

    <div class="bg-terminal-dark border border-terminal-slate overflow-x-auto">
      <table class="w-full text-sm font-mono">
        <thead>
          <tr class="border-b border-terminal-slate">
            <th class="text-left px-5 py-3 text-gray-500 uppercase tracking-wider text-xs w-44">Platform</th>
            <th class="text-left px-5 py-3 text-gray-500 uppercase tracking-wider text-xs">Fees</th>
            <th class="text-left px-5 py-3 text-gray-500 uppercase tracking-wider text-xs">Market types</th>
            <th class="text-left px-5 py-3 text-gray-500 uppercase tracking-wider text-xs">Eligibility</th>
            <th class="text-left px-5 py-3 text-gray-500 uppercase tracking-wider text-xs">Liquidity signals</th>
            <th class="text-left px-5 py-3 text-gray-500 uppercase tracking-wider text-xs">API access</th>
          </tr>
        </thead>
        <tbody>
          {#each venues as venue, i}
            <tr class="border-b border-terminal-slate/50 {i % 2 === 0 ? 'bg-terminal-black/30' : ''} align-top">
              <td class="px-5 py-4">
                <a href={venue.profileHref} class="text-white font-bold hover:text-neon-green transition-colors">
                  {venue.name}
                </a>
                <div class="text-gray-500 text-xs mt-1">{venue.product}</div>
              </td>
              <td class="px-5 py-4 text-gray-300 text-xs leading-relaxed">
                <div class="text-neon-green/90 mb-1">{venue.fees}</div>
                <p class="text-gray-400">{venue.feeNote}</p>
                <div class="flex flex-wrap gap-x-3 gap-y-1 mt-2">
                  {#each venue.feeSources as id}
                    <a href={src[id].url} target="_blank" rel="noopener noreferrer"
                      class="text-neon-blue hover:text-white underline decoration-dotted underline-offset-2 text-xs"
                      >{src[id].short} ({src[id].date})</a>
                  {/each}
                </div>
              </td>
              <td class="px-5 py-4 text-gray-300 text-xs leading-relaxed">
                <p>{venue.markets}</p>
                <div class="flex flex-wrap gap-x-3 gap-y-1 mt-2">
                  {#each venue.marketSources as id}
                    <a href={src[id].url} target="_blank" rel="noopener noreferrer"
                      class="text-neon-blue hover:text-white underline decoration-dotted underline-offset-2 text-xs"
                      >{src[id].short} ({src[id].date})</a>
                  {/each}
                </div>
              </td>
              <td class="px-5 py-4 text-gray-300 text-xs leading-relaxed">
                <p>{venue.eligibility}</p>
                <div class="flex flex-wrap gap-x-3 gap-y-1 mt-2">
                  {#each venue.eligibilitySources as id}
                    <a href={src[id].url} target="_blank" rel="noopener noreferrer"
                      class="text-neon-blue hover:text-white underline decoration-dotted underline-offset-2 text-xs"
                      >{src[id].short} ({src[id].date})</a>
                  {/each}
                </div>
              </td>
              <td class="px-5 py-4 text-gray-300 text-xs leading-relaxed">
                <p>{venue.liquidity}</p>
                <div class="flex flex-wrap gap-x-3 gap-y-1 mt-2">
                  {#each venue.liquiditySources as id}
                    <a href={src[id].url} target="_blank" rel="noopener noreferrer"
                      class="text-neon-blue hover:text-white underline decoration-dotted underline-offset-2 text-xs"
                      >{src[id].short} ({src[id].date})</a>
                  {/each}
                </div>
              </td>
              <td class="px-5 py-4 text-gray-300 text-xs leading-relaxed">
                <p>{venue.api}</p>
                <div class="flex flex-wrap gap-x-3 gap-y-1 mt-2">
                  {#each venue.apiSources as id}
                    <a href={src[id].url} target="_blank" rel="noopener noreferrer"
                      class="text-neon-blue hover:text-white underline decoration-dotted underline-offset-2 text-xs"
                      >{src[id].short} ({src[id].date})</a>
                  {/each}
                </div>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs mt-6">
      <div class="border border-terminal-slate bg-terminal-black p-4">
        <div class="text-neon-green uppercase tracking-wider mb-2">Same trade, four venues</div>
        <p class="text-gray-400 leading-relaxed">
          100 contracts at 50¢: Kalshi $1.75, Polymarket US $1.74, Polymarket International $1.00 in
          politics and $1.75 in crypto, Robinhood $1.00 before exchange fees.
        </p>
      </div>
      <div class="border border-terminal-slate bg-terminal-black p-4">
        <div class="text-neon-green uppercase tracking-wider mb-2">Where the arithmetic binds</div>
        <p class="text-gray-400 leading-relaxed">
          Robinhood's $0.01-per-contract cap makes its commission flat from roughly 28¢ to 72¢, then
          much cheaper toward 1¢ and 99¢. The others keep scaling with price uncertainty.
        </p>
      </div>
      <div class="border border-terminal-slate bg-terminal-black p-4">
        <div class="text-neon-green uppercase tracking-wider mb-2">Who pays nothing</div>
        <p class="text-gray-400 leading-relaxed">
          Makers on Polymarket International, always. Makers on Kalshi except on the series its
          schedule names. Polymarket US and Robinhood pay rebates or discounts rather than zero fees.
        </p>
      </div>
    </div>
  </section>

  <!-- Per-venue notes -->
  <section class="mb-12" aria-labelledby="venues">
    <div class="border-b border-terminal-slate pb-4 mb-6">
      <h2 id="venues" class="text-xl font-black text-white uppercase tracking-tight flex items-center">
        <span class="text-neon-green mr-2">#</span> What each venue is actually for
      </h2>
      <p class="text-gray-500 font-mono text-xs mt-2">
        Written as audience fit, not as a score. Full profiles, with the sourced detail, are one click
        down.
      </p>
    </div>

    <div class="space-y-5">
      {#each venues as venue}
        <div class="border border-terminal-slate bg-terminal-dark p-6">
          <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
            <h3 class="text-2xl font-black uppercase tracking-tight text-white">
              <a href={venue.profileHref} class="hover:text-neon-green transition-colors">{venue.name}</a>
            </h3>
            <span class="text-xs font-mono text-gray-500 uppercase tracking-wider">{venue.product}</span>
          </div>
          <p class="text-gray-300 font-mono text-sm leading-relaxed mb-3">
            <span class="text-neon-green uppercase text-xs tracking-wider mr-2">Best for</span>{venue.bestFor}
          </p>
          <p class="text-gray-400 font-mono text-sm leading-relaxed mb-3">
            <span class="text-gray-500 uppercase text-xs tracking-wider mr-2">Watch out</span>{venue.watchOut}
          </p>
          <div class="flex flex-wrap gap-3 pt-2">
            <a
              href={venue.profileHref}
              class="inline-flex items-center justify-center px-4 py-2 border border-terminal-slate text-gray-400 hover:border-white hover:text-white transition-colors font-mono text-xs uppercase"
            >
              {venue.profileLabel}
            </a>
            {#if venue.profileHref !== '/compare/polymarket-vs-kalshi'}
            <a
              href="/compare/polymarket-vs-kalshi"
              class="inline-flex items-center justify-center px-4 py-2 border border-terminal-slate text-gray-400 hover:border-neon-green hover:text-neon-green transition-colors font-mono text-xs uppercase"
            >
              POLYMARKET VS KALSHI
            </a>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- Rest of the directory -->
  <section class="mb-12" aria-labelledby="more">
    <div class="border-b border-terminal-slate pb-4 mb-6">
      <h2 id="more" class="text-xl font-black text-white uppercase tracking-tight flex items-center">
        <span class="text-neon-green mr-2">+</span> The rest of the platforms
      </h2>
      <p class="text-gray-500 font-mono text-xs mt-2">
        {otherPlatforms.length} more platforms in the directory, including the on-chain venues and the
        brokers. Each links to a profile with its own access and pricing notes.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each otherPlatforms as tool}
        <a
          href="/tool/{tool.slug}"
          class="border border-terminal-slate bg-terminal-dark p-4 hover:border-neon-green transition-colors group"
        >
          <div class="flex items-baseline justify-between gap-2 mb-2">
            <span class="text-white font-bold text-sm uppercase tracking-tight group-hover:text-neon-green transition-colors">
              {tool.name}
            </span>
            {#if tool.pricing}
              <span class="text-xs font-mono text-gray-500">{tool.pricing}</span>
            {/if}
          </div>
          <p class="text-gray-500 font-mono text-xs leading-relaxed">{tool.shortDescription}</p>
        </a>
      {/each}
    </div>
  </section>

  <!-- Cadence -->
  <section class="mb-12" aria-labelledby="cadence">
    <h2 id="cadence" class="text-2xl font-black text-white uppercase tracking-tight mb-3 flex items-center">
      <span class="text-neon-green mr-2">↻</span> How this page is kept current
    </h2>
    <div class="border border-terminal-slate bg-terminal-dark p-6 font-mono text-sm text-gray-300 leading-relaxed space-y-3">
      <p>
        This is a monthly edition. The next one is dated <span class="text-white">{NEXT_EDITION}</span>,
        and the edition date in the title is the date the facts were last checked.
      </p>
      <p>
        Each edition re-reads the four fee schedules, the two eligibility pages, the API
        documentation, and the newsroom posts for routing and launch changes. Anything that moved is
        edited in place and the edition date is bumped. If nothing moved, the date still moves only
        after the sources have been read again.
      </p>
      <p class="text-gray-400">
        Spotted a fee change, a country that should be listed differently, or a platform missing from
        the table? <a href="/submit" class="text-neon-green underline decoration-dotted underline-offset-2">Tell us</a>
        and it goes into the next edition.
      </p>
    </div>
  </section>

  <!-- Sources -->
  <section class="mb-10" aria-labelledby="sources">
    <h2 id="sources" class="text-xl font-black text-white uppercase tracking-tight mb-2 flex items-center">
      <span class="text-neon-green mr-2">↗</span> Sources
    </h2>
    <p class="text-gray-500 font-mono text-xs mb-4">
      Every figure above traces to one of these. The date is when we read it, and where the source
      publishes its own effective date we note that too. Fee schedules are read from the venue itself,
      never from a summary.
    </p>
    <ol class="space-y-3 font-mono text-xs">
      {#each sources as source, i}
        <li class="flex gap-3 border-b border-terminal-slate/40 pb-3">
          <span class="text-dim-gray shrink-0 w-6">{i + 1}.</span>
          <div class="min-w-0">
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              class="text-neon-blue hover:text-white underline decoration-dotted underline-offset-2 break-words"
              >{source.label}</a
            >
            <span class="text-gray-500 ml-2 whitespace-nowrap">checked {source.date}</span>
            {#if source.note}
              <p class="text-gray-500 mt-1 leading-relaxed">{source.note}</p>
            {/if}
          </div>
        </li>
      {/each}
    </ol>
  </section>

  <!-- Bottom note -->
  <div class="text-center py-6 border-t border-terminal-slate">
    <p class="text-gray-500 font-mono text-xs leading-relaxed max-w-2xl mx-auto">
      Nothing on this page is financial advice, and none of these venues pays for placement. Fees
      and eligibility change without notice — check them in the product before you trade, including
      the ones on this page.
    </p>
  </div>
</div>
