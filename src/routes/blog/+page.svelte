<script>
	export let data;
</script>

<style>
	ul {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(calc(33.33% - 20px), 1fr)); /* 3 cards per row, with a little gap */
		gap: 20px; /* Gap between cards */
		padding: 0;
		list-style-type: none;
	}

	a.card-link {
		text-decoration: none; /* Remove default anchor tag styling */
		color: var(--text-color); /* Use default text color */
		display: block; /* Make the anchor tag block-level */
		transition: transform 0.3s ease;
	}

	a.card-link:hover {
		transform: scale(1.05);
	}

	.card {
		background-color: var(--bg-color);
		border-radius: 8px;
		padding: 20px;
		box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3); /* Darker shadow */
    border: 1px solid var(--text-color); /* Black border */
		position: relative;
		overflow: hidden;
    height: 20rem; /* or whatever fixed height you desire */
    width: 20rem; /* or whatever fixed width you desire */
    overflow: hidden; /* hides content that exceeds the height */
    &::before {
        content: "";
        position: absolute;
        top: 20%;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(transparent, var(--bg-color) 80%);
        z-index: 1;
    }
	}

	.card-title {
		font-size: 24px;
		margin-bottom: 10px;
		font-family: 'Young Serif', serif; /* Use Young Serif font */
	}

	.card-date {
		font-size: 12px;
		margin-bottom: 10px;
	}

</style>

<ul>
	{#each data.posts as post}
		<li>
			<a href='{post.path}' class="card-link">
				<div class="card">
					<div class="card-title">
						{post.meta.title}
					</div>
					<div class="card-date">
						{post.meta.date}
					</div>
					<div class="card-content">
						{post.textContent}
					</div>
				</div>
			</a>
		</li>
	{/each}
</ul>