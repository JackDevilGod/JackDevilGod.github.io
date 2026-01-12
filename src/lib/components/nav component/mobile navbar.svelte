<script>
	import { resolve } from '$app/paths';
	import BurgerIcon from './burger_icon.svelte';

	let {
		pages = [{ route: '/', name: 'Home' }],
	} = $props();
	let open = $state(false);
</script>

<nav id="mobile_navbar">
	<BurgerIcon bind:open />

	{#if open}
		<ul>
			{#each pages as { route, name } (route)}
				<li><a href={resolve(route)}>{name}</a></li>
			{/each}
		</ul>
	{/if}
</nav>

<style>
	#mobile_navbar {
		display: flex;
		flex-direction: column;
		position: relative;
		align-items: center;
		height: 100%;
		width: auto;

		ul {
			width: 300px;
			height: auto;

			display: flex;
			flex-direction: column;
			align-items: center;
			position: absolute;
			bottom: 100%;
			left: 50%;

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
</style>
