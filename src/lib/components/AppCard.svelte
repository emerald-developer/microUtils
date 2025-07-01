<script lang="ts">
  import Badge from "./Badge.svelte";
  export let badgeType:
    | "utility"
    | "business"
    | "math"
    | "health"
    | "education"
    | "finance"
    | "productivity"
    | "fun";
  export let cardTitle: string;
  export let cardDescription: string;
</script>

<div
    class="p-0.5 rounded-lg flex animate-conic-gradient"
>
  <div class="card lg:card-side bg-base-200 w-full shadow-sm h-64">
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
</div>

<style>
  .animate-conic-gradient {
    /* Conic gradient background */
    background: conic-gradient(
      from 0deg,
      var(--fallback-b1, #181a20) 0deg,
      var(--fallback-s, #f472b6) 120deg,
      var(--fallback-b1, #181a20) 240deg,
      var(--fallback-s, #f472b6) 360deg
    );
    border-radius: 0.5rem;
    /* Animate rotation */
    animation: conic-rotate 4s linear infinite;
  }

  @keyframes conic-rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
