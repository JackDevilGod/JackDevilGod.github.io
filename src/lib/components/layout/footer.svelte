<script>
	import { resolve } from '$app/paths';
	import MobileNavBar from '$lib/components/nav component/mobile navbar.svelte';

	let {
		main_pages = [{ route: '/', name: 'Home' }],
		extra_pages = [{ route: '/', name: 'Home' }]
	} = $props();

	let pages = $derived(main_pages.concat(extra_pages));
</script>

<footer>
	<nav id="desktop_navbar">
		<ul>
			{#each main_pages as { route, name } (route)}
				<li><a href={resolve(route)}>{name}</a></li>
			{/each}
		</ul>

		<nav id="navbar_burger">
			<MobileNavBar pages={extra_pages} />
		</nav>
	</nav>

	<nav id="mobile_navbar">
		<MobileNavBar {pages}  />
	</nav>
</footer>

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

	#navbar_burger {
		margin-right: 20px;
		height: auto;
		align-content: center;
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
