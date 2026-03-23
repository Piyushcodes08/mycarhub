import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  carId?: string;
  carName?: string;
  message: string;
  status: 'New' | 'Contacted' | 'Closed';
  createdAt: string;
}

interface LeadStore {
  leads: Lead[];
  addLead: (lead: Omit<Lead, 'id' | 'createdAt' | 'status'>) => void;
  updateLeadStatus: (id: string, status: Lead['status']) => void;
  deleteLead: (id: string) => void;
}

export const useLeadStore = create<LeadStore>()(
  persist(
    (set) => ({
      leads: [],
      addLead: (leadData) => {
        const newLead: Lead = {
          ...leadData,
          id: Math.random().toString(36).substring(2, 9),
          status: 'New',
          createdAt: new Date().toISOString(),
        };
        set((state) => ({ leads: [newLead, ...state.leads] }));
      },
      updateLeadStatus: (id, status) => {
        set((state) => ({
          leads: state.leads.map((l) => (l.id === id ? { ...l, status } : l)),
        }));
      },
      deleteLead: (id) => {
        set((state) => ({
          leads: state.leads.filter((l) => l.id !== id),
        }));
      },
    }),
    {
      name: 'car-hub-leads',
    }
  )
);
