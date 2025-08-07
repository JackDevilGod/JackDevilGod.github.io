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
	

		{#if open} 
			<ul>
				{#each main_pages as {route, name}}
					<li><a href="{route}">{name}</a></li>
				{/each}
			</ul>
		{/if}
	</nav>
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
		flex-direction: column;
		position: relative;
		align-items: flex-end;

		margin-right: 20px;

		ul {
			margin-top: 100px;
			height: auto;
			width: 200px;
	
			margin-right: -20px;

			display: flex;
			flex-direction: column;
			position: absolute;

			background-color: #080808;
			opacity: 80%;
			list-style: none;

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
					font-size: x-large;

					color: #f7f7f7;
				}

				a:hover {
					background-color: #6d6d6d;
				}
			}
		}
	}

	@media only screen and (max-width: 1150px) {
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