
import DashboardLayout from "@/components/layout/DashboardLayout";

const ReportsPage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Reports & Analytics</h2>
        <div className="rounded-md border p-8 flex flex-col items-center justify-center text-center">
          <p className="text-muted-foreground mb-4">
            Reporting functionality is coming soon.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ReportsPage;
