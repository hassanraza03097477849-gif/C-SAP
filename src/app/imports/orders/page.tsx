"use client";

import React, { useState } from 'react';
import { Package, Truck, Clock, CheckCircle, Search, Filter, Download } from 'lucide-react';
import { SmartTable, Column, FormField } from '@/components/SmartTable';

const kpis = [
  { title: "Total Import POs", value: "342", trend: "+12%", icon: Package, color: "text-blue-500" },
  { title: "In Transit", value: "85", trend: "-3%", icon: Truck, color: "text-amber-500" },
  { title: "Pending Customs", value: "24", trend: "+5%", icon: Clock, color: "text-purple-500" },
  { title: "Cleared Today", value: "12", trend: "+18%", icon: CheckCircle, color: "text-emerald-500" }
];

export default function ImportsOrdersPage() {
  const [items, setItems] = useState([
    { po: "4500012934", date: "2026-07-20", supplier: "Karachi Chemicals", material: "Industrial Solvents", quantity: "5,000 L", delivery: "2026-08-15", origin: "Pakistan", status: "In Transit" },
    { po: "4500012935", date: "2026-07-21", supplier: "Lahore Polymers", material: "HDPE Granules", quantity: "20,000 kg", delivery: "2026-09-01", origin: "Pakistan", status: "Pending Customs" },
    { po: "4500012936", date: "2026-07-22", supplier: "EuroTrade AG", material: "Catalysts", quantity: "500 kg", delivery: "2026-08-05", origin: "Switzerland", status: "Cleared" },
    { po: "4500012937", date: "2026-07-22", supplier: "SinoChem", material: "Lubricant Additives", quantity: "10,000 L", delivery: "2026-08-20", origin: "China", status: "In Transit" },
    { po: "4500012938", date: "2026-07-23", supplier: "PakGas", material: "Specialty Gases", quantity: "200 Cylinders", delivery: "2026-07-30", origin: "Pakistan", status: "In Transit" }
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const columns: Column[] = [
    { key: "po", label: "PO Number" },
    { key: "date", label: "Date" },
    { key: "supplier", label: "Supplier" },
    { key: "material", label: "Material" },
    { key: "quantity", label: "Quantity" },
    { key: "delivery", label: "Delivery Date" },
    { key: "origin", label: "Origin" },
    { key: "status", label: "Status", format: (value) => (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border
        ${value === 'Cleared' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 
          value === 'In Transit' ? 'bg-amber-50 text-amber-700 border-amber-200' : 
          value === 'Pending Customs' ? 'bg-purple-50 text-purple-700 border-purple-200' : 
          'bg-slate-100 text-slate-700 border-slate-200'}`}>
        {value}
      </span>
    )}
  ];

  const formFields: FormField[] = [
    { key: "po", label: "PO Number", type: "text", required: true },
    { key: "date", label: "Date", type: "date", required: true },
    { key: "supplier", label: "Supplier", type: "text", required: true },
    { key: "material", label: "Material", type: "text" },
    { key: "quantity", label: "Quantity", type: "text" },
    { key: "delivery", label: "Delivery Date", type: "date" },
    { key: "origin", label: "Origin", type: "text" },
    { key: "status", label: "Status", type: "select", options: ["In Transit", "Pending Customs", "Cleared", "Order Placed"], required: true }
  ];

  const filteredItems = items.filter(item => item.po.toLowerCase().includes(searchTerm.toLowerCase()) || item.supplier.toLowerCase().includes(searchTerm.toLowerCase()) || item.material.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
          SAP Import Orders
        </h1>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors text-sm font-medium">
            <Filter size={16} /> Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors text-sm font-medium shadow-md shadow-emerald-500/20">
            <Download size={16} /> Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, idx) => (
          <div key={idx} className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">{kpi.title}</p>
                <h3 className="text-2xl font-bold mt-1 text-slate-800">{kpi.value}</h3>
              </div>
              <div className={`p-2 rounded-lg bg-slate-50 ${kpi.color}`}>
                <kpi.icon size={20} />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className={`text-xs font-semibold ${kpi.trend.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                {kpi.trend}
              </span>
              <span className="text-xs text-slate-400">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="p-4 border-b border-slate-200/60 flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search PO Number, Supplier, or Material..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-slate-800 placeholder:text-slate-400"
            />
          </div>
        </div>
        
        <SmartTable data={filteredItems} columns={columns} formFields={formFields} onAdd={(newItem) => setItems([newItem, ...items])} />
      </div>
    </div>
  );
}