<script>
  // Import email, github, linkedin icon from iconoir
  import { onMount } from 'svelte';
  import HomeAltIcon from '@indaco/svelte-iconoir/components/HomeAltIcon.svelte';
  import PageIcon from '@indaco/svelte-iconoir/components/PageIcon.svelte';
  import GitHubIcon from '@indaco/svelte-iconoir/components/GitHubIcon.svelte';
  import LinkedInIcon from '@indaco/svelte-iconoir/components/LinkedInIcon.svelte';
  import SunLightIcon from '@indaco/svelte-iconoir/components/SunLightIcon.svelte';
  import theme from '$lib/stores/theme.js';

  function toggleTheme() {
    $theme = $theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute("data-theme", $theme);
    localStorage.setItem("theme", $theme);
}

onMount(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    $theme = savedTheme;
    document.documentElement.setAttribute("data-theme", $theme);
});
</script>

<header>
  <div class="nav">
	  <a class="name-link" href="https://jmpherso.github.io">Jerry MacPherson</a>
    <div class="button-container">
      <a href="http://localhost:5173/blog" class="icon-link"><HomeAltIcon size="2xl" /></a>
      <a href="https://github.com/jmpherso/jmpherso.github.io/blob/main/resume.pdf" target="_blank" class="icon-link"><PageIcon size="2xl" /></a>
      <a href="https://github.com/jmpherso" target="_blank" class="icon-link"><GitHubIcon size="2xl" /></a>
      <a href="https://www.linkedin.com/in/jerry-macpherson/" target="_blank" class="icon-link"><LinkedInIcon size="2xl" /></a>
      <span class="icon-link"><SunLightIcon size="2xl" on:click={toggleTheme}/></span>
    </div>
  </div>
</header>

<style>
  header {
    border-bottom: var(--text-color) solid 1px;
    position: relative;
    background: var(--bg-color);
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    font-family: 'Young Serif', serif; /* Use the custom font */
    font-size: 3rem;
  }

  .nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 800px;
  }

  a.name-link, a.icon-link, .icon-link {
    margin: 0 10px; /* Add some spacing between the icons */
    text-decoration: none;
    color: var(--text-color);
    display: inline-block;
    transition: transform 0.3s ease, text-shadow 0.3s ease; /* Smooth transition for hover effects */
  }

  a.name-link:hover, a.icon-link:hover, .icon-link:hover {
    transform: scale(1.2); /* Grow slightly */
    cursor: pointer;
  }

</style>