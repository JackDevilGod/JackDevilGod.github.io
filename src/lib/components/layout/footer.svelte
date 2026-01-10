<script>
	import BurgerIcon from '$lib/components/burger_icon.svelte';

	let { pages = [{ route: '/', name: 'Home' }] } = $props();

	let open = $state(false);
</script>

<header>
	<nav id="desktop_navbar">
		<ul>
			{#each pages as { route, name } (route)}
				<li><a href={route}>{name}</a></li>
			{/each}
		</ul>
	</nav>

	<nav id="mobile_navbar">
		<BurgerIcon bind:open />

		{#if open}
			<ul>
				{#each pages as { route, name } (route)}
					<li><a href={route}>{name}</a></li>
				{/each}
			</ul>
		{/if}
	</nav>
</header>

<style>
	header {
		width: 100%;
		height: 100px;

		background-color: #080808;
		color: #dddddd;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	#desktop_navbar {
		display: flex;
		justify-content: center;

		ul {
			height: auto;
			max-width: 1150px;
			align-items: center;

			vertical-align: middle;

			display: flex;
			justify-content: center;

			list-style: none;

			font-size: xx-large;

			li {
				padding: 5px;

				margin-inline: 10px;
			}

			a {
				color: #dddddd;
				text-decoration: none;
			}

			li:hover {
				background-color: rgb(51, 51, 51);
			}
		}
	}

	#mobile_navbar {
		display: none;
		flex-direction: column;
		position: relative;
		align-items: center;

		ul {
			width: 300px;
			height: auto;

			display: flex;
			flex-direction: column;
			align-items: center;
			position: absolute;
			bottom: 100%;
			left: 50%;
			transform: translateX(-50%) translateY(-20px);

			padding: 0;

			list-style: none;
			background-color: #080808;
			opacity: 80%;

			box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.2);
			border-radius: 10px;
			li {
				width: 100%;
				height: auto;

				text-align: center;

				a {
					display: block;
					width: 100%;
					text-decoration: none;

					padding: 12px 0;
					font-size: x-large;

					color: #f7f7f7;
				}

				a:hover {
					background-color: #6d6d6d;
					text-decoration: underline;
				}
			}
		}
	}

	@media only screen and (max-width: 1200px) {
		#desktop_navbar {
			display: none;
		}

		#mobile_navbar {
			display: flex;
		}
	}
</style>
