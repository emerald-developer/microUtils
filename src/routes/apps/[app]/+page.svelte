<script lang="ts">
    import { page } from "$app/state";
    let app = page.params.app;
    import Bmi from "./bmi.svelte";
  import Note from "./note.svelte";
</script>
{#if app == "bmi"}
    <Bmi/>
{:else if app == "note"}
    <Note/>
{/if}