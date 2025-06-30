<script lang="ts">
  import { page } from "$app/state";
  let app = page.params.app;
  import Bmi from "./bmi.svelte";
  import Note from "./note.svelte";
</script>

{#if app == "bmi"}
  <Bmi />
{:else if app == "note"}
  <Note />
{:else if app == "todo"}
  <p>Todo app is under construction.</p>
  {:else if app == "compress"}
  <p>File compressor is under construction.</p>
{:else if app == "converter"}
  <p>File converter is under construction.</p>
{:else if app == "calculator"}
  <p>Calculator app is under construction.</p>
{:else}
  <p>App not found.</p>
{/if}
