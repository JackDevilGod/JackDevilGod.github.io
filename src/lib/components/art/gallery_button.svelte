<script>
	import { base } from '$app/paths';
	let { title = 'lorem', folder_name = 'ipsum' } = $props();

	const base_path = '/art/';
</script>

<!-- svelte-eslint-disable svelte/no-navigation-without-resolve -->
<a href="{base}{base_path}{folder_name}">
	<h>{title}</h>
</a>

<style>
	a {
		min-width: 200px;
		max-width: 33%;
		width: auto;
		height: 50px;

		text-decoration: none;
		color: whitesmoke;
		background-color: rgb(87, 87, 87);
		border-radius: 10px;

		text-align: center;
	}

	h {
		margin-top: auto;
		margin-bottom: auto;
	}
</style>
