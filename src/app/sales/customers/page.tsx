"use client";

import React, { useState } from "react";
import { SmartTable, Column, FormField } from '@/components/SmartTable';
import { Users, Building, DollarSign, AlertTriangle, ShieldCheck, ShieldAlert } from "lucide-react";

const initialCustomers = [
  { id: "100001", name: "Karachi Traders", salesOrg: "1000", distChannel: "10", division: "00", creditLimit: "PKR 50,000,000", blockStatus: "Active", type: 'Retail' },
  { id: "100002", name: "Lahore Autos", salesOrg: "1000", distChannel: "10", division: "00", creditLimit: "PKR 25,000,000", blockStatus: "Active", type: 'Corporate' },
  { id: "100003", name: "Islamabad Construction", salesOrg: "2000", distChannel: "20", division: "01", creditLimit: "PKR 10,000,000", blockStatus: "Active", type: 'Corporate' },
  { id: "100004", name: "Pak Suzuki", salesOrg: "1000", distChannel: "10", division: "00", creditLimit: "PKR 15,000,000", blockStatus: "Blocked", type: 'Retail' },
];

export default function CustomersPage() {
  const [items, setItems] = useState(initialCustomers);

  const columns = [
    { key: 'id', title: 'Customer ID', render: (item) => <span className="font-mono text-xs font-medium text-slate-700 bg-slate-100 px-2 py-1 rounded">{item.id}</span> },
    { key: 'name', title: 'Customer Name', render: (item) => <span className="font-medium text-sm text-slate-800">{item.name}</span> },
    { key: 'type', title: 'Type' },
    { key: 'salesOrg', title: 'Sales Org' },
    { key: 'distChannel', title: 'Dist. Channel' },
    { key: 'division', title: 'Division' },
    { key: 'creditLimit', title: 'Credit Limit', render: (item) => <span className="text-sm font-medium text-slate-700 text-right">{item.creditLimit}</span> },
    { key: 'blockStatus', title: 'Block Status', render: (item) => {
      if (item.blockStatus === 'Active') return <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/50">Active</span>;
      if (item.blockStatus === 'Blocked') return <span className="text-xs font-medium text-red-700 bg-red-50 px-2 py-0.5 rounded-full border border-red-200/50">Blocked</span>;
      return <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/50">Credit Hold</span>;
    }}
  ];

  const formFields = [
    { key: 'id', label: 'Customer ID', type: 'text' },
    { key: 'name', label: 'Name', type: 'text' },
    { key: 'type', label: 'Type', type: 'select', options: ['Retail', 'Corporate', 'Government'] },
    { key: 'salesOrg', label: 'Sales Org', type: 'select', options: ['1000', '2000', '3000', '4000'] },
    { key: 'distChannel', label: 'Dist. Channel', type: 'select', options: ['10', '20', '30', '40'] },
    { key: 'division', label: 'Division', type: 'select', options: ['00', '01', '02', '03'] },
    { key: 'creditLimit', label: 'Credit Limit (PKR)', type: 'text' },
    { key: 'blockStatus', label: 'Status', type: 'select', options: ['Active', 'Blocked', 'Credit Hold'] }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Customer Master Data (VD03/XD03)
          </h1>
          <p className="text-sm text-slate-500 mt-1">Manage central customer records and credit lines across sales organizations.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 shrink-0">
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-slate-500">Total Customers</h3>
            <div className="p-2 bg-emerald-100/50 rounded-lg">
              <Users className="h-4 w-4 text-emerald-600" />
            </div>
          </div>
          <p className="text-2xl font-semibold text-slate-800">1,248</p>
        </div>
      </div>

      <SmartTable 
        data={items} 
        columns={columns} 
        formFields={formFields} 
        onAdd={(newItem) => setItems([newItem, ...items])} 
      />
    </div>
  );
}
// Migrated successfully
