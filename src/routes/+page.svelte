<script lang="ts">
	import Game from './Game.svelte';
	import '../styles.css';
	import Modal from './Modal.svelte';
	import { levels } from './levels';
	export let state: 'waiting' | 'playing' | 'pause' | 'won' | 'lost' = 'waiting';
</script>

<Game />
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
							state = 'playing';
							level = level;
						}}>{level.label}</button
					>
				{/each}
			{/if}
		</div>
	</Modal>
{/if}
