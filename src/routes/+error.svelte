<script>
	import { page } from '$app/state';
</script>

<h1>You encountered {page.status} error</h1>

<h2>{page.error.message}</h2>

<style>
	* {
		color: crimson;
		font-size: 5rem;
		text-shadow: 3rem;
	}
</style>