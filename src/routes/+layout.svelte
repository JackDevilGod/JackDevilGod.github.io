<script lang="ts">
	import {page} from '$app/stores'

	import Header from '$lib/components/header.svelte';

	let { children } = $props();

	const main_pages = [
		{route: '/', name: 'Home'},
		{route: '/projects', name: 'Projects'},
		{route: '/3dprinting', name: '3d printing'},
		{route: '/youtube', name: 'Youtube'},
		{route: '/about', name: 'About'},
		{route: '/contact', name: 'Contact'}
		];
	
	let currentPage = $derived(main_pages.find(p => p.route == $page.url.pathname));
</script>

<svelte:head>
	<meta name="description" content="Simple portfolio website." />
	<title>{currentPage ? currentPage.name : 'Unknown Page'}</title>
</svelte:head>

<Header pages={main_pages}/>

{@render children?.()}
