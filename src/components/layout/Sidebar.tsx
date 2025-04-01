
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarNavLink,
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

const AppSidebar = () => {
  const { role } = currentUser;
  
  return (
    <Sidebar>
      <SidebarHeader className="text-xl font-bold">
        HealthTrack
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarNavLink to="/">
              <SidebarMenuButton>
                <HomeIcon className="h-5 w-5" />
                <span>Dashboard</span>
              </SidebarMenuButton>
            </SidebarNavLink>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarNavLink to="#">
              <SidebarMenuButton>
                <ClipboardList className="h-5 w-5" />
                <span>Order Queue</span>
              </SidebarMenuButton>
            </SidebarNavLink>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarNavLink to="#">
              <SidebarMenuButton>
                <Package2 className="h-5 w-5" />
                <span>Inventory</span>
              </SidebarMenuButton>
            </SidebarNavLink>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarNavLink to="#">
              <SidebarMenuButton>
                <QrCode className="h-5 w-5" />
                <span>Prescriptions</span>
              </SidebarMenuButton>
            </SidebarNavLink>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarNavLink to="#">
              <SidebarMenuButton>
                <Truck className="h-5 w-5" />
                <span>Deliveries</span>
              </SidebarMenuButton>
            </SidebarNavLink>
          </SidebarMenuItem>

          {role === "manager" && (
            <>
              <SidebarMenuItem>
                <SidebarNavLink to="#">
                  <SidebarMenuButton>
                    <Users className="h-5 w-5" />
                    <span>Staff</span>
                  </SidebarMenuButton>
                </SidebarNavLink>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarNavLink to="#">
                  <SidebarMenuButton>
                    <BarChart3 className="h-5 w-5" />
                    <span>Reports</span>
                  </SidebarMenuButton>
                </SidebarNavLink>
              </SidebarMenuItem>
            </>
          )}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarNavLink to="#">
              <SidebarMenuButton>
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </SidebarMenuButton>
            </SidebarNavLink>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarNavLink to="#">
              <SidebarMenuButton>
                <HelpCircle className="h-5 w-5" />
                <span>Help & Support</span>
              </SidebarMenuButton>
            </SidebarNavLink>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
