
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { mockInventory } from "@/data/mockData";
import { InventoryItem } from "@/types";
import { Search, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

const Inventory = () => {
  const [inventory] = useState<InventoryItem[]>(mockInventory);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const getUniqueCategories = () => {
    const categories = inventory.map((item) => item.category);
    return ["All", ...new Set(categories)];
  };

  const getStockLevel = (current: number, capacity: number) => {
    const percentage = (current / capacity) * 100;
    if (percentage < 20) return "low";
    if (percentage < 50) return "medium";
    return "high";
  };

  const getStockColor = (level: string) => {
    switch (level) {
      case "low":
        return "bg-pharmacy-red";
      case "medium":
        return "bg-pharmacy-amber";
      case "high":
        return "bg-pharmacy-green";
      default:
        return "bg-gray-200";
    }
  };

  const getStockPercentage = (current: number, capacity: number) => {
    return Math.floor((current / capacity) * 100);
  };

  const filteredInventory = inventory.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.supplier.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory =
      categoryFilter === "" || categoryFilter === "All" || item.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <h2 className="text-2xl font-bold text-gray-800">Inventory Management</h2>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search inventory..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select
            value={categoryFilter}
            onValueChange={setCategoryFilter}
          >
            <SelectTrigger className="w-full sm:w-40">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {getUniqueCategories().map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="rounded-md border shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[180px]">Item ID</TableHead>
              <TableHead>Medication Name</TableHead>
              <TableHead>Stock Level</TableHead>
              <TableHead>Last Ordered</TableHead>
              <TableHead>Supplier</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredInventory.length > 0 ? (
              filteredInventory.map((item) => {
                const stockLevel = getStockLevel(item.stock, item.capacity);
                const stockPercentage = getStockPercentage(item.stock, item.capacity);
                
                return (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress 
                          value={stockPercentage} 
                          className="h-2 w-24"
                          indicatorClassName={getStockColor(stockLevel)}
                        />
                        <span className="text-sm">
                          {item.stock}/{item.capacity}
                          {stockLevel === "low" && (
                            <span className="ml-2 text-pharmacy-red font-medium">Low</span>
                          )}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>{item.lastOrdered}</TableCell>
                    <TableCell>{item.supplier}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        size="sm"
                        variant={stockLevel === "low" ? "default" : "outline"}
                        className={stockLevel === "low" ? "bg-pharmacy-red hover:bg-pharmacy-red/90" : ""}
                      >
                        <ShoppingBag className="mr-2 h-4 w-4" />
                        Reorder
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  No inventory items found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Inventory;
