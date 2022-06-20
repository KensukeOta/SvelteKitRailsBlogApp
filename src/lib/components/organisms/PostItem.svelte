<script lang="ts">
  import type { Post } from "$lib/types/Post";
import PostEditLink from "../atoms/PostEditLink.svelte";

  export let post: Post;
</script>

<li class="border p-2">
  <a href={`/posts/${post.id}`}>
    <h1 class="font-bold">{post.title}</h1>
  </a>
  <nav class="flex justify-between">
    <p>by {post.user.name}</p>
    <PostEditLink id={post.id} />
  </nav>
</li>