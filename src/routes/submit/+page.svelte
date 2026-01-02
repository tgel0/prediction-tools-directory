<script lang="ts">
    let isSubmitting = false;
    let submitted = false;

    async function handleSubmit(e: Event) {
        isSubmitting = true;
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        isSubmitting = false;
        submitted = true;
    }
</script>

<svelte:head>
    <title>Submit a Tool - predictiontools.directory</title>
</svelte:head>

<div class="max-w-2xl mx-auto">
    <div class="text-center mb-12">
        <h1 class="text-3xl md:text-4xl font-bold text-white font-sans mb-4">
            Submit a Tool
        </h1>
        <p class="text-gray-400 font-mono text-sm max-w-lg mx-auto">
            Help us build the most comprehensive directory for the prediction
            market ecosystem.
        </p>
    </div>

    {#if submitted}
        <div
            class="bg-terminal-dark border border-neon-green/50 p-8 rounded text-center"
        >
            <div
                class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neon-green/10 text-neon-green mb-6"
            >
                <svg
                    class="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                    />
                </svg>
            </div>
            <h2 class="text-2xl font-bold text-white mb-2">
                Submission Received
            </h2>
            <p class="text-gray-400 mb-6">
                Thanks for contributing! We'll review your submission shortly.
            </p>
            <button
                class="text-neon-green hover:underline font-mono"
                on:click={() => (submitted = false)}
            >
                Submit another tool
            </button>
        </div>
    {:else}
        <form
            on:submit|preventDefault={handleSubmit}
            class="space-y-6 bg-terminal-dark p-8 border border-terminal-slate rounded shadow-2xl"
        >
            <div>
                <label
                    for="name"
                    class="block text-sm font-mono font-medium text-gray-400 mb-2"
                    >Tool Name *</label
                >
                <input
                    type="text"
                    id="name"
                    required
                    class="w-full bg-terminal-black border border-terminal-slate rounded px-4 py-2 text-white focus:outline-none focus:border-neon-green transition-colors"
                    placeholder="e.g. Polymarket Analytics"
                />
            </div>

            <div>
                <label
                    for="url"
                    class="block text-sm font-mono font-medium text-gray-400 mb-2"
                    >Website URL *</label
                >
                <input
                    type="url"
                    id="url"
                    required
                    class="w-full bg-terminal-black border border-terminal-slate rounded px-4 py-2 text-white focus:outline-none focus:border-neon-green transition-colors"
                    placeholder="https://..."
                />
            </div>

            <div>
                <label
                    for="category"
                    class="block text-sm font-mono font-medium text-gray-400 mb-2"
                    >Category *</label
                >
                <select
                    id="category"
                    class="w-full bg-terminal-black border border-terminal-slate rounded px-4 py-2 text-white focus:outline-none focus:border-neon-green transition-colors"
                >
                    <option>Analytics</option>
                    <option>Platform</option>
                    <option>Terminal</option>
                    <option>News/Education</option>
                    <option>Bot/Automation</option>
                </select>
            </div>

            <div>
                <label
                    for="description"
                    class="block text-sm font-mono font-medium text-gray-400 mb-2"
                    >Description</label
                >
                <textarea
                    id="description"
                    rows="4"
                    class="w-full bg-terminal-black border border-terminal-slate rounded px-4 py-2 text-white focus:outline-none focus:border-neon-green transition-colors"
                    placeholder="Briefly describe what this tool does..."
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                class="w-full bg-neon-green text-terminal-black font-bold py-3 px-4 rounded hover:bg-neon-green/90 transition-colors font-mono disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
            >
                {#if isSubmitting}
                    <svg
                        class="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            class="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            stroke-width="4"
                        ></circle>
                        <path
                            class="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                    </svg>
                    PROCESSING...
                {:else}
                    SUBMIT TOOL
                {/if}
            </button>
        </form>
    {/if}
</div>
