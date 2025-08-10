<script>
    import ClickableIcon from "./sub_components/clickable_icon.svelte";

    import mail from '$lib/assets/social_icons/mail.png'

    let socials = [
        {link: "mailto:devilgods.696@gmail.com", icon: mail}
    ];
</script>
<div>
    {#each socials as {link, icon}}
        <div class="social_icon">
            <ClickableIcon link={link} image={icon} />
        </div>
    {/each}
</div>

<style>
    div {
        width: 100%;
        height: 100%;

        display: grid;
        grid-template-columns: auto auto auto;
    }

    .social_icon {
        width: 20%;
        height: auto;
    }
</style>