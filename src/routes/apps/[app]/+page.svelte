<script lang="ts">
    import { page } from "$app/state";
    let app = page.params.app;
    import Bmi from "./bmi.svelte";
    import Currency from "./currency.svelte";
</script>
{#if app == "bmi"}
    <Bmi/>
{:else if app == "currency"}
    <Currency/>

{/if}