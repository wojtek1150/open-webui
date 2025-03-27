<script>
	import { marked } from 'marked';
	import { replaceTokens, processResponseContent } from '$lib/utils';
	import { user } from '$lib/stores';

	import markedExtension from '$lib/utils/marked/extension';
	import markedKatexExtension from '$lib/utils/marked/katex-extension';

	import MarkdownTokens from './Markdown/MarkdownTokens.svelte';
	import { createEventDispatcher, onMount } from 'svelte';
	import DOMPurify from 'dompurify';
	const dispatch = createEventDispatcher();

	export let id;
	export let content;
	export let model = null;
	export let save = false;

	export let sourceIds = [];

	export let onSourceClick = () => {};
	export let onTaskClick = () => {};

	let tokens = [];

	const options = {
		throwOnError: false
	};

	marked.use(markedKatexExtension(options));
	marked.use(markedExtension(options));



	onMount(() => {
		console.log('Markdown mounted', tokens, content,  DOMPurify.sanitize(content));
		console.log('sanitized -----', DOMPurify.sanitize(content), '-----');
	});

	$: (async () => {
		if (content) {
			tokens = marked.lexer(
				replaceTokens(processResponseContent(content), sourceIds, model?.name, $user?.name)
			);
		}
	})();
</script>

{#key id}
	<MarkdownTokens
		{tokens}
		{id}
		{save}
		{onTaskClick}
		{onSourceClick}
		on:update={(e) => {
			dispatch('update', e.detail);
		}}
		on:code={(e) => {
			dispatch('code', e.detail);
		}}
	/>
{/key}
