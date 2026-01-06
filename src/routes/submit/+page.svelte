<script lang="ts">
    // No script needed for static links
</script>

<svelte:head>
    <title>Submit a Tool - predictiontools.directory</title>
</svelte:head>

<div class="max-w-4xl mx-auto px-4">
    <div class="text-center mb-16">
        <h1
            class="text-4xl md:text-5xl font-black font-sans text-white mb-6 tracking-tight uppercase"
        >
            Submit a Tool
        </h1>
        <p
            class="text-gray-400 font-mono text-lg max-w-2xl mx-auto leading-relaxed"
        >
            We rely on community contributions to keep this directory up to
            date. Choose how you'd like to contribute below.
        </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <!-- Option 1: Pull Request -->
        <div
            class="group relative bg-terminal-dark border border-terminal-slate p-8 hover:border-neon-green transition-all duration-300"
        >
            <div
                class="absolute -top-6 left-1/2 -translate-x-1/2 bg-terminal-black px-4 py-1 border border-terminal-slate text-neon-green font-mono text-xs uppercase tracking-wider"
            >
                Recommended
            </div>

            <div class="text-center mb-8">
                <div
                    class="w-16 h-16 bg-neon-green/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-neon-green/20 transition-colors"
                >
                    <svg
                        class="w-8 h-8 text-neon-green"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-2 font-sans">
                    Submit via GitHub
                </h3>
                <p class="text-gray-400 text-sm leading-relaxed mb-6 font-mono">
                    Fastest way to get added. Fork the repo and add your tool to <span
                        class="bg-terminal-slate/50 px-1 rounded text-gray-300"
                        >tools.json</span
                    >.
                </p>
            </div>

            <a
                href="https://github.com/tgel0/prediction-tools-directory/edit/main/src/lib/data/tools.json"
                target="_blank"
                rel="noreferrer"
                class="block w-full text-center bg-neon-green text-terminal-black font-bold py-3 px-4 rounded hover:bg-neon-green/90 transition-colors font-mono uppercase"
            >
                Open Pull Request
            </a>
        </div>

        <!-- Option 2: Issue -->
        <div
            class="bg-terminal-dark border border-terminal-slate p-8 hover:border-gray-500 transition-colors duration-300 flex flex-col"
        >
            <div class="text-center mb-8 flex-grow">
                <div
                    class="w-16 h-16 bg-terminal-slate/20 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                    <svg
                        class="w-8 h-8 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                    </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-2 font-sans">
                    Request a Tool
                </h3>
                <p class="text-gray-400 text-sm leading-relaxed mb-6 font-mono">
                    Don't code? No problem. Fill out a simple issue form and
                    we'll add it for you.
                </p>
            </div>

            <a
                href="https://github.com/tgel0/prediction-tools-directory/issues/new?template=tool_request.yml"
                target="_blank"
                rel="noreferrer"
                class="block w-full text-center bg-transparent border-2 border-terminal-slate text-white font-bold py-3 px-4 rounded hover:border-white transition-colors font-mono uppercase"
            >
                Create Issue
            </a>
        </div>
    </div>
</div>
