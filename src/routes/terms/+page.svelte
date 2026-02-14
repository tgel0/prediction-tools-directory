<script lang="ts">
    import { TERMS_LAST_UPDATED } from "$lib/legal";
</script>

<svelte:head>
    <title>Terms of Service - predictiontools.directory</title>
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
    <div class="bg-terminal-dark border border-terminal-slate p-8 md:p-12">
        <h1
            class="text-3xl md:text-4xl font-black font-sans text-white mb-8 tracking-tight uppercase"
        >
            Terms of Service
        </h1>

        <div
            class="prose prose-invert prose-lg max-w-none font-mono text-gray-400"
        >
            <p>Last updated: {TERMS_LAST_UPDATED}</p>

            <h3>1. Agreement to Terms</h3>
            <p>
                By accessing predictiontools.directory, you agree to be bound by
                these Terms of Service. If you disagree with any part of these
                terms, you may not access the service.
            </p>

            <h3>2. Disclaimer</h3>
            <p>
                The materials on predictiontools.directory are provided on an
                'as is' basis. We make no warranties, expressed or implied,
                regarding the accuracy, reliability, or availability of the
                tools listed.
            </p>
            <p>
                <strong>Trading and prediction markets involve risk.</strong> We
                are a directory service only and do not provide financial advice.
                You are solely responsible for your financial decisions.
            </p>

            <h3>3. Links to Other Websites</h3>
            <p>
                Our service contains links to third-party websites or services
                that are not owned or controlled by predictiontools.directory.
                We have no control over, and assume no responsibility for, the
                content, privacy policies, or practices of any third-party
                websites or services.
            </p>

            <h3>4. Changes</h3>
            <p>
                We reserve the right to modify or replace these Terms at any
                time. By continuing to access our website after those revisions
                become effective, you agree to be bound by the revised terms.
            </p>
        </div>
    </div>
</div>
