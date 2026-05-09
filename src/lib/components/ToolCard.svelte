<script lang="ts">
    import type { Tool } from "$lib/data/schema";

    export let tool: Tool;

    function getCategoryColor(category: string) {
        switch (category.toLowerCase()) {
            case "platform":
                return "text-neon-blue border-neon-blue";
            case "analytics":
                return "text-gold border-gold";
            case "trading terminal":
                return "text-neon-green border-neon-green";
            case "infrastructure":
                return "text-cyan-300 border-cyan-300";
            default:
                return "text-gray-400 border-gray-400";
        }
    }

    function pricingStyle(pricing: string | undefined) {
        switch (pricing?.toLowerCase()) {
            case "free": return "bg-green-900/60 text-green-300 border-green-500/40";
            case "freemium": return "bg-yellow-900/60 text-yellow-300 border-yellow-500/40";
            case "paid": return "bg-blue-900/60 text-blue-300 border-blue-500/40";
            case "custom": return "bg-purple-900/60 text-purple-300 border-purple-500/40";
            default: return "bg-gray-800 text-gray-400 border-gray-600";
        }
    }

    const platformBadge: Record<string, string> = {
        "Web": "🌐",
        "iOS": "📱",
        "Android": "🤖",
        "Telegram": "✈️",
        "Discord": "💬",
        "Twitter": "🐦",
        "Chrome": "🌍",
        "API": "🔌",
        "CLI": "💻",
    };
</script>

<div
    class="group relative bg-terminal-dark border border-terminal-slate p-6 rounded-none hover:border-neon-green hover:shadow-[0_0_15px_rgba(0,255,65,0.3)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full {tool.isPromoted
        ? 'border-l-4 border-l-neon-green'
        : ''} {tool.isActive === false ? 'opacity-50 grayscale' : ''}"
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
            {#if tool.pricing}
                <span
                    class="text-xs font-mono px-2 py-0.5 border rounded {pricingStyle(tool.pricing)}"
                >
                    {tool.pricing}
                </span>
            {/if}
            {#if tool.isPromoted}
                <span
                    class="text-xs font-mono text-terminal-black bg-neon-green px-2 py-0.5 rounded font-bold"
                >
                    HOT
                </span>
            {/if}
            {#if tool.isActive === false}
                <span
                    class="text-xs font-mono text-white bg-red-600 px-2 py-0.5 rounded font-bold"
                >
                    INACTIVE
                </span>
            {/if}
        </div>
        <!-- External Link Icon -->
        <a
            href="{tool.url}{tool.url.includes('?')
                ? '&'
                : '?'}utm_source=predictiontools.directory"
            target="_blank"
            rel="noreferrer"
            class="relative z-10 text-gray-500 hover:text-white transition-colors"
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
        class="text-xl font-black uppercase tracking-tight text-white font-sans mb-2 group-hover:text-neon-green transition-colors"
    >
        <a href="/tool/{tool.slug}" class="focus:outline-none">
            <span class="absolute inset-0" aria-hidden="true"></span>
            {tool.name}
        </a>
    </h3>

    <p class="text-gray-400 text-sm mb-4 flex-grow leading-relaxed font-mono">
        {tool.shortDescription}
    </p>

    {#if tool.platform && tool.platform.length > 0}
    <div class="flex flex-wrap gap-1.5 mb-1">
        {#each tool.platform as p}
            <span class="text-xs text-gray-500 font-mono" title={p}>
                {platformBadge[p] || p}
            </span>
        {/each}
    </div>
    {/if}
</div>
