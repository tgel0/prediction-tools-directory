<script lang="ts">
  export let activeRoute = "/";
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<nav
  class="border-b border-terminal-slate bg-terminal-black/80 backdrop-blur-md sticky top-0 z-50"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16 items-center">
      <div class="flex items-center">
        <a
          href="/"
          class="text-2xl font-bold font-mono tracking-tighter text-neon-green hover:text-neon-green/80 transition-colors"
        >
          PRED.TOOLS_
        </a>
      </div>

      <!-- Desktop Links -->
      <div class="hidden sm:flex space-x-8 items-center">
        <a
          href="/"
          class="text-gray-300 hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-colors font-mono {activeRoute ===
          '/'
            ? 'text-neon-blue'
            : ''}"
        >
          /DIRECTORY
        </a>
        <a
          href="/compare/polymarket-vs-kalshi"
          class="text-gray-300 hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-colors font-mono {activeRoute ===
          '/compare/polymarket-vs-kalshi'
            ? 'text-neon-blue'
            : ''}"
        >
          /COMPARE
        </a>
        <div class="relative group">
          <button 
            class="text-gray-300 hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-colors font-mono flex items-center gap-1"
          >
            /CATEGORIES
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          <div class="absolute left-0 top-full hidden group-hover:block w-56 bg-terminal-black border border-terminal-slate shadow-xl rounded-md py-2 z-50">
            <a href="/category/platforms" class="block px-4 py-2 text-xs font-mono text-gray-400 hover:text-neon-green hover:bg-terminal-slate/30 transition-colors">Platforms</a>
            <a href="/category/trading-terminals" class="block px-4 py-2 text-xs font-mono text-gray-400 hover:text-neon-green hover:bg-terminal-slate/30 transition-colors">Trading Terminals</a>
            <a href="/category/ai-agents-&-bots" class="block px-4 py-2 text-xs font-mono text-gray-400 hover:text-neon-green hover:bg-terminal-slate/30 transition-colors">AI Agents & Bots</a>
            <a href="/category/market-intelligence" class="block px-4 py-2 text-xs font-mono text-gray-400 hover:text-neon-green hover:bg-terminal-slate/30 transition-colors">Market Intelligence</a>
            <a href="/category/analysis-tools" class="block px-4 py-2 text-xs font-mono text-gray-400 hover:text-neon-green hover:bg-terminal-slate/30 transition-colors">Analysis Tools</a>
            <a href="/category/information-&-osint" class="block px-4 py-2 text-xs font-mono text-gray-400 hover:text-neon-green hover:bg-terminal-slate/30 transition-colors">Information & OSINT</a>
            <a href="/category/infrastructure-&-apis" class="block px-4 py-2 text-xs font-mono text-gray-400 hover:text-neon-green hover:bg-terminal-slate/30 transition-colors">Infrastructure & APIs</a>
          </div>
        </div>
        <a
          href="/submit"
          class="text-gray-300 hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-colors font-mono {activeRoute ===
          '/submit'
            ? 'text-neon-blue'
            : ''}"
        >
          /SUBMIT
        </a>
      </div>

      <div class="flex items-center space-x-4">
        <!-- GitHub Link (Desktop) -->
        <a
          href="https://github.com/tgel0/prediction-tools-directory"
          target="_blank"
          rel="noreferrer"
          class="hidden sm:block text-gray-400 hover:text-white transition-colors"
        >
          <span class="sr-only">GitHub</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd"
            />
          </svg>
        </a>

        <!-- Mobile Menu Button -->
        <button
          on:click={toggleMenu}
          class="sm:hidden text-gray-400 hover:text-white transition-colors p-2"
          aria-label="Toggle menu"
        >
          {#if isMenuOpen}
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          {:else}
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          {/if}
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Menu Dropdown -->
  {#if isMenuOpen}
    <div
      class="sm:hidden border-t border-terminal-slate bg-terminal-black/95 backdrop-blur-lg px-4 pt-2 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-300"
    >
      <a
        href="/"
        class="block text-gray-300 hover:text-neon-blue px-3 py-4 text-base font-medium transition-colors font-mono {activeRoute ===
        '/'
          ? 'text-neon-blue border-l-2 border-neon-blue pl-4'
          : ''}"
        on:click={() => (isMenuOpen = false)}
      >
        /DIRECTORY
      </a>
      <a
        href="/compare/polymarket-vs-kalshi"
        class="block text-gray-300 hover:text-neon-blue px-3 py-4 text-base font-medium transition-colors font-mono {activeRoute ===
        '/compare/polymarket-vs-kalshi'
          ? 'text-neon-blue border-l-2 border-neon-blue pl-4'
          : ''}"
        on:click={() => (isMenuOpen = false)}
      >
        /COMPARE
      </a>
      <a
        href="/submit"
        class="block text-gray-300 hover:text-neon-blue px-3 py-4 text-base font-medium transition-colors font-mono {activeRoute ===
        '/submit'
          ? 'text-neon-blue border-l-2 border-neon-blue pl-4'
          : ''}"
        on:click={() => (isMenuOpen = false)}
      >
        /SUBMIT
      </a>
      <a
        href="https://github.com/tgel0/prediction-tools-directory"
        target="_blank"
        rel="noreferrer"
        class="block text-gray-400 hover:text-white px-3 py-4 text-base font-medium transition-colors font-mono"
      >
        /GITHUB
      </a>
    </div>
  {/if}
</nav>
