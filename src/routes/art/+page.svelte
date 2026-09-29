<script lang="ts">
	import ImageFrame from '$lib/components/art/image_frame.svelte';

	import art_list from "$lib/assets/art/_art.json"
</script>

<div class="content">
	<h1 class="page_header">Art or something</h1>

	<div id="galleries_grid">
		{#each art_list.art_pieces as img (img)}
			<figure>
				<ImageFrame path={img as string} />
			</figure>
		{/each}
	</div>
</div>

<style>
	#galleries_grid {
		margin-left: 0;
		width: 100%;
		height: auto;

		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

		align-content: center;
	}
</style>
