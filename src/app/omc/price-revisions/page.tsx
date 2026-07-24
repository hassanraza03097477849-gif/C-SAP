"use client";

import React, { useState } from "react";
import { SmartTable, Column, FormField } from '@/components/SmartTable';
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  FileText,
  Search,
  Filter,
  Download,
  AlertCircle,
  Activity,
  Calendar,
  Layers,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// Mock Data Generation
const mockData = [
  { id: "REV-1045", date: "2026-07-15", product: "PMG (Petrol)", exRefinery: 185.45, ifem: 4.25, dealerMargin: 8.50, exDepot: 198.20, retail: 202.45, status: "Active" },
  { id: "REV-1044", date: "2026-07-01", product: "HSD (Diesel)", exRefinery: 192.10, ifem: 3.80, dealerMargin: 7.20, exDepot: 203.10, retail: 207.25, status: "Active" },
  { id: "REV-1043", date: "2026-06-16", product: "PMG (Petrol)", exRefinery: 188.30, ifem: 4.25, dealerMargin: 8.50, exDepot: 201.05, retail: 205.30, status: "Archived" },
  { id: "REV-1042", date: "2026-06-16", product: "HSD (Diesel)", exRefinery: 190.50, ifem: 3.80, dealerMargin: 7.20, exDepot: 201.50, retail: 205.65, status: "Archived" },
  { id: "REV-1041", date: "2026-06-01", product: "HOBC (Hi-Octane)", exRefinery: 215.20, ifem: 5.00, dealerMargin: 10.50, exDepot: 230.70, retail: 236.45, status: "Active" },
  { id: "REV-1040", date: "2026-06-01", product: "Kerosene", exRefinery: 165.40, ifem: 2.10, dealerMargin: 4.50, exDepot: 172.00, retail: 175.20, status: "Active" },
  { id: "REV-1039", date: "2026-05-16", product: "PMG (Petrol)", exRefinery: 191.00, ifem: 4.25, dealerMargin: 8.00, exDepot: 203.25, retail: 207.50, status: "Archived" },
  { id: "REV-1038", date: "2026-05-16", product: "HSD (Diesel)", exRefinery: 195.30, ifem: 3.80, dealerMargin: 7.00, exDepot: 206.10, retail: 210.25, status: "Archived" },
  { id: "REV-1037", date: "2026-05-01", product: "PMG (Petrol)", exRefinery: 189.50, ifem: 4.25, dealerMargin: 8.00, exDepot: 201.75, retail: 206.00, status: "Archived" },
  { id: "REV-1036", date: "2026-05-01", product: "HSD (Diesel)", exRefinery: 193.10, ifem: 3.80, dealerMargin: 7.00, exDepot: 203.90, retail: 208.05, status: "Archived" },
  { id: "REV-1035", date: "2026-04-16", product: "LDO (Light Diesel)", exRefinery: 155.60, ifem: 1.50, dealerMargin: 3.20, exDepot: 160.30, retail: 163.15, status: "Active" },
  { id: "REV-1034", date: "2026-04-01", product: "PMG (Petrol)", exRefinery: 180.20, ifem: 4.00, dealerMargin: 7.50, exDepot: 191.70, retail: 195.85, status: "Archived" },
  { id: "REV-1033", date: "2026-04-01", product: "HSD (Diesel)", exRefinery: 185.90, ifem: 3.50, dealerMargin: 6.80, exDepot: 196.20, retail: 200.35, status: "Archived" },
  { id: "REV-1032", date: "2026-03-16", product: "HOBC (Hi-Octane)", exRefinery: 205.80, ifem: 4.80, dealerMargin: 9.50, exDepot: 220.10, retail: 225.30, status: "Archived" },
  { id: "REV-1031", date: "2026-03-16", product: "Kerosene", exRefinery: 160.10, ifem: 2.00, dealerMargin: 4.10, exDepot: 166.20, retail: 169.50, status: "Archived" },
];

export default function OMCPriceRevisions() {
  const [items, setItems] = useState(mockData);

  const columns: Column[] = [
    { key: 'id', title: 'Revision ID', type: 'text' },
    { key: 'date', title: 'Effective Date', type: 'text' },
    { key: 'product', title: 'Product', type: 'text' },
    { key: 'exRefinery', title: 'Ex-Refinery (PKR)', type: 'number' },
    { key: 'ifem', title: 'IFEM (PKR)', type: 'number' },
    { key: 'dealerMargin', title: 'Dealer Margin (PKR)', type: 'number' },
    { key: 'exDepot', title: 'Ex-Depot (PKR)', type: 'number' },
    { key: 'retail', title: 'Retail Price (PKR)', type: 'number' },
    { key: 'status', title: 'Status', type: 'badge' },
  ];

  const formFields: FormField[] = [
    { name: 'id', label: 'Revision ID', type: 'text', required: true },
    { name: 'date', label: 'Effective Date', type: 'text', required: true },
    { name: 'product', label: 'Product', type: 'text', required: true },
    { name: 'exRefinery', label: 'Ex-Refinery', type: 'number', required: true },
    { name: 'ifem', label: 'IFEM', type: 'number', required: true },
    { name: 'dealerMargin', label: 'Dealer Margin', type: 'number', required: true },
    { name: 'exDepot', label: 'Ex-Depot', type: 'number', required: true },
    { name: 'retail', label: 'Retail Price', type: 'number', required: true },
    { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Archived'], required: true },
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
            <Activity size={28} />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Price Revisions Ledger
            </h1>
            <p className="text-slate-500 text-sm font-medium">OGRA & OMC Regulatory Pricing Data</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors shadow-sm text-sm font-medium">
            <Filter size={16} />
            Filters
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-sm shadow-emerald-200 text-sm font-medium">
            <Download size={16} />
            Export CSV
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Avg PMG Retail", value: "Rs. 204.31", trend: "+1.2%", icon: DollarSign, color: "text-emerald-500", bg: "bg-emerald-100" },
          { title: "Avg HSD Retail", value: "Rs. 206.26", trend: "-0.5%", icon: TrendingDown, color: "text-blue-500", bg: "bg-blue-100" },
          { title: "Active Revisions", value: "5", trend: "Current", icon: Layers, color: "text-amber-500", bg: "bg-amber-100" },
          { title: "Last Revision", value: "15 Jul 2026", trend: "On Time", icon: Calendar, color: "text-indigo-500", bg: "bg-indigo-100" },
        ].map((kpi, idx) => (
          <div key={idx} className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">{kpi.title}</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-bold text-slate-800">{kpi.value}</h3>
                  <span className={`text-xs font-semibold ${kpi.trend.includes('+') ? 'text-emerald-600' : kpi.trend.includes('-') ? 'text-red-500' : 'text-slate-500'}`}>
                    {kpi.trend}
                  </span>
                </div>
              </div>
              <div className={`p-3 rounded-full ${kpi.bg} ${kpi.color}`}>
                <kpi.icon size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid Container */}
      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <SmartTable 
          data={items} 
          columns={columns} 
          formFields={formFields} 
          onAdd={(newItem) => setItems([newItem, ...items])} 
        />
      </div>
    </div>
  );
}