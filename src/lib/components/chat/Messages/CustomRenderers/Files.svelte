<script lang="ts">
	import { marked } from 'marked';
	import FileRenderer from './FileRenderer.svelte';
	import type { FileData } from '$lib/types';
	export let html: string;

	const parseFilesHtml = (html: string): FileData[] => {
		const parser = new DOMParser();
		const doc = parser.parseFromString(html, 'text/html');
		const filesEl = doc.querySelector('files');
		
		if (!filesEl) return [];

		const fileElements = Array.from(filesEl.getElementsByTagName('file'));
		const results: Record<string, string | any>[] = [];

		fileElements.forEach(fileEl => {
			const result: Record<string, string | any> = {};

			// Get direct child text nodes
			['name', 'size', 'type', 'content', 'link'].forEach(prop => {
				const el = fileEl.querySelector(prop);
				if (el) {
					result[prop] = el.textContent || '';
				}
			});

			// Handle details separately to preserve markdown
			const detailsEl = fileEl.querySelector('details');
			if (detailsEl) {
				result.details = {
					text: detailsEl.textContent || '',
					tokens: marked.lexer(detailsEl.textContent || '')
				};
			}

			// Get link href attribute
			const linkEl = fileEl.querySelector('link');
			if (linkEl && linkEl.getAttribute('href')) {
				result.link = linkEl.getAttribute('href') || '';
			}

			results.push(result);
		});

		return results as FileData[];
	};

	$: filesData = parseFilesHtml(html);
</script>

{#if filesData.length > 0}
	<div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 my-4">
		{#each filesData as fileData}
			<FileRenderer fileData={fileData} />
		{/each}
	</div>
{/if}
