<script lang="ts">
	export let selected = false;
	export let found = false;
	export let pic: string;
</script>

<div class="square" class:flipped={selected}>
	{#if !found}
		<enhanced:img src={pic} class="enchanced-img" alt="An alt text" />
		<button on:click />
	{/if}
</div>

<style>
	.square {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: burlywood;
		overflow: hidden;
	}

	button {
		position: absolute;
		width: 100%;
		height: 100%;
		opacity: 0;
	}

	.flipped {
		background-color: yellowgreen;
		transform: rotateY(180deg);
	}

	.enchanced-img {
		pointer-events: none;
		width: 20em;
		height: 20em;
		object-fit: contain; /* Maintains the aspect ratio; use 'cover' to fill the entire cell */
		display: block; /* Removes bottom margin/gap beneath the image */
	}
</style>
