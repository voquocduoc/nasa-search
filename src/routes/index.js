import HomePage from "../pages/HomePage";
import Search from "../pages/Search";
import Video from "../pages/Video";

var indexRoutes = [
    { path: "/", name: "Home", component: HomePage, exact: true },
    { path: "/nasa-search", name: "Nasa Search", component: Search, exact: false },
    { path: "/video/:id", name: "Video", component: Video, exact: false }
];

export default indexRoutes;