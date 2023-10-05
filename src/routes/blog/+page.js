// src/routes/blog/+page.js
import { base } from '$app/paths'
export const load = async ({ fetch }) => {
	const response = await fetch(`/api/posts`);
	const posts = await response.json();

	return {
		posts
	};
};