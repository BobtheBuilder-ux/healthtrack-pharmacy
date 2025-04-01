
import DeliveryTracking from "@/components/DeliveryTracking";
import Inventory from "@/components/Inventory";
import DashboardLayout from "@/components/layout/DashboardLayout";
import OrderQueue from "@/components/OrderQueue";
import PrescriptionVerifier from "@/components/PrescriptionVerifier";
import { currentUser } from "@/data/mockData";
import { useEffect } from "react";

const Index = () => {
  const { role } = currentUser;
  
  useEffect(() => {
    document.title = "HealthTrack Pharmacy Dashboard";
  }, []);

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <OrderQueue />
        </div>
        <div className="md:col-span-1">
          <PrescriptionVerifier />
        </div>
      </div>
      
      <div className="mt-8">
        <Inventory />
      </div>
      
      {role === "manager" && (
        <div className="mt-8">
          <DeliveryTracking />
        </div>
      )}
    </DashboardLayout>
  );
};

export default Index;
