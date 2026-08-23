import { FC } from "react";
import {
  Book as BookIcon,
  AccountBalance as BuildingIcon,
  Dataset as DatasetIcon,
  SpeakerGroup,
  QuestionMark,
  SvgIconComponent,
} from "@mui/icons-material";

import Home from "./screens/Home";
import OralHistory from "./screens/OralHistory";
import ChildhoodRecords from "./screens/HumanExperiences";
import AboutUs from "./screens/AboutUs";
import Infrastructure from "./screens/Infrastructure";

interface RouteConfig {
  path: string;
  label: string;
  component: FC;
}

export interface PageConfig {
  icon: SvgIconComponent;
  label: string;
  description: string;
  path: string;
  /** Set for pages rendered by this app. Omitted for external destinations. */
  component?: FC;
  /** Set instead of `component` to link out to a separate site. */
  href?: string;
}

const routes: RouteConfig[] = [{ path: "/", label: "Home", component: Home }];

export const pages: PageConfig[] = [
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
    label: "List of Childhood Infrastructure and Cultural Elements",
    description:
      "Learn about the buildings, schools, and other infrastructure essential to the lives of Palestinian children during the British Mandate of Palestine.",
    path: "/infrastructure",
    component: Infrastructure,
  },

  {
    icon: DatasetIcon,
    label: "Collection Data",
    description:
      "Search, browse, and download the full archive dataset \u2014 the records behind this site, published as a digital collection.",
    path: "/collection-data",
    href: "https://palestinian-children-archive.github.io/pcca/",
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
