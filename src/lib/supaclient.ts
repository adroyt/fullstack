import { createClient } from "@supabase/supabase-js";

const supabaseUrl = <string>process.env.VITE_SUPA_URL;
// const supabaseAnonKey = <string>import.meta.env.VITE_SUPA_ANON;
const supabaseSecretKey = <string>process.env.SUPA_SECRET;

export const supabase = createClient(supabaseUrl, supabaseSecretKey);
