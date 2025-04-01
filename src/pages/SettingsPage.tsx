
import DashboardLayout from "@/components/layout/DashboardLayout";

const SettingsPage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Settings</h2>
        <div className="rounded-md border p-8 flex flex-col items-center justify-center text-center">
          <p className="text-muted-foreground mb-4">
            Settings functionality is coming soon.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
