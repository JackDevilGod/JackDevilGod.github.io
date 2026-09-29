<script lang="ts">
	let { link    = 'https://www.youtube.com/embed/dQw4w9WgXcQ?si=K77jC6bfk2khszDj',
	      class_pass   = "center", 
	      width   = 560,
	      height  = 315}: { link?: string, class_pass?: string, width?: number, height?: number } = $props();
</script>

<div class={class_pass}>
    <iframe 
        width={width} height={height}
        src={link}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen></iframe>
</div>