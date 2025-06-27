<script lang="ts">
    import { page } from '$app/stores';

</script>


<div class="navbar bg-base-200 shadow-sm">
    <div class="navbar-start">
        <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                <img src="/logo.png" alt="">
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

        <div class="btn btn-ghost text-xl text-white">
                            <img class="w-[1.5rem] h-[1.5rem]" src="/logo.png" alt="">
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
