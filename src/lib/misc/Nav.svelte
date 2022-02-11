<script>
    import { theme, updateTheme } from '../../stores/themeStore';

    // Apply dark class to document.body if theme is dark
    if ($theme === 'dark') {
        document.body.classList.add('dark');
        document.body.classList.add('bg-gray-900');
    }

    // Function to toggle between themes
    function toggleTheme() {
        $theme = $theme === 'dark' ? 'light' : 'dark';
        document.body.classList.toggle('dark');
        document.body.classList.toggle('bg-gray-900');
        updateTheme($theme);
    }
</script>

<header class="sticky top-0 bg-white border-b-2 border-purple-600 dark:bg-gray-900">
    <nav>
        <div class="container mx-auto flex flex-row justify-between items-center py-2">
            <a 
                href="/#/" 
                class="font-semibold text-xl ml-2 md:ml-4 dark:text-white"
            >
                CloudChat
            </a>
            <button 
                class="flex flex-row justify-center items-center text-purple-600 hover:text-purple-800 mr-2 md:mr-4 border-0 rounded-md w-8"
                on:click={toggleTheme}
            >
                {#if $theme === 'dark'}
                <!-- Svg for dark mode -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
                {:else}
                <!-- Svg for light mode -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                {/if}
            </button>
        </div>
    </nav>
</header>