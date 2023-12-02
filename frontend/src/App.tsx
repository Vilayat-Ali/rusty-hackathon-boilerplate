// lib
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { type LazyLoadingRoute } from "./zod/config/schema/route.z";

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
      {config.routes.public.map((route: LazyLoadingRoute, index: number) =>
        index === 0 ? (
          <Route
            index
            key={route.href}
            element={
              <Suspense>
                <BaseLayout
                  title={route.title}
                  description={route.description}
                  keywords={route.keywords}
                >
                  {route.component({})}
                </BaseLayout>
              </Suspense>
            }
          />
        ) : (
          <Route
            path={route.href}
            key={route.href}
            element={
              <Suspense>
                <BaseLayout
                  title={route.title}
                  description={route.description}
                  keywords={route.keywords}
                >
                  {route.component({})}
                </BaseLayout>
              </Suspense>
            }
          />
        )
      )}
      {/* Public Routes */}

      {/* User Routes */}
      {config.routes.user.map((route: LazyLoadingRoute) => (
        <Route
          path={route.href}
          key={route.href}
          element={
            <Suspense>
              <BaseLayout
                title={route.title}
                description={route.description}
                keywords={route.keywords}
              >
                {route.component({})}
              </BaseLayout>
            </Suspense>
          }
        />
      ))}
      {/* User Routes */}

      {/* Admin Routes */}
      {config.routes.admin.map((route: LazyLoadingRoute) => (
        <Route
          path={route.href}
          key={route.href}
          element={
            <Suspense>
              <BaseLayout
                title={route.title}
                description={route.description}
                keywords={route.keywords}
              >
                {route.component({})}
              </BaseLayout>
            </Suspense>
          }
        />
      ))}
      {/* Admin Routes */}
    </Routes>
  );
};

export default App;
