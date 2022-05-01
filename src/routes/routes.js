import AdminDashboard from "../pages/Private/AdminDashboard";
import Subscribers from "../pages/Private/Subscribers";
import HomePage from "../pages/Public/HomePage";
import LoginPage from "../pages/Public/LoginPage";

const publicRoutes = [
  { path: "/", component: HomePage },
  { path: "/login", component: LoginPage },
];

const privateRoutes = [
  { path: "/", component: AdminDashboard },
  { path: "/subscribers", component: Subscribers },
];

export { publicRoutes, privateRoutes };
