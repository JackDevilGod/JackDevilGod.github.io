<script>
	import { resolve } from '$app/paths';
	import MobileNavBar from '../nav component/mobile navbar.svelte';

	import dg_logo from '$lib/assets/logo_dg.png';

	let {
		main_pages = [{ route: '/', name: 'Home' }],
		extra_pages = [{ route: '/', name: 'Home' }]
	} = $props();

	let pages = $derived(main_pages.concat(extra_pages));
</script>

<header>
	<div>
		<a href={resolve('/')} id="header_logo">
			<img src={dg_logo} alt="DG Logo" />
		</a>

		<pre class="header_text">
A page in
development hell.</pre>
	</div>

	<nav id="desktop_navbar">
		<ul>
			{#each main_pages as { route, name } (route)}
				<li><a href={resolve(route)}>{name}</a></li>
			{/each}
		</ul>

		<nav id="navbar_burger">
			<MobileNavBar pages={extra_pages} position="top"/>
		</nav>
	</nav>

	<nav id="mobile_navbar">
		<MobileNavBar {pages} position="top"/>
	</nav>
</header>

<style>
	header {
		width: 100%;
		height: 100px;

		background-color: #080808;
		color: #dddddd;

		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
	}

	div {
		padding-left: 20px;

		width: 20%;
		height: auto;

		display: flex;
		align-items: center;
	}

	pre {
		width: auto;
		height: 75%;

		margin-left: 10px;

		font-size: x-large;
		font-family: 'Times New Roman', Times, serif;
		text-align: left;

		white-space: pre-wrap;
		white-space: -moz-pre-wrap;
		white-space: -pre-wrap;
		white-space: -o-pre-wrap;
		word-wrap: normal;
	}

	#header_logo {
		width: auto;
		height: 75%;

		img {
			width: auto;
			height: 100%;
			border-radius: 5px;

			float: left;

			background-color: #dddddd;
		}
	}

	#desktop_navbar {
		display: flex;

		ul {
			height: auto;
			max-width: 1150px;
			align-items: center;

			vertical-align: middle;

			display: flex;
			justify-content: space-around;

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
		margin-right: 20px;
	}

	@media only screen and (max-width: 1200px) {
		#desktop_navbar {
			display: none;
		}

		.header_text {
			font-size: large;
		}

		#mobile_navbar {
			display: flex;
		}
	}
</style>
