<script lang=ts>
<<<<<<< HEAD:src/routes/apps/[app]/bmi.svelte
    import Inputs from "$lib/components/inputs.svelte";
    let mass:number=0,height:number=0,bmi=$state(-1)
=======
    import Nav from "$lib/components/nav.svelte";
    import Inputs from "$lib/components/inputs.svelte";
    let mass,height,bmi=$state(-1)
>>>>>>> 54c3b9b (BMI):src/routes/apps/[app]/BMI.svelte
</script>

<div class="hero bg-base-200 flex-grow overflow-hidden">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Find your BMI now!</h1>
      <p class="py-6"></p>
    </div>
    <div
      class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl motion-translate-y-in-100 motion-duration-1500"
    >
      <div class="card-body">
        <Inputs />
      </div>
    </div>
  </div>
>>>>>>> 314a3df (scroll arrow and layout changes)
</div>
