<script lang="ts">
	import Grid from './Grid.svelte';
	import { levels } from './levels';
	import type { Level } from './levels';

	// easy mode
	let level = levels[0];

	let size = level.size;
	let grid = create_grid(level);
	let found = [];

	function create_grid(level: Level) {
		const picsCopy = [...level.pics];
		const pairs: string[] = [];

		for (let i = 0; i < level.size ** 2 / 2; i++) {
			const randomIndex = Math.floor(Math.random() * picsCopy.length);
			const pic = picsCopy.splice(randomIndex, 1)[0];
			pairs.push(pic, pic);
		}

		return pairs;
	}
</script>

<div class="game">
	<div class="info"></div>
	<div class="grid-container">
		<Grid {grid}/>
	</div>
	<div class="info"></div>
</div>

<style>
	.game {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		font-size: min(1vmin, 0.5rem);
	}

	.info {
		width: 80em;
		height: 10em;
		background-color: red;
	}

	.grid-container {
		/* display: grid;
		grid-template-columns: auto auto auto; */
		background-color: #2196f3;
		/* padding: 10px; */
		width: 80em;
		height: 80em;
	}
</style>
