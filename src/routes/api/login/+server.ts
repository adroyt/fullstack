import { auth } from "$lib/lucia";
import { error, redirect, type RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ request, setHeaders }) => {
  const { email, password } = await request.json();

  try {
    const authenticateUser = await auth.authenticateUser("email", email, password);

    setHeaders({
      "set-cookie": authenticateUser.cookies
    });

    throw redirect(302, "/");
  } catch (e) {
    switch ((e as Error).message) {
      case "AUTH_INVALID_IDENTIFIER_TOKEN":
      case "AUTH_INVALID_PASSWORD":
        throw error(400, "Incorrect email or password");
    }

    throw error(500, "Unknow error occured");
  }
};
