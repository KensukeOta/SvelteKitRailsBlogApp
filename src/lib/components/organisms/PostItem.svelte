<script lang="ts">
  import type { Post } from "$lib/types/Post";

  export let post: Post;
</script>

<li class="border p-2">
  <h1 class="font-bold">{post.title}</h1>
  <p>by {post.user.name}</p>
</li>