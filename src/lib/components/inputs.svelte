<script lang="ts">
  let weight: number = 0;
  let height: number = 0;
  let bmi: number | null = null;

  function getBMI() {
    if (weight > 0 && height > 0) {
      // Convert height from cm to meters
      const heightInMeters = height / 100;
      bmi = weight / (heightInMeters ** 2);
    } else {
      bmi = null;
    }
  }
</script>

<div class="rounded-xl p-10">
  <h1 class="text-3xl font-bold text-center">BMI Calculator</h1>
  <fieldset class="fieldset">
  <p class="fieldset-legend">Enter your mass:</p>
  <input type="text" class="input" placeholder="Enter your mass here" />
  <p class="label">(in kilograms)</p>

  <p class="fieldset-legend">Enter your height:</p>
  <input type="text" class="input" placeholder="Enter you're height here" />
  <p class="label">(in meters)</p>

    <button class="btn btn-primary btn-outline" on:click={getBMI}>Calculate</button>
  </fieldset>
  {#if bmi !== null}
    <p class="mt-4 text-center font-semibold">Your BMI is: {bmi.toFixed(2)}</p>
  {/if}
</div>

