import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineAnnotation,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
  HiDatabase,
} from "react-icons/hi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "onecrmproduct",
    label: "Products",
    path: "/onecrmproduct",
    icon: <HiDatabase />,
  },
  {
    key: "onecrminvalidi",
    label: "Invalid-Index",
    path: "/onecrminvalidi",
    icon: <HiDatabase />,
  },
  {
    key: "onecrmallindex",
    label: "Valid-Index",
    path: "/onecrmallindex",
    icon: <HiDatabase />,
  },
  //   {
  //     key: "transactions",
  //     label: "Transactions",
  //     path: "/transactions",
  //     icon: <HiOutlineDocumentText />,
  //   },
  //   {
  //     key: "messages",
  //     label: "Messages",
  //     path: "/messages",
  //     icon: <HiOutlineAnnotation />,
  //   },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <HiOutlineCog />,
  },
  {
    key: "support",
    label: "Support",
    path: "/support",
    icon: <HiOutlineQuestionMarkCircle />,
  },
];
