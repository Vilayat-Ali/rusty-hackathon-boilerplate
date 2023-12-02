// lib
import { Routes, Route } from "react-router-dom";
import { type AppRoute } from "./zod/config/schema/route.z";

// layout
import BaseLayout from "./layouts/Base";

// pages
import FourZeroFour from "./pages/FourZeroFour";

// config
import config from "./config";

const App = () => {
  return (
    <Routes>
      {/* 404 */}
      <Route path="*" element={<FourZeroFour />} />
      {/* 404 */}

      {/* Public Routes */}
      {config.routes.public.map((route: AppRoute, index: number) =>
        index === 0 ? (
          <Route
            index
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
        ) : (
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
        )
      )}
      {/* Public Routes */}

      {/* User Routes */}
      {config.routes.user.map((route: AppRoute) => (
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
      {/* User Routes */}

      {/* Admin Routes */}
      {config.routes.admin.map((route: AppRoute) => (
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
