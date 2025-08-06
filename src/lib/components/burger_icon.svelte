<script>
	const amount = [1, 2, 3];
	let state_class = $state('');

	let { open = false, arialabel = 'toggle menu'} = $props();

	const onClick = () => {
		open = !open;

		if (open) {
			state_class = 'open';
		} else {
			state_class = '';
		}
	};
</script>


<button id='burger' class="{state_class}" onclick={onClick} aria-label="{arialabel}" aria-expanded="{open}">
	{#each  amount as id}
		<div id='bar{id}' class='burger_layer {state_class}'></div>
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

		display: block;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	:root {
    	--transition-duration: 400ms;
  	}

	.open {
		#bar1 {
			transform: rotate(45deg) translate(6px);
		}

		#bar2 {
			display: none;
		}

		#bar3 {
			transform: rotate(-45deg) translate(6px);
		}
	}
</style>