<script>
  import Header from '$lib/components/Header.svelte';
  import ThreeBackground from '$lib/components/ThreeBackground.svelte';
  import '$lib/styles/mainstyle.scss';
  import { fade } from 'svelte/transition';
  export let data;
</script>

<div class="sticky-header">
  <Header />
</div>

<ThreeBackground style="position: absolute; top: 0; left: 0; z-index: 7" />


<div class="main-body">
  {#key data.currentRoute}
    <main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
      <slot />
    </main>
  {/key}
</div>

<style>

  .sticky-header {
    position: sticky;
    top: 0;
    z-index: 2;
  }

  .main-body {
    z-index: 3;
  }
</style>