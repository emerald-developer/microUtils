<script lang="ts" runes>
  import Badge from "./badge.svelte";
  let {
    badgeType,
    cardTitle,
    cardDescription,
  }: {
    badgeType:
      | "utility"
      | "business"
      | "math"
      | "health"
      | "education"
      | "finance"
      | "productivity"
      | "fun";
    cardTitle: string;
    cardDescription: string;
  } = $props();
</script>

<div class="card lg:card-side bg-base-100 w-72 shadow-sm">
  <div class="card-body">
    <h2 class="card-title text-3xl font-bold">
      {cardTitle}
    </h2>
    <p class="text-xl">{cardDescription}</p>
    <Badge {badgeType} />
    <div class="card-actions justify-end">
      <button class="btn btn-primary btn-dash">Run</button>
    </div>
  </div>
</div>
