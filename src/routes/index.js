import HomePage from "../pages/HomePage";
import Error404Page from "../pages/Error404Page";

var indexRoutes = [
    { path: "/", name: "Home", component: HomePage, exact: true },
    { path: "/nasa-search", name: "Nasa Search", component: Error404Page, exact: false },
];

export default indexRoutes;