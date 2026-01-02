<script lang="ts">
    export let tool: {
        name: string;
        slug: string;
        description: string;
        category: string;
        tags: string[];
        isPromoted?: boolean;
        url: string;
    };

    function getCategoryColor(category: string) {
        switch (category.toLowerCase()) {
            case "platform":
                return "text-neon-blue border-neon-blue";
            case "analytics":
                return "text-gold border-gold";
            case "terminal":
                return "text-neon-green border-neon-green";
            default:
                return "text-gray-400 border-gray-400";
        }
    }
</script>

<div
    class="group relative bg-terminal-dark border border-terminal-slate p-6 rounded-none hover:border-gray-500 transition-all duration-300 flex flex-col h-full {tool.isPromoted
        ? 'border-l-4 border-l-neon-green'
        : ''}"
>
    <div class="flex justify-between items-start mb-4">
        <div class="flex items-center space-x-2">
            <span
                class="text-xs font-mono uppercase px-2 py-0.5 border rounded {getCategoryColor(
                    tool.category,
                )}"
            >
                {tool.category}
            </span>
            {#if tool.isPromoted}
                <span
                    class="text-xs font-mono text-terminal-black bg-neon-green px-2 py-0.5 rounded font-bold"
                >
                    HOT
                </span>
            {/if}
        </div>
        <!-- External Link Icon -->
        <a
            href={tool.url}
            target="_blank"
            rel="noreferrer"
            class="text-gray-500 hover:text-white transition-colors"
            aria-label="Visit Website"
        >
            <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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

    <h3
        class="text-xl font-bold text-white font-sans mb-2 group-hover:text-neon-green transition-colors"
    >
        <a href="/tool/{tool.slug}" class="focus:outline-none">
            <span class="absolute inset-0" aria-hidden="true" />
            {tool.name}
        </a>
    </h3>

    <p class="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
        {tool.description}
    </p>

    <div class="flex flex-wrap gap-2 mt-auto">
        {#each tool.tags as tag}
            <span class="text-xs text-dim-gray font-mono">#{tag}</span>
        {/each}
    </div>
</div>
