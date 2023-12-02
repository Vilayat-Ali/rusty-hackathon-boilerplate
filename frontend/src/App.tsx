// lib
import { Routes, Route } from "react-router-dom";
import { type AppRoute } from "./zod/config/schema/route.z";

// layout
import BaseLayout from "./layouts/Base";

// routes
import { routes as PublicRoutes } from "./routes/public.routes";
import { routes as ProtectedRoutes } from "./routes/protected.routes";
import { routes as AdminRoutes } from "./routes/admin.routes";

const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      {PublicRoutes.map((route: AppRoute) => (
        <Route
          path={route.href}
          key={route.href}
          element={
            <>
              <BaseLayout
                title={route.title}
                description={route.description}
                keywords={route.keywords}
              >
                {route.component({})}
              </BaseLayout>
            </>
          }
        />
      ))}
      {/* Public Routes */}

      {/* Protected Routes */}
      {ProtectedRoutes.map((route: AppRoute) => (
        <Route
          path={route.href}
          key={route.href}
          element={
            <>
              <BaseLayout
                title={route.title}
                description={route.description}
                keywords={route.keywords}
              >
                {route.component({})}
              </BaseLayout>
            </>
          }
        />
      ))}
      {/* Protected Routes */}

      {/* Admin Routes */}
      {AdminRoutes.map((route: AppRoute) => (
        <Route
          path={route.href}
          key={route.href}
          element={
            <>
              <BaseLayout
                title={route.title}
                description={route.description}
                keywords={route.keywords}
              >
                {route.component({})}
              </BaseLayout>
            </>
          }
        />
      ))}
      {/* Admin Routes */}
    </Routes>
  );
};

export default App;
