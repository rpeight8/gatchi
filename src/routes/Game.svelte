<script lang="ts">
	import Grid from './Grid.svelte';
	import { levels } from './levels';
	import type { Level } from './levels';
	import { shuffle } from '../utils/shuffle';
	import Found from './Found.svelte';
	import Countdown from './Countdown.svelte';
	import { onMount } from 'svelte';

	// easy mode
	let level = levels[0];

	let size = level.size;
	let grid = shuffle(create_grid(level));
	let found: string[] = [];
	let remaining: number = level.duration;
	let duration: number = level.duration;
	let playing: boolean = false;

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

	function countdown() {
		const now = Date.now();
		let remaining_at_start = remaining;

		loop();

		function loop() {
			if (playing) return;
			requestAnimationFrame(loop);

			remaining = remaining_at_start - (Date.now() - now);

			if (remaining <= 0) {
				playing = false;
			}
		}
	}

	onMount(countdown);
</script>

<div class="game">
	<div class="info">
		<Countdown duration={level.duration} {remaining} on:click={() => {

    }}/>
	</div>
	<div class="grid-container">
		<Grid
			{grid}
			on:found={(e) => {
				found = [...found, e.detail];

        if (found.length === size * size / 2) {
          
        }
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
	}

	.grid-container {
		width: 80em;
		height: 80em;
	}
</style>
