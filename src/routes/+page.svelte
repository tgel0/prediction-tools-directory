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

<div class="space-y-12">
    <div class="text-center space-y-4 py-8">
        <h1
            class="text-3xl sm:text-5xl md:text-6xl font-black font-sans tracking-tighter text-white uppercase leading-tight sm:leading-none"
        >
            <span class="block">PREDICTIONTOOLS</span>
            <span class="text-neon-green">.DIRECTORY</span>
        </h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto font-mono">
            The definitive index of tools, platforms, and analytics for the
            prediction market ecosystem.
        </p>
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
</div>
