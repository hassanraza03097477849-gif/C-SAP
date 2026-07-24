"use client";

import React from 'react';
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

        <div className="flex-1 overflow-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Status</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Material</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Plant</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-center">MRP Type</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Current Stock</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Safety Stock</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Reorder Point</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Proposal Qty</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockData.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer">
                  <td className="px-6 py-3 whitespace-nowrap">
                    {row.status === 'critical' && <span className="flex w-3 h-3 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)]" title="Below Safety Stock"></span>}
                    {row.status === 'warning' && <span className="flex w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]" title="Below Reorder Point"></span>}
                    {row.status === 'ok' && <span className="flex w-3 h-3 rounded-full bg-emerald-500" title="Adequate Stock"></span>}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    <span className="font-semibold text-slate-800">{row.material.split(' (')[0]}</span>
                    <span className="text-slate-500 text-xs ml-2">({row.material.split(' (')[1]}</span>
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap text-sm text-slate-600 font-medium">{row.plant}</td>
                  <td className="px-6 py-3 whitespace-nowrap text-center">
                    <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-semibold border border-slate-200 shadow-sm">
                      {row.mrpType}
                    </span>
                  </td>
                  <td className={`px-6 py-3 whitespace-nowrap text-sm text-right font-bold ${row.stock < row.safetyStock ? 'text-rose-600' : row.stock < row.reorderPoint ? 'text-amber-600' : 'text-slate-800'}`}>
                    {row.stock.toLocaleString()}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap text-sm text-right text-slate-500 font-medium">{row.safetyStock.toLocaleString()}</td>
                  <td className="px-6 py-3 whitespace-nowrap text-sm text-right text-slate-500 font-medium">{row.reorderPoint.toLocaleString()}</td>
                  <td className="px-6 py-3 whitespace-nowrap text-sm text-right">
                    {row.proposalQty > 0 ? (
                      <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                        +{row.proposalQty.toLocaleString()}
                      </span>
                    ) : (
                      <span className="text-slate-400">-</span>
                    )}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap text-center">
                    <button className="p-1.5 hover:bg-slate-200 rounded-md text-slate-400 hover:text-slate-700 transition-colors">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Footer Pagination */}
        <div className="p-3 border-t border-slate-200 bg-slate-50/80 backdrop-blur flex justify-between items-center text-xs text-slate-500">
          <span className="font-medium">Showing 15 of 1,248 materials</span>
          <div className="flex gap-1.5">
            <button className="px-3 py-1.5 border border-slate-200 rounded-md hover:bg-slate-100 disabled:opacity-50 font-medium transition-colors" disabled>Prev</button>
            <button className="px-3 py-1.5 border border-slate-200 rounded-md bg-emerald-50 text-emerald-700 border-emerald-200 font-bold">1</button>
            <button className="px-3 py-1.5 border border-slate-200 rounded-md hover:bg-slate-100 font-medium transition-colors">2</button>
            <button className="px-3 py-1.5 border border-slate-200 rounded-md hover:bg-slate-100 font-medium transition-colors">3</button>
            <span className="px-2 py-1.5">...</span>
            <button className="px-3 py-1.5 border border-slate-200 rounded-md hover:bg-slate-100 font-medium transition-colors">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}