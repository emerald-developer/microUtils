<script lang="ts">
    import { page } from "$app/state";
    let app = page.params.app;
    import Bmi from "./BMI.svelte";
</script>
{#if app == "bmi"}
    <Bmi/>
{/if}