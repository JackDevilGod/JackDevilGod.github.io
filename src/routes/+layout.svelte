<script lang="ts">
	import dg_logo from '$lib/assets/logo_dg.png'

	let { children } = $props();

	const main_pages = [
		{route: '/', name: 'Home'},
		{route: '/', name: 'something'}
		];
</script>

<svelte:head>
	<meta name="description" content="Simple portfolio(?) website." />
</svelte:head>

<header>
    <div >
        <img src="{dg_logo}" alt="DG Logo">
        <pre>
A page in
development hell.</pre>
    </div>

    <nav>
		<ul>
			{#each main_pages as {route, name}}
				<li><a href="{route}">{name}</a></li>
			{/each}
		</ul>
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

</style>