<script lang="ts">
    import Card from "$lib/components/card.svelte";
</script>

<div
    class="motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md overflow-hidden"
>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ap-6 p-12">
        <a href="/apps/bmi">
            <Card
                badgeType="health"
                cardTitle="BMI calculator"
                cardDescription="calculates BMI"
            />
        </a>
        <a href="/apps/bmi">
            <Card
                badgeType="health"
                cardTitle="BMI calculator"
                cardDescription="calculates BMI"
            />
        </a>
        <a href="/apps/bmi">
            <Card
                badgeType="health"
                cardTitle="BMI calculator"
                cardDescription="calculates BMI"
            />
        </a>
    </div>
</div>
