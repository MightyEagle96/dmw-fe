import NotFound from "../pages/NotFound";
import AdminDashboard from "../pages/Private/AdminDashboard";
import AdminNotifications from "../pages/Private/AdminNotifications";
import MakeDeposit from "../pages/Private/MakeDeposit";
import NewSubscriber from "../pages/Private/NewSubscriber";
import SubscriberRecords from "../pages/Private/SubscriberRecords";
import Subscribers from "../pages/Private/Subscribers";
import ViewRecords from "../pages/Private/ViewRecords";
import HomePage from "../pages/Public/HomePage";
import LoginPage from "../pages/Public/LoginPage";

const publicRoutes = [
  { path: "/", component: HomePage },
  { path: "/login", component: LoginPage },
  { path: "*", component: NotFound },
];

const privateRoutes = [
  { path: "/", component: AdminDashboard },
  { path: "/subscribers", component: Subscribers },
  { path: "/newSubscriber", component: NewSubscriber },
  { path: "/makeDeposit", component: MakeDeposit },
  { path: "/subscriberRecords", component: SubscriberRecords },
  { path: "/adminNotifications", component: AdminNotifications },
  { path: "/viewRecords/:id", component: ViewRecords },
  { path: "*", component: NotFound },
];

export { publicRoutes, privateRoutes };
