<script lang="ts">
    import { page } from '$app/stores';

</script>


<div class="navbar bg-base-200 shadow-sm">
    <div class="navbar-start">
        <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#F19E39"
                    ><path
                        d="M754-81q-8 0-15-2.5T726-92L522-296q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l85-85q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l204 204q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13l-85 85q-6 6-13 8.5T754-81Zm0-95 29-29-147-147-29 29 147 147ZM205-80q-8 0-15.5-3T176-92l-84-84q-6-6-9-13.5T80-205q0-8 3-15t9-13l212-212h85l34-34-165-165h-57L80-765l113-113 121 121v57l165 165 116-116-43-43 56-56H495l-28-28 142-142 28 28v113l56-56 142 142q17 17 26 38.5t9 45.5q0 24-9 46t-26 39l-85-85-56 56-42-42-207 207v84L233-92q-6 6-13 9t-15 3Zm0-96 170-170v-29h-29L176-205l29 29Zm0 0-29-29 15 14 14 15Zm549 0 29-29-29 29Z"
                    /></svg
                >
            </div>
            <ul
                tabindex="0"
                class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
            <li><a href="/">Home</a></li>
				<li><a href="/apps" class={$page.url.pathname === '/apps' ? 'active text-amber-500' : ''}>Apps</a></li>
				<li><a href="/about" class={$page.url.pathname === '/about' ? 'active text-amber-500' : ''}>About</a></li>
				<li><a href="/log" class={$page.url.pathname === '/log' ? 'active text-amber-500' : ''}>Log</a></li>
			</ul>
        </div>

        <div class="btn btn-ghost text-xl text-amber-500">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#F19E39"
                ><path
                    d="M754-81q-8 0-15-2.5T726-92L522-296q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l85-85q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l204 204q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13l-85 85q-6 6-13 8.5T754-81Zm0-95 29-29-147-147-29 29 147 147ZM205-80q-8 0-15.5-3T176-92l-84-84q-6-6-9-13.5T80-205q0-8 3-15t9-13l212-212h85l34-34-165-165h-57L80-765l113-113 121 121v57l165 165 116-116-43-43 56-56H495l-28-28 142-142 28 28v113l56-56 142 142q17 17 26 38.5t9 45.5q0 24-9 46t-26 39l-85-85-56 56-42-42-207 207v84L233-92q-6 6-13 9t-15 3Zm0-96 170-170v-29h-29L176-205l29 29Zm0 0-29-29 15 14 14 15Zm549 0 29-29-29 29Z"
                /></svg
            >
            <p>ToolKit</p>
        </div>
    </div>
    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1 text-md font-bold">
			<li><a href="/" class={$page.url.pathname === '/' ? 'active text-amber-500' : ''}>Home</a></li>
			<li><a href="/apps" class={$page.url.pathname === '/apps' ? 'active text-amber-500' : ''}>Apps</a></li>
			<li><a href="/about" class={$page.url.pathname === '/about' ? 'active text-amber-500' : ''}>About</a></li>
			<li><a href="/log" class={$page.url.pathname === '/log' ? 'active text-amber-500' : ''}>Log</a></li>
        </ul>
    </div>
    <div class="navbar-end">
        <a class="btn btn-square bg-base-100 hover:bg-base-200" href="https://github.com/emerald-developer/appKit">
            <!-- svelte-ignore a11y_missing_attribute -->
            <img src="/github.svg" width="16" height="16" alt="GitHub Logo" />
        </a>
    </div>
</div>
