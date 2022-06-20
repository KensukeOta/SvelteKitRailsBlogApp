import { axios } from "$lib/axios";

export async function get() {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/posts`);
  const posts = res.data

  if (posts) {
    return {
      body: { posts }
    };
  }

  return {
    status: 404
  };
}