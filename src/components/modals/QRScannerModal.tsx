
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { mockPrescription } from "@/data/mockData";
import { Prescription } from "@/types";
import PrescriptionDetailsModal from "./PrescriptionDetailsModal";

interface QRScannerModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const QRScannerModal = ({ open, onOpenChange }: QRScannerModalProps) => {
  const [isScanning, setIsScanning] = useState(false);
  const [prescription, setPrescription] = useState<Prescription | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  // Simulate QR scanning
  useEffect(() => {
    if (isScanning) {
      const timeout = setTimeout(() => {
        setPrescription(mockPrescription);
        setIsScanning(false);
        setShowDetails(true);
      }, 2500); // Simulate scanning delay

      return () => clearTimeout(timeout);
    }
  }, [isScanning]);

  const handleStartScan = () => {
    setIsScanning(true);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Scan Prescription QR Code</DialogTitle>
            <DialogDescription>
              Position the QR code within the scanning area.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center justify-center p-4">
            <div className="relative w-64 h-64 bg-black/5 rounded-lg overflow-hidden flex items-center justify-center">
              {isScanning ? (
                <div className="flex flex-col items-center">
                  <div className="w-48 h-48 border-2 border-pharmacy-blue relative">
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-pharmacy-blue"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-pharmacy-blue"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-pharmacy-blue"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-pharmacy-blue"></div>
                  </div>
                  <div className="h-1 bg-pharmacy-blue w-full mt-4 animate-pulse-opacity"></div>
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-muted-foreground">Ready to scan</p>
                </div>
              )}
            </div>
          </div>
          <DialogFooter className="sm:justify-center">
            {isScanning ? (
              <Button
                type="button"
                variant="secondary"
                onClick={() => setIsScanning(false)}
              >
                Cancel Scan
              </Button>
            ) : (
              <Button type="button" onClick={handleStartScan}>
                Start Scanning
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {prescription && (
        <PrescriptionDetailsModal
          open={showDetails}
          onOpenChange={setShowDetails}
          prescription={prescription}
        />
      )}
    </>
  );
};

export default QRScannerModal;
