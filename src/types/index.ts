
export type OrderStatus = 'pending' | 'ready' | 'delivered';

export interface Order {
  id: string;
  patientName: string;
  medication: string;
  status: OrderStatus;
  timestamp: string;
  phone?: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  stock: number;
  capacity: number;
  lastOrdered: string;
  supplier: string;
  category: string;
}

export interface Prescription {
  id: string;
  patientName: string;
  medication: string;
  dosage: string;
  doctorId: string;
  doctorName: string;
  hospitalName: string;
  issueDate: string;
  expiryDate: string;
  instructions: string;
}

export interface Delivery {
  id: string;
  orderId: string;
  patientName: string;
  address: string;
  status: 'in-transit' | 'delivered';
  eta: string;
  driverName: string;
  driverPhone: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface User {
  id: string;
  name: string;
  role: 'pharmacist' | 'manager';
  avatar: string;
}
