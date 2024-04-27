<script lang="ts">
	import { receive } from './transitions';

	export let found: string[] = [];
</script>

<div class="found">
	{#each found as pic}
		<div class="pair">
			<img src={pic} alt="An alt text" in:receive={{ key: `${pic}:first` }} />
			<img src={pic} alt="An alt text" in:receive={{ key: `${pic}:second` }} />
		</div>
		<!-- <enhanced:img src={pic} class="enchanced-img" alt="An alt text" in:receive={{ key: pic }} /> -->
	{/each}
</div>

<style>
	.found {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.4em;
		filter: drop-shadow(0.2em 0.2em 0.5em rgba(0, 0, 0, 0.2));
		padding-top: 1.5em;
		border-radius: 50%;
	}

	.pair {
		font-size: 2em;
		width: 3em;
		height: 3em;
		background: white;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	/* .enchanced-img {
		font-size: 2em;
		width: 3em;
		height: 3em;
		object-fit: contain;
		display: block;
	} */

	img {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		object-fit: contain;
		display: block;
	}
</style>
