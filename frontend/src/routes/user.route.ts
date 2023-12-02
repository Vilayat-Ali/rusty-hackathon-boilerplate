// lib
import { type AppRoute } from "../zod/config/schema/route.z";

// pages
import Home from "../pages/public/Home";
import Register from "../pages/account/Register";
import Login from "../pages/account/Login";

const UserRoutes: AppRoute[] = [
    {
        title: 'Home',
        href: '/',
        description: '',
        keywords: [],
        component: Home,
    },
    {
        title: '/account/register',
        href: '',
        description: '',
        keywords: [],
        component: Register,
    },
    {
        title: '/account/login',
        href: '',
        description: '',
        keywords: [],
        component: Login,
    }
]

export default UserRoutes;