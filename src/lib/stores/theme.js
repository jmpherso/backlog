import { writable } from 'svelte/store';

const theme = writable('light');  // default to light mode

export default theme;