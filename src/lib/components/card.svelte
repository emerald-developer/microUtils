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
<!--
<div class="card w-96 hover:shadow-[0px_0px_20px_0px_rgba(255,255,255,0.2)]">
  <div class="card-body rounded-xl">
    <h2 class="card-title text-3xl font-bold">
      {cardTitle}
      <Badge {badgeType} />
    </h2>
    <p class="text-xl">{cardDescription}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary btn-dash">Run</button>
    </div>
  </div>
</div> -->

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
