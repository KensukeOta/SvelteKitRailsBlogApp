import type { Writable } from "svelte/store";
import type { User } from "$lib/types/User";
import { writable } from "svelte/store";
import { persist, localStorage } from "@macfja/svelte-persistent-store";

export const authUser: Writable<User> = persist(writable(), localStorage(), "authUser");