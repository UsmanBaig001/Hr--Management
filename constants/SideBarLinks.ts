import {
  iconApps,
  iconCalender,
  iconNotepad,
  iconSettings,
  iconUsers,
} from "./Images";

export const SIDE_BAR_LINKS = [
  {
    name: "Dashboard",
    path: "/",
    icon: iconApps,
    alt: "iconApps",
  },
  {
    name: "All Employees",
    path: "/employees",
    icon: iconUsers,
    alt: "iconUsers",
  },
  {
    name: "Attendance",
    path: "/attendance",
    icon: iconCalender,
    alt: "iconCalender",
  },
  {
    name: "Leaves",
    path: "/leaves",
    icon: iconNotepad,
    alt: "iconNotepad",
  },
  {
    name: "Settings",
    path: "/settings",
    icon: iconSettings,
    alt: "iconSettings",
  },
];
