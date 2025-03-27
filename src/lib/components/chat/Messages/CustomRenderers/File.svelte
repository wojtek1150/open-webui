<script lang="ts">
	export let html: string;

	const parseFileHtml = (html: string) => {
		const parser = new DOMParser();
		const doc = parser.parseFromString(html, 'text/html');
		const fileEl = doc.querySelector('file');

		if (!fileEl) return null;

		const result: Record<string, string> = {};

		// Get direct child text nodes
		['name', 'size', 'type'].forEach(prop => {
			const el = fileEl.querySelector(prop);
			if (el) {
				result[prop] = el.textContent || '';
			}
		});

		// Get link href attribute
		const linkEl = fileEl.querySelector('link');
		if (linkEl && linkEl.getAttribute('href')) {
			result.link = linkEl.getAttribute('href') || '';
		}

		return result;
	};

	$: fileData = parseFileHtml(html);

</script>

{#if fileData}
    <div class="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <div class="flex-shrink-0 mr-4">
            <svg class="w-8 h-8 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
            </svg>
        </div>
        <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between">
                <p class="dark:text-gray-200">
                    {fileData.name}
                </p>
            </div>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {fileData.type} - {fileData.size}
            </p>
        </div>
        <div class="flex-shrink-0 ml-4">
            <a href={fileData.link} target="_blank" download class="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
            </a>
        </div>
    </div>
{/if}
