<script lang="ts">
	export let pic: string;
</script>

<div class="square">
	<img src={`./images/${pic}.png`} alt={pic} />
</div>

<style>
	.square {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: burlywood;
	}
</style>
