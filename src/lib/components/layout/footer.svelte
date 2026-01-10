<script>
	import MobileNavBar from '$lib/components/nav componant/mobile navbar.svelte';

	let { pages = [{ route: '/', name: 'Home' }] } = $props();
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
		<MobileNavBar {pages} />
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
