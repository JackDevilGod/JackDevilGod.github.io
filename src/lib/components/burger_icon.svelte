<script>
	const amount = [1, 2, 3];
</script>


<div id='burger'>
	{#each  amount as id}
		<div id='bar{id}' class='burger_layer'></div>
	{/each}
</div>

<style>
	.burger_layer {
        width: 35px;
        height: 3px;

        background-color: white;
        margin: 6px 0;
        transition: 0.4s;
    }

	#burger {
		height: 100%;
		width: auto;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>