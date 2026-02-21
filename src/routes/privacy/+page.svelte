<script lang="ts">
    import { PRIVACY_LAST_UPDATED } from "$lib/legal";
</script>

<svelte:head>
    <title>Privacy Policy - predictiontools.directory</title>
    <meta
        name="description"
        content="Read the privacy policy for predictiontools.directory. Learn how we protect your data using privacy-friendly tools like Plausible Analytics."
    />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
    <div class="bg-terminal-dark border border-terminal-slate p-8 md:p-12">
        <h1
            class="text-3xl md:text-4xl font-black font-sans text-white mb-8 tracking-tight uppercase"
        >
            Privacy Policy
        </h1>

        <div
            class="prose prose-invert prose-lg max-w-none font-mono text-gray-400"
        >
            <p>Last updated: {PRIVACY_LAST_UPDATED}</p>

            <h3>1. Introduction</h3>
            <p>
                predictiontools.directory ("we", "our", or "us") respects your
                privacy. This Privacy Policy explains how we collect, use, and
                protect your information when you visit our website.
            </p>

            <h3>2. Data Collection</h3>
            <p>
                We prioritize user privacy. We do not collect personal data such
                as names, email addresses, or phone numbers unless you
                voluntarily provide them (e.g., when contacting us via email).
            </p>
            <p>
                We use <strong>Plausible Analytics</strong>, a privacy-friendly
                analytics alternative that does not use cookies and does not
                track personal data. All site measurement is carried out
                absolutely anonymously.
            </p>

            <h3>3. Third-Party Links</h3>
            <p>
                Our directory contains links to third-party websites (prediction
                tools, platforms, etc.). We are not responsible for the privacy
                practices or content of these external sites. We encourage you
                to review their privacy policies.
            </p>

            <h3>4. Contact</h3>
            <p>
                If you have any questions about this Privacy Policy, please
                contact us at <a
                    href="mailto:hi@predictiontools.directory"
                    class="text-neon-green hover:underline"
                    >hi@predictiontools.directory</a
                >.
            </p>
        </div>
    </div>
</div>
