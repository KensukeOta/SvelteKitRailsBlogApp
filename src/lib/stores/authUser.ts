import type { Writable } from "svelte/store";
import { writable } from "svelte/store";
import { persist, localStorage } from "@macfja/svelte-persistent-store";

export const authUser: Writable<any> = persist(writable(""), localStorage(), "authUser");