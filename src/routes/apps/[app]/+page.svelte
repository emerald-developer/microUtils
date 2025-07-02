<script lang="ts">
  import { page } from "$app/state";
  let app = page.params.app;
  import Bmi from "./bmi.svelte";
  import Compress from "./compress.svelte";
  import Note from "./note.svelte";
  import Currency from "./currency.svelte";
</script>
{#if app == "bmi"}
  <Bmi />
{:else if app == "note"}
  <Note />
{:else if app == "todo"}
  <p>Todo app is under construction.</p>
{:else if app == "compress"}
  <Compress />
{:else if app == "currency"}
  <p>File converter is under construction.</p>
{:else if app == "calculator"}
  <p>Calculator app is under construction.</p>
{:else}
  <p>App not found.</p>
{/if}
