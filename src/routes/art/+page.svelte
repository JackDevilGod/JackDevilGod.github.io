<script>
    import GalleryButton from "$lib/components/art/gallery_button.svelte";

    let images = import.meta.glob("$lib/assets/art/*.jpg");
</script>

<div class="content">
    {#each images as img}
        <img src="{img}" >
    {/each}
</div>

<!--
<div class='content'>
    <h1 class="page_header">Art or something</h1>

    <div id='galleries_grid'>
    
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
-->