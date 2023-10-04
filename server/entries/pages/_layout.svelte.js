import { c as create_ssr_component, a as add_attribute, b as subscribe, v as validate_component } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index2.js";
const defaultSize$4 = "1rem";
const HomeAltIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _size;
  let _fillColor;
  let { size = "base" } = $$props;
  let { stroke = "currentColor" } = $$props;
  let { strokeWidth = 1.5 } = $$props;
  let { color = "" } = $$props;
  let { altText = "Home-alt icon" } = $$props;
  const sizeMap = {
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem"
  };
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.stroke === void 0 && $$bindings.stroke && stroke !== void 0)
    $$bindings.stroke(stroke);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.altText === void 0 && $$bindings.altText && altText !== void 0)
    $$bindings.altText(altText);
  _size = typeof size === "number" ? size : sizeMap[size] || defaultSize$4;
  _fillColor = color != "" ? color : "none";
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("width", _size, 0)}${add_attribute("height", _size, 0)}${add_attribute("stroke", stroke, 0)}${add_attribute("stroke-width", strokeWidth, 0)} viewBox="0 0 24 24"${add_attribute("fill", _fillColor, 0)} aria-hidden="true"${add_attribute("aria-labelledby", altText, 0)}${add_attribute("class", $$props.class, 0)}${add_attribute("style", $$props.style, 0)}><path d="M10 18V15C10 13.8954 10.8954 13 12 13V13C13.1046 13 14 13.8954 14 15V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 8L11.7317 3.13416C11.9006 3.04971 12.0994 3.0497 12.2683 3.13416L22 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 11V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
});
const HomeAltIcon$1 = HomeAltIcon;
const defaultSize$3 = "1rem";
const PageIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _size;
  let _fillColor;
  let { size = "base" } = $$props;
  let { stroke = "currentColor" } = $$props;
  let { strokeWidth = 1.5 } = $$props;
  let { color = "" } = $$props;
  let { altText = "Page icon" } = $$props;
  const sizeMap = {
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem"
  };
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.stroke === void 0 && $$bindings.stroke && stroke !== void 0)
    $$bindings.stroke(stroke);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.altText === void 0 && $$bindings.altText && altText !== void 0)
    $$bindings.altText(altText);
  _size = typeof size === "number" ? size : sizeMap[size] || defaultSize$3;
  _fillColor = color != "" ? color : "none";
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("width", _size, 0)}${add_attribute("height", _size, 0)}${add_attribute("stroke", stroke, 0)}${add_attribute("stroke-width", strokeWidth, 0)} viewBox="0 0 24 24"${add_attribute("fill", _fillColor, 0)} aria-hidden="true"${add_attribute("aria-labelledby", altText, 0)}${add_attribute("class", $$props.class, 0)}${add_attribute("style", $$props.style, 0)}><path d="M4 21.4V2.6C4 2.26863 4.26863 2 4.6 2H16.2515C16.4106 2 16.5632 2.06321 16.6757 2.17574L19.8243 5.32426C19.9368 5.43679 20 5.5894 20 5.74853V21.4C20 21.7314 19.7314 22 19.4 22H4.6C4.26863 22 4 21.7314 4 21.4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 10L16 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 18L16 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 14L12 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 2V5.4C16 5.73137 16.2686 6 16.6 6H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
});
const PageIcon$1 = PageIcon;
const defaultSize$2 = "1rem";
const GitHubIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _size;
  let _fillColor;
  let { size = "base" } = $$props;
  let { stroke = "currentColor" } = $$props;
  let { strokeWidth = 1.5 } = $$props;
  let { color = "" } = $$props;
  let { altText = "Github icon" } = $$props;
  const sizeMap = {
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem"
  };
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.stroke === void 0 && $$bindings.stroke && stroke !== void 0)
    $$bindings.stroke(stroke);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.altText === void 0 && $$bindings.altText && altText !== void 0)
    $$bindings.altText(altText);
  _size = typeof size === "number" ? size : sizeMap[size] || defaultSize$2;
  _fillColor = color != "" ? color : "none";
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("width", _size, 0)}${add_attribute("height", _size, 0)}${add_attribute("stroke", stroke, 0)}${add_attribute("stroke-width", strokeWidth, 0)} viewBox="0 0 24 24"${add_attribute("fill", _fillColor, 0)} aria-hidden="true"${add_attribute("aria-labelledby", altText, 0)}${add_attribute("class", $$props.class, 0)}${add_attribute("style", $$props.style, 0)}><path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
});
const GitHubIcon$1 = GitHubIcon;
const defaultSize$1 = "1rem";
const LinkedInIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _size;
  let _fillColor;
  let { size = "base" } = $$props;
  let { stroke = "currentColor" } = $$props;
  let { strokeWidth = 1.5 } = $$props;
  let { color = "" } = $$props;
  let { altText = "Linkedin icon" } = $$props;
  const sizeMap = {
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem"
  };
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.stroke === void 0 && $$bindings.stroke && stroke !== void 0)
    $$bindings.stroke(stroke);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.altText === void 0 && $$bindings.altText && altText !== void 0)
    $$bindings.altText(altText);
  _size = typeof size === "number" ? size : sizeMap[size] || defaultSize$1;
  _fillColor = color != "" ? color : "none";
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("width", _size, 0)}${add_attribute("height", _size, 0)}${add_attribute("stroke", stroke, 0)}${add_attribute("stroke-width", strokeWidth, 0)} viewBox="0 0 24 24"${add_attribute("fill", _fillColor, 0)} aria-hidden="true"${add_attribute("aria-labelledby", altText, 0)}${add_attribute("class", $$props.class, 0)}${add_attribute("style", $$props.style, 0)}><path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 17V13.5V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 7.01L7.01 6.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
});
const LinkedInIcon$1 = LinkedInIcon;
const defaultSize = "1rem";
const SunLightIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _size;
  let _fillColor;
  let { size = "base" } = $$props;
  let { stroke = "currentColor" } = $$props;
  let { strokeWidth = 1.5 } = $$props;
  let { color = "" } = $$props;
  let { altText = "Sun-light icon" } = $$props;
  const sizeMap = {
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem"
  };
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.stroke === void 0 && $$bindings.stroke && stroke !== void 0)
    $$bindings.stroke(stroke);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.altText === void 0 && $$bindings.altText && altText !== void 0)
    $$bindings.altText(altText);
  _size = typeof size === "number" ? size : sizeMap[size] || defaultSize;
  _fillColor = color != "" ? color : "none";
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("width", _size, 0)}${add_attribute("height", _size, 0)}${add_attribute("stroke", stroke, 0)}${add_attribute("stroke-width", strokeWidth, 0)} viewBox="0 0 24 24"${add_attribute("fill", _fillColor, 0)} aria-hidden="true"${add_attribute("aria-labelledby", altText, 0)}${add_attribute("class", $$props.class, 0)}${add_attribute("style", $$props.style, 0)}><path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22 12L23 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 2V1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 23V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 20L19 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 4L19 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 20L5 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 4L5 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 12L2 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
});
const SunLightIcon$1 = SunLightIcon;
const theme = writable("light");
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-1244hc{border-bottom:var(--text-color) solid 1px;position:relative;background:var(--bg-color);display:flex;padding:0.5rem;justify-content:center;font-family:'Young Serif', serif;font-size:3rem}.nav.svelte-1244hc{display:flex;flex-direction:column;align-items:center;width:100%;max-width:800px}a.name-link.svelte-1244hc,a.icon-link.svelte-1244hc,.icon-link.svelte-1244hc{margin:0 10px;text-decoration:none;color:var(--text-color);display:inline-block;transition:transform 0.3s ease, text-shadow 0.3s ease}a.name-link.svelte-1244hc:hover,a.icon-link.svelte-1244hc:hover,.icon-link.svelte-1244hc:hover{transform:scale(1.2);cursor:pointer}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => value);
  $$result.css.add(css$1);
  $$unsubscribe_theme();
  return `<header class="svelte-1244hc"><div class="nav svelte-1244hc"><a class="name-link svelte-1244hc" href="https://jmpherso.github.io" data-svelte-h="svelte-1bu2e49">Jerry MacPherson</a> <div class="button-container"><a href="/backlog/blog/" class="icon-link svelte-1244hc">${validate_component(HomeAltIcon$1, "HomeAltIcon").$$render($$result, { size: "2xl" }, {}, {})}</a> <a href="https://github.com/jmpherso/jmpherso.github.io/blob/main/resume.pdf" target="_blank" class="icon-link svelte-1244hc">${validate_component(PageIcon$1, "PageIcon").$$render($$result, { size: "2xl" }, {}, {})}</a> <a href="https://github.com/jmpherso" target="_blank" class="icon-link svelte-1244hc">${validate_component(GitHubIcon$1, "GitHubIcon").$$render($$result, { size: "2xl" }, {}, {})}</a> <a href="https://www.linkedin.com/in/jerry-macpherson/" target="_blank" class="icon-link svelte-1244hc">${validate_component(LinkedInIcon$1, "LinkedInIcon").$$render($$result, { size: "2xl" }, {}, {})}</a> <span class="icon-link svelte-1244hc">${validate_component(SunLightIcon$1, "SunLightIcon").$$render($$result, { size: "2xl" }, {}, {})}</span></div></div> </header>`;
});
const ThreeBackground = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => value);
  let container;
  $$unsubscribe_theme();
  return `<div style="position: absolute; top: 0; left: 0;"${add_attribute("this", container, 0)}></div>`;
});
const mainstyle = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".sticky-header.svelte-3ped10{position:sticky;top:0;z-index:2}.main-body.svelte-3ped10{z-index:3}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="sticky-header svelte-3ped10">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}</div> ${validate_component(ThreeBackground, "ThreeBackground").$$render(
    $$result,
    {
      style: "position: absolute; top: 0; left: 0; z-index: 7"
    },
    {},
    {}
  )} <div class="main-body svelte-3ped10"><main>${slots.default ? slots.default({}) : ``}</main> </div>`;
});
export {
  Layout as default
};
