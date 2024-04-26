<script lang="ts">
	import Square from './Square.svelte';

	export let grid: string[] = [];
</script>

<div class="grid">
	{#each grid as pic, i}
		<Square {pic} />
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(4, 1fr);
		gap: 0.4em;
		height: 100%;
	}
</style>
