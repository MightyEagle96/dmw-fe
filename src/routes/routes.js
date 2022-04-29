import HomePage from "../pages/Public/HomePage";
import LoginPage from "../pages/Public/LoginPage";

const publicRoutes = [
  { path: "/", component: HomePage },
  { path: "/login", component: LoginPage },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
