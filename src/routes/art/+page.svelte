<script>
    import GalleryButton from "$lib/components/art/gallery_button.svelte";

    let { data } = $props();
</script>

<div class='content'>
    <h1 class="page_header">Art or something</h1>

    <div id='galleries_grid'>
        {#each data.galleries as {title, route}}
            <GalleryButton title={title} folder_name={route} />
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