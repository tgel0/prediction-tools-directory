<script lang="ts">
  // Comparison data derived from tools.json
  const polymarket = {
    name: "Polymarket",
    slug: "polymarket",
    tagline: "Decentralized prediction market on Polygon for real-world events.",
    color: "#00FF41",
    url: "https://polymarket.com",
    xUrl: "https://x.com/Polymarket",
  };

  const kalshi = {
    name: "Kalshi",
    slug: "kalshi",
    tagline: "First federally regulated event contract exchange in the US.",
    color: "#3B82F6",
    url: "https://kalshi.com",
    xUrl: "https://x.com/Kalshi",
  };

  const rows = [
    {
      label: "Regulatory Status",
      icon: "⊚",
      poly: "Decentralized / Not federally regulated",
      polyBadge: null,
      kals: "CFTC-regulated event contract exchange",
      kalsBadge: "REGULATED",
    },
    {
      label: "Model / Tech Stack",
      icon: "⧫",
      poly: "Polygon blockchain (decentralized, AMM + order book)",
      polyBadge: "ON-CHAIN",
      kals: "Centralized exchange (off-chain matching)",
      kalsBadge: null,
    },
    {
      label: "Fees",
      icon: "$",
      poly: "~2% resolution fee on winning positions + Polygon gas",
      polyBadge: null,
      kals: "0.3% transaction fee per contract",
      kalsBadge: "LOWER FEES",
    },
    {
      label: "Asset Types",
      icon: "▣",
      poly: "Binary yes/no outcome shares, AMM pools",
      polyBadge: null,
      kals: "Event contracts (binary, ranges, multi-outcome)",
      kalsBadge: null,
    },
    {
      label: "Accessibility",
      icon: "⬡",
      poly: "Global, non-custodial; no KYC required",
      polyBadge: "OPEN",
      kals: "US only (or heavily restricted elsewhere); KYC/AML required",
      kalsBadge: "US ONLY",
    },
    {
      label: "Liquidity",
      icon: "⚡",
      poly: "Deep on high-profile markets (politics, sports); fragmented on long-tail",
      polyBadge: null,
      kals: "Growing but thinner than Polymarket on viral events; concentrated on regulated verticals",
      kalsBadge: null,
    },
    {
      label: "Platforms",
      icon: "⬢",
      poly: "Web, iOS, Android",
      polyBadge: null,
      kals: "Web, iOS, Android",
      kalsBadge: null,
    },
    {
      label: "Key Features",
      icon: "✦",
      poly: "Permissionless market creation, limit orders, fiat on-ramp, referral program",
      polyBadge: null,
      kals: "Portfolio dashboard, P&L tracking, API access, limit / market orders",
      kalsBadge: null,
    },
    {
      label: "Risk / Counterparty",
      icon: "◊",
      poly: "Smart contract / oracle risk (UMA); self-custody of funds",
      polyBadge: null,
      kals: "Exchange custody risk; CFTC oversight provides consumer protections",
      kalsBadge: "INSURED",
    },
    {
      label: "Best For",
      icon: "★",
      poly: "Crypto natives, global traders, permissionless market creators",
      polyBadge: null,
      kals: "US retail & accredited investors seeking regulated exposure",
      kalsBadge: null,
    },
  ];

  function copyLink() {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText("https://predictiontools.directory/compare/polymarket-vs-kalshi");
    }
  }
</script>

<svelte:head>
  <title>Polymarket vs Kalshi — Side-by-Side Comparison | Prediction Market Directory</title>
  <meta name="description" content="Compare Polymarket and Kalshi across fees, regulation, liquidity, accessibility, features, and more. Find the best prediction market platform for your trading style." />
  <link rel="canonical" href="https://predictiontools.directory/compare/polymarket-vs-kalshi" />

  <meta property="og:type" content="website" />
  <meta property="og:title" content="Polymarket vs Kalshi — Side-by-Side Comparison" />
  <meta property="og:description" content="Compare Polymarket and Kalshi across fees, regulation, liquidity, accessibility, features, and more." />
  <meta property="og:url" content="https://predictiontools.directory/compare/polymarket-vs-kalshi" />
  <meta property="og:image" content="https://predictiontools.directory/og-image.png" />
  <meta property="og:site_name" content="predictiontools.directory" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@predictiontools" />
  <meta name="twitter:title" content="Polymarket vs Kalshi — Side-by-Side Comparison" />
  <meta name="twitter:description" content="Compare Polymarket and Kalshi across fees, regulation, liquidity, accessibility, features, and more." />
  <meta name="twitter:image" content="https://predictiontools.directory/og-image.png" />

  {@html `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Polymarket vs Kalshi Comparison",
    "url": "https://predictiontools.directory/compare/polymarket-vs-kalshi",
    "description": "Side-by-side comparison of Polymarket and Kalshi prediction market platforms.",
    "mainEntity": {
      "@type": "ComparisonTable",
      "about": [
        { "@type": "SoftwareApplication", "name": "Polymarket", "applicationCategory": "Prediction Market Platform", "url": "https://polymarket.com" },
        { "@type": "SoftwareApplication", "name": "Kalshi", "applicationCategory": "Prediction Market Platform", "url": "https://kalshi.com" }
      ]
    }
  })}</script>`}
</svelte:head>

<div class="max-w-5xl mx-auto">
  <!-- Breadcrumb -->
  <nav class="flex mb-8 font-mono text-xs sm:text-sm tracking-tight" aria-label="Breadcrumb">
    <ol class="flex items-center space-x-2 text-dim-gray">
      <li>
        <a href="/" class="hover:text-white transition-colors uppercase">HOME</a>
      </li>
      <li class="flex items-center space-x-2">
        <span>/</span>
        <a href="/" class="hover:text-white transition-colors uppercase">COMPARE</a>
      </li>
      <li class="flex items-center space-x-2">
        <span>/</span>
        <span class="text-gray-500 uppercase">POLYMARKET VS KALSHI</span>
      </li>
    </ol>
  </nav>

  <!-- Hero -->
  <div class="text-center space-y-4 py-8 mb-6">
    <h1 class="text-3xl sm:text-5xl md:text-6xl font-black font-sans tracking-tighter text-white uppercase leading-tight">
      <span class="text-neon-green">POLYMARKET</span>
      <span class="text-gray-600 mx-2">VS</span>
      <span class="text-neon-blue">KALSHI</span>
    </h1>
    <p class="text-xl text-gray-400 max-w-2xl mx-auto font-mono">
      The two biggest names in prediction markets compared across regulation, fees, liquidity, UX, and more.
    </p>
  </div>

  <!-- CTA Cards -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
    <!-- Polymarket card -->
    <div class="relative bg-terminal-dark border border-neon-green/40 p-8 hover:border-neon-green hover:shadow-[0_0_15px_rgba(0,255,65,0.15)] transition-all duration-300">
      <div class="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-neon-green/5 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div class="relative z-10">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-3xl font-black uppercase tracking-tight text-white font-sans">{polymarket.name}</h2>
          <span class="px-2 py-1 text-xs font-mono uppercase bg-neon-green text-terminal-black rounded font-bold">Decentralized</span>
        </div>
        <p class="text-gray-300 font-mono text-sm mb-6 leading-relaxed">{polymarket.tagline}</p>
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
            class="inline-flex items-center justify-center px-4 py-2 border border-terminal-slate text-gray-300 hover:border-white hover:text-white transition-colors font-mono text-sm uppercase"
          >
            VIEW PROFILE
          </a>
        </div>
      </div>
    </div>

    <!-- Kalshi card -->
    <div class="relative bg-terminal-dark border border-neon-blue/40 p-8 hover:border-neon-blue hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300">
      <div class="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div class="relative z-10">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-3xl font-black uppercase tracking-tight text-white font-sans">{kalshi.name}</h2>
          <span class="px-2 py-1 text-xs font-mono uppercase bg-neon-blue text-white rounded font-bold">Regulated</span>
        </div>
        <p class="text-gray-300 font-mono text-sm mb-6 leading-relaxed">{kalshi.tagline}</p>
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
            class="inline-flex items-center justify-center px-4 py-2 border border-terminal-slate text-gray-300 hover:border-white hover:text-white transition-colors font-mono text-sm uppercase"
          >
            VIEW PROFILE
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- TL;DR verdict -->
  <div class="border border-terminal-slate bg-terminal-dark p-6 mb-12">
    <h3 class="text-sm font-mono text-gray-500 uppercase tracking-wider mb-4 flex items-center">
      <span class="text-neon-green mr-2">★</span>TL;DR — Which One Should You Pick?
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-sm text-gray-300">
      <div>
        <span class="text-neon-green font-bold uppercase block mb-1">Choose Polymarket if…</span>
        <ul class="space-y-1">
          <li class="flex items-start gap-2"><span class="text-neon-green">›</span> You want global, permissionless access</li>
          <li class="flex items-start gap-2"><span class="text-neon-green">›</span> You prefer self-custody and on-chain settlement</li>
          <li class="flex items-start gap-2"><span class="text-neon-green">›</span> You trade politics, sports, and crypto events with deep liquidity</li>
          <li class="flex items-start gap-2"><span class="text-neon-green">›</span> You value permissionless market creation</li>
        </ul>
      </div>
      <div>
        <span class="text-neon-blue font-bold uppercase block mb-1">Choose Kalshi if…</span>
        <ul class="space-y-1">
          <li class="flex items-start gap-2"><span class="text-neon-blue">›</span> You are a US-based retail or accredited investor</li>
          <li class="flex items-start gap-2"><span class="text-neon-blue">›</span> You want CFTC-regulated consumer protections</li>
          <li class="flex items-start gap-2"><span class="text-neon-blue">›</span> You prefer lower per-contract fees (0.3% vs ~2%)</li>
          <li class="flex items-start gap-2"><span class="text-neon-blue">›</span> You need a traditional brokerage-like UX with P&L tracking</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Comparison Table -->
  <div class="space-y-4 mb-12">
    <div class="flex items-center justify-between border-b border-terminal-slate pb-4">
      <h2 class="text-2xl font-black text-white uppercase tracking-tight flex items-center">
        <span class="text-neon-green mr-2">#</span>Side-by-Side Comparison
      </h2>
      <button
        on:click={copyLink}
        class="text-sm font-mono text-gray-500 hover:text-neon-green transition-colors flex items-center gap-2"
      >
        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
        </svg>
        COPY LINK
      </button>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="border-b border-terminal-slate">
            <th class="py-4 pr-6 text-xs font-mono text-gray-500 uppercase tracking-wider w-1/3">Dimension</th>
            <th class="py-4 px-4 text-xs font-mono text-neon-green uppercase tracking-wider w-1/3">Polymarket</th>
            <th class="py-4 pl-6 text-xs font-mono text-neon-blue uppercase tracking-wider w-1/3">Kalshi</th>
          </tr>
        </thead>
        <tbody>
          {#each rows as row}
            <tr class="border-b border-terminal-slate/50 hover:bg-terminal-slate/10 transition-colors">
              <td class="py-5 pr-6 align-top">
                <div class="flex items-center gap-2 text-sm font-mono text-gray-300">
                  <span class="text-neon-green">{row.icon}</span>
                  <span class="uppercase tracking-wide">{row.label}</span>
                </div>
              </td>
              <td class="py-5 px-4 align-top">
                <div class="space-y-2">
                  {#if row.polyBadge}
                    <span class="inline-block px-2 py-0.5 text-xs font-mono uppercase bg-neon-green/10 text-neon-green border border-neon-green/30 rounded">{row.polyBadge}</span>
                  {/if}
                  <p class="text-sm font-mono text-gray-300 leading-relaxed">{row.poly}</p>
                </div>
              </td>
              <td class="py-5 pl-6 align-top">
                <div class="space-y-2">
                  {#if row.kalsBadge}
                    <span class="inline-block px-2 py-0.5 text-xs font-mono uppercase bg-neon-blue/10 text-neon-blue border border-neon-blue/30 rounded">{row.kalsBadge}</span>
                  {/if}
                  <p class="text-sm font-mono text-gray-300 leading-relaxed">{row.kals}</p>
                </div>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>

  <!-- Ecosystem tools -->
  <div class="space-y-6 mb-12">
    <div class="border-b border-terminal-slate pb-4">
      <h2 class="text-2xl font-black text-white uppercase tracking-tight flex items-center">
        <span class="text-neon-green mr-2">#</span>Tools That Support Both
      </h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <a href="/tool/prediction-hunt" class="group relative bg-terminal-dark border border-terminal-slate p-6 hover:border-neon-green hover:shadow-[0_0_15px_rgba(0,255,65,0.15)] hover:-translate-y-1 transition-all duration-300">
        <h3 class="text-lg font-black uppercase tracking-tight text-white font-sans mb-2 group-hover:text-neon-green transition-colors">Prediction Hunt</h3>
        <p class="text-gray-400 text-sm font-mono leading-relaxed">Compare odds across Polymarket, Kalshi, PredictIt, and ProphetX with live arbitrage alerts.</p>
      </a>
      <a href="/tool/oddpool" class="group relative bg-terminal-dark border border-terminal-slate p-6 hover:border-neon-green hover:shadow-[0_0_15px_rgba(0,255,65,0.15)] hover:-translate-y-1 transition-all duration-300">
        <h3 class="text-lg font-black uppercase tracking-tight text-white font-sans mb-2 group-hover:text-neon-green transition-colors">Oddpool</h3>
        <p class="text-gray-400 text-sm font-mono leading-relaxed">Real-time odds comparison and whale trade tracking across both Polymarket and Kalshi.</p>
      </a>
      <a href="/tool/thetradefox" class="group relative bg-terminal-dark border border-terminal-slate p-6 hover:border-neon-green hover:shadow-[0_0_15px_rgba(0,255,65,0.15)] hover:-translate-y-1 transition-all duration-300">
        <h3 class="text-lg font-black uppercase tracking-tight text-white font-sans mb-2 group-hover:text-neon-green transition-colors">The Trade Fox</h3>
        <p class="text-gray-400 text-sm font-mono leading-relaxed">Institutional-grade aggregator and prime brokerage unifying Kalshi and Polymarket in one terminal.</p>
      </a>
      <a href="/tool/stand-trade" class="group relative bg-terminal-dark border border-terminal-slate p-6 hover:border-neon-green hover:shadow-[0_0_15px_rgba(0,255,65,0.15)] hover:-translate-y-1 transition-all duration-300">
        <h3 class="text-lg font-black uppercase tracking-tight text-white font-sans mb-2 group-hover:text-neon-green transition-colors">Stand.trade</h3>
        <p class="text-gray-400 text-sm font-mono leading-relaxed">Professional terminal with automated trades and real-time cross-platform feeds for both venues.</p>
      </a>
      <a href="/tool/chance" class="group relative bg-terminal-dark border border-terminal-slate p-6 hover:border-neon-green hover:shadow-[0_0_15px_rgba(0,255,65,0.15)] hover:-translate-y-1 transition-all duration-300">
        <h3 class="text-lg font-black uppercase tracking-tight text-white font-sans mb-2 group-hover:text-neon-green transition-colors">Chance</h3>
        <p class="text-gray-400 text-sm font-mono leading-relaxed">Unified platform to discover, evaluate, and trade across every prediction market from one interface.</p>
      </a>
      <a href="/tool/synthesis" class="group relative bg-terminal-dark border border-terminal-slate p-6 hover:border-neon-green hover:shadow-[0_0_15px_rgba(0,255,65,0.15)] hover:-translate-y-1 transition-all duration-300">
        <h3 class="text-lg font-black uppercase tracking-tight text-white font-sans mb-2 group-hover:text-neon-green transition-colors">SynthesisTrade</h3>
        <p class="text-gray-400 text-sm font-mono leading-relaxed">Advanced liquidity analysis, price discovery, and rapid execution across Polymarket and Kalshi.</p>
      </a>
    </div>
  </div>

  <!-- Bottom CTA -->
  <div class="text-center py-8 border-t border-terminal-slate">
    <p class="text-gray-400 font-mono text-sm mb-4">
      Missing a tool or see outdated info?
    </p>
    <a
      href="/submit"
      class="inline-flex items-center justify-center px-6 py-3 border border-neon-green text-neon-green hover:bg-neon-green hover:text-terminal-black transition-colors font-mono text-sm uppercase"
    >
      SUBMIT A TOOL
    </a>
  </div>
</div>
