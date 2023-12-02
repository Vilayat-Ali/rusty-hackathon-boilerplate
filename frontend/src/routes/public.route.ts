// lib
import { type AppRoute } from "../zod/config/schema/route.z";

// pages
import Home from "../pages/public/Home";
import Register from "../pages/account/Register";
import Login from "../pages/account/Login";

// NOTE:
// First `AppRoute` Object is always routed to `/` in the app.
// In Other words, first Object becomes landing page for the application routing system.  
const PublicRoutes: AppRoute[] = [
    {
        title: 'Home',
        href: '/',
        description: '',
        keywords: [],
        component: Home,
    },
    {
        title: 'Register',
        href: '/account/register',
        description: '',
        keywords: [],
        component: Register,
    },
    {
        title: 'Login',
        href: '/account/login',
        description: '',
        keywords: [],
        component: Login,
    }
]

export default PublicRoutes;