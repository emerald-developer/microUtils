<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { afterNavigate } from '$app/navigation';
  let showArrow = false;

  function updateArrow() {
    const scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    const isOverflowing = scrollHeight > window.innerHeight + 2;
    const atTop = window.scrollY === 0;
    showArrow = isOverflowing && atTop;
  }

  function scrollDown() {
    window.scrollBy({ top: window.innerHeight / 2, behavior: 'smooth' });
  }

  function handleAfterNavigate() {
    setTimeout(updateArrow, 0);
  }


  onMount(() => {
    updateArrow();
    window.addEventListener('scroll', updateArrow);
    window.addEventListener('resize', updateArrow);
    document.addEventListener('click', updateArrow);
    afterNavigate(handleAfterNavigate);
  });

  onDestroy(() => {
    window.removeEventListener('scroll', updateArrow);
    window.removeEventListener('resize', updateArrow);
    document.removeEventListener('click', updateArrow);
  });
</script>

{#if showArrow}
  <button
    on:click={scrollDown}
    style="
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1000;
      font-size: 2rem;
      background: none;
      border: none;
      cursor: pointer;
      color: var(--arrow-color, #888);
      transition: opacity 0.2s;
    "
    aria-label="Scroll down"
  >
    &#8595;
  </button>
{/if}
