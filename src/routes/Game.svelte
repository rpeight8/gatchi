<div class="game">
	<div class="info"></div>
	<div class="grid-container"></div>
	<div class="info"></div>
</div>

<style>
	.game {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	.info {
		width: 80vmin;
		height: 10vmin;
		background-color: red;
	}

	.grid-container {
		display: grid;
		grid-template-columns: auto auto auto;
		background-color: #2196f3;
		/* padding: 10px; */
		width: 80vmin;
		height: 80vmin;
	}
</style>
