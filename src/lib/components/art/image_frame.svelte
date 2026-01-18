<script>
	import { resolve } from '$app/paths';
	export let path = '/';
</script>

<a href={resolve(path)}>
	<img src={path} class="frame" alt="art" loading="lazy" />
</a>

<style>
	.frame {
		display: block;
		width: 100%;
		max-width: 300px;
		height: auto;
		object-fit: contain;
		border-radius: 6px;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
	}

	@media (max-width: 400px) {
		.frame {
			max-width: 220px;
		}
	}
</style>
