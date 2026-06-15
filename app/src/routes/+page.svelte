<script>
  import { goto } from '$app/navigation'
  import Splash from '$lib/feat/Splash.svelte'

  const SPLASH_DELAY_MILLIS = 3000
  $effect(() => setTimeout(() => goto('/menu'), SPLASH_DELAY_MILLIS))
</script>

<Splash />
