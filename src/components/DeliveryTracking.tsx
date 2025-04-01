
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { mockDeliveries } from "@/data/mockData";
import { Delivery } from "@/types";
import { Clock, MapPin, MessageSquare, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const DeliveryTracking = () => {
  const [deliveries] = useState<Delivery[]>(mockDeliveries);
  const { toast } = useToast();

  const handleContactPatient = (delivery: Delivery) => {
    toast({
      title: "SMS Template Opened",
      description: `Contact template for ${delivery.patientName} is ready.`,
    });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">Active Deliveries</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {deliveries.map((delivery) => (
          <Card key={delivery.id}>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{delivery.patientName}</CardTitle>
              <CardDescription className="flex items-center">
                <MapPin className="h-3.5 w-3.5 mr-1 text-pharmacy-blue" />
                {delivery.address}
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="flex justify-between items-center py-2 border-b">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-pharmacy-amber" />
                  <span className="text-sm font-medium">ETA:</span>
                </div>
                <span className="text-sm font-bold">{delivery.eta}</span>
              </div>
              
              <div className="pt-3 pb-2">
                <div className="mb-2">
                  <p className="text-xs text-muted-foreground">Driver Information</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">{delivery.driverName}</span>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Map placeholder */}
              <div className="mt-3 bg-gray-100 rounded-md h-32 flex items-center justify-center">
                <div className="text-center text-sm text-muted-foreground">
                  <MapPin className="h-6 w-6 mx-auto mb-1" />
                  <p>Google Maps Integration</p>
                  <p className="text-xs">Delivery tracking in real-time</p>
                </div>
              </div>
            </CardContent>
            <div className="px-6 pb-6">
              <Button 
                className="w-full" 
                variant="outline"
                onClick={() => handleContactPatient(delivery)}
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Contact Patient
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DeliveryTracking;
