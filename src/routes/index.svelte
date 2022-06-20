<script lang="ts">
  import { authUser } from "$lib/stores/authUser"
  import PostLink from "$lib/components/atoms/PostLink.svelte";
</script>

<svelte:head>
  <title>SvelteKitBlogApp</title>
</svelte:head>

<h1 class="font-bold">トップページ</h1>

<p>Welcome! {$authUser ? $authUser.name : "stranger"}</p>

<nav class="text-center">
  <PostLink />
</nav>
