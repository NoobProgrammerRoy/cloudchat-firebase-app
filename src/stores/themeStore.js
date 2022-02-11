import { writable } from 'svelte/store';

export const theme = writable(checkTheme());

// Function to check default theme for app
function checkTheme() {
    // Set default theme if theme does not exist
    if (!localStorage.theme) localStorage.theme = 'light';
    
    // Return true or dark mode and false for light mode
    if (localStorage.theme === 'light') return 'light';
    return 'dark';
}

// Function to update theme in localStorage
export function updateTheme(theme) {
    localStorage.theme = theme;
}