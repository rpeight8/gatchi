<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Square from './Square.svelte';

	export let grid: string[] = [];
	export let found: string[] = [];

	const dispatch = createEventDispatcher();

	let first = -1;
	let second = -1;

	let timeout: number;
</script>

<div class="grid">
	{#each grid as pic, i}
		<Square
			{pic}
			on:click={() => {
				timeout && clearTimeout(timeout);
				if (first === -1 && second === -1) {
					first = i;
				} else if (second === -1) {
					second = i;
					if (grid[first] === grid[second]) {
						dispatch('found', pic);
					} else {
						timeout = setTimeout(() => {
							first = -1;
							second = -1;
						}, 1000);
					}
				} else {
					second = -1;
					first = i;
				}
			}}
			selected={first === i || second === i}
			found={found.includes(pic)}
		/>
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
