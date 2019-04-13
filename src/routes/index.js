import HomePage from "../pages/HomePage";
import Search from "../pages/Search";
import Error404Page from "../pages/Error404Page";

var indexRoutes = [
    { path: "/", name: "Home", component: HomePage, exact: true },
    { path: "/nasa-search", name: "Nasa Search", component: Search, exact: false },
    { path: "/404", name: "Not Found", component: Error404Page, exact: false },
];

export default indexRoutes;