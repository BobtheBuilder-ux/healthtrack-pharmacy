
import { cn } from "@/lib/utils";
import { OrderStatus } from "@/types";

interface StatusBadgeProps {
  status: OrderStatus;
  className?: string;
}

const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const getStatusColor = (status: OrderStatus) => {
    switch (status) {
      case "pending":
        return "bg-status-pending text-black";
      case "ready":
        return "bg-status-ready text-white";
      case "delivered":
        return "bg-status-delivered text-white";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  const getStatusText = (status: OrderStatus) => {
    switch (status) {
      case "pending":
        return "Pending";
      case "ready":
        return "Ready";
      case "delivered":
        return "Delivered";
      default:
        return status;
    }
  };

  return (
    <span
      className={cn(
        "px-3 py-1 text-xs font-semibold rounded-full",
        getStatusColor(status),
        className
      )}
    >
      {getStatusText(status)}
    </span>
  );
};

export default StatusBadge;
