<script lang="ts">
  import { goto } from "$app/navigation";
  import { axios } from "$lib/axios";

  export let id: number;
  
  const destroy = async () => {
    if (!confirm("この記事を削除しますか？")) {
      return;
    }
    await axios.delete(`${import.meta.env.VITE_API_URL}/api/posts/${id}/destroy`);
    goto("/");
  };
</script>

<button on:click={destroy} class="text-red-500">削除</button>