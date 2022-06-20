<script lang="ts">
  import type { InferType } from "yup";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { createForm } from "felte";
  import { validator } from "@felte/validator-yup";
  import { object, string } from "yup";
  import { axios } from "$lib/axios";
  import { authUser } from "$lib/stores/authUser";
  import EmailArea from "$lib/components/molecules/EmailArea.svelte";
  import PasswordArea from "$lib/components/molecules/PasswordArea.svelte";
  import SubmitButton from "$lib/components/atoms/SubmitButton.svelte";

  onMount(() => {
    if ($authUser) {
      goto("/");
    }
  });

  let error: string;

  const schema = object({
    email: string().email("メールアドレスの形式ではありません").required("必須の項目です"),
    password: string().required("必須の項目です"),
  });

  const { form, errors, isSubmitting } = createForm<InferType<typeof schema>>({
    initialValues: {
      email: "",
      password: "",
    },
    extend: validator({ schema }),
    
    onSubmit: async (values) => {
      try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/users/login`, { email: values.email, password: values.password });
        if (res.data.id) {
          goto("/");
          authUser.update(n => n = res.data);
        } else {
          error = res.data.message;
        }
      } catch (error) {
        console.log(error);
      }
    },
  });
</script>

<svelte:head>
  <title>ログインフォーム - SvelteKitBlogApp</title>
</svelte:head>

<h1 class="font-bold">ログインフォーム</h1>

<form use:form>
  {#if error}
    <p class="text-red-500">{error}</p>
  {/if}
  <dl>
    <EmailArea />
    {#if $errors.email}
    <p class="text-red-500">{$errors.email}</p>
    {/if}
    <PasswordArea />
    {#if $errors.password}
    <p class="text-red-500">{$errors.password}</p>
    {/if}
    <SubmitButton disabled={$isSubmitting}>ログイン</SubmitButton>
  </dl>
</form>