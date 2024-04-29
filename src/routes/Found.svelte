<script lang="ts">
	import { flip } from 'svelte/animate';
	import { receive } from './transitions';
	import { fade } from 'svelte/transition';

	export let found: string[];
</script>

<div class="found">
	{@debug found}
	{#each found as pic (pic)}
		<div in:fade={{ delay: 500 }} animate:flip={{ duration: 200, delay: 500 }} class="pair">
			<img alt={pic} src={pic} in:receive={{ key: `${pic}:a` }} />
			<img alt={pic} src={pic} in:receive={{ key: `${pic}:b` }} />
		</div>
	{/each}
</div>

<style>
	.found {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 0.5em;
		z-index: 3;
		filter: drop-shadow(0.2em 0.4em 0.6em rgba(0, 0, 0, 0.1));
	}

	.pair {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: max(2.5em, calc(80em / (var(--size) * var(--size))));
		width: 1.5em;
		aspect-ratio: 1;
		background: var(--bg-1);
		border-radius: 50%;
	}

	img {
		display: block;
		position: absolute;
		width: 1em;
		height: 1em;
		line-height: 1;
		aspect-ratio: 1;
	}
</style>
