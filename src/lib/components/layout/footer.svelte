<script>
	import MobileNavBar from '$lib/components/nav component/mobile navbar.svelte';

	let {
		main_pages = [{ route: '/', name: 'Home' }],
		extra_pages = [{ route: '/', name: 'Home' }]
	} = $props();

	let pages = $derived(main_pages.concat(extra_pages));
</script>

<footer>

	<MobileNavBar {pages} position="bottom" />

</footer>

<style>
	footer {
		width: 100%;
		height: 100px;

		background-color: #080808;
		color: #dddddd;

		display: flex;
		justify-content: center;
		align-items: center;
	}

</style>
