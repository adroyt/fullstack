import type { Handle } from "@sveltejs/kit";
import { appRouter } from "$trpc";
import { auth } from "$lib/lucia";
import { createContext } from "$trpc/app-router";
import { createTRPCHandle } from "trpc-sveltekit";
import { sequence } from "@sveltejs/kit/hooks";

const trpcHandle: Handle = async ({ event, resolve }) => {
  // 👇 add this handle
  const response = await createTRPCHandle({
    url: "/trpc",
    router: appRouter,
    createContext,
    event,
    resolve
  });

  return response;
};

export const handle = sequence(trpcHandle, auth.handleAuth);
