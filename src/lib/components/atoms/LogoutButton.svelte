<script lang="ts">
  import { goto } from "$app/navigation";
  import { axios } from "$lib/axios";
  import { authUser } from "$lib/stores/authUser";

  async function logout() {
    await axios.post(`${import.meta.env.VITE_API_URL}/api/users/logout`);
    goto("/login")
    authUser.update(n => n = "");
  }
</script>

<button on:click={logout}>ログアウト</button>