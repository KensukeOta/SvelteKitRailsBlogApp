<script lang="ts">
  import type { Post } from "$lib/types/Post";

  export let post: Post;
</script>

<svelte:head>
  <title>{post.title} - SvelteKitBlogApp</title>
</svelte:head>

<h1 class="font-bold">{post.title}</h1>
<p class="whitespace-pre-line">{post.body}</p>