"use client";

import React, { useState } from 'react';
import { SmartTable, Column, FormField } from '@/components/SmartTable';
import { FileText, CheckCircle2, Clock, XCircle } from 'lucide-react';

const initialInvoices = [
  { id: '90038100', date: '2026-07-20', payer: 'Karachi Traders', netValue: 1250000.00, tax: 225000.00, currency: 'PKR', status: 'Cleared', region: 'South' },
  { id: '90038101', date: '2026-07-21', payer: 'Lahore Autos', netValue: 850000.00, tax: 153000.00, currency: 'PKR', status: 'Pending', region: 'Central' },
  { id: '90038102', date: '2026-07-21', payer: 'Islamabad Construction', netValue: 420000.50, tax: 75600.09, currency: 'PKR', status: 'Cleared', region: 'North' },
  { id: '90038103', date: '2026-07-22', payer: 'Pak Suzuki', netValue: 2100000.00, tax: 378000.00, currency: 'PKR', status: 'Overdue', region: 'South' },
];

export default function InvoicesPage() {
  const [items, setItems] = useState(initialInvoices);

  const columns = [
    { key: 'id', title: 'Invoice Number', render: (item) => (
      <div className="flex items-center gap-2">
        <FileText className="w-4 h-4 text-slate-400" />
        <span className="font-medium text-emerald-600">{item.id}</span>
      </div>
    )},
    { key: 'date', title: 'Date' },
    { key: 'payer', title: 'Payer', render: (item) => <span className="font-medium text-slate-800">{item.payer}</span> },
    { key: 'region', title: 'Region' },
    { key: 'netValue', title: 'Net Value', render: (item) => <span className="font-semibold text-slate-800 text-right">PKR {Number(item.netValue).toLocaleString()}</span> },
    { key: 'tax', title: 'Tax Amount', render: (item) => <span className="text-slate-500 text-right">PKR {Number(item.tax).toLocaleString()}</span> },
    { key: 'status', title: 'Status', render: (item) => {
      const getStatusStyle = (status) => {
        switch (status) {
          case 'Cleared': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
          case 'Pending': return 'bg-amber-100 text-amber-700 border-amber-200';
          case 'Overdue': return 'bg-rose-100 text-rose-700 border-rose-200';
          default: return 'bg-slate-100 text-slate-700 border-slate-200';
        }
      };
      return <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusStyle(item.status)}`}>{item.status}</span>;
    }}
  ];

  const formFields = [
    { key: 'id', label: 'Invoice ID', type: 'text' },
    { key: 'date', label: 'Date', type: 'date' },
    { key: 'payer', label: 'Payer Name', type: 'text' },
    { key: 'region', label: 'Region', type: 'select', options: ['North', 'Central', 'South'] },
    { key: 'netValue', label: 'Net Value', type: 'number' },
    { key: 'tax', label: 'Tax Amount', type: 'number' },
    { key: 'status', label: 'Status', type: 'select', options: ['Cleared', 'Pending', 'Overdue'] }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Billing Documents
          </h1>
          <p className="text-sm text-slate-500 mt-1">Manage and track customer invoices</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: 'Total Revenue YTD', value: 'PKR 2.45B', change: '+12.5%', type: 'positive' },
          { title: 'Invoices Issued (MTD)', value: '1,432', change: '+5.2%', type: 'positive' },
          { title: 'Pending Clearing', value: 'PKR 185M', change: '-2.1%', type: 'positive' },
          { title: 'Overdue Amount', value: 'PKR 42M', change: '+8.4%', type: 'negative' },
        ].map((kpi, idx) => (
          <div key={idx} className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
            <h3 className="text-sm font-medium text-slate-500">{kpi.title}</h3>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-800">{kpi.value}</span>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${kpi.type === 'positive' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                {kpi.change}
              </span>
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
