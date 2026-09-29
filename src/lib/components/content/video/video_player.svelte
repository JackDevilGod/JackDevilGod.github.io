<script lang="ts">
	let { link    = 'https://www.youtube.com/embed/dQw4w9WgXcQ?si=K77jC6bfk2khszDj',
	      width   = 560,
	      height  = 315}: { link?: string, width?: number, height?: number } = $props();
</script>

<div>
    <iframe 
        width={width} height={height}
        src={link}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen></iframe>
</div>