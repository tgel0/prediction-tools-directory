<script lang="ts">
    import { page } from "$app/stores";
    import tools from "$lib/data/tools.json";
    import ToolCard from "$lib/components/ToolCard.svelte";

    $: categorySlug = $page.params.slug;

    // Helper to format slug back to Title Case or display name
    $: categoryName =
        tools.find(
            (t) => t.category.toLowerCase().replace(/ /g, "-") === categorySlug,
        )?.category || categorySlug.replace(/-/g, " ");

    $: filteredTools = tools.filter(
        (tool) =>
            tool.category.toLowerCase().replace(/ /g, "-") === categorySlug,
    );
</script>

<svelte:head>
    <title>{categoryName} Tools | Prediction Market Directory</title>
    <meta
        name="description"
        content="Best prediction market {categoryName} including tools, platforms, and analytics."
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
            <span class="text-neon-green">#</span>{categoryName}
        </h1>
        <p class="text-xl text-gray-400 font-mono">
            {filteredTools.length}
            {filteredTools.length === 1 ? "tool" : "tools"} in this category
        </p>
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
