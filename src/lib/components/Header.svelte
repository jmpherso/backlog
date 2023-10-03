<script>
  // Import email, github, linkedin icon from iconoir
  import HomeAltIcon from '@indaco/svelte-iconoir/components/HomeAltIcon.svelte';
  import PageIcon from '@indaco/svelte-iconoir/components/PageIcon.svelte';
  import GitHubIcon from '@indaco/svelte-iconoir/components/GitHubIcon.svelte';
  import LinkedInIcon from '@indaco/svelte-iconoir/components/LinkedInIcon.svelte';
  import SunLightIcon from '@indaco/svelte-iconoir/components/SunLightIcon.svelte';
</script>

<header>
  <div class="nav">
	  <a class="name-link" href="https://jmpherso.github.io">Jerry MacPherson</a>
    <div class="button-container">
      <a href="http://localhost:5173/blog" class="icon-link"><HomeAltIcon size="2xl" /></a>
      <a href="https://github.com/jmpherso/jmpherso.github.io/blob/main/resume.pdf" target="_blank" class="icon-link"><PageIcon size="2xl" /></a>
      <a href="https://github.com/jmpherso" target="_blank" class="icon-link"><GitHubIcon size="2xl" /></a>
      <a href="https://www.linkedin.com/in/jerry-macpherson/" target="_blank" class="icon-link"><LinkedInIcon size="2xl" /></a>
      <a href="YOUR_SUNLIGHT_LINK" class="icon-link"><SunLightIcon size="2xl" /></a>
    </div>
  </div>
</header>

<style>
  header {
    border-bottom: 1px solid rgb(121, 121, 121);
    position: relative;
    background: rgb(253, 253, 253);
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

  a.name-link, a.icon-link {
    text-decoration: none;
    color: inherit;
    display: inline-block;
    transition: transform 0.3s ease, text-shadow 0.3s ease; /* Smooth transition for hover effects */
  }

  a.name-link:hover, a.icon-link:hover {
    transform: scale(1.2); /* Grow slightly */
  }

  .icon-link {
    margin: 0 10px; /* Add some spacing between the icons */
  }
</style>