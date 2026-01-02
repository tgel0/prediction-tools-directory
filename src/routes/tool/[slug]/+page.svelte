<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
    $: ({ tool } = data);
</script>

<svelte:head>
    <title>{tool.name} - predictiontools.directory</title>
    <meta name="description" content={tool.description} />
</svelte:head>

<div class="max-w-4xl mx-auto">
    <a
        href="/"
        class="inline-flex items-center text-dim-gray hover:text-white mb-8 transition-colors font-mono text-sm"
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

    <div
        class="bg-terminal-dark border border-terminal-slate p-8 md:p-12 relative overflow-hidden"
    >
        <!-- Decorative background element -->
        <div
            class="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-neon-green/5 rounded-full blur-3xl opacity-50 pointer-events-none"
        ></div>

        <div class="relative z-10">
            <div
                class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8"
            >
                <div>
                    <div class="flex items-center space-x-3 mb-2">
                        <h1
                            class="text-4xl md:text-5xl font-bold text-white font-sans tracking-tight"
                        >
                            {tool.name}
                        </h1>
                        {#if tool.isPromoted}
                            <span
                                class="bg-neon-green text-terminal-black text-xs font-bold px-2 py-1 rounded font-mono uppercase"
                            >
                                Promoted
                            </span>
                        {/if}
                    </div>
                    <div class="flex items-center space-x-4">
                        <span
                            class="text-sm font-mono text-neon-blue border border-neon-blue/30 px-2 py-0.5 rounded"
                        >
                            {tool.category}
                        </span>
                        <span class="text-gray-500 font-mono text-sm"
                            >Added recently</span
                        >
                    </div>
                </div>

                <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium text-terminal-black bg-neon-green hover:bg-neon-green/90 transition-colors shadow-lg shadow-neon-green/20 font-mono"
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
            </div>

            <div class="prose prose-invert prose-lg max-w-none mb-12">
                <p class="text-gray-300 leading-relaxed text-lg">
                    {tool.description}
                </p>
            </div>

            <div class="border-t border-terminal-slate pt-8">
                <h3
                    class="text-sm font-mono text-gray-500 uppercase tracking-wider mb-4"
                >
                    Tags
                </h3>
                <div class="flex flex-wrap gap-3">
                    {#each tool.tags as tag}
                        <span
                            class="px-3 py-1 bg-terminal-black border border-terminal-slate text-gray-300 font-mono text-sm rounded hover:border-gray-500 transition-colors cursor-default"
                        >
                            #{tag}
                        </span>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>
