<script lang="ts">
	import { MediaQuery } from 'svelte/reactivity';

	import dg_logo from '$lib/assets/logo_dg.png'

	let { children } = $props();

	const main_pages = [
		{route: '/', name: 'Home'},
		{route: '/', name: 'something'}
		];
	
	function toggleMobileMenu(menu) {
		menu.classList.toggle('open');
	};

</script>

<svelte:head>
	<meta name="description" content="Simple portfolio(?) website." />
</svelte:head>

<header>
	<div >
		<img src="{dg_logo}" alt="DG Logo">
		<pre class='header_text'>
A page in
development hell.</pre>
	</div>

	<nav id='desktop_navbar'>
		<ul>
			{#each main_pages as {route, name}}
				<li><a href="{route}">{name}</a></li>
			{/each}
		</ul>
	</nav>

	<div id="hamburg_icon">
		<div class="b1"></div>
		<div class="b1"></div>
		<div class="b1"></div>

		<ul id='mobile_menu'>
			{#each main_pages as {route, name}}
				<li><a href="{route}">{name}</a></li>
			{/each}
		</ul>
	</div>
</header>

{@render children?.()}

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

	img {
		width: auto;
		height: 75%;
		border-radius: 5px;

		float: left;

		background-color: #dddddd;
	}

	nav{
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

	#hamburg_icon {
		height: 100%;

		display: none;

		cursor: pointer;

		div {
			width: 35px;
			height: 3px;

			background-color: white;
			margin: 6px 0;
			transition: 0.4s;
		}
	}

	.open .b1 {
		-webkit-transform: rotate(-45deg) translate(-6px, 6px);
		transform: rotate(-45deg) translate(-6px, 6px);
	}

	#mobile_menu {
		width: 200px;
		max-height: 0;
		overflow: hidden;
		transition: max-height 0.4s ease, opacity 0.2s ease;
		height: auto;
		top: 100px;
		right: 0;
		left: auto;
		position: absolute;
		align-self: flex-end;
		background-color: #080808;
		opacity: 0;
		pointer-events: none;
		box-shadow: -2px 2px 10px rgba(0,0,0,0.2);
		border-radius: 0 0 0 10px;

		li {
			width: 100%;
			text-align: center;
			margin-bottom: 10px;
			a {
				display: block;
				width: 100%;
				padding: 12px 0;
				color: #f7f7f7;
				text-decoration: none;
				box-sizing: border-box;
			}
		}
	}

	.open #mobile_menu {
	max-height: 500px;
	opacity: 1;
	pointer-events: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	}

	@media only screen and (max-width: 1150px) {
		.header_text {
			font-size: large;
		}

		header nav {
			display: none;
		}

		#hamburg_icon {
			display: block;
		}

	}

</style>