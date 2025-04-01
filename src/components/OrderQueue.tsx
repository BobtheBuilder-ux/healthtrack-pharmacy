
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { mockOrders } from "@/data/mockData";
import { Order } from "@/types";
import { useState } from "react";
import StatusBadge from "./ui/StatusBadge";
import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const OrderQueue = () => {
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  const handleMarkAsReady = (id: string) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: "ready" as const } : order
    );
    setOrders(updatedOrders);
    
    // Show toast for SMS notification
    toast({
      title: "SMS Notification Sent",
      description: "Patient has been notified their prescription is ready for pickup.",
      duration: 5000,
    });
  };

  const filteredOrders = orders.filter((order) => {
    return (
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.medication.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Order Queue</h2>
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search orders..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <div className="rounded-md border shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Order ID</TableHead>
              <TableHead>Patient Name</TableHead>
              <TableHead>Medication</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.patientName}</TableCell>
                  <TableCell>{order.medication}</TableCell>
                  <TableCell>
                    <StatusBadge status={order.status} />
                  </TableCell>
                  <TableCell className="text-right">
                    {order.status === "pending" && (
                      <Button
                        size="sm"
                        onClick={() => handleMarkAsReady(order.id)}
                        className="bg-pharmacy-blue hover:bg-pharmacy-blue/90"
                      >
                        <Bell className="mr-2 h-4 w-4" />
                        Mark as Ready
                      </Button>
                    )}
                    {order.status === "ready" && (
                      <Button
                        size="sm"
                        variant="outline"
                      >
                        Delivered
                      </Button>
                    )}
                    {order.status === "delivered" && (
                      <span className="text-sm text-muted-foreground">
                        Completed
                      </span>
                    )}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  No orders found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default OrderQueue;
