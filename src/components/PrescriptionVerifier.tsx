
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode } from "lucide-react";
import { useState } from "react";
import QRScannerModal from "./modals/QRScannerModal";

const PrescriptionVerifier = () => {
  const [showScanner, setShowScanner] = useState(false);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Prescription Verification</CardTitle>
          <CardDescription>
            Scan and verify prescriptions using QR codes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-6 space-y-4">
            <div className="rounded-full bg-pharmacy-lightBlue p-6">
              <QrCode size={48} className="text-pharmacy-blue" />
            </div>
            <p className="text-center text-sm text-muted-foreground max-w-md">
              Scan prescription QR codes to verify their authenticity, check medication details, and verify doctor's credentials.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button 
            className="bg-pharmacy-blue hover:bg-pharmacy-blue/90 w-full"
            onClick={() => setShowScanner(true)}
          >
            <QrCode className="mr-2 h-4 w-4" />
            Scan QR Code
          </Button>
        </CardFooter>
      </Card>

      <QRScannerModal 
        open={showScanner} 
        onOpenChange={setShowScanner} 
      />
    </>
  );
};

export default PrescriptionVerifier;
