"use client";

import React, { useState } from 'react';
import { Download, Filter, Search, RefreshCw, Plus, CheckCircle2, AlertCircle, TrendingUp, DollarSign, Package, FileText } from 'lucide-react';

const mockData = [
  { id: '1', material: 'Steel Coils', poRef: 'PO-10042', fob: 45000, freight: 2500, insurance: 450, duties: 1200, clearing: 300, finalCost: 49450, status: 'Completed' },
  { id: '2', material: 'Aluminum Sheets', poRef: 'PO-10043', fob: 32000, freight: 1800, insurance: 320, duties: 800, clearing: 250, finalCost: 35170, status: 'In Transit' },
  { id: '3', material: 'Copper Wire', poRef: 'PO-10044', fob: 78000, freight: 3500, insurance: 780, duties: 2100, clearing: 400, finalCost: 84780, status: 'Pending' },
  { id: '4', material: 'PVC Resin', poRef: 'PO-10045', fob: 15000, freight: 1200, insurance: 150, duties: 450, clearing: 200, finalCost: 17000, status: 'Completed' },
  { id: '5', material: 'Industrial Valves', poRef: 'PO-10046', fob: 24000, freight: 1600, insurance: 240, duties: 650, clearing: 220, finalCost: 26710, status: 'In Transit' },
  { id: '6', material: 'Lubricants', poRef: 'PO-10047', fob: 8500, freight: 800, insurance: 85, duties: 250, clearing: 150, finalCost: 9785, status: 'Completed' },
  { id: '7', material: 'Machine Parts', poRef: 'PO-10048', fob: 52000, freight: 2800, insurance: 520, duties: 1400, clearing: 350, finalCost: 57070, status: 'Pending' },
  { id: '8', material: 'Chemical Reagents', poRef: 'PO-10049', fob: 11000, freight: 950, insurance: 110, duties: 300, clearing: 180, finalCost: 12540, status: 'Completed' },
  { id: '9', material: 'Safety Equipment', poRef: 'PO-10050', fob: 6500, freight: 600, insurance: 65, duties: 180, clearing: 120, finalCost: 7465, status: 'In Transit' },
  { id: '10', material: 'Electronic Sensors', poRef: 'PO-10051', fob: 42000, freight: 1500, insurance: 420, duties: 1100, clearing: 280, finalCost: 45300, status: 'Pending' },
  { id: '11', material: 'Packaging Materials', poRef: 'PO-10052', fob: 18000, freight: 1100, insurance: 180, duties: 500, clearing: 210, finalCost: 20090, status: 'Completed' },
  { id: '12', material: 'Welding Supplies', poRef: 'PO-10053', fob: 9200, freight: 750, insurance: 92, duties: 280, clearing: 160, finalCost: 10482, status: 'In Transit' },
  { id: '13', material: 'Piping Components', poRef: 'PO-10054', fob: 36000, freight: 2100, insurance: 360, duties: 950, clearing: 290, finalCost: 39700, status: 'Completed' },
  { id: '14', material: 'Control Panels', poRef: 'PO-10055', fob: 65000, freight: 3100, insurance: 650, duties: 1800, clearing: 380, finalCost: 70930, status: 'Pending' },
  { id: '15', material: 'Rubber Gaskets', poRef: 'PO-10056', fob: 4800, freight: 450, insurance: 48, duties: 150, clearing: 110, finalCost: 5558, status: 'Completed' },
];

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'PKR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount);
};

export default function LandedCostPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = mockData.filter(item => 
    item.material.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.poRef.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Landed Cost Engine</h1>
          <p className="text-slate-500 text-sm mt-1">Real-time import cost calculation and tracking</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              placeholder="Search materials or PO..."
              className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 w-64 transition-all text-slate-800"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm shadow-emerald-600/20">
            <Plus className="w-4 h-4" />
            New Calculation
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-slate-500">Total Landed Cost (YTD)</h3>
            <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-800 mb-1">PKR 4,852,400</div>
          <div className="flex items-center text-xs text-emerald-600 font-medium">
            <TrendingUp className="w-3 h-3 mr-1" />
            <span>+12.5% vs last year</span>
          </div>
        </div>
        
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-slate-500">Active Imports</h3>
            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
              <Package className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-800 mb-1">124</div>
          <div className="flex items-center text-xs text-slate-500">
            <span>Across 8 ports</span>
          </div>
        </div>

        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-slate-500">Avg. Freight Cost %</h3>
            <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
              <RefreshCw className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-800 mb-1">6.8%</div>
          <div className="flex items-center text-xs text-emerald-600 font-medium">
            <TrendingUp className="w-3 h-3 mr-1 rotate-180" />
            <span>-1.2% vs last quarter</span>
          </div>
        </div>

        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-slate-500">Pending Clearances</h3>
            <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600">
              <FileText className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-800 mb-1">18</div>
          <div className="flex items-center text-xs text-amber-600 font-medium">
            <AlertCircle className="w-3 h-3 mr-1" />
            <span>5 requiring immediate action</span>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="flex items-center justify-between p-4 border-b border-slate-200/60">
          <h2 className="text-lg font-semibold text-slate-800">Landed Cost Ledger</h2>
          <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>
        
        <div className="flex-1 overflow-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap">Material</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap">PO Ref</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap text-right">FOB Value</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap text-right">Freight</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap text-right">Insurance</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap text-right">Customs Duties</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap text-right">Clearing Charges</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap text-right">Final Landed Cost</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredData.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer group">
                  <td className="px-6 py-3.5 text-sm font-medium text-slate-800 whitespace-nowrap">{row.material}</td>
                  <td className="px-6 py-3.5 text-sm text-slate-500 whitespace-nowrap">{row.poRef}</td>
                  <td className="px-6 py-3.5 text-sm text-slate-700 whitespace-nowrap text-right tabular-nums">{formatCurrency(row.fob)}</td>
                  <td className="px-6 py-3.5 text-sm text-slate-600 whitespace-nowrap text-right tabular-nums">{formatCurrency(row.freight)}</td>
                  <td className="px-6 py-3.5 text-sm text-slate-600 whitespace-nowrap text-right tabular-nums">{formatCurrency(row.insurance)}</td>
                  <td className="px-6 py-3.5 text-sm text-slate-600 whitespace-nowrap text-right tabular-nums">{formatCurrency(row.duties)}</td>
                  <td className="px-6 py-3.5 text-sm text-slate-600 whitespace-nowrap text-right tabular-nums">{formatCurrency(row.clearing)}</td>
                  <td className="px-6 py-3.5 text-sm font-semibold text-emerald-700 whitespace-nowrap text-right tabular-nums bg-emerald-50/30 group-hover:bg-emerald-50/60 transition-colors">{formatCurrency(row.finalCost)}</td>
                  <td className="px-6 py-3.5 whitespace-nowrap text-center">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                      row.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' :
                      row.status === 'In Transit' ? 'bg-blue-100 text-blue-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {row.status === 'Completed' && <CheckCircle2 className="w-3 h-3" />}
                      {row.status === 'In Transit' && <Package className="w-3 h-3" />}
                      {row.status === 'Pending' && <AlertCircle className="w-3 h-3" />}
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}