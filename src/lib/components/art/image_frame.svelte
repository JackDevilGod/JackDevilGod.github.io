<script lang="ts">
	let { path = '/' }: { path?: string } = $props();
</script>

<img src={path} class="frame" alt="art" loading="lazy" />

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
