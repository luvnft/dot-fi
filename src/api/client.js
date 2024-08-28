import { createClient } from "@supabase/supabase-js";

// // Create a single supabase client for interacting with your database
// export const supabase = createClient(
//   import.meta.env.SUPABASE_URL,
//   import.meta.env.SUPABASE_KEY,
//   {}
// );

export const supabase = createClient(
  "https://anuievfybpmxudmplmqy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFudWlldmZ5YnBteHVkbXBsbXF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE2NDAyMDUsImV4cCI6MjAyNzIxNjIwNX0.VsmTmxN7N8GdsYz91UASJGA5Sj_UhFEKjw67USIcMSA",
  {
    // schema: "starex",
    // db: { schema: "starex" },
  }
);
