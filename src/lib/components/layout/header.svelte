<script>
    import BurgerIcon from '$lib/components/burger_icon.svelte';

    import dg_logo from '$lib/assets/logo_dg.png';

    let { pages = [{route: '/', name: 'Home'}]} = $props();
    
	let open = $state(false);
</script>

<header>
	<div >
		<a href="/" id='header_logo'>
			<img src="{dg_logo}" alt="DG Logo">
		</a>

		<pre class='header_text'>
A page in
development hell.</pre>
	</div>

	<nav id='desktop_navbar'>
		<ul>
			{#each pages as {route, name}}
				<li><a href="{route}">{name}</a></li>
			{/each}
		</ul>
	</nav>

	<nav id='mobile_navbar'>
		<BurgerIcon bind:open={open}/>

		{#if open} 
			<ul>
				{#each pages as {route, name}}
					<li><a href="{route}">{name}</a></li>
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
			width: 300px;
			height: auto;
			
			margin-top: 100px;
			margin-right: -20px;
			padding-left: 0;

			display: flex;
			flex-direction: column;
			position: absolute;
			align-content: center;

			list-style: none;
			background-color: #080808;
			opacity: 80%;

			box-shadow: -2px 2px 10px rgba(0,0,0,0.2);
			border-radius: 0 0 0 10px;
			li {
				width: 100%;
				height: auto;
	
				text-align: center;
        		margin-bottom: 10px;

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

		.header_text {
			font-size: large;
		}

		#mobile_navbar {
			display: flex;
		}
	}
</style>