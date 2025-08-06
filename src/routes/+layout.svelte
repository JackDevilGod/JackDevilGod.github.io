<script lang="ts">
	import BurgerIcon from '$lib/components/burger_icon.svelte';

	import dg_logo from '$lib/assets/logo_dg.png'

	let { children } = $props();

	const main_pages = [
		{route: '/', name: 'Home'},
		{route: '/', name: 'something'}
		];
	
	let open = $state(false);

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

	<nav id='mobile_navbar'>
		<BurgerIcon bind:open={open}/>
	</nav>
</header>

<h1>'{open}'</h1>

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

	#desktop_navbar{
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

	#mobile_navbar {
		display: none;

		margin-right: 20px;
	}

	@media only screen and (max-width: 1150px) {
		#desktop_navbar {
			display: none;
		}

		.header_text {
			font-size: large;
		}

		#mobile_navbar {
			display: block;
		}
	}
</style>