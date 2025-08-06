<script>
	const amount = [1, 2, 3];

	let { open = false, arialabel = 'toggle menu'} = $props();

	const onClick = () => {
		open = !open;
	};
</script>


<button id='burger' onclick={onClick} aria-label="{arialabel}" aria-expanded="{open}">
	{#each  amount as id}
		<div id='bar{id}' class='burger_layer'></div>
	{/each}
</button>

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

		background: none;
		border: none;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>