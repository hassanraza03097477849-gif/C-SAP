"use client";

import React, { useState } from 'react';
import { SmartTable, Column, FormField } from '@/components/SmartTable';
import { 
  ArrowRightLeft, 
  CheckCircle2, 
  Clock, 
  Truck, 
  AlertCircle, 
  Filter, 
  Download, 
  RefreshCw,
  Search,
  Droplet
} from 'lucide-react';

const mockData = [
  { id: 'TRX-10291', date: '2026-07-24 10:15', source: 'Mumbai Central Depot', dest: 'Pune North Terminal', product: 'MS', qtyMt: 1250.00, qtyLiters: 1500000, status: 'In Transit' },
  { id: 'TRX-10292', date: '2026-07-24 09:45', source: 'Kochi Refinery', dest: 'Bangalore Depot', product: 'HSD', qtyMt: 3400.50, qtyLiters: 4050000, status: 'Received' },
  { id: 'TRX-10293', date: '2026-07-24 09:30', source: 'Jamnagar Pipeline', dest: 'Ahmedabad Terminal', product: 'ATF', qtyMt: 850.25, qtyLiters: 1020000, status: 'In Transit' },
  { id: 'TRX-10294', date: '2026-07-24 08:15', source: 'Chennai Port', dest: 'Chennai City Depot', product: 'MS', qtyMt: 500.00, qtyLiters: 600000, status: 'Delayed' },
  { id: 'TRX-10295', date: '2026-07-23 22:00', source: 'Delhi Pipeline Node', dest: 'Gurgaon Depot', product: 'HSD', qtyMt: 1100.00, qtyLiters: 1320000, status: 'Received' },
  { id: 'TRX-10296', date: '2026-07-23 20:30', source: 'Haldia Refinery', dest: 'Kolkata Depot 1', product: 'SKO', qtyMt: 250.00, qtyLiters: 300000, status: 'Received' },
  { id: 'TRX-10297', date: '2026-07-23 18:45', source: 'Mumbai Central Depot', dest: 'Nashik Terminal', product: 'MS', qtyMt: 680.00, qtyLiters: 816000, status: 'In Transit' },
  { id: 'TRX-10298', date: '2026-07-23 16:20', source: 'Pune North Terminal', dest: 'Satara Depot', product: 'HSD', qtyMt: 420.50, qtyLiters: 504600, status: 'Pending' },
  { id: 'TRX-10299', date: '2026-07-23 15:10', source: 'Kochi Refinery', dest: 'Trivandrum Depot', product: 'MS', qtyMt: 890.00, qtyLiters: 1068000, status: 'Received' },
  { id: 'TRX-10300', date: '2026-07-23 14:05', source: 'Jamnagar Pipeline', dest: 'Rajkot Terminal', product: 'HSD', qtyMt: 1560.75, qtyLiters: 1872900, status: 'In Transit' },
  { id: 'TRX-10301', date: '2026-07-23 12:30', source: 'Chennai City Depot', dest: 'Vellore Terminal', product: 'ATF', qtyMt: 300.00, qtyLiters: 360000, status: 'Received' },
  { id: 'TRX-10302', date: '2026-07-23 11:15', source: 'Gurgaon Depot', dest: 'Rohtak Depot', product: 'MS', qtyMt: 450.25, qtyLiters: 540300, status: 'In Transit' },
  { id: 'TRX-10303', date: '2026-07-23 09:50', source: 'Kolkata Depot 1', dest: 'Asansol Terminal', product: 'HSD', qtyMt: 780.00, qtyLiters: 936000, status: 'Delayed' },
  { id: 'TRX-10304', date: '2026-07-23 08:25', source: 'Nashik Terminal', dest: 'Dhule Depot', product: 'MS', qtyMt: 320.00, qtyLiters: 384000, status: 'Received' },
  { id: 'TRX-10305', date: '2026-07-23 07:10', source: 'Satara Depot', dest: 'Kolhapur Terminal', product: 'HSD', qtyMt: 540.50, qtyLiters: 648600, status: 'Pending' },
  { id: 'TRX-10306', date: '2026-07-22 23:45', source: 'Trivandrum Depot', dest: 'Kanyakumari Depot', product: 'MS', qtyMt: 210.00, qtyLiters: 252000, status: 'Received' },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Received':
      return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700 border border-emerald-200"><CheckCircle2 className="w-3.5 h-3.5" /> Received</span>;
    case 'In Transit':
      return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 border border-blue-200"><Truck className="w-3.5 h-3.5" /> In Transit</span>;
    case 'Delayed':
      return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700 border border-red-200"><AlertCircle className="w-3.5 h-3.5" /> Delayed</span>;
    case 'Pending':
      return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700 border border-amber-200"><Clock className="w-3.5 h-3.5" /> Pending</span>;
    default:
      return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">{status}</span>;
  }
};

export default function FuelMovementPage() {
  const [items, setItems] = useState(mockData);

  const columns: Column[] = [
    { key: 'id', title: 'Transfer ID', type: 'text' },
    { key: 'date', title: 'Date', type: 'text' },
    { key: 'source', title: 'Source Depot', type: 'text' },
    { key: 'dest', title: 'Dest Depot', type: 'text' },
    { key: 'product', title: 'Product', type: 'badge' },
    { key: 'qtyMt', title: 'Qty (MT)', type: 'number' },
    { key: 'qtyLiters', title: 'Qty (Liters)', type: 'number' },
    { key: 'status', title: 'Status', type: 'badge' },
  ];

  const formFields: FormField[] = [
    { name: 'id', label: 'Transfer ID', type: 'text', required: true },
    { name: 'date', label: 'Date', type: 'text', required: true },
    { name: 'source', label: 'Source Depot', type: 'text', required: true },
    { name: 'dest', label: 'Dest Depot', type: 'text', required: true },
    { name: 'product', label: 'Product', type: 'select', options: ['MS', 'HSD', 'ATF', 'SKO'], required: true },
    { name: 'qtyMt', label: 'Qty (MT)', type: 'number', required: true },
    { name: 'qtyLiters', label: 'Qty (Liters)', type: 'number', required: true },
    { name: 'status', label: 'Status', type: 'select', options: ['In Transit', 'Received', 'Delayed', 'Pending'], required: true },
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      {/* Header container */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-100 rounded-lg">
            <ArrowRightLeft className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Fuel Movement Ledger</h1>
            <p className="text-sm text-slate-500 font-medium">Real-time depot & pipeline transfer tracking</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-semibold transition-colors">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-semibold transition-colors">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-semibold transition-colors shadow-md shadow-emerald-600/20">
            <RefreshCw className="w-4 h-4" />
            Sync Now
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-semibold text-slate-500">Total Volume In Transit</p>
              <h3 className="text-2xl font-bold text-slate-800 mt-1">45,280 MT</h3>
              <p className="text-xs text-emerald-600 font-medium mt-1 flex items-center gap-1">
                <ArrowRightLeft className="w-3 h-3" /> +12% vs last week
              </p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <Truck className="w-5 h-5 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-semibold text-slate-500">Active Transfers</p>
              <h3 className="text-2xl font-bold text-slate-800 mt-1">142</h3>
              <p className="text-xs text-emerald-600 font-medium mt-1 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> All systems nominal
              </p>
            </div>
            <div className="p-3 bg-emerald-50 rounded-lg">
              <Clock className="w-5 h-5 text-emerald-600" />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-semibold text-slate-500">Pipeline Flow Rate</p>
              <h3 className="text-2xl font-bold text-slate-800 mt-1">2,450 KL/h</h3>
              <p className="text-xs text-emerald-600 font-medium mt-1 flex items-center gap-1">
                <ArrowRightLeft className="w-3 h-3" /> Peak efficiency
              </p>
            </div>
            <div className="p-3 bg-violet-50 rounded-lg">
              <Droplet className="w-5 h-5 text-violet-600" />
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-semibold text-slate-500">Pending Approvals</p>
              <h3 className="text-2xl font-bold text-slate-800 mt-1">8</h3>
              <p className="text-xs text-amber-600 font-medium mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> Requires attention
              </p>
            </div>
            <div className="p-3 bg-amber-50 rounded-lg">
              <AlertCircle className="w-5 h-5 text-amber-600" />
            </div>
          </div>
        </div>
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