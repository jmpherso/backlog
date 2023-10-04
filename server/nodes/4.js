import * as universal from '../entries/pages/blog/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/+page.js";
export const imports = ["_app/immutable/nodes/4.a4a03cea.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.8c1d7678.js","_app/immutable/chunks/index.6ba68cd4.js"];
export const stylesheets = ["_app/immutable/assets/4.8ab11280.css"];
export const fonts = [];
