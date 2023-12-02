import { lazy } from "react";

// zod schema
import { getValidatedEnvs, type ENV } from "./zod/config/schema/env.z";
import { appConfigZodSchema, type AppConfig } from "./zod/config";
import { APP_ACCESS_ROLE } from "./zod/config/schema/user.z";
import { type configRoute, type LazyLoadingRoute } from "./zod/config/schema/route.z";

// routes
// IMPORTANT: Edit files in `src/routes` to update routes
import PublicRoutes from "./routes/public.route";
import AdminRoutes from "./routes/admin.route";
import UserRoutes from "./routes/user.route";

const getLazyLoadingRouteList = (routes: configRoute[]): LazyLoadingRoute[] => {
  const lazyExoticComponentList: LazyLoadingRoute[]  = [];
  routes.map((route: configRoute) => {
    lazyExoticComponentList.push({
      ...route,
      component: lazy(() => import(route.componentPath))
    });
  });
  return lazyExoticComponentList;
}

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
                    public: getLazyLoadingRouteList(PublicRoutes),
                    // EDIT `src/routes/admin.route.ts` to edit this route
                    admin: getLazyLoadingRouteList(AdminRoutes),
                    // EDIT `src/routes/user.route.ts` to edit this route
                    user: getLazyLoadingRouteList(UserRoutes)
            }
        }

        return appConfigZodSchema.parse(appConfig);
    } catch(err: unknown) {
        console.log(err);
    }
}

const config: AppConfig = getValidatedConfigs() as AppConfig;

export default config;