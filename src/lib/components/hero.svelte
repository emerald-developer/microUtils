<script lang="ts">
  import { greeting } from "$lib/index";
</script>

<div class="hero min-h-screen">
  <div class="hero-overlay  bg-base-100"></div>
  <div class="hero-content text-neutral-content text-center">
    <div
      class="max-w-md motion-translate-y-in-100 motion-ease-bounce motion-blur-in-md"
    >
      <h1
        class="mb-5 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 via-secondary to-accent bg-[length:200%] animate-gradient"
      >
        {greeting()}
      </h1>
      <p class="mb-5">
        Explore our curated collection of elegant Svelte applications,
        thoughtfully designed to enhance your digital workflow with modern,
        efficient solutions.
      </p>
      <a href="/apps"
        ><button
          class="btn btn-dash btn-accent motion-preset-oscillate-lg motion-paused hover:motion-running"
          >Explore Apps</button
        ></a
      >
    </div>
  </div>
</div>
