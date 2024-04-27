<script lang="ts">
	import { send } from './transitions';
	export let selected = false;
	export let found = false;
	export let pic: string;
	export let group: 'first' | 'second';
</script>

<div class="square" class:flipped={selected}>
	<button on:click />

	<div class="background" />
	{#if !found}
		<img src={pic} alt="An alt text" out:send={{ key: `${pic}:${group}` }} />
		<!-- <enhanced:img src={pic} class="enchanced-img" alt="An alt text" out:send={{ key: pic }} /> -->
	{/if}
</div>

<style>
	.square {
		display: flex;
		justify-content: center;
		align-items: center;
		transition: transform 0.5s;
		transform-style: preserve-3d;
	}
	.flipped {
		transform: rotateY(180deg);
	}
	button {
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
		border: 0;
		background-color: #eee;
		border-radius: 1em;
		font-size: inherit;
	}

	.background {
		position: absolute;
		background-color: white;
		transform: rotateY(180deg);
		backface-visibility: hidden;
		width: 100%;
		height: 100%;
		border-radius: 1em;
		border: 0.5em solid #eee;
	}
	img {
		/* transform: rotateY(180deg); */
		pointer-events: none;
		backface-visibility: hidden;
		width: 20em;
		height: 20em;
		object-fit: contain;
	}

	/* .enchanced-img {
		width: 20em;
		height: 20em;
		object-fit: contain;
	}

	picture {
		pointer-events: none;
	} */
</style>
