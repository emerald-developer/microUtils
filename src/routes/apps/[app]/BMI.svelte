<script lang=ts>
    import Nav from "$lib/components/nav.svelte";
    import Inputs from "$lib/components/inputs.svelte";
    let mass,height,bmi=$state(-1)
</script>

<div class="h-screen flex flex-col">
    <Nav/>
    <div class="hero bg-base-200 flex-grow overflow-hidden">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Find your BMI now!</h1>
            <p class="py-6">
              
            </p>
          </div>
          <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl motion-translate-y-in-100 motion-duration-1500 ">
            <div class="card-body">
                <Inputs weight={mass} height={height}/>
            </div>
          </div>
        </div>
      </div>
</div>
