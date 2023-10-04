import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.e5ca10bd.js","_app/immutable/chunks/scheduler.8c1d7678.js","_app/immutable/chunks/index.6ba68cd4.js","_app/immutable/chunks/index.58446018.js"];
export const stylesheets = ["_app/immutable/assets/0.a23b38c5.css"];
export const fonts = [];
