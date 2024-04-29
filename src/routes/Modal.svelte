<div class="modal-background">
	<div class="model">
		<slot />
	</div>
</div>

<style>
	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		backdrop-filter: blur(10px);
		display: grid;
		place-items: center;
		z-index: 1000;
	}
</style>
