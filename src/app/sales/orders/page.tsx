"use client";

import React, { useState } from 'react';
import { FileText, Clock, AlertCircle, Truck } from 'lucide-react';
import { SmartTable, Column, FormField } from '@/components/SmartTable';

const initialOrders = [
  { id: '10005432', date: '2026-07-24', soldTo: 'Karachi Traders', material: 'M-1004 (Polypropylene)', netValue: 4500000.00, currency: 'PKR', status: 'Completed', block: 'None', location: 'Karachi' },
  { id: '10005433', date: '2026-07-24', soldTo: 'Lahore Autos', material: 'M-2011 (ABS Plastic)', netValue: 8500000.00, currency: 'PKR', status: 'In Process', block: 'None', location: 'Lahore' },
  { id: '10005434', date: '2026-07-23', soldTo: 'Islamabad Construction', material: 'M-3005 (PVC Pipes)', netValue: 12000000.00, currency: 'PKR', status: 'On Hold', block: 'Credit Limit', location: 'Islamabad' },
  { id: '10005435', date: '2026-07-23', soldTo: 'Pak Suzuki', material: 'M-1004 (Polypropylene)', netValue: 6200000.00, currency: 'PKR', status: 'Completed', block: 'None', location: 'Karachi' },
  { id: '10005436', date: '2026-07-22', soldTo: 'Multan Paints', material: 'M-4022 (Solvents)', netValue: 3400000.00, currency: 'PKR', status: 'In Process', block: 'None', location: 'Multan' },
];

export default function SalesOrdersPage() {
  const [items, setItems] = useState(initialOrders);

  const columns = [
    { key: 'id', title: 'Order Number', render: (item) => <span className="font-mono font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-100">{item.id}</span> },
    { key: 'date', title: 'Date' },
    { key: 'soldTo', title: 'Sold-To Party', render: (item) => <span className="font-medium text-slate-800">{item.soldTo}</span> },
    { key: 'location', title: 'Location' },
    { key: 'material', title: 'Material' },
    { key: 'netValue', title: 'Net Value', render: (item) => <span className="font-semibold text-slate-800 text-right">PKR {Number(item.netValue).toLocaleString()}</span> },
    { key: 'status', title: 'Overall Status', render: (item) => {
      const getStatusColor = (status) => {
        switch (status) {
          case 'Completed': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
          case 'In Process': return 'bg-blue-100 text-blue-700 border-blue-200';
          case 'On Hold': return 'bg-amber-100 text-amber-700 border-amber-200';
          default: return 'bg-slate-100 text-slate-700 border-slate-200';
        }
      };
      return <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(item.status)}`}>{item.status}</span>;
    }},
    { key: 'block', title: 'Delivery Block' }
  ];

  const formFields = [
    { key: 'id', label: 'Order ID', type: 'text' },
    { key: 'date', label: 'Date', type: 'date' },
    { key: 'soldTo', label: 'Sold-To Party', type: 'text' },
    { key: 'location', label: 'Location', type: 'select', options: ['Karachi', 'Lahore', 'Islamabad', 'Multan', 'Peshawar'] },
    { key: 'material', label: 'Material', type: 'text' },
    { key: 'netValue', label: 'Net Value', type: 'number' },
    { key: 'status', label: 'Status', type: 'select', options: ['Completed', 'In Process', 'On Hold'] },
    { key: 'block', label: 'Block', type: 'select', options: ['None', 'Credit Limit', 'Quality Check'] }
  ];

  const getIconColor = (color) => {
    switch (color) {
      case 'emerald': return 'bg-emerald-50 text-emerald-600';
      case 'blue': return 'bg-blue-50 text-blue-600';
      case 'amber': return 'bg-amber-50 text-amber-600';
      case 'teal': return 'bg-teal-50 text-teal-600';
      default: return 'bg-slate-50 text-slate-600';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-100/50 rounded-lg">
            <FileText className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Sales Orders (VA03)
            </h1>
            <p className="text-sm text-slate-500 font-medium">Manage and track customer orders</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Orders (MTD)', value: '1,248', change: '+12.5%', icon: FileText, color: 'emerald' },
          { label: 'Open Value (PKR)', value: 'Rs 48.5M', change: '-2.4%', icon: Clock, color: 'blue' },
          { label: 'Blocked Orders', value: '14', change: '+3', icon: AlertCircle, color: 'amber' },
          { label: 'Deliveries Today', value: '156', change: '+18.2%', icon: Truck, color: 'teal' },
        ].map((kpi, index) => (
          <div key={index} className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
            <div className="flex items-center justify-between group h-full">
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">{kpi.label}</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-bold text-slate-800">{kpi.value}</h3>
                  <span className={`text-xs font-semibold ${kpi.change.startsWith('+') ? 'text-emerald-500' : 'text-red-500'}`}>
                    {kpi.change}
                  </span>
                </div>
              </div>
              <div className={`p-3 rounded-lg group-hover:scale-110 transition-transform ${getIconColor(kpi.color)}`}>
                <kpi.icon className="w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
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
