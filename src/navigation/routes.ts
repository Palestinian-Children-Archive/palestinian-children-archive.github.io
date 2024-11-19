import { FC } from "react";
import {
  Book as BookIcon,
  AccountBalance as BuildingIcon,
  SpeakerGroup,
  QuestionMark,
} from "@mui/icons-material";

import Home from "./screens/Home";
import OralHistory from "./screens/OralHistory";
import ChildhoodRecords from "./screens/ChildhoodRecords";
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
    label: "Individual Oral History",
    description:
      "Explore the oral history of children in Palestine during the British Mandate of Palestine.",
    path: "/oral-history",
    component: OralHistory,
  },
  {
    icon: BookIcon,
    label: "Records of Human Experiences",
    description:
      "Browse and explore historical resources and records from around the world that document the lives of Palestinians during the British Mandate of Palestine.",
    path: "/childhood-records",
    component: ChildhoodRecords,
  },
  {
    icon: BuildingIcon,
    label: "Childhood Infrastructures",
    description:
      "Learn about the buildings, schools, and other infrastructure essential to the lives of Palestinian children during the British Mandate of Palestine.",
    path: "/infrastructure",
    component: Infrastructure,
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
