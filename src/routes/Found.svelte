<script lang="ts">
	export let found: string[] = [];
</script>

<div class="found">
	{#each found as pic}
		<enhanced:img src={pic} class="enchanced-img" alt="An alt text" />
	{/each}
</div>

<style>
	.found {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.4em;
	}
	.enchanced-img {
		font-size: 5em;
		width: 2em;
		height: 2em;
		object-fit: contain; /* Maintains the aspect ratio; use 'cover' to fill the entire cell */
		display: block; /* Removes bottom margin/gap beneath the image */
	}
</style>
