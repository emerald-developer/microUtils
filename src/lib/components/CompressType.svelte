<script>
  let type = "";
  function handleSubmit(event) {
    event.preventDefault();
    // You can use the 'type' variable here
    // e.g., console.log(type);
  }
</script>

<div class="hero bg-base-200 flex-grow">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">File Compressor</h1>
      <p class="py-6">Compress your files quickly and easily.</p>
      <p class="py-6">Choose what you would like to compress.</p>
      <form on:submit|preventDefault={handleSubmit} class="grid grid-cols-1 gap-4">
        <select
            class="select w-full"
          bind:value={type}
          required
        >
          <option value="" disabled selected>Pick a type</option>
          <option value="image">Image</option>
          <option value="video">Video</option>
          <option value="audio">Audio</option>
          <option value="misc">Misc</option>
        </select>
        <button class="btn btn-primary" type="submit">Get Started</button>
      </form>
    </div>
  </div>
</div>
