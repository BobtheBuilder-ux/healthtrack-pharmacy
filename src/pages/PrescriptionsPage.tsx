
import PrescriptionVerifier from "@/components/PrescriptionVerifier";
import DashboardLayout from "@/components/layout/DashboardLayout";

const PrescriptionsPage = () => {
  return (
    <DashboardLayout>
      <div className="max-w-md mx-auto">
        <PrescriptionVerifier />
      </div>
    </DashboardLayout>
  );
};

export default PrescriptionsPage;
