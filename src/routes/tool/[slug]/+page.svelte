<script lang="ts">
    import { onMount } from "svelte";
    import type { PageData } from "./$types";
    import ToolCard from "$lib/components/ToolCard.svelte";
    import { categoryToSlug, type Tool } from "$lib/data/schema";

    export let data: PageData;
    $: ({ tool, relatedTools } = data);

    // Cast from JSON union type to our full schema type
    $: t = tool as unknown as Tool;

    let copied = false;
    async function copyToClipboard() {
        try {
            await navigator.clipboard.writeText(window.location.href);
            copied = true;
            setTimeout(() => (copied = false), 2000);
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    }

    // Extract X username from xUrl
    $: xUsername = t.xUrl ? t.xUrl.split("/").pop() : null;

    // Pricing badge styling
    function pricingStyle(pricing: string | undefined) {
        switch (pricing?.toLowerCase()) {
            case "free": return "bg-green-900/40 text-green-400 border-green-500/40";
            case "freemium": return "bg-yellow-900/40 text-yellow-400 border-yellow-500/40";
            case "paid": return "bg-blue-900/40 text-blue-400 border-blue-500/40";
            case "custom": return "bg-purple-900/40 text-purple-400 border-purple-500/40";
            default: return "bg-gray-800 text-gray-400 border-gray-600";
        }
    }

    // Status badge styling
    function statusStyle(status: string | undefined) {
        switch (status?.toLowerCase()) {
            case "active": return "bg-green-900/40 text-green-400";
            case "inactive": return "bg-gray-700 text-gray-400";
            case "acquired": return "bg-blue-900/40 text-blue-400";
            case "shut-down": return "bg-red-900/40 text-red-400";
            default: return "bg-gray-800 text-gray-400";
        }
    }

    // Platform icon mapping
    const platformIcons: Record<string, string> = {
        "Web": "🌐 Web",
        "iOS": "📱 iOS",
        "Android": "🤖 Android",
        "Telegram": "✈️ Telegram",
        "Discord": "💬 Discord",
        "Twitter": "🐦 Twitter",
        "Chrome": "🌍 Chrome",
        "API": "🔌 API",
        "CLI": "💻 CLI",
    };

    // Load X widgets.js on mount
    onMount(() => {
        if (t.xUrl && typeof window !== "undefined") {
            const script = document.createElement("script");
            script.src = "https://xembed-20260323.web.app/widget.js";
            script.async = true;
            document.body.appendChild(script);
        }
    });
</script>

<svelte:head>
    <title>{t.name} - predictiontools.directory</title>
    <meta
        name="description"
        content={t.description.length > 155
            ? t.description.substring(0, 152) + "..."
            : t.description}
    />
    <link
        rel="canonical"
        href="https://predictiontools.directory/tool/{t.slug}"
    />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="{t.name} - Prediction Market Directory" />
    <meta property="og:description" content={t.description.length > 155 ? t.description.substring(0, 152) + '...' : t.description} />
    <meta property="og:url" content="https://predictiontools.directory/tool/{t.slug}" />
    <meta property="og:image" content="https://predictiontools.directory/og-image.png" />
    <meta property="og:site_name" content="predictiontools.directory" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@predictiontools" />
    <meta name="twitter:title" content="{t.name} - Prediction Market Directory" />
    <meta name="twitter:description" content={t.description.length > 155 ? t.description.substring(0, 152) + '...' : t.description} />
    <meta name="twitter:image" content="https://predictiontools.directory/og-image.png" />

    <!-- JSON-LD -->
    {@html `<script type="application/ld+json">${JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": t.name,
        "description": t.description,
        "url": t.url,
        "applicationCategory": t.category,
        "operatingSystem": "Web"
    })}</script>`}
</svelte:head>

<div class="max-w-6xl mx-auto">
    <nav
        class="flex mb-8 font-mono text-xs sm:text-sm tracking-tight"
        aria-label="Breadcrumb"
    >
        <ol class="flex items-center space-x-2 text-dim-gray">
            <li>
                <a href="/" class="hover:text-white transition-colors uppercase"
                    >HOME</a
                >
            </li>
            {#if t.category}
            <li class="flex items-center space-x-2">
                <span>/</span>
                <a
                    href="/category/{categoryToSlug(t.category)}"
                    class="hover:text-white transition-colors uppercase"
                >
                    {t.category}
                </a>
            </li>
            {/if}
            <li class="flex items-center space-x-2">
                <span>/</span>
                <span
                    class="text-gray-500 uppercase truncate max-w-[100px] sm:max-w-none"
                    >{t.name}</span
                >
            </li>
        </ol>
    </nav>

    <!-- Header -->
    <div
        class="bg-terminal-dark border border-terminal-slate p-8 md:p-12 relative overflow-hidden"
    >
        <!-- Decorative background element -->
        <div
            class="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-neon-green/5 rounded-full blur-3xl opacity-50 pointer-events-none"
        ></div>

        <div class="relative z-10">
            <div
                class="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8"
            >
                <div class="flex-grow">
                    <div class="flex items-center space-x-3 mb-2">
                        <h1
                            class="text-4xl md:text-5xl font-black uppercase text-white font-sans tracking-tight"
                        >
                            {t.name}
                        </h1>
                        {#if t.isPromoted}
                            <span
                                class="bg-neon-green text-terminal-black text-xs font-bold px-2 py-1 rounded font-mono uppercase"
                            >
                                Promoted
                            </span>
                        {/if}
                    </div>
                    <div class="flex flex-wrap items-center gap-2">
                        {#if t.category}
                        <span
                            class="text-sm font-mono text-neon-blue border border-neon-blue/30 px-2 py-0.5 rounded"
                        >
                            {t.category}
                        </span>
                        {/if}
                        {#if t.pricing}
                        <span
                            class="text-sm font-mono px-2 py-0.5 rounded border {pricingStyle(t.pricing)}"
                        >
                            {t.pricing}
                        </span>
                        {/if}
                        {#if t.status}
                        <span
                            class="text-xs font-mono px-2 py-0.5 rounded {statusStyle(t.status)}"
                        >
                            {t.status === "shut-down" ? "SHUT DOWN" : t.status.toUpperCase()}
                        </span>
                        {/if}
                        {#if t.websiteName}
                        <span class="text-gray-500 font-mono text-sm">
                            {t.websiteName}
                        </span>
                        {/if}
                    </div>
                    {#if t.addedDate}
                    <div class="mt-1 flex items-center gap-4 text-xs text-gray-500 font-mono">
                        <span>Added {t.addedDate}</span>
                        {#if t.lastVerified}
                        <span>• Last verified {t.lastVerified}</span>
                        {/if}
                    </div>
                    {/if}
                </div>

                <div
                    class="flex flex-col sm:flex-row lg:flex-col items-stretch lg:items-end gap-3 min-w-[200px]"
                >
                    <a
                        href="{t.url}{t.url.includes('?')
                            ? '&'
                            : '?'}utm_source=predictiontools.directory"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium text-terminal-black bg-neon-green hover:bg-neon-green/90 transition-colors shadow-lg shadow-neon-green/20 font-mono w-full"
                    >
                        VISIT WEBSITE
                        <svg
                            class="ml-2 -mr-1 h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                        </svg>
                    </a>

                    <button
                        on:click={copyToClipboard}
                        class="inline-flex items-center justify-center px-6 py-3 border border-terminal-slate text-base font-medium text-white bg-terminal-black hover:bg-terminal-slate/20 transition-colors font-mono w-full"
                    >
                        {#if copied}
                            COPIED!
                        {:else}
                            <svg
                                class="h-5 w-5 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                                />
                            </svg>
                            COPY LINK
                        {/if}
                    </button>

                    {#if t.xUrl}
                        <a
                            href={t.xUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="inline-flex items-center justify-center px-6 py-3 border border-terminal-slate text-base font-medium text-white bg-terminal-black hover:bg-terminal-slate/20 transition-colors font-mono w-full"
                            aria-label="Follow on X"
                        >
                            <svg
                                class="h-5 w-5 mr-2"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                                />
                            </svg>
                            FOLLOW ON X
                        </a>
                    {/if}
                </div>
            </div>

            <!-- TWO-COLUMN LAYOUT: Main content + Sidebar -->
            <div class="flex flex-col lg:flex-row gap-8">
                <!-- LEFT COLUMN: Description, Features, Acquired, X Embed -->
                <div class="flex-1 min-w-0 space-y-8">

                    <!-- Description -->
                    <div class="prose prose-invert prose-lg max-w-none">
                        <p class="text-gray-300 leading-relaxed text-lg font-mono">
                            {t.description}
                        </p>
                    </div>

                    {#if t.pricingDetails}
                    <div class="border-t border-terminal-slate pt-6">
                        <h3
                            class="text-sm font-mono text-gray-500 uppercase tracking-wider mb-3 flex items-center"
                        >
                            <span class="text-neon-green mr-2">$</span>Pricing Details
                        </h3>
                        <p class="text-gray-300 font-mono text-sm leading-relaxed">
                            {t.pricingDetails}
                        </p>
                    </div>
                    {/if}

                    {#if t.features && t.features.length > 0}
                    <div class="border-t border-terminal-slate pt-6">
                        <h3
                            class="text-sm font-mono text-gray-500 uppercase tracking-wider mb-3 flex items-center"
                        >
                            <span class="text-neon-green mr-2">✦</span>Features
                        </h3>
                        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {#each t.features as feature}
                            <li class="flex items-start space-x-2 text-gray-300 font-mono text-sm">
                                <span class="text-neon-green mt-0.5 shrink-0">›</span>
                                <span>{feature}</span>
                            </li>
                            {/each}
                        </ul>
                    </div>
                    {/if}

                    {#if t.acquiredBy}
                    <div class="border-t border-terminal-slate pt-6">
                        <h3
                            class="text-sm font-mono text-gray-500 uppercase tracking-wider mb-3 flex items-center"
                        >
                            <span class="text-neon-green mr-2">⊚</span>Acquired
                        </h3>
                        <p class="text-gray-300 font-mono text-sm">
                            Acquired by <span class="text-white font-bold">{t.acquiredBy}</span>
                        </p>
                    </div>
                    {/if}

                    <!-- X/Twitter Embed -->
                    {#if xUsername}
                        <div class="border-t border-terminal-slate pt-8 mt-8">
                            <h3
                                class="text-lg font-black text-white uppercase tracking-tight mb-4 flex items-center"
                            >
                                <span class="text-neon-green mr-2">#</span>LATEST FROM X
                            </h3>
                            {#if t.xHandle}
                            <p class="text-gray-500 font-mono text-xs mb-4">
                                <a
                                    href="https://x.com/{t.xHandle}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="hover:text-neon-green transition-colors"
                                >@{t.xHandle}</a>
                            </p>
                            {/if}
                            <div
                                class="bg-terminal-black rounded overflow-hidden min-h-[100px]"
                            >
                                <div class="xembed-timeline" data-handle={xUsername}></div>
                            </div>
                        </div>
                    {/if}
                </div>

                <!-- RIGHT COLUMN: Quick Specs Sidebar Card -->
                <div class="lg:w-72 shrink-0">
                    <div class="bg-terminal-black border border-terminal-slate rounded-lg p-5 sticky top-8 space-y-5">
                        <h3 class="text-sm font-mono text-gray-500 uppercase tracking-wider border-b border-terminal-slate pb-3">
                            Quick Specs
                        </h3>

                        {#if t.pricing}
                        <div>
                            <span class="text-xs font-mono text-gray-500 uppercase block mb-1">Pricing</span>
                            <span
                                class="inline-block text-xs font-mono px-2 py-0.5 rounded border {pricingStyle(t.pricing)}"
                            >
                                {t.pricing}
                                {#if t.pricingDetails}
                                <span class="text-gray-500 ml-1">— {t.pricingDetails}</span>
                                {/if}
                            </span>
                        </div>
                        {/if}

                        {#if t.status}
                        <div>
                            <span class="text-xs font-mono text-gray-500 uppercase block mb-1">Status</span>
                            <span
                                class="inline-block text-xs font-mono px-2 py-0.5 rounded {statusStyle(t.status)}"
                            >
                                {t.status === "shut-down" ? "SHUT DOWN" : t.status.toUpperCase()}
                            </span>
                        </div>
                        {/if}

                        {#if t.platform && t.platform.length > 0}
                        <div>
                            <span class="text-xs font-mono text-gray-500 uppercase block mb-1.5">Platform</span>
                            <div class="flex flex-wrap gap-1.5">
                                {#each t.platform as p}
                                <span
                                    class="px-2 py-0.5 bg-terminal-dark border border-terminal-slate text-gray-300 font-mono text-xs rounded"
                                >
                                    {platformIcons[p] || p}
                                </span>
                                {/each}
                            </div>
                        </div>
                        {/if}

                        {#if t.blockchain && t.blockchain.length > 0}
                        <div>
                            <span class="text-xs font-mono text-gray-500 uppercase block mb-1.5">Blockchain</span>
                            <div class="flex flex-wrap gap-1.5">
                                {#each t.blockchain as chain}
                                <span
                                    class="px-2 py-0.5 bg-purple-900/20 border border-purple-500/30 text-purple-300 font-mono text-xs rounded"
                                >
                                    {chain}
                                </span>
                                {/each}
                            </div>
                        </div>
                        {/if}

                        {#if t.supportedMarkets && t.supportedMarkets.length > 0}
                        <div>
                            <span class="text-xs font-mono text-gray-500 uppercase block mb-1.5">Supported Markets</span>
                            <div class="flex flex-wrap gap-1.5">
                                {#each t.supportedMarkets as market}
                                <span
                                    class="px-2 py-0.5 bg-cyan-900/20 border border-cyan-500/30 text-cyan-300 font-mono text-xs rounded"
                                >
                                    {market}
                                </span>
                                {/each}
                            </div>
                        </div>
                        {/if}

                        {#if t.tags && t.tags.length > 0}
                        <div>
                            <span class="text-xs font-mono text-gray-500 uppercase block mb-1.5">Tags</span>
                            <div class="flex flex-wrap gap-1.5">
                                {#each t.tags as tag}
                                <span
                                    class="px-2 py-0.5 bg-terminal-dark border border-terminal-slate text-gray-400 font-mono text-xs rounded"
                                >
                                    #{tag}
                                </span>
                                {/each}
                            </div>
                        </div>
                        {/if}

                        {#if t.addedDate || t.lastVerified}
                        <div class="border-t border-terminal-slate pt-3">
                            {#if t.addedDate}
                            <div class="flex justify-between text-xs font-mono text-gray-500">
                                <span>Added</span>
                                <span class="text-gray-400">{t.addedDate}</span>
                            </div>
                            {/if}
                            {#if t.lastVerified}
                            <div class="flex justify-between text-xs font-mono text-gray-500 mt-1">
                                <span>Last verified</span>
                                <span class="text-gray-400">{t.lastVerified}</span>
                            </div>
                            {/if}
                        </div>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    </div>

    {#if relatedTools.length > 0}
        {#if t.category}
        <div class="mt-16 space-y-8">
            <div class="border-b border-terminal-slate pb-4">
                <h2
                    class="text-2xl font-black text-white uppercase tracking-tight flex items-center"
                >
                    <span class="text-neon-green mr-2">#</span>RELATED {t.category.endsWith(
                        "s",
                    )
                        ? t.category
                        : t.category + "s"}
                </h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                {#each relatedTools as relatedTool (relatedTool.id)}
                    <ToolCard tool={relatedTool} />
                {/each}
            </div>
        </div>
        {/if}
    {/if}
</div>
