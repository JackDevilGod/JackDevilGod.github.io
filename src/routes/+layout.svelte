<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	import MobileNavBar from '../lib/components/nav component/mobile navbar.svelte';

	let { children } = $props();

	const main_pages: string[] = [
		'Home',
		'Projects',
		'Art',
		'Youtube',
		'3d printing'
	];

	const extra_pages: string[] = [
		'About',
		'Contact'
	];

	const all_pages: string[] = main_pages.concat(extra_pages);

	const page_dict = {
	"Home":       "/",
	"Projects" :  "/projects",
	"Art":        "/art",
	"Youtube" :   "/youtube",
	"3d printing": "/3d_printing",
	'About':      "/about",
	'Contract':   "/contact",
	};
</script>

<svelte:head>
	<meta name="description" content="Simple portfolio website." />
	<title>{currentPage ? currentPage.name : 'Unknown Page'}</title>
</svelte:head>

<header>
	<div>
		<a href={resolve('/')} id="header_logo" title="link to home">
			<enhanced:img src='$lib/assets/logo_dg.png' alt="DG Logo" title="DG logo"/>
		</a>

		<pre class="header_text">A page in
development hell.</pre>
	</div>

	<nav id="desktop_navbar">
		<ul>
			{#each main_pages as { route, name } (route)}
				<li><a href={resolve(route)}>{name}</a></li>
			{/each}
		</ul>

		<nav id="navbar_burger">
			<MobileNavBar pages={extra_pages} position="top" extra_style_list="right:0;" />
		</nav>
	</nav>

	<nav id="mobile_navbar">
		<MobileNavBar {pages} position="top" extra_style_list="right:0;" />
	</nav>
</header>


{@render children?.()}

<footer>
	<MobileNavBar {pages} position="bottom" />
</footer>

<style>
	header {
		width: 100%;
		height: 75px;

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

	footer {
		width: 100%;
		height: 100px;

		background-color: #080808;
		color: #dddddd;

		display: flex;
		justify-content: center;
		align-items: center;
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
