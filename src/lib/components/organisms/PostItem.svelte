<script lang="ts">
  import type { Post } from "$lib/types/Post";
  import { authUser } from "$lib/stores/authUser";
  import PostEditLink from "../atoms/PostEditLink.svelte";
  import PostDeleteButton from "../atoms/PostDeleteButton.svelte";

  export let post: Post;
</script>

<li class="border p-2">
  <a href={`/posts/${post.id}`}>
    <h1 class="font-bold">{post.title}</h1>
  </a>
  <nav class="flex justify-between">
    <p>by {post.user.name}</p>
    {#if $authUser.id === post.user_id}
    <PostEditLink id={post.id} />
    <PostDeleteButton id={post.id} />
    {/if}
  </nav>
</li>