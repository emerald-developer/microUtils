<script lang="ts">
    import Card from "$lib/components/AppCard.svelte";
</script>

<div
    class="motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md overflow-hidden"
>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-12">
        <a href="/apps/bmi">
            <Card
                badgeType="health"
                cardTitle="BMI calculator"
                cardDescription="calculates BMI"
            />
        </a>
        <a href="/apps/note">
            <Card
                badgeType="utility"
                cardTitle="Note"
                cardDescription="Write and save notes"
            />
        </a>
        <a href="/apps/currency">
            <Card
                badgeType="utility"
                cardTitle="Currency Converter"
                cardDescription="Converts currencies"
            />
        </a>
        <a href="/apps/compress">
            <Card
                badgeType="utility"
                cardTitle="File Compressor"
                cardDescription="Compress and decompress files"
            />
        </a>
    </div>
</div>

