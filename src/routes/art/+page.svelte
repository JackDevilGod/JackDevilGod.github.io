<script>
    const images = Object.values(
        import.meta.glob('$lib/assets/art/*.{jpg,jpeg,png,gif,webp}', { as: 'url', eager: true })
    );
</script>

<div class='content'>
    <h1 class="page_header">Art or something</h1>

    <div id='galleries_grid'>
        {#each images as img}
            <figure>
                <img src={img} alt="art" />
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
