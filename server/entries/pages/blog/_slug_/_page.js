const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
async function load({ params }) {
  const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../1.md": () => import("../../../../chunks/1.js"), "../10.md": () => import("../../../../chunks/10.js"), "../2.md": () => import("../../../../chunks/2.js"), "../3.md": () => import("../../../../chunks/3.js"), "../4.md": () => import("../../../../chunks/4.js"), "../5.md": () => import("../../../../chunks/5.js"), "../6.md": () => import("../../../../chunks/6.js"), "../7.md": () => import("../../../../chunks/7.js"), "../8.md": () => import("../../../../chunks/8.js"), "../9.md": () => import("../../../../chunks/9.js") }), `../${params.slug}.md`);
  const { title, date } = post.metadata;
  const content = post.default;
  return {
    content,
    title,
    date
  };
}
export {
  load
};
