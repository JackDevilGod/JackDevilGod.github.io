<script>
	import ClickableIcon from '$lib/components/sub_components/clickable_icon.svelte';

	import mail from '$lib/assets/social_icons/mail.png';
	import discord from '$lib/assets/social_icons/discord.png';

	let socials = [
		{ link: 'mailto:devilgods.696@gmail.com', icon: mail },
		{ link: 'https://discord.gg/3xvuqWCfuu', icon: discord }
	];
</script>

<div>
	{#each socials as { link, icon }}
		<div class="social_icon">
			<ClickableIcon {link} image={icon} />
		</div>
	{/each}
</div>

<style>
	div {
		width: 100%;
		height: 100%;

		min-width: 100px;

		display: grid;
		grid-template-columns: auto auto auto;
		grid-auto-rows: auto;
		grid-auto-columns: auto;
	}

	.social_icon {
		width: 20%;
		height: auto;
	}
</style>
