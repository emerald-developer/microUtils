<script lang="ts">
    import Nav from "$lib/components/nav.svelte";
    import Card from "$lib/components/card.svelte";
</script>
<Nav />
<div class="motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md overflow-hidden">
    <div class="grid grid-cols-3 gap-6 p-12">
        <a href="/apps/bmi" >
            <Card badgeType="health" cardTitle="BMI calculator" cardDescription="calculates BMI"/>
        </a>
    </div>
</div>
