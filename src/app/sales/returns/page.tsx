"use client";

import React, { useState } from 'react';
import { SmartTable, Column, FormField } from '@/components/SmartTable';
import { ArrowLeft, CheckCircle, AlertCircle, Clock } from 'lucide-react';

const initialReturns = [
  { id: "RE-1004523", date: "2026-07-24", invRef: "INV-990123", customer: "Karachi Traders", material: "Steel Coil 500mm", qty: 2, status: "Pending Inspection", rmaType: 'Defect' },
  { id: "RE-1004524", date: "2026-07-24", invRef: "INV-990111", customer: "Lahore Autos", material: "Aluminum Sheets", qty: 15, status: "Approved", rmaType: 'Damage' },
  { id: "RE-1004525", date: "2026-07-23", invRef: "INV-990098", customer: "Islamabad Construction", material: "Titanium Rods", qty: 5, status: "Rejected", rmaType: 'Wrong Item' },
];

export default function SalesReturnsPage() {
  const [items, setItems] = useState(initialReturns);

  const columns = [
    { key: 'id', title: 'Return Document', render: (item) => <span className="font-medium text-emerald-700">{item.id}</span> },
    { key: 'date', title: 'Date' },
    { key: 'invRef', title: 'Original Invoice Ref' },
    { key: 'customer', title: 'Customer', render: (item) => <span className="font-medium text-slate-800">{item.customer}</span> },
    { key: 'rmaType', title: 'Reason' },
    { key: 'material', title: 'Material' },
    { key: 'qty', title: 'Return Qty', render: (item) => <span className="font-medium text-slate-800 text-right">{item.qty}</span> },
    { key: 'status', title: 'Inspection Status', render: (item) => {
      const getStatusBadgeClass = (status) => {
        switch(status) {
          case 'Approved': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
          case 'Rejected': return 'bg-red-100 text-red-700 border-red-200';
          default: return 'bg-amber-100 text-amber-700 border-amber-200';
        }
      };
      return <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusBadgeClass(item.status)}`}>{item.status}</span>;
    }}
  ];

  const formFields = [
    { key: 'id', label: 'Return ID', type: 'text' },
    { key: 'date', label: 'Date', type: 'date' },
    { key: 'invRef', label: 'Invoice Ref', type: 'text' },
    { key: 'customer', label: 'Customer', type: 'text' },
    { key: 'rmaType', label: 'Reason', type: 'select', options: ['Defect', 'Damage', 'Wrong Item', 'Other'] },
    { key: 'material', label: 'Material', type: 'text' },
    { key: 'qty', label: 'Quantity', type: 'number' },
    { key: 'status', label: 'Status', type: 'select', options: ['Approved', 'Rejected', 'Pending Inspection'] }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-500">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              SAP SD Returns
            </h1>
            <p className="text-sm text-slate-500 mt-1">Returns Order Processing Ledger (VA03)</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 shrink-0">
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <p className="text-sm font-medium text-slate-500 mb-1">Total Returns (MTD)</p>
          <div className="flex items-end gap-2">
            <h3 className="text-2xl font-bold text-slate-800">4,281</h3>
          </div>
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
