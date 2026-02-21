<script lang="ts">
    import { onMount } from "svelte";
    import type { PageData } from "./$types";
    import ToolCard from "$lib/components/ToolCard.svelte";
    import { categoryToSlug } from "$lib/data/schema";

    export let data: PageData;
    $: ({ tool, relatedTools } = data);

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
    $: xUsername = tool.xUrl ? tool.xUrl.split("/").pop() : null;

    // Load X widgets.js on mount
    onMount(() => {
        if (tool.xUrl && typeof window !== "undefined") {
            const script = document.createElement("script");
            script.src = "https://platform.twitter.com/widgets.js";
            script.async = true;
            script.charset = "utf-8";
            document.body.appendChild(script);
        }
    });
</script>

<svelte:head>
    <title>{tool.name} - predictiontools.directory</title>
    <meta
        name="description"
        content={tool.description.length > 155
            ? tool.description.substring(0, 152) + "..."
            : tool.description}
    />
    <link
        rel="canonical"
        href="https://predictiontools.directory/tool/{tool.slug}"
    />
</svelte:head>

<div class="max-w-4xl mx-auto">
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
            <li class="flex items-center space-x-2">
                <span>/</span>
                <a
                    href="/category/{categoryToSlug(tool.category)}"
                    class="hover:text-white transition-colors uppercase"
                >
                    {tool.category}
                </a>
            </li>
            <li class="flex items-center space-x-2">
                <span>/</span>
                <span
                    class="text-gray-500 uppercase truncate max-w-[100px] sm:max-w-none"
                    >{tool.name}</span
                >
            </li>
        </ol>
    </nav>

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

                <div
                    class="flex flex-col sm:flex-row lg:flex-col items-stretch lg:items-end gap-3 min-w-[200px]"
                >
                    <a
                        href="{tool.url}{tool.url.includes('?')
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

                    {#if tool.xUrl}
                        <a
                            href={tool.xUrl}
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

            <div class="prose prose-invert prose-lg max-w-none mb-12">
                <p class="text-gray-300 leading-relaxed text-lg font-mono">
                    {tool.description}
                </p>
                <div
                    class="mt-8 flex items-center space-x-2 text-sm text-gray-500 font-mono italic"
                >
                    <span
                        class="inline-block w-2 h-2 rounded-full bg-neon-green/50 animate-pulse"
                    ></span>
                    <span>More data indexing in progress...</span>
                </div>
            </div>

            {#if xUsername}
                <div class="border-t border-terminal-slate pt-8 mb-8">
                    <h3
                        class="text-lg font-black text-white uppercase tracking-tight mb-4 flex items-center"
                    >
                        <span class="text-neon-green mr-2">#</span>LATEST FROM X
                    </h3>
                    <div
                        class="bg-terminal-black rounded overflow-hidden min-h-[100px]"
                    >
                        <a
                            class="twitter-timeline"
                            data-theme="dark"
                            data-height="400"
                            data-chrome="noheader nofooter noborders"
                            href="https://twitter.com/{xUsername}"
                        >
                            <!-- This text shows as fallback if widget fails -->
                        </a>
                        <!-- Always-visible fallback link -->
                        <div
                            class="p-4 text-center border-t border-terminal-slate"
                        >
                            <a
                                href="https://x.com/{xUsername}"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center text-gray-400 hover:text-neon-green transition-colors font-mono text-sm"
                            >
                                <svg
                                    class="h-4 w-4 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                                    />
                                </svg>
                                Follow @{xUsername} on X
                            </a>
                        </div>
                    </div>
                </div>
            {/if}

            <!--
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
            -->
        </div>
    </div>

    {#if relatedTools.length > 0}
        <div class="mt-16 space-y-8">
            <div class="border-b border-terminal-slate pb-4">
                <h2
                    class="text-2xl font-black text-white uppercase tracking-tight flex items-center"
                >
                    <span class="text-neon-green mr-2">#</span>RELATED {tool.category.endsWith(
                        "s",
                    )
                        ? tool.category
                        : tool.category + "s"}
                </h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                {#each relatedTools as relatedTool (relatedTool.id)}
                    <ToolCard tool={relatedTool} />
                {/each}
            </div>
        </div>
    {/if}
</div>
