import { c as create_ssr_component, f as each, e as escape, v as validate_component, m as missing_component } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: `ul.svelte-1s0q54p{display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(33.33% - 20px), 1fr));gap:20px;padding:0;list-style-type:none}a.card-link.svelte-1s0q54p{text-decoration:none;color:var(--text-color);display:block;transition:transform 0.3s ease}a.card-link.svelte-1s0q54p:hover{transform:scale(1.05)}.card.svelte-1s0q54p{background-color:var(--bg-color);border-radius:8px;padding:20px;box-shadow:0 3px 5px rgba(0, 0, 0, 0.3);border:1px solid var(--text-color);position:relative;overflow:hidden;height:20rem;width:20rem;overflow:hidden;&::before {
        content: "";
        position: absolute;
        top: 20%;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(transparent, var(--bg-color) 80%);
        z-index: 1;
    }}.card-title.svelte-1s0q54p{font-size:24px;margin-bottom:10px;font-family:'Young Serif', serif}.card-date.svelte-1s0q54p{font-size:12px;margin-bottom:10px}`,
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<ul class="svelte-1s0q54p">${each(data.posts, (post) => {
    return `<li><a href="${"backlog/" + escape(post.path, true)}" class="card-link svelte-1s0q54p"><div class="card svelte-1s0q54p"><div class="card-title svelte-1s0q54p">${escape(post.meta.title)}</div> <div class="card-date svelte-1s0q54p">${escape(post.meta.date)}</div> <div class="card-content">${validate_component(post.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div> </div></a> </li>`;
  })}</ul>`;
});
export {
  Page as default
};
