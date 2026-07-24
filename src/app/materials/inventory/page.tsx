"use client";

import React, { useState } from 'react';
import { 
  Package, 
  Search, 
  Filter, 
  Download,
  AlertTriangle,
  ArrowRightLeft,
  CheckCircle2,
  Box
} from 'lucide-react';
import { SmartTable, Column, FormField } from '@/components/SmartTable';

// Mock Data Generation
const mockInventoryData = Array.from({ length: 20 }).map((_, i) => ({
  id: `INV-${1000 + i}`,
  plant: ['1000 - Faisalabad', '2000 - Karachi', '3000 - Lahore'][Math.floor(Math.random() * 3)],
  storageLocation: ['0001 - Raw Materials', '0002 - Finished Goods', '0003 - Packaging'][Math.floor(Math.random() * 3)],
  material: `MAT-${10000 + i} - ${['Steel Sheet', 'Aluminium Coil', 'Copper Wire', 'Plastic Granules', 'Rubber Mat', 'Glass Panel'][Math.floor(Math.random() * 6)]}`,
  unrestricted: Math.floor(Math.random() * 10000),
  quality: Math.floor(Math.random() * 1000),
  blocked: Math.floor(Math.random() * 500),
  transit: Math.floor(Math.random() * 2000),
}));

const columns: Column<any>[] = [
  { key: 'plant', title: 'Plant' },
  { key: 'storageLocation', title: 'Storage Location' },
  { key: 'material', title: 'Material' },
  { key: 'unrestricted', title: 'Unrestricted Use' },
  { key: 'quality', title: 'Quality Inspection' },
  { key: 'blocked', title: 'Blocked Stock' },
  { key: 'transit', title: 'In Transit' }
];

const formFields: FormField[] = [
  { key: 'plant', label: 'Plant', type: 'select', options: ['1000 - Faisalabad', '2000 - Karachi', '3000 - Lahore'] },
  { key: 'storageLocation', label: 'Storage Location', type: 'select', options: ['0001 - Raw Materials', '0002 - Finished Goods', '0003 - Packaging'] },
  { key: 'material', label: 'Material', type: 'text' },
  { key: 'unrestricted', label: 'Unrestricted Use (PKR)', type: 'number' },
  { key: 'quality', label: 'Quality Inspection', type: 'number' },
  { key: 'blocked', label: 'Blocked Stock', type: 'number' },
  { key: 'transit', label: 'In Transit', type: 'number' }
];

export default function InventoryManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState(mockInventoryData);

  const filteredData = items.filter(item => 
    item.material.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.plant.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      
      {/* Header Container */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Inventory Management (MMBE)
          </h1>
          <p className="text-sm text-slate-500 mt-1">Real-time Stock Overview & Ledger</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search material or plant..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 w-64 transition-all text-slate-800"
            />
          </div>
          <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600 transition-colors">
            <Filter className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm shadow-emerald-600/20">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: 'Total Unrestricted Stock', value: '452,890', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-100' },
          { title: 'In Quality Inspection', value: '12,450', icon: AlertTriangle, color: 'text-amber-600', bg: 'bg-amber-100' },
          { title: 'Blocked Stock', value: '3,820', icon: Box, color: 'text-rose-600', bg: 'bg-rose-100' },
          { title: 'Stock In Transit', value: '45,120', icon: ArrowRightLeft, color: 'text-blue-600', bg: 'bg-blue-100' },
        ].map((kpi, idx) => (
          <div key={idx} className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">{kpi.title}</p>
                <h3 className="text-2xl font-bold text-slate-800">{kpi.value}</h3>
              </div>
              <div className={`p-2 rounded-lg ${kpi.bg}`}>
                <kpi.icon className={`w-5 h-5 ${kpi.color}`} />
              </div>
            </div>
            <div className="mt-4 flex items-center text-xs">
              <span className="text-emerald-600 font-medium flex items-center gap-1">
                +2.4%
              </span>
              <span className="text-slate-400 ml-2">vs last week</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid Container */}
      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <SmartTable data={filteredData} columns={columns} formFields={formFields} onAdd={(newItem) => setItems([newItem, ...items])} />
      </div>
    </div>
  );
}