<script>
	let { link, image, name = 'social' } = $props();
</script>

<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
<a target="_blank" href={link} aria-label="social link">
	<img src={image} alt={name} />
</a>

<style>
	img {
		aspect-ratio: 1 / 1;

		width: 100%;
		height: auto;
	}
</style>
