import HomePage from "../pages/HomePage";
import Search from "../pages/Search";

var indexRoutes = [
    { path: "/", name: "Home", component: HomePage, exact: true },
    { path: "/nasa-search", name: "Nasa Search", component: Search, exact: false }
];

export default indexRoutes;