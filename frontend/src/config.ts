// lib
import consola from "consola";

// zod schema
import { getValidatedEnvs, type ENV } from "./zod/config/schema/env.z";
import { appConfigZodSchema, type AppConfig } from "./zod/config";
import { APP_ACCESS_ROLE } from "./zod/config/schema/user.z";

// routes
// IMPORTANT: Edit files in `src/routes` to update routes
import PublicRoutes from "./routes/public.route";
import AdminRoutes from "./routes/admin.route";
import UserRoutes from "./routes/user.route";
import { z } from "zod";

const getValidatedConfigs = (): AppConfig | undefined => {
    try {
        const validatedEnvs: ENV = getValidatedEnvs() as ENV;

        const roles: APP_ACCESS_ROLE = [
            {
              role: "ADMIN",
              level: 1,
            },
            {
              role: "USER",
              level: 0,
            },
          ];
    
        const appConfig: AppConfig = {
            env: validatedEnvs,
            roles,
            // edit your routes below
            routes: {
                    // EDIT `src/routes/public.route.ts` to edit this route
                    public: PublicRoutes,
                    // EDIT `src/routes/admin.route.ts` to edit this route
                    admin: AdminRoutes,
                    // EDIT `src/routes/user.route.ts` to edit this route
                    user: UserRoutes
            }
        }

        return appConfigZodSchema.parse(appConfig);
    } catch(err: unknown) {
        if(err instanceof z.ZodError) {
            for(const issue in err.issues) {
                consola.fatal("App Config Validation Error: ", issue);
            }
        }
    }
}

const config: AppConfig = getValidatedConfigs() as AppConfig;

export default config;