<script lang="ts">
  import { goto } from "$app/navigation";
  import type { InferType } from "yup";
  import { createForm } from "felte";
  import { validator } from "@felte/validator-yup";
  import { object, string } from "yup";
  import { axios } from "$lib/axios";
  import EmailArea from "$lib/components/molecules/EmailArea.svelte";
  import PasswordArea from "$lib/components/molecules/PasswordArea.svelte";
  import SubmitButton from "$lib/components/atoms/SubmitButton.svelte";

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
        console.log(values);
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