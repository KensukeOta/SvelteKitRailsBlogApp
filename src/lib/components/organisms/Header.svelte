<script lang="ts">
  import { authUser } from "$lib/stores/authUser";
  import LogoutButton from "../atoms/LogoutButton.svelte";
</script>

<header class="flex justify-between border-b">
  <a href="/">SvelteKitBlogApp</a>

  <nav>
    {#if !$authUser}
      <a href="/signup">新規登録</a>
      <a href="/login">ログイン</a>
    {:else}
      <LogoutButton />
    {/if}
  </nav>
</header>