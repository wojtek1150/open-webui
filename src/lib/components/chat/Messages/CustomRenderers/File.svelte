<script lang="ts">
	import { marked } from 'marked';
	import type { FileData } from '$lib/types';
	import FileRenderer from './FileRenderer.svelte';
	export let html: string;

	const parseFileHtml = (html: string): FileData | null => {
		const parser = new DOMParser();
		const doc = parser.parseFromString(html, 'text/html');
		const fileEl = doc.querySelector('file');

		if (!fileEl) return null;

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

		return result as FileData;
	};

	$: fileData = parseFileHtml(html);
</script>

{#if fileData}
    <FileRenderer fileData={fileData} />
{/if}