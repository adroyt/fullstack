<script lang="ts">
  import "../app.css";
  import { handleSilentRefresh } from "lucia-sveltekit/client";
  import { page } from "$app/stores";
  import { session } from "$lib/stores/user";

  handleSilentRefresh();
  $: session.set($page.data.session);
</script>

<!-- Updates UI based on auth state -->
{#key $session}
  <slot />
{/key}
