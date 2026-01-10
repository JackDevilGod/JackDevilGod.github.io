<script>
	// accept a single `path` prop (URL to the image)
	export let path = '';
</script>

<a href={path}>
	<img src={path} class="frame" alt="art" loading="lazy" />
</a>

<style>
	.frame {
		display: block;
		width: 100%;
		max-width: 300px; /* scale down large images to a reasonable width */
		height: auto;
		object-fit: contain;
		border-radius: 6px;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
	}

	/* Make it smaller on very small screens if needed */
	@media (max-width: 400px) {
		.frame {
			max-width: 220px;
		}
	}
</style>
