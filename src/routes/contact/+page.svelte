<script>
	import SocialTable from '$lib/components/social_table.svelte';
</script>

<div class="content">
	<h1 class="page_header">this is the contact page.</h1>

	<div id="social_table">
		<SocialTable />
	</div>
</div>

<style>
	#social_table {
		width: 50%;
		height: 500px;

		margin-left: auto;
		margin-right: auto;
	}
</style>
