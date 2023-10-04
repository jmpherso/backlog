import { j as json } from "../../../../chunks/index.js";
const fetchMarkdownPosts = async () => {
  const allPostFiles = /* @__PURE__ */ Object.assign({ "/src/routes/blog/1.md": () => import("../../../../chunks/1.js"), "/src/routes/blog/10.md": () => import("../../../../chunks/10.js"), "/src/routes/blog/2.md": () => import("../../../../chunks/2.js"), "/src/routes/blog/3.md": () => import("../../../../chunks/3.js"), "/src/routes/blog/4.md": () => import("../../../../chunks/4.js"), "/src/routes/blog/5.md": () => import("../../../../chunks/5.js"), "/src/routes/blog/6.md": () => import("../../../../chunks/6.js"), "/src/routes/blog/7.md": () => import("../../../../chunks/7.js"), "/src/routes/blog/8.md": () => import("../../../../chunks/8.js"), "/src/routes/blog/9.md": () => import("../../../../chunks/9.js") });
  const iterablePostFiles = Object.entries(allPostFiles);
  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const postModule = await resolver();
      const postPath = path.slice(11, -3);
      return {
        meta: postModule.metadata,
        path: postPath
      };
    })
  );
  return allPosts;
};
const GET = async () => {
  const allPosts = await fetchMarkdownPosts();
  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date);
  });
  return json(sortedPosts);
};
export {
  GET
};
