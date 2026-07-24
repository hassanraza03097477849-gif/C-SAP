"use client";

import React, { useState } from 'react';
import { 
  Package, 
  AlertTriangle, 
  TrendingDown, 
  ShoppingCart,
  Search,
  Filter,
  Download,
  MoreVertical,
  ArrowRight
} from 'lucide-react';
import { SmartTable, Column, FormField } from '@/components/SmartTable';

const columns: Column[] = [
  { header: 'Status', accessor: 'status' },
  { header: 'Material', accessor: 'material' },
  { header: 'Plant', accessor: 'plant' },
  { header: 'MRP Type', accessor: 'mrpType' },
  { header: 'Current Stock', accessor: 'stock' },
  { header: 'Safety Stock', accessor: 'safetyStock' },
  { header: 'Reorder Point', accessor: 'reorderPoint' },
  { header: 'Proposal Qty', accessor: 'proposalQty' }
];

const formFields: FormField[] = [
  { name: 'status', label: 'Status', type: 'select', options: ['critical', 'warning', 'ok'] },
  { name: 'material', label: 'Material', type: 'text', required: true },
  { name: 'plant', label: 'Plant', type: 'select', options: ['1000 (Faisalabad)', '2000 (Karachi)', '3000 (Lahore)'] },
  { name: 'mrpType', label: 'MRP Type', type: 'select', options: ['VB', 'PD'] },
  { name: 'stock', label: 'Current Stock', type: 'number' },
  { name: 'safetyStock', label: 'Safety Stock', type: 'number' },
  { name: 'reorderPoint', label: 'Reorder Point', type: 'number' },
  { name: 'proposalQty', label: 'Proposal Qty', type: 'number' }
];

// Mock Data simulating SAP MD04
const mockData = [
  { id: 1, material: 'RM-10045 (Steel Sheets)', plant: '1000 (Faisalabad)', mrpType: 'VB', stock: 150, safetyStock: 200, reorderPoint: 300, proposalQty: 500, status: 'critical' },
  { id: 2, material: 'RM-10046 (Aluminum)', plant: '1000 (Faisalabad)', mrpType: 'VB', stock: 420, safetyStock: 100, reorderPoint: 250, proposalQty: 0, status: 'ok' },
  { id: 3, material: 'PKG-2001 (Boxes)', plant: '2000 (Berlin)', mrpType: 'PD', stock: 50, safetyStock: 100, reorderPoint: 150, proposalQty: 1000, status: 'critical' },
  { id: 4, material: 'CHEM-001 (Solvent)', plant: '1000 (Faisalabad)', mrpType: 'VB', stock: 300, safetyStock: 300, reorderPoint: 400, proposalQty: 200, status: 'warning' },
  { id: 5, material: 'RM-10047 (Copper Wire)', plant: '3000 (Munich)', mrpType: 'PD', stock: 1200, safetyStock: 500, reorderPoint: 800, proposalQty: 0, status: 'ok' },
  { id: 6, material: 'PART-A (Valves)', plant: '1000 (Faisalabad)', mrpType: 'VB', stock: 85, safetyStock: 150, reorderPoint: 200, proposalQty: 300, status: 'critical' },
  { id: 7, material: 'PART-B (Pumps)', plant: '2000 (Berlin)', mrpType: 'PD', stock: 450, safetyStock: 200, reorderPoint: 350, proposalQty: 0, status: 'ok' },
  { id: 8, material: 'PKG-2002 (Pallets)', plant: '3000 (Munich)', mrpType: 'VB', stock: 15, safetyStock: 50, reorderPoint: 100, proposalQty: 200, status: 'critical' },
  { id: 9, material: 'RM-10048 (Plastic Resin)', plant: '1000 (Faisalabad)', mrpType: 'PD', stock: 2800, safetyStock: 1000, reorderPoint: 1500, proposalQty: 0, status: 'ok' },
  { id: 10, material: 'CHEM-002 (Catalyst)', plant: '2000 (Berlin)', mrpType: 'VB', stock: 110, safetyStock: 100, reorderPoint: 150, proposalQty: 50, status: 'warning' },
  { id: 11, material: 'PART-C (Sensors)', plant: '3000 (Munich)', mrpType: 'PD', stock: 95, safetyStock: 100, reorderPoint: 120, proposalQty: 100, status: 'critical' },
  { id: 12, material: 'RM-10049 (Glass)', plant: '1000 (Faisalabad)', mrpType: 'VB', stock: 600, safetyStock: 300, reorderPoint: 450, proposalQty: 0, status: 'ok' },
  { id: 13, material: 'PKG-2003 (Tape)', plant: '2000 (Berlin)', mrpType: 'PD', stock: 4000, safetyStock: 2000, reorderPoint: 3000, proposalQty: 0, status: 'ok' },
  { id: 14, material: 'CHEM-003 (Reagent)', plant: '3000 (Munich)', mrpType: 'VB', stock: 20, safetyStock: 50, reorderPoint: 100, proposalQty: 150, status: 'critical' },
  { id: 15, material: 'PART-D (Motors)', plant: '1000 (Faisalabad)', mrpType: 'PD', stock: 180, safetyStock: 150, reorderPoint: 250, proposalQty: 100, status: 'warning' },
];

export default function ReorderPlanning() {
  const [items, setItems] = useState(mockData);

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      {/* Header Container */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Reorder Planning
          </h1>
          <p className="text-slate-500 mt-1">MD04 Material Requirements Planning & Stock Ledger</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-slate-700 font-medium shadow-sm">
            <Filter size={18} />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-slate-700 font-medium shadow-sm">
            <Download size={18} />
            Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-md shadow-emerald-600/20 font-medium">
            <TrendingDown size={18} />
            Run MRP
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Materials Below Safety</p>
              <h3 className="text-2xl font-bold text-slate-800 mt-1">6</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
              <AlertTriangle size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-rose-600 font-medium flex items-center gap-1">
              +2 <ArrowRight size={14} className="-rotate-45" />
            </span>
            <span className="text-slate-500 ml-2">vs yesterday</span>
          </div>
        </div>

        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Pending Order Proposals</p>
              <h3 className="text-2xl font-bold text-slate-800 mt-1">12</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
              <ShoppingCart size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-amber-600 font-medium flex items-center gap-1">
              +4 <ArrowRight size={14} className="-rotate-45" />
            </span>
            <span className="text-slate-500 ml-2">require approval</span>
          </div>
        </div>

        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Total Capital Tied</p>
              <h3 className="text-2xl font-bold text-slate-800 mt-1">€1.4M</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <Package size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-emerald-600 font-medium flex items-center gap-1">
              -1.2% <ArrowRight size={14} className="rotate-45" />
            </span>
            <span className="text-slate-500 ml-2">vs last month</span>
          </div>
        </div>

        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">MRP Run Success Rate</p>
              <h3 className="text-2xl font-bold text-slate-800 mt-1">99.8%</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
              <TrendingDown size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-slate-600 font-medium flex items-center gap-1">
              Last run:
            </span>
            <span className="text-slate-500 ml-2">Today, 04:00 AM</span>
          </div>
        </div>
      </div>

      {/* Main Grid Container */}
      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/50">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search material or plant..." 
              className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white w-72 text-sm"
            />
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1.5 bg-rose-50 text-rose-700 rounded-full text-xs font-semibold border border-rose-200 cursor-pointer hover:bg-rose-100 transition-colors">Critical (6)</span>
            <span className="px-3 py-1.5 bg-amber-50 text-amber-700 rounded-full text-xs font-semibold border border-amber-200 cursor-pointer hover:bg-amber-100 transition-colors">Warning (3)</span>
            <span className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold border border-slate-200 cursor-pointer hover:bg-slate-200 transition-colors">All (15)</span>
          </div>
        </div>

        <div className="flex-1 overflow-auto custom-scrollbar flex flex-col">
          <SmartTable data={items} columns={columns} formFields={formFields} onAdd={(newItem) => setItems([newItem, ...items])} />
        </div>
      </div>
    </div>
  );
}