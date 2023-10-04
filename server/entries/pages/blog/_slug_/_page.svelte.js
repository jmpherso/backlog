import { c as create_ssr_component, e as escape, v as validate_component, m as missing_component } from "../../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "article.svelte-stqvls{color:var(--text-color);background-color:var(--bg-color);border-radius:8px;padding:20px;border:1px solid var(--text-color);box-shadow:0 4px 6px rgba(0, 0, 0, 0.1);position:relative;overflow:hidden;max-width:80%;margin:40px auto;transform:scale(1.2)}h1.svelte-stqvls{font-family:'Young Serif', serif;font-size:32px;margin-bottom:20px}p.svelte-stqvls{margin-bottom:20px}.close-btn.svelte-stqvls{position:absolute;top:10px;right:10px;font-size:24px;font-weight:bold;text-decoration:none;color:var(--text-color);background-color:var(--bg-color);padding:5px 10px;transition:background-color 0.3s ease;transition:transform 0.3s ease;z-index:10}.close-btn.svelte-stqvls:hover{background-color:var(--bg-color);transform:scale(1.3)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `   <article class="svelte-stqvls"><a href="/blog" class="close-btn svelte-stqvls" data-svelte-h="svelte-e1crw7">X</a> <h1 class="svelte-stqvls">${escape(data.title)}</h1> <p class="svelte-stqvls">Published: ${escape(data.date)}</p> ${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</article>`;
});
export {
  Page as default
};
