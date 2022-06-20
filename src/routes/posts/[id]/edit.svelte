<script lang="ts">
  import type { Post } from "$lib/types/Post";
  import type { InferType } from "yup";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { createForm } from "felte";
  import { validator } from "@felte/validator-yup";
  import { object, string } from "yup";
  import { axios } from "$lib/axios";
  import { authUser } from "$lib/stores/authUser";
  import TitleArea from "$lib/components/molecules/TitleArea.svelte";
  import PostArea from "$lib/components/molecules/PostArea.svelte";
  import UserIdInput from "$lib/components/atoms/UserIdInput.svelte";
  import SubmitButton from "$lib/components/atoms/SubmitButton.svelte";
  
  export let post: Post;

  onMount(() => {
    if ($authUser.id !== post.user_id) {
      goto("/");
    }
  });

  const schema = object({
    title: string().required("必須の項目です").max(50, "50文字以内で入力してください"),
    body: string().required("必須の項目です").max(1000, "1000文字以内で入力してください。"),
    user_id: string().required("必須の項目です"),
  });

  const { form, errors, isSubmitting } = createForm<InferType<typeof schema>>({
    initialValues: {
      title: `${post.title}`,
      body: `${post.body}`,
      user_id: `${post.user_id}`
    },
    extend: validator({ schema }),
    
    onSubmit: async (values) => {
      try {
        await axios.patch(`${import.meta.env.VITE_API_URL}/api/posts/${post.id}/update`, { title: values.title, body: values.body, user_id: values.user_id });
        goto("/");
      } catch (error) {
        console.log(error);
      }
    },
  });
</script>

<svelte:head>
  <title>記事更新フォーム - SvelteKitBlogApp</title>
</svelte:head>

<h1 class="font-bold">記事更新フォーム</h1>

<form use:form>
  <dl>
    <TitleArea />
    {#if $errors.title}
      <p class="text-red-500">{$errors.title}</p>
    {/if}
    <PostArea />
    {#if $errors.body}
      <p class="text-red-500">{$errors.body}</p>
    {/if}
    <UserIdInput />
    <SubmitButton disabled={$isSubmitting}>更新する</SubmitButton>
  </dl>
</form>