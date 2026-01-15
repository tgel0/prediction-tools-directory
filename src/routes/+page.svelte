<script lang="ts">
    import tools from "$lib/data/tools.json";
    import ToolCard from "$lib/components/ToolCard.svelte";

    let searchQuery = "";

    $: filteredTools = tools.filter((tool) => {
        const matchesSearch =
            tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tool.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSearch;
    });
</script>

<svelte:head>
    <title>Prediction Market Directory | Best Tools & Platforms</title>
    <meta
        name="description"
        content="Discover the best prediction market tools, platforms, and analytics. Compare top services like Polymarket, Kalshi, and specialized analytics dashboards."
    />
</svelte:head>

<div class="space-y-12">
    <div class="text-center space-y-4 py-8">
        <h1
            class="text-3xl sm:text-5xl md:text-6xl font-black font-sans tracking-tighter text-white uppercase leading-tight sm:leading-none"
        >
            <span class="block">PREDICTIONTOOLS</span>
            <span
                class="text-neon-green flex items-center justify-center gap-3"
            >
                .DIRECTORY
                <span
                    class="text-xs md:text-sm bg-neon-green text-black px-2 py-0.5 rounded font-mono font-bold align-middle tracking-normal transform -translate-y-1"
                    >ALPHA</span
                >
            </span>
        </h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto font-mono mb-2">
            The definitive index of tools, platforms, and analytics for the
            prediction market ecosystem.
        </p>
        <a
            href="https://x.com/predictiontools"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center space-x-2 bg-terminal-black hover:bg-terminal-slate/50 text-white font-mono text-xs uppercase px-4 py-2 border border-terminal-slate rounded-full transition-all hover:border-neon-green group"
        >
            <svg
                class="h-3 w-3 fill-current text-gray-400 group-hover:text-white transition-colors"
                viewBox="0 0 24 24"
            >
                <path
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                />
            </svg>
            <span
                class="text-gray-300 group-hover:text-neon-green transition-colors"
                >Follow on X</span
            >
        </a>
    </div>

    <div class="relative w-full">
        <div
            class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
        >
            <svg
                class="h-5 w-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                />
            </svg>
        </div>
        <input
            type="text"
            bind:value={searchQuery}
            placeholder="Search tools..."
            class="block w-full pl-10 pr-3 py-3 border border-terminal-slate rounded-md leading-5 bg-terminal-black text-white placeholder-gray-500 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green sm:text-base font-mono transition-colors"
        />
    </div>

    {#if searchQuery}
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
                    No tools found matching your criteria.
                </p>
                <button
                    class="mt-4 text-neon-green hover:underline font-mono"
                    on:click={() => {
                        searchQuery = "";
                    }}
                >
                    Clear filters
                </button>
            </div>
        {/if}
    {:else}
        {#each ["Platform", "Analytics", "Trading Terminal"] as category}
            {@const categoryTools = tools.filter(
                (t) => t.category === category,
            )}
            {#if categoryTools.length > 0}
                <div class="space-y-6">
                    <div
                        class="flex items-center justify-between border-b border-terminal-slate pb-4"
                    >
                        <h2
                            class="text-2xl font-black text-white uppercase tracking-tight flex items-center"
                        >
                            <span class="text-neon-green mr-2">#</span
                            >{category}s
                        </h2>
                        <a
                            href="/category/{category
                                .toLowerCase()
                                .replace(/ /g, '-')}"
                            class="text-sm font-mono text-gray-500 hover:text-neon-green transition-colors uppercase"
                        >
                            View all
                        </a>
                    </div>

                    <div
                        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {#each categoryTools as tool (tool.id)}
                            <ToolCard {tool} />
                        {/each}
                    </div>
                </div>
            {/if}
        {/each}
    {/if}
</div>
