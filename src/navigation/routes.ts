import { FC } from "react";
import Home from "./screens/Home";
import Page1 from "./screens/Page1";
import Page2 from "./screens/Page2";

interface RouteConfig {
  path: string;
  label: string;
  component: FC;
}

const routes: RouteConfig[] = [
  { path: "/", label: "Home", component: Home },
  { path: "/page1", label: "Page 1", component: Page1 },
  { path: "/page2", label: "Page 2", component: Page2 },
];

export default routes;
