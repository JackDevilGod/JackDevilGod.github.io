<script>
    let {link, image} = $props()
</script>

<a target='_blank' href="{link}">
    <img src="{image}"/>
</a>

<style>
    img {
        aspect-ratio: 1 / 1;

        width: 100%;
        height: auto;
    }
</style>