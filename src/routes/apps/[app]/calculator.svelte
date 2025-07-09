<script lang="ts">
    import { calculate } from "$lib/scripts/calculator";
    let result: string = "";
    let input: string = "";
    $: if (input) {
        try {
            result = calculate(input);
        } catch (error) {
            result = "Error in calculation";
        }
    } else {
        result = "";
    }
    function validateInput(event: KeyboardEvent) {
        const allowedKeys = [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "+",
            "-",
            "*",
            "/",
            ".",
            "(",
            ")",
            "%",
            "Backspace",
            "Delete",
            "ArrowLeft",
            "ArrowRight",
            "Tab",
        ];
        const key = event.key;

        if (!allowedKeys.includes(key) && !event.ctrlKey && !event.metaKey) {
            event.preventDefault();
            return false;
        }

        return true;
    }
</script>

<div class="flex justify-center items-center flex-grow">
    <fieldset
        class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 align-center"
    >
        <legend class="fieldset-legend">Calculator</legend>
        <input
            type="text"
            class="input"
            bind:value={input}
            on:keydown={validateInput}
            placeholder="Enter the expression to calculate"
        />
        <p class="label">{result}</p>
    </fieldset>
</div>
