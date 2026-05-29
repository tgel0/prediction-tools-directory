<script lang="ts">
  import tools from '$lib/data/tools.json';

  const polymarket = tools.find((t) => t.slug === 'polymarket')!;
  const kalshi = tools.find((t) => t.slug === 'kalshi')!;

  // Tools that support both Polymarket and Kalshi
  const crossPlatformTools = tools.filter(
    (t) =>
      t.supportedMarkets &&
      t.supportedMarkets.includes('Polymarket') &&
      t.supportedMarkets.includes('Kalshi')
  );

  const comparisonRows = [
    {
      label: 'Pricing',
      icon: '$',
      leftValue: polymarket.pricing,
      leftDetail: polymarket.pricingDetails,
      leftBadge: 'FREE',
      rightValue: kalshi.pricing,
      rightDetail: kalshi.pricingDetails,
      rightBadge: 'FREEMIUM',
    },
    {
      label: 'Category',
      icon: '⊞',
      leftValue: polymarket.category,
      rightValue: kalshi.category,
    },
    {
      label: 'Status',
      icon: '●',
      leftValue: 'Active',
      leftBadge: 'ACTIVE',
      rightValue: 'Active',
      rightBadge: 'ACTIVE',
    },
    {
      label: 'Blockchain',
      icon: '⧫',
      leftValue: polymarket.blockchain?.join(', ') || '—',
      leftBadge: 'ON-CHAIN',
      rightValue: kalshi.blockchain?.join(', ') || 'None (Centralized)',
      rightBadge: 'OFF-CHAIN',
    },
    {
      label: 'Platforms',
      icon: '⬢',
      leftValue: polymarket.platform?.join(', ') || '—',
      rightValue: kalshi.platform?.join(', ') || '—',
    },
    {
      label: 'Access',
      icon: '⬡',
      leftValue: polymarket.access || 'Public',
      leftBadge: 'GLOBAL',
      rightValue: kalshi.access || 'Public',
      rightBadge: 'US ONLY',
    },
    {
      label: 'Key Features',
      icon: '✦',
      leftValue: polymarket.features?.slice(0, 5).join(', ') || '—',
      rightValue: kalshi.features?.slice(0, 5).join(', ') || '—',
    },
    {
      label: 'Tags',
      icon: '#',
      leftValue: polymarket.tags?.join(', ') || '—',
      rightValue: kalshi.tags?.join(', ') || '—',
    },
  ];

  function copyLink() {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(
        'https://predictiontools.directory/compare/polymarket-vs-kalshi'
      );
    }
  }

  function badgeClass(label: string): string {
    const map: Record<string, string> = {
      FREE: 'bg-green-900/60 text-green-300 border-green-500/40',
      FREEMIUM: 'bg-yellow-900/60 text-yellow-300 border-yellow-500/40',
      ACTIVE: 'bg-green-900/60 text-green-400',
      'ON-CHAIN': 'bg-purple-900/60 text-purple-300 border-purple-500/40',
      'OFF-CHAIN': 'bg-blue-900/60 text-blue-300 border-blue-500/40',
      GLOBAL: 'bg-emerald-900/60 text-emerald-300 border-emerald-500/40',
      'US ONLY': 'bg-amber-900/60 text-amber-300 border-amber-500/40',
    };
    return map[label] || 'bg-gray-800 text-gray-400';
  }
</script>

<svelte:head>
  <title>Polymarket vs Kalshi — Side-by-Side Comparison | Prediction Market Directory</title>
  <meta
    name="description"
    content="Compare Polymarket vs Kalshi side by side. Pricing, regulation, blockchain, features, platforms, and more. Find the best prediction market platform for your needs."
  />
  <link rel="canonical" href="https://predictiontools.directory/compare/polymarket-vs-kalshi" />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Polymarket vs Kalshi — Side-by-Side Comparison" />
  <meta
    property="og:description"
    content="Compare Polymarket vs Kalshi across pricing, regulation, blockchain, features, and platforms. Side-by-side breakdown."
  />
  <meta property="og:url" content="https://predictiontools.directory/compare/polymarket-vs-kalshi" />
  <meta property="og:image" content="https://predictiontools.directory/og-image.png" />
  <meta property="og:site_name" content="predictiontools.directory" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@predictiontools" />
  <meta name="twitter:title" content="Polymarket vs Kalshi — Side-by-Side Comparison" />
  <meta
    name="twitter:description"
    content="Side-by-side comparison of the two biggest prediction market platforms."
  />
  <meta name="twitter:image" content="https://predictiontools.directory/og-image.png" />

  <!-- JSON-LD -->
  {@html `<script type="application/ld+json">${JSON.stringify(
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Polymarket vs Kalshi Comparison',
      url: 'https://predictiontools.directory/compare/polymarket-vs-kalshi',
      description: 'Side-by-side comparison of Polymarket and Kalshi prediction market platforms.',
      mainEntity: {
        '@type': 'Table',
        about: [
          {
            '@type': 'SoftwareApplication',
            name: 'Polymarket',
            applicationCategory: 'Prediction Market',
            url: 'https://polymarket.com',
          },
          {
            '@type': 'SoftwareApplication',
            name: 'Kalshi',
            applicationCategory: 'Prediction Market',
            url: 'https://kalshi.com',
          },
        ],
      },
    }
  )}</script>`}
</svelte:head>

<div class="max-w-6xl mx-auto">
  <!-- Breadcrumb -->
  <nav class="flex mb-8 font-mono text-xs sm:text-sm tracking-tight" aria-label="Breadcrumb">
    <ol class="flex items-center space-x-2 text-dim-gray">
      <li>
        <a href="/" class="hover:text-white transition-colors uppercase">HOME</a>
      </li>
      <li class="flex items-center space-x-2">
        <span>/</span>
        <span class="text-gray-500 uppercase">COMPARE</span>
      </li>
      <li class="flex items-center space-x-2">
        <span>/</span>
        <span class="text-white uppercase">POLYMARKET VS KALSHI</span>
      </li>
    </ol>
  </nav>

  <!-- Hero -->
  <div class="text-center space-y-4 py-8 mb-8">
    <h1 class="text-3xl sm:text-5xl md:text-6xl font-black font-sans tracking-tighter text-white uppercase leading-tight">
      <span class="text-neon-green">POLYMARKET</span>
      <span class="text-gray-600 mx-3 text-4xl">VS</span>
      <span class="text-neon-blue">KALSHI</span>
    </h1>
    <p class="text-lg text-gray-400 max-w-3xl mx-auto font-mono leading-relaxed">
      The two biggest names in prediction markets compared side by side —
      <span class="text-neon-green">decentralized crypto-native trading</span>
      vs
      <span class="text-neon-blue">CFTC-regulated U.S. exchange</span>.
      Pricing, platforms, features, and more.
    </p>
  </div>

  <!-- TL;DR Verdict -->
  <div class="border border-terminal-slate bg-terminal-dark p-6 mb-10">
    <h2 class="text-sm font-mono text-gray-500 uppercase tracking-wider mb-4 flex items-center">
      <span class="text-neon-green mr-2">★</span> TL;DR — Which One Should You Pick?
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-sm">
      <div class="border-l-2 border-neon-green pl-4">
        <span class="text-neon-green font-bold uppercase block mb-2 text-xs tracking-wider">
          Choose Polymarket if…
        </span>
        <ul class="space-y-1.5 text-gray-300">
          <li class="flex items-start gap-2">
            <span class="text-neon-green shrink-0">›</span>
            You want global, permissionless access without KYC
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-green shrink-0">›</span>
            You prefer self-custody and on-chain settlement
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-green shrink-0">›</span>
            You trade politics, sports, and crypto events with deep liquidity
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-green shrink-0">›</span>
            You value permissionless market creation
          </li>
        </ul>
      </div>
      <div class="border-l-2 border-neon-blue pl-4">
        <span class="text-neon-blue font-bold uppercase block mb-2 text-xs tracking-wider">
          Choose Kalshi if…
        </span>
        <ul class="space-y-1.5 text-gray-300">
          <li class="flex items-start gap-2">
            <span class="text-neon-blue shrink-0">›</span>
            You are a US-based retail or accredited investor
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-blue shrink-0">›</span>
            You want CFTC-regulated consumer protections
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-blue shrink-0">›</span>
            You prefer lower per-contract fees (0.3% vs ~2%)
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-blue shrink-0">›</span>
            You need a traditional brokerage-like UX with P&L tracking
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Profile Cards -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
    <!-- Polymarket Card -->
    <div
      class="relative bg-terminal-dark border border-neon-green/40 p-8 hover:border-neon-green hover:shadow-[0_0_15px_rgba(0,255,65,0.15)] transition-all duration-300 group"
    >
      <div
        class="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-neon-green/5 rounded-full blur-3xl opacity-50 pointer-events-none"
      ></div>
      <div class="relative z-10">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-3xl font-black uppercase tracking-tight text-white font-sans group-hover:text-neon-green transition-colors">
            {polymarket.name}
          </h2>
          <span class="px-2 py-1 text-xs font-mono uppercase bg-neon-green text-terminal-black rounded font-bold">
            Decentralized
          </span>
        </div>
        <p class="text-gray-400 text-sm font-mono mb-4 leading-relaxed">
          {polymarket.shortDescription}
        </p>
        <div class="flex flex-wrap gap-1.5 mb-5">
          {#each (polymarket.platform || []) as p}
            <span class="text-xs font-mono text-gray-500 bg-terminal-black px-2 py-1 rounded border border-terminal-slate">
              {p}
            </span>
          {/each}
        </div>
        <div class="flex flex-col sm:flex-row gap-3">
          <a
            href="{polymarket.url}?utm_source=predictiontools.directory"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center px-4 py-2 border border-neon-green text-neon-green hover:bg-neon-green hover:text-terminal-black transition-colors font-mono text-sm uppercase"
          >
            VISIT WEBSITE
            <svg class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a
            href="/tool/{polymarket.slug}"
            class="inline-flex items-center justify-center px-4 py-2 border border-terminal-slate text-gray-400 hover:border-white hover:text-white transition-colors font-mono text-sm uppercase"
          >
            VIEW PROFILE
          </a>
        </div>
      </div>
    </div>

    <!-- Kalshi Card -->
    <div
      class="relative bg-terminal-dark border border-neon-blue/40 p-8 hover:border-neon-blue hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300 group"
    >
      <div
        class="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl opacity-50 pointer-events-none"
      ></div>
      <div class="relative z-10">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-3xl font-black uppercase tracking-tight text-white font-sans group-hover:text-neon-blue transition-colors">
            {kalshi.name}
          </h2>
          <span class="px-2 py-1 text-xs font-mono uppercase bg-neon-blue text-white rounded font-bold">
            Regulated
          </span>
        </div>
        <p class="text-gray-400 text-sm font-mono mb-4 leading-relaxed">
          {kalshi.shortDescription}
        </p>
        <div class="flex flex-wrap gap-1.5 mb-5">
          {#each (kalshi.platform || []) as p}
            <span class="text-xs font-mono text-gray-500 bg-terminal-black px-2 py-1 rounded border border-terminal-slate">
              {p}
            </span>
          {/each}
        </div>
        <div class="flex flex-col sm:flex-row gap-3">
          <a
            href="{kalshi.url}?utm_source=predictiontools.directory"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center px-4 py-2 border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white transition-colors font-mono text-sm uppercase"
          >
            VISIT WEBSITE
            <svg class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a
            href="/tool/{kalshi.slug}"
            class="inline-flex items-center justify-center px-4 py-2 border border-terminal-slate text-gray-400 hover:border-white hover:text-white transition-colors font-mono text-sm uppercase"
          >
            VIEW PROFILE
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Side-by-Side Comparison Table -->
  <div class="bg-terminal-dark border border-terminal-slate overflow-hidden mb-10">
    <div class="px-6 py-4 border-b border-terminal-slate bg-terminal-black/50 flex items-center justify-between">
      <h2 class="text-sm font-mono text-gray-500 uppercase tracking-wider flex items-center">
        <span class="text-neon-green mr-2">⬌</span> Side-by-Side Comparison
      </h2>
      <button
        on:click={copyLink}
        class="text-xs font-mono text-gray-500 hover:text-neon-green transition-colors flex items-center gap-1.5"
      >
        <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
        </svg>
        COPY LINK
      </button>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-sm font-mono">
        <thead>
          <tr class="border-b border-terminal-slate">
            <th class="text-left px-6 py-3 text-gray-500 uppercase tracking-wider text-xs w-44">Attribute</th>
            <th class="text-left px-6 py-3 text-neon-green uppercase tracking-wider text-xs">POLYMARKET</th>
            <th class="text-left px-6 py-3 text-neon-blue uppercase tracking-wider text-xs">KALSHI</th>
          </tr>
        </thead>
        <tbody>
          {#each comparisonRows as row, ri}
            <tr
              class="border-b border-terminal-slate/50 {ri % 2 === 0 ? 'bg-terminal-black/30' : ''} hover:bg-terminal-slate/10 transition-colors"
            >
              <td class="px-6 py-4 text-gray-500 uppercase tracking-wider text-xs font-bold align-top">
                <div class="flex items-center gap-2">
                  <span>{row.icon}</span>
                  <span>{row.label}</span>
                </div>
              </td>
              <td class="px-6 py-4 text-gray-300 align-top">
                <div class="space-y-1.5">
                  {#if row.leftBadge}
                    <span class="inline-block text-xs font-mono px-2 py-0.5 rounded border {badgeClass(row.leftBadge)}">
                      {row.leftBadge}
                    </span>
                  {/if}
                  {#if row.leftDetail}
                    <p class="text-gray-400 text-xs leading-relaxed">{row.leftDetail}</p>
                  {:else}
                    <span>{row.leftValue}</span>
                  {/if}
                </div>
              </td>
              <td class="px-6 py-4 text-gray-300 align-top">
                <div class="space-y-1.5">
                  {#if row.rightBadge}
                    <span class="inline-block text-xs font-mono px-2 py-0.5 rounded border {badgeClass(row.rightBadge)}">
                      {row.rightBadge}
                    </span>
                  {/if}
                  {#if row.rightDetail}
                    <p class="text-gray-400 text-xs leading-relaxed">{row.rightDetail}</p>
                  {:else}
                    <span>{row.rightValue}</span>
                  {/if}
                </div>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>

  <!-- Cross-Platform Ecosystem Tools -->
  {#if crossPlatformTools.length > 0}
    <div class="space-y-6 mb-10">
      <div class="border-b border-terminal-slate pb-4">
        <h2 class="text-xl font-black text-white uppercase tracking-tight flex items-center">
          <span class="text-neon-green mr-2">#</span>
          Tools That Support Both Platforms
        </h2>
        <p class="text-gray-500 font-mono text-xs mt-2">
          These {crossPlatformTools.length} tools work with both Polymarket and Kalshi.
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each crossPlatformTools as tool}
          <a
            href="/tool/{tool.slug}"
            class="group relative bg-terminal-dark border border-terminal-slate p-5 hover:border-neon-green hover:shadow-[0_0_15px_rgba(0,255,65,0.15)] hover:-translate-y-0.5 transition-all duration-300"
          >
            <h3 class="text-base font-black uppercase tracking-tight text-white font-sans mb-1.5 group-hover:text-neon-green transition-colors">
              {tool.name}
            </h3>
            <p class="text-gray-400 text-xs font-mono leading-relaxed line-clamp-2">
              {tool.shortDescription}
            </p>
            {#if tool.category}
              <span class="inline-block mt-2 text-xs font-mono text-gray-600 uppercase">
                /{tool.category.toLowerCase().replace(/[&\s]+/g, '-')}
              </span>
            {/if}
          </a>
        {/each}
      </div>
    </div>
  {/if}

  <!-- More Comparisons -->
  {#if false}
  <div class="border-t border-terminal-slate pt-8 mb-8">
    <h3 class="text-sm font-mono text-gray-500 uppercase tracking-wider mb-4">
      <span class="text-neon-green mr-2">→</span> More Comparisons
    </h3>
    <div class="flex flex-wrap gap-3">
      <a
        href="/compare/polymarket-vs-predict-fun"
        class="text-sm font-mono text-gray-400 hover:text-neon-green border border-terminal-slate hover:border-neon-green/50 px-4 py-2 rounded transition-colors"
      >
        ⚖️ Polymarket vs Predict.fun
      </a>
      <a
        href="/compare/kalshi-vs-forecasttrader"
        class="text-sm font-mono text-gray-400 hover:text-neon-green border border-terminal-slate hover:border-neon-green/50 px-4 py-2 rounded transition-colors"
      >
        ⚖️ Kalshi vs IBKR ForecastTrader
      </a>
      <a
        href="/compare/manifold-vs-polymarket"
        class="text-sm font-mono text-gray-400 hover:text-neon-green border border-terminal-slate hover:border-neon-green/50 px-4 py-2 rounded transition-colors"
      >
        ⚖️ Manifold vs Polymarket
      </a>
    </div>
  </div>
  {/if}

  <!-- Bottom CTA -->
  <div class="text-center py-6 border-t border-terminal-slate">
    <p class="text-gray-500 font-mono text-xs mb-3">
      Missing a tool or see outdated info?
    </p>
    <a
      href="/submit"
      class="inline-flex items-center justify-center px-5 py-2.5 border border-neon-green text-neon-green hover:bg-neon-green hover:text-terminal-black transition-colors font-mono text-xs uppercase"
    >
      SUBMIT A TOOL
    </a>
  </div>
</div>
