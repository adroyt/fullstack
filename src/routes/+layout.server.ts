import { auth } from "$lib/lucia";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async event => {
  // here so that this function reloads on url change
  // that way using `goto` can reload the browser cookies
  event.url.pathname;

  const loadData = await auth.load(event);

  return { ...loadData };
};
