<script>
  import Header from '$lib/components/Header.svelte';
  import ThreeBackground from '$lib/components/ThreeBackground.svelte';
  import '$lib/styles/mainstyle.scss';
  import { fade } from 'svelte/transition';
  export let data;
</script>

<ThreeBackground />
<Header />

{#key data.currentRoute}
  <main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
    <slot />
  </main>
{/key}