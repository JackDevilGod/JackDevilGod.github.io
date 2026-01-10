<script lang="ts">
	import {page} from '$app/state'

	import Header from '$lib/components/layout/header.svelte';
	import Footer from '$lib/components/layout/footer.svelte';

	let { children } = $props();

	const main_pages = [
		{route: '/', 			name: 'Home'},
		{route: '/projects', 	name: 'Projects'},
		{route: '/art', 		name: 'Art'},
		{route: '/youtube', 	name: 'Youtube'},
		{route: '/3dprinting', 	name: '3d printing'},
		{route: '/about', 		name: 'About'},
		{route: '/contact', 	name: 'Contact'}
		];
	
	let currentPage = $derived(main_pages.find(p => p.route == page.url.pathname));
</script>

<svelte:head>
	<meta name="description" content="Simple portfolio website." />
	<title>{currentPage ? currentPage.name : 'Unknown Page'}</title>
</svelte:head>

<Header pages={main_pages}/>

{@render children?.()}

<Footer pages={main_pages}/>