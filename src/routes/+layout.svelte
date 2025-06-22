<script lang="ts">
	import '../app.css';
	
	let { children } = $props();
</script>
<div class="bg-base-200 p-0 m-0 min-w-screen min-h-screen">

	{@render children()}
</div>
