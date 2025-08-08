<script>
	import { page } from '$app/state';
</script>

<h1>You encountered {page.status}</h1>

<h2>meaning {page.error.message}</h2>