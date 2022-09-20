<script lang="ts">
  import "../app.css";
  import { getSession, handleSilentRefresh } from "lucia-sveltekit/client";
  import { session } from "$lib/stores/user";

  handleSilentRefresh();
  const luciaSession = getSession();
  session.set($luciaSession);
</script>

<slot />
