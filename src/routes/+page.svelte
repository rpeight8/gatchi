<script lang="ts">
	import Game from './Game.svelte';
	import '../styles.css';
	import Modal from './Modal.svelte';
	import { levels } from './levels';
	import { confetti } from '@neoconfetti/svelte';
	export let state: 'waiting' | 'playing' | 'pause' | 'won' | 'lost' = 'waiting';

	let game: Game;
</script>

<Game
	bind:this={game}
	on:start={() => {
		state = 'playing';
	}}
	on:pause={() => {
		state = 'pause';
	}}
	on:win={() => {
		state = 'won';
	}}
	on:lose={() => {
		state = 'lost';
	}}
/>
{#if state !== 'playing'}
	<Modal>
		<h1>Gatchi</h1>
		<p>Match the Gachi</p>

		{#if state === 'won' || state === 'lost'}
			<p>{`You ${state}!`}</p>
			<button on:click={() => (state = 'waiting')}>Play again</button>
		{:else if state === 'pause'}
			<p>game paused</p>
		{:else if state === 'waiting'}
			<p>choose a level</p>
		{/if}

		<div class="buttons">
			{#if state === 'pause'}
				<button on:click={() => (state = 'playing')}>Resume</button>
			{:else}
				{#each levels as level}
					<button
						on:click={() => {
							game.start(level);
						}}>{level.label}</button
					>
				{/each}
			{/if}
		</div>
	</Modal>
{/if}

{#if state === 'won'}
	<div
		class="confetti"
		use:confetti={{
			stageHeight: window.innerHeight,
			stageWidth: window.innerWidth
		}}
	></div>
{/if}

<style>
	.confetti {
		position: fixed;
		top: 50%;
		left: 50%;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}
</style>
