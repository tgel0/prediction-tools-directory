<script lang="ts">
    import type { PageData } from "./$types";
    import ToolCard from "$lib/components/ToolCard.svelte";

    export let data: PageData;
    $: ({ categoryName, filteredTools, categorySlug } = data);
</script>

<svelte:head>
    <title>{categoryName} Tools | Prediction Market Directory</title>
    <meta
        name="description"
        content="Explore the best {filteredTools.length > 0
            ? filteredTools.length
            : ''} prediction market {categoryName.toLowerCase()}s, including comprehensive tools, platforms, and actionable analytics tailored for traders."
    />
    <link
        rel="canonical"
        href="https://predictiontools.directory/category/{categorySlug}"
    />
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
                Discover the top-rated tools and resources in the <strong
                    >{categoryName}</strong
                >
                category specifically curated for the prediction market
                ecosystem. Whether you're looking to optimize your strategies,
                find edge in new markets, or streamline your trading workflows,
                these hand-picked {categoryName.toLowerCase()} solutions provide
                the capabilities you need.
            </p>
        </div>
    </div>

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
