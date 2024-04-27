<script lang="ts">
	export let pic: string;
	export let selected = false;
	export let found = false;
</script>

<div class="square" class:flipped={selected}>
	<button on:click />
	{#if !found}
		<img src={`./images/${pic}.png`} alt={pic} />
	{/if}
</div>

<style>
	.square {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: burlywood;
	}

	button {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.flipped button {
		background-color: yellowgreen;
		transform: rotateY(180deg);
	}

	img {
		pointer-events: none;
	}
</style>
