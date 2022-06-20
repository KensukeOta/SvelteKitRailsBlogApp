import { axios } from "$lib/axios";

export async function get({ params }: any) {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/posts/${params.id}`)
  const post = res.data;

  if (post) {
    return {
      body: { post }
    };
  }

  return {
    status: 404
  };
}