import { RxDashboard } from "react-icons/rx";
import { FaSitemap } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import { LuCircleDollarSign } from "react-icons/lu";
import { BiSolidReport } from "react-icons/bi";
import { PiSignOutBold } from "react-icons/pi";

const menuItems = [
  // Top menu items
  { title: "Dashboard", path: "/dashboard", icon: <RxDashboard />, type: "top" },
  { title: "Item", path: "/dashboard/item", icon: <FaSitemap />, type: "top" },
  { title: "Stock", path: "/dashboard/stock", icon: <AiOutlineStock />, type: "top" },
  { title: "Invoice", path: "/dashboard/invoice", icon: <FaFileInvoiceDollar />, type: "top" },
  { title: "Sales", path: "/dashboard/sales", icon: <LuCircleDollarSign />, type: "top" },
  { title: "Reports", path: "/dashboard/reports", icon: <BiSolidReport />, type: "top" },

  // Top menu items
  { title: "Sign Out", path: "/sign-out", icon: <PiSignOutBold />, type: "bottom" }
];

export default menuItems;