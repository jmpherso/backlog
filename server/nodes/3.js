

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.26c124f3.js","_app/immutable/chunks/scheduler.8c1d7678.js","_app/immutable/chunks/index.6ba68cd4.js"];
export const stylesheets = [];
export const fonts = [];
