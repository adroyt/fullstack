import { auth } from "$lib/lucia";
import { error, redirect, type RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ request, setHeaders }) => {
  const { email, password } = await request.json();

  try {
    const createUser = await auth.createUser("email", email, {
      password,
      user_data: { email }
    });

    setHeaders({
      "set-cookie": createUser.cookies
    });

    throw redirect(302, "/");
  } catch (e) {
    switch ((e as Error).message) {
      case "AUTH_DUPLICATE_IDENTIFIER_TOKEN":
      case "AUTH_DUPLICATE_USER_DATA":
        throw error(400, "Email already in use");
    }

    throw error(500, "Unknow error occured");
  }
};
