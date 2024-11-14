import { FC } from "react";
import {
  Book as BookIcon,
  Map as MapIcon,
  AccountBalance as BuildingIcon,
  SpeakerGroup,
  QuestionMark,
} from "@mui/icons-material";

import Home from "./screens/Home";
import OralHistory from "./screens/OralHistory";
import ChildhoodRecords from "./screens/ChildhoodRecords";
import Map from "./screens/Map";
import AboutUs from "./screens/AboutUs";
import Infrastructure from "./screens/Infrastructure";

interface RouteConfig {
  path: string;
  label: string;
  component: FC;
}

const routes: RouteConfig[] = [{ path: "/", label: "Home", component: Home }];

export const pages = [
  {
    icon: SpeakerGroup,
    label: "Oral History",
    description:
      "Explore the oral history of children in Palestine during the British Mandate of Palestine.",
    path: "/oral-history",
    component: OralHistory,
  },
  {
    icon: BookIcon,
    label: "Childhood Records",
    description:
      "Browse and explore historical resources and records from around the world that document the lives of Palestinian children during the British Mandate of Palestine.",
    path: "/childhood-records",
    component: ChildhoodRecords,
  },
  {
    icon: BuildingIcon,
    label: "Infrastructure",
    description:
      "Learn about the buildings, schools, and other infrastructure essential to the lives of Palestinian children during the British Mandate of Palestine.",
    path: "/infrastructure",
    component: Infrastructure,
  },
  {
    icon: MapIcon,
    label: "Map",
    description:
      "Get a glimpse of some of our maps that locate elements of the lives of Palestinians in Palestine during the British Mandate.",
    path: "/map",
    component: Map,
  },
  {
    icon: QuestionMark,
    label: "About the Project",
    description:
      "Get to know more about this project, what we do and about our team.",
    path: "/about-us",
    component: AboutUs,
  },
];

export default routes;
