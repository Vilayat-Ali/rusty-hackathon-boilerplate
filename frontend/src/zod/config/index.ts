// lib
import { z } from "zod";

// zod schemas
import { envZodSchema } from "./schema/env.z";
import { lazyPageComponentRouteZodSchema } from "./schema/route.z";
import { appAccessRole } from "./schema/user.z";

export const appConfigZodSchema = z.object({
  // env
  env: envZodSchema,
  // user roles
  roles: appAccessRole,
  // app routes
  routes: z.object({
    // anyone can navigate to this page
    public: z.array(lazyPageComponentRouteZodSchema),
    // only users can navigate to this page
    user: z.array(lazyPageComponentRouteZodSchema),
    // only admins can navigate to this page
    admin: z.array(lazyPageComponentRouteZodSchema),
  }),
});

export type AppConfig = z.infer<typeof appConfigZodSchema>;
