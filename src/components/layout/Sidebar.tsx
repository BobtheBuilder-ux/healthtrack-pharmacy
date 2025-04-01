
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { currentUser } from "@/data/mockData";
import { 
  ClipboardList, 
  HomeIcon, 
  Package2, 
  QrCode, 
  Truck,
  Users,
  BarChart3,
  Settings,
  HelpCircle
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const AppSidebar = () => {
  const { role } = currentUser;
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") {
      return true;
    }
    return path !== "/" && location.pathname.startsWith(path);
  };
  
  return (
    <Sidebar>
      <SidebarHeader className="text-xl font-bold">
        HealthTrack
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/")}>
              <Link to="/">
                <HomeIcon className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/orders")}>
              <Link to="/orders">
                <ClipboardList className="h-5 w-5" />
                <span>Order Queue</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/inventory")}>
              <Link to="/inventory">
                <Package2 className="h-5 w-5" />
                <span>Inventory</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/prescriptions")}>
              <Link to="/prescriptions">
                <QrCode className="h-5 w-5" />
                <span>Prescriptions</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/deliveries")}>
              <Link to="/deliveries">
                <Truck className="h-5 w-5" />
                <span>Deliveries</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {role === "manager" && (
            <>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/staff")}>
                  <Link to="/staff">
                    <Users className="h-5 w-5" />
                    <span>Staff</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/reports")}>
                  <Link to="/reports">
                    <BarChart3 className="h-5 w-5" />
                    <span>Reports</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </>
          )}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/settings")}>
              <Link to="/settings">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/help")}>
              <Link to="/help">
                <HelpCircle className="h-5 w-5" />
                <span>Help & Support</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
