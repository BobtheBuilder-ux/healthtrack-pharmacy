
import { Delivery, InventoryItem, Order, Prescription, User } from "@/types";

export const mockOrders: Order[] = [
  {
    id: "ORD-2023-001",
    patientName: "John Smith",
    medication: "Lisinopril 10mg",
    status: "pending",
    timestamp: "2023-05-15T09:30:00Z",
    phone: "+1234567890"
  },
  {
    id: "ORD-2023-002",
    patientName: "Mary Johnson",
    medication: "Metformin 500mg",
    status: "ready",
    timestamp: "2023-05-15T10:15:00Z",
    phone: "+1234567891"
  },
  {
    id: "ORD-2023-003",
    patientName: "Robert Williams",
    medication: "Atorvastatin 20mg",
    status: "delivered",
    timestamp: "2023-05-15T08:45:00Z",
    phone: "+1234567892"
  },
  {
    id: "ORD-2023-004",
    patientName: "Patricia Brown",
    medication: "Amlodipine 5mg",
    status: "pending",
    timestamp: "2023-05-15T11:00:00Z",
    phone: "+1234567893"
  },
  {
    id: "ORD-2023-005",
    patientName: "Michael Davis",
    medication: "Omeprazole 20mg",
    status: "ready",
    timestamp: "2023-05-15T09:00:00Z",
    phone: "+1234567894"
  },
  {
    id: "ORD-2023-006",
    patientName: "Elizabeth Miller",
    medication: "Sertraline 50mg",
    status: "pending",
    timestamp: "2023-05-15T10:45:00Z",
    phone: "+1234567895"
  },
  {
    id: "ORD-2023-007",
    patientName: "James Wilson",
    medication: "Levothyroxine 75mcg",
    status: "delivered",
    timestamp: "2023-05-15T08:30:00Z",
    phone: "+1234567896"
  },
  {
    id: "ORD-2023-008",
    patientName: "Jennifer Moore",
    medication: "Metoprolol 25mg",
    status: "ready",
    timestamp: "2023-05-15T11:30:00Z",
    phone: "+1234567897"
  }
];

export const mockInventory: InventoryItem[] = [
  {
    id: "MED-001",
    name: "Lisinopril 10mg",
    stock: 145,
    capacity: 200,
    lastOrdered: "2023-05-01",
    supplier: "PharmaCorp",
    category: "Cardiovascular"
  },
  {
    id: "MED-002",
    name: "Metformin 500mg",
    stock: 89,
    capacity: 500,
    lastOrdered: "2023-05-03",
    supplier: "MedSource",
    category: "Diabetes"
  },
  {
    id: "MED-003",
    name: "Atorvastatin 20mg",
    stock: 35,
    capacity: 200,
    lastOrdered: "2023-04-28",
    supplier: "PharmaCorp",
    category: "Cholesterol"
  },
  {
    id: "MED-004",
    name: "Amlodipine 5mg",
    stock: 12,
    capacity: 100,
    lastOrdered: "2023-05-02",
    supplier: "MedSource",
    category: "Cardiovascular"
  },
  {
    id: "MED-005",
    name: "Omeprazole 20mg",
    stock: 78,
    capacity: 150,
    lastOrdered: "2023-04-25",
    supplier: "HealthRx",
    category: "Gastroenterology"
  },
  {
    id: "MED-006",
    name: "Sertraline 50mg",
    stock: 5,
    capacity: 100,
    lastOrdered: "2023-05-05",
    supplier: "PharmaCorp",
    category: "Psychiatry"
  },
  {
    id: "MED-007",
    name: "Levothyroxine 75mcg",
    stock: 67,
    capacity: 200,
    lastOrdered: "2023-04-30",
    supplier: "HealthRx",
    category: "Endocrinology"
  },
  {
    id: "MED-008",
    name: "Metoprolol 25mg",
    stock: 112,
    capacity: 300,
    lastOrdered: "2023-05-04",
    supplier: "MedSource",
    category: "Cardiovascular"
  }
];

export const mockPrescription: Prescription = {
  id: "RX-20230515-001",
  patientName: "John Smith",
  medication: "Lisinopril 10mg",
  dosage: "1 tablet daily",
  doctorId: "MD-12345",
  doctorName: "Dr. Sarah Johnson",
  hospitalName: "City General Hospital",
  issueDate: "2023-05-10",
  expiryDate: "2023-11-10",
  instructions: "Take with food. Avoid alcohol consumption."
};

export const mockDeliveries: Delivery[] = [
  {
    id: "DEL-001",
    orderId: "ORD-2023-004",
    patientName: "Patricia Brown",
    address: "123 Main St, Anytown, USA",
    status: "in-transit",
    eta: "15 minutes",
    driverName: "David Miller",
    driverPhone: "+1987654321",
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    }
  },
  {
    id: "DEL-002",
    orderId: "ORD-2023-006",
    patientName: "Elizabeth Miller",
    address: "456 Oak Ave, Somewhere, USA",
    status: "in-transit",
    eta: "8 minutes",
    driverName: "Sarah Thompson",
    driverPhone: "+1987654322",
    coordinates: {
      lat: 40.7148,
      lng: -74.0045
    }
  }
];

export const currentUser: User = {
  id: "USR-001",
  name: "Dr. Alex Johnson",
  role: "pharmacist",
  avatar: "https://randomuser.me/api/portraits/men/1.jpg"
};
