export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/blog/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	function removeTags(str) {
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();

    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    return str.replace( /(<([^>]+)>)/ig, '');
	}

	const allPosts = await Promise.all(
			iterablePostFiles.map(async ([pathString, resolver]) => {
					const postModule = await resolver();
					const postPath = pathString.slice(11, -3);

					// This assumes that the .default of the module is a Svelte component
					// that has a content property (which is the case for markdown files parsed by mdsvex or similar tools)
					let textContent = postModule.default.render().html;
					textContent = removeTags(textContent);

					return {
							meta: postModule.metadata,
							path: postPath,
							textContent: textContent,  // This is the full content, consider truncating for a preview if needed
					};
			})
	);

	return allPosts;
};