import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";


export const env = createEnv({
  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {
    DB_URI: z.string(),
    DB_URI_DIRECT: z.string(),
    CLERK_SECRET_KEY: z.string(),
    WEBHOOK_SECRET: z.string(),
  },
  /*
   * Environment variables available on the client (and server).
   *
   * You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string(),
  },
  /*
   * Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * You'll get type errors if not all variables from `server` & `client` are included here.
   */
  runtimeEnv: {
    WEBHOOK_SECRET: process.env.WEBHOOK_SECRET,
    DB_URI: process.env.DB_URI,
    DB_URI_DIRECT: process.env.DB_URI_DIRECT,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  },
});