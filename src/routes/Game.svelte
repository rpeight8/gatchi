<script lang="ts">
	import Grid from './Grid.svelte';
	import { levels } from './levels';
	import type { Level } from './levels';
	import { shuffle } from '../utils/shuffle';
	import Found from './Found.svelte';

	// easy mode
	let level = levels[0];

	let size = level.size;
	let grid = shuffle(create_grid(level));
	let found: string[] = [];

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
		<Grid
			{grid}
			on:found={(e) => {
				found = [...found, e.detail];
			}}
			{found}
		/>
	</div>
	<div class="info">
		<Found {found} />
	</div>
</div>

<style>
	.game {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		font-size: min(1vmin, 0.3rem);
	}

	.info {
		width: 80em;
		height: 10em;
		background-color: red;
	}

	.grid-container {
		background-color: #2196f3;
		width: 80em;
		height: 80em;
	}
</style>
