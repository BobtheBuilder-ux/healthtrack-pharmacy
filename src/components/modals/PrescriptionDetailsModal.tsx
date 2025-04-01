
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Prescription } from "@/types";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface PrescriptionDetailsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  prescription: Prescription;
}

const PrescriptionDetailsModal = ({
  open,
  onOpenChange,
  prescription,
}: PrescriptionDetailsModalProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const details = `
      Prescription ID: ${prescription.id}
      Patient: ${prescription.patientName}
      Medication: ${prescription.medication}
      Dosage: ${prescription.dosage}
      Doctor: ${prescription.doctorName} (${prescription.doctorId})
      Hospital: ${prescription.hospitalName}
      Issue Date: ${prescription.issueDate}
      Expiry Date: ${prescription.expiryDate}
      Instructions: ${prescription.instructions}
    `;
    
    navigator.clipboard.writeText(details);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Prescription Details</DialogTitle>
          <DialogDescription>
            Verified prescription information from QR code.
          </DialogDescription>
        </DialogHeader>
        <div className="bg-pharmacy-lightBlue p-4 rounded-md shadow-sm">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg">{prescription.patientName}</h3>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleCopy}
              className="h-8 w-8"
            >
              {copied ? <Check className="h-4 w-4 text-pharmacy-green" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
          <p className="text-pharmacy-blue font-medium text-md mt-1">{prescription.medication}</p>
          <p className="text-sm text-gray-600">{prescription.dosage}</p>
          
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between border-b border-gray-200 pb-1">
              <span className="text-gray-500">Doctor:</span>
              <span>{prescription.doctorName}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-1">
              <span className="text-gray-500">License ID:</span>
              <span>{prescription.doctorId}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-1">
              <span className="text-gray-500">Hospital:</span>
              <span>{prescription.hospitalName}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-1">
              <span className="text-gray-500">Issue Date:</span>
              <span>{prescription.issueDate}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-1">
              <span className="text-gray-500">Expires:</span>
              <span>{prescription.expiryDate}</span>
            </div>
          </div>
          
          <div className="mt-4 p-2 bg-white rounded border border-gray-200">
            <p className="text-xs font-medium text-gray-500">Instructions:</p>
            <p className="text-sm">{prescription.instructions}</p>
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <Button 
            type="button" 
            className="bg-pharmacy-green hover:bg-pharmacy-green/90"
          >
            Approve & Fill
          </Button>
          <Button 
            type="button" 
            variant="outline"
          >
            Reject
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PrescriptionDetailsModal;
