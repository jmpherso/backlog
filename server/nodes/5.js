import * as universal from '../entries/pages/blog/_slug_/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/5.a1f19c8a.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.8c1d7678.js","_app/immutable/chunks/index.6ba68cd4.js"];
export const stylesheets = ["_app/immutable/assets/5.095b66c7.css"];
export const fonts = [];
