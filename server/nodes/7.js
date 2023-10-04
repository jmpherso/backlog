

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/uses/_page.md.js')).default;
export const imports = ["_app/immutable/nodes/7.139f6512.js","_app/immutable/chunks/scheduler.8c1d7678.js","_app/immutable/chunks/index.6ba68cd4.js"];
export const stylesheets = [];
export const fonts = [];
