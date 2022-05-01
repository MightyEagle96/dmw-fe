import AdminDashboard from "../pages/Private/AdminDashboard";
import HomePage from "../pages/Public/HomePage";
import LoginPage from "../pages/Public/LoginPage";

const publicRoutes = [
  { path: "/", component: HomePage },
  { path: "/login", component: LoginPage },
];

const privateRoutes = [{ path: "/", component: AdminDashboard }];

export { publicRoutes, privateRoutes };
