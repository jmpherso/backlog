

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.4dad4530.js","_app/immutable/chunks/scheduler.8c1d7678.js","_app/immutable/chunks/index.6ba68cd4.js","_app/immutable/chunks/singletons.43fe2332.js","_app/immutable/chunks/index.58446018.js"];
export const stylesheets = [];
export const fonts = [];
