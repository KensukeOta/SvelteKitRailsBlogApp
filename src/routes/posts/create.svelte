<script lang="ts">
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

  const schema = object({
    title: string().required("必須の項目です").max(50, "50文字以内で入力してください"),
    body: string().required("必須の項目です").max(1000, "1000文字以内で入力してください。"),
    user_id: string().required("必須の項目です"),
  });

  const { form, errors, isSubmitting } = createForm<InferType<typeof schema>>({
    initialValues: {
      title: "",
      body: "",
      user_id: `${$authUser.id}`
    },
    extend: validator({ schema }),
    
    onSubmit: async (values) => {
      try {
        console.log(values);
      } catch (error) {
        console.log(error);
      }
    },
  });
</script>

<svelte:head>
  <title>記事投稿フォーム - SvelteKitBlogApp</title>
</svelte:head>

<h1 class="font-bold">記事投稿フォーム</h1>

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
    <SubmitButton disabled={$isSubmitting}>投稿する</SubmitButton>
  </dl>
</form>