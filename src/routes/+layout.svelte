<script lang="ts">
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import { page } from "$app/stores";
</script>

<div
  class="min-h-screen flex flex-col font-sans selection:bg-neon-green selection:text-black"
>
  <Navbar activeRoute={$page.url.pathname} />

  <main class="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <slot />
  </main>

  <footer class="border-t border-terminal-slate py-6 mt-12 bg-terminal-dark">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center text-dim-gray text-sm font-mono"
    >
      <p>&copy; {new Date().getFullYear()} predictiontools.directory</p>
      <div class="mt-2 sm:mt-0 space-x-4">
        <a href="/privacy" class="hover:text-neon-blue transition-colors"
          >Privacy</a
        >
        <a href="/terms" class="hover:text-neon-blue transition-colors">Terms</a
        >
      </div>
    </div>
  </footer>
</div>
