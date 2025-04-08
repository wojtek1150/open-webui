<script lang="ts">
	import MarkdownTokens from '../Markdown/MarkdownTokens.svelte';
	import type { FileData } from '$lib/types';
	export let fileData: FileData;
	let expanded = false;
</script>

{#if fileData}
    <div class="accordion accordion-shadow  p-2 my-2 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <div class="accordion-item {expanded ? 'active' : ''}" id="file-accordion">
            <button 
                class="accordion-toggle inline-flex items-center justify-between text-start w-full"
                aria-controls="file-accordion-collapse"
                aria-expanded={expanded}
                on:click={() => expanded = !expanded}
            >
                <div class="flex gap-1">
                    <div class="size-12 rounded-md flex items-center justify-center">
                        {#if fileData.type?.toLowerCase().includes('pdf')}
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-500 dark:text-red-400" fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803q.43 0 .732-.173.305-.175.463-.474a1.4 1.4 0 0 0 .161-.677q0-.375-.158-.677a1.2 1.2 0 0 0-.46-.477q-.3-.18-.732-.179m.545 1.333a.8.8 0 0 1-.085.38.57.57 0 0 1-.238.241.8.8 0 0 1-.375.082H.788V12.48h.66q.327 0 .512.181.185.183.185.522m1.217-1.333v3.999h1.46q.602 0 .998-.237a1.45 1.45 0 0 0 .595-.689q.196-.45.196-1.084 0-.63-.196-1.075a1.43 1.43 0 0 0-.589-.68q-.396-.234-1.005-.234zm.791.645h.563q.371 0 .609.152a.9.9 0 0 1 .354.454q.118.302.118.753a2.3 2.3 0 0 1-.068.592 1.1 1.1 0 0 1-.196.422.8.8 0 0 1-.334.252 1.3 1.3 0 0 1-.483.082h-.563zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638z"/>
                            </svg>
                        {:else if fileData.type?.toLowerCase().includes('xls')}
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM6.472 15.29a1.2 1.2 0 0 1-.111-.449h.765a.58.58 0 0 0 .254.384q.106.073.25.114.143.041.319.041.246 0 .413-.07a.56.56 0 0 0 .255-.193.5.5 0 0 0 .085-.29.39.39 0 0 0-.153-.326q-.152-.12-.462-.193l-.619-.143a1.7 1.7 0 0 1-.539-.214 1 1 0 0 1-.351-.367 1.1 1.1 0 0 1-.123-.524q0-.366.19-.639.19-.272.527-.422.338-.15.777-.149.457 0 .78.152.324.153.5.41.18.255.2.566h-.75a.56.56 0 0 0-.12-.258.6.6 0 0 0-.247-.181.9.9 0 0 0-.369-.068q-.325 0-.513.152a.47.47 0 0 0-.184.384q0 .18.143.3a1 1 0 0 0 .405.175l.62.143q.326.075.566.211a1 1 0 0 1 .375.358q.135.222.135.56 0 .37-.188.656a1.2 1.2 0 0 1-.539.439q-.351.158-.858.158-.381 0-.665-.09a1.4 1.4 0 0 1-.478-.252 1.1 1.1 0 0 1-.29-.375m-2.945-3.358h-.893L1.81 13.37h-.036l-.832-1.438h-.93l1.227 1.983L0 15.931h.861l.853-1.415h.035l.85 1.415h.908L2.253 13.94zm2.727 3.325H4.557v-3.325h-.79v4h2.487z"/>
                            </svg>
                        {:else if fileData.type?.toLowerCase().includes('doc')}
                            <svg class="w-6 h-6 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v16a2 2 0 002 2h12a2 2 0 002-2V8.342a2 2 0 00-.602-1.43l-4.44-4.342A2 2 0 0013.56 2H6a2 2 0 00-2 2zm5 9h6m-6-4h6m-6 8h6"/>
                            </svg>
                        {:else if fileData.type?.toLowerCase().includes('txt')}
                            <svg class="w-6 h-6 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6-4h6m-6 8h6M4 4v16a2 2 0 002 2h12a2 2 0 002-2V8.342a2 2 0 00-.602-1.43l-4.44-4.342A2 2 0 0013.56 2H6a2 2 0 00-2 2z"/>
                            </svg>
                        {:else}
                            <svg class="w-6 h-6 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v16a2 2 0 002 2h12a2 2 0 002-2V8.342a2 2 0 00-.602-1.43l-4.44-4.342A2 2 0 0013.56 2H6a2 2 0 00-2 2z"/>
                            </svg>
                        {/if}
                    </div>
                    <div>
                        <p class="mb-0.5 text-gray-900 dark:text-gray-100">{fileData.name}</p>
                        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            {fileData.type} - {fileData.size} | <span class="text-xs">Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}</span>
                        </p>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    {#if fileData.link}
                        <a 
                            href={fileData.link} 
                            target="_blank" 
                            download 
                            class="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
                            on:click|stopPropagation
                        >
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                        </a>
                    {/if}
                    <span class="icon-[tabler--chevron-down] size-5 shrink-0 transition-transform duration-300 {expanded ? 'rotate-180' : ''}">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </span>
                </div>
            </button>
            <div 
                id="file-accordion-collapse" 
                class="accordion-content {expanded ? '' : 'hidden'} w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="file-accordion"
                role="region"
            >
                {#if fileData.details}
                    <div class="px-5 pb-4 mt-4">
                        <div class="prose dark:prose-invert max-w-none text-base-content/80 font-normal">
                            <MarkdownTokens 
                                id="file-details" 
                                tokens={fileData.details.tokens}
                                onSourceClick={() => {}}
                            />
                        </div>
                    </div>
                {/if}
            </div>
        </div>
    </div>
{/if}