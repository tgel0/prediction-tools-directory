<script lang="ts">
    import type { PageData } from "./$types";
    import ToolCard from "$lib/components/ToolCard.svelte";
    import { BEST_OF_EDITION } from "$lib/data/best-of";

    export let data: PageData;
    $: ({ categoryName, filteredTools, categorySlug, description } = data);
</script>

<svelte:head>
    <title>{categoryName} Tools | Prediction Market Directory</title>
    <meta
        name="description"
        content={description}
    />
    <link
        rel="canonical"
        href="https://predictiontools.directory/category/{categorySlug}"
    />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="{categoryName} Tools | Prediction Market Directory" />
    <meta property="og:description" content={description} />
    <meta property="og:url" content="https://predictiontools.directory/category/{categorySlug}" />
    <meta property="og:image" content="https://predictiontools.directory/og-image.png" />
    <meta property="og:site_name" content="predictiontools.directory" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@predictiontools" />
    <meta name="twitter:title" content="{categoryName} Tools | Prediction Market Directory" />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content="https://predictiontools.directory/og-image.png" />

    <!-- JSON-LD -->
    {@html `<script type="application/ld+json">${JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": categoryName + " Tools",
        "description": description,
        "url": "https://predictiontools.directory/category/" + categorySlug,
        "numberOfItems": filteredTools.length,
        "itemListElement": filteredTools.map((t, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "name": t.name,
            "url": "https://predictiontools.directory/tool/" + t.slug
        }))
    })}</script>`}
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="mb-12">
        <a
            href="/"
            class="inline-flex items-center text-dim-gray hover:text-white mb-6 transition-colors font-mono text-sm"
        >
            <svg
                class="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
            </svg>
            BACK TO DIRECTORY
        </a>

        <h1
            class="text-4xl md:text-5xl font-black uppercase text-white font-sans tracking-tight mb-4"
        >
            <span class="text-neon-green">#</span>{categoryName.endsWith("s")
                ? categoryName
                : categoryName + "s"}
        </h1>
        <p class="text-xl text-gray-400 font-mono mb-4">
            {filteredTools.length}
            {filteredTools.length === 1 ? "tool" : "tools"} in this category
        </p>
        <div class="prose prose-invert max-w-3xl">
            <p class="text-gray-300 text-lg">
                {description}
            </p>
        </div>
        <p class="text-sm font-mono text-gray-500 mt-4">
            <span class="text-neon-green mr-2">?</span>
            New to the category?
            <a
                href="/learn/prediction-markets"
                class="text-neon-green underline decoration-dotted underline-offset-2 hover:text-white transition-colors"
            >
                What are prediction markets?</a
            >
            — a sourced explainer on how they work and how they are regulated.
        </p>
    </div>

    {#if categorySlug === "platforms"}
    <div class="border border-neon-green/30 bg-terminal-dark p-5 mb-8">
        <p class="text-sm font-mono text-gray-300 leading-relaxed">
            <span class="text-neon-green mr-2">⊞</span>
            <a
                href="/best/prediction-market-platforms"
                class="text-neon-green underline decoration-dotted underline-offset-2 hover:text-white transition-colors"
            >
                Best prediction market platforms — {BEST_OF_EDITION}
            </a>
            <span class="text-gray-500">
                — fees on the same trade, who can trade where, liquidity signals and API access, each with a source and a date checked.
            </span>
        </p>
    </div>
    {/if}

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each filteredTools as tool (tool.id)}
            <ToolCard {tool} />
        {/each}
    </div>

    {#if filteredTools.length === 0}
        <div
            class="text-center py-20 border border-dashed border-terminal-slate rounded-lg"
        >
            <p class="text-gray-500 font-mono text-lg">
                No tools found in this category.
            </p>
        </div>
    {/if}
</div>
