<!-- src/routes/[slug]/+page.svelte -->
<script>
	export let data;
</script>

<style>
	article {
    color : var(--text-color);
		background-color: var(--bg-color);
		border-radius: 8px;
		padding: 20px;
    border: 1px solid var(--text-color); /* Black border */
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		position: relative;
		overflow: hidden;
		max-width: 80%; /* or any desired width */
		margin: 40px auto; /* center the article */
		transform: scale(1.2); /* match the expanded card scale */
	}

	h1 {
		font-family: 'Young Serif', serif;
		font-size: 32px;
		margin-bottom: 20px;
	}

	p {
		margin-bottom: 20px;
	}

  .close-btn {
	position: absolute;
	top: 10px;
	right: 10px;
	font-size: 24px;
	font-weight: bold;
	text-decoration: none;
	color: var(--text-color);
	background-color: var(--bg-color); /* semi-transparent white background */
	padding: 5px 10px;
	transition: background-color 0.3s ease;
  transition: transform 0.3s ease;

	/* Ensure the button is always on top */
	z-index: 10;
}

.close-btn:hover {
	background-color: var(--bg-color); /* less transparent on hover */
  transform: scale(1.3);
}
</style>

<article>
	<a href="/blog" class="close-btn">X</a>
	<h1>{data.title}</h1>
	<p>Published: {data.date}</p>
	<svelte:component this={data.content} />
</article>