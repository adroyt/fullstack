import * as trpc from "@trpc/server";
import type { inferAsyncReturnType } from "@trpc/server";
import type { RequestEvent } from "lucia-sveltekit/kit";

export const createContext = async (opts: RequestEvent) => {
  // console.log(opts.setHeaders);
  return { ...opts };
};

export const createRouter = () => {
  return trpc.router<inferAsyncReturnType<typeof createContext>>();
};

export const appRouter = createRouter();

export type AppRouter = typeof appRouter;
