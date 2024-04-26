<script>
	import Grid from './Grid.svelte';
</script>

<div class="game">
	<div class="info"></div>
	<div class="grid-container">
		<Grid />
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
