const load = async ({ fetch }) => {
  const response = await fetch(`/api/posts`);
  const posts = await response.json();
  for (const post of posts) {
    const postReload = await import(`..${post.path}.md`);
    post.content = postReload.default;
  }
  return {
    posts
  };
};
export {
  load
};
