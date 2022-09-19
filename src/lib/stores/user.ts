import type { Session } from "lucia-sveltekit/types";
import { writable } from "svelte/store";

export const session = writable<Session>(null);
