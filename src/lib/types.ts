export interface CookieOptions {
  path: string;
  httpOnly: boolean;
  secure: boolean;
  sameSite: "lax" | "strict" | "none";
  maxAge: number;
}
export interface Cookie {
  name: string;
  value: string;
  options: CookieOptions;
}