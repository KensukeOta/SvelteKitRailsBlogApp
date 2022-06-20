<script lang="ts">
  import type { Post } from "$lib/types/Post";
  import { authUser } from "$lib/stores/authUser"
  import PostLink from "$lib/components/atoms/PostLink.svelte";
  import PostItem from "$lib/components/organisms/PostItem.svelte";

  export let posts: Post[];
</script>

<svelte:head>
  <title>SvelteKitBlogApp</title>
</svelte:head>

<h1 class="font-bold">トップページ</h1>

<p>Welcome! {$authUser ? $authUser.name : "stranger"}</p>

<nav class="text-center">
  <PostLink />
</nav>

<ul>
{#each posts as post (post.id)}
  <PostItem post={post} />
{/each}
</ul>