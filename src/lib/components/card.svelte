<script lang="ts" runes>
    import Badge from "./badge.svelte";
    let { badgeType , cardTitle , cardDescription }: { badgeType: 
        | "utility"
        | "business"
        | "math"
        | "health"
        | "education"
        | "finance"
        | "productivity"
        | "fun",
        cardTitle: string,
        cardDescription: string
    } = $props();
    
</script>

<div class="card w-96 shadow-sm">
    <div class="card-body rounded-xl bg-base-200">
      <h2 class="card-title  text-3xl font-bold">
        {cardTitle}
        <Badge badgeType={badgeType} />

      </h2> 
      <p class="text-xl">{cardDescription}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary btn-dash">Run</button>
      </div>
    </div>
  </div>

