import type { RequestHandler } from "@sveltejs/kit";
import { axios } from "$lib/axios";

export const get: RequestHandler = async ({ params }) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/posts/${params.id}`);
  const post = res.data;

  if (post) {
    return {
      body: { post }
    };
  }

  return {
    status: 404
  };
};