"use client";

import React, { useState } from "react";
import { Search, Filter, Download, ArrowRightLeft, Package, Clock, CheckCircle2, ChevronRight, RefreshCw, Upload, AlertCircle } from "lucide-react";

// Mock Data
const mockTransfers = [
  { doc: "TR-50019234", date: "2026-07-24", material: "MAT-2001 (Polymer Resin)", qty: 5000, supplyPlant: "PL10 (Houston)", receivePlant: "PL20 (Dallas)", mvtType: "301" },
  { doc: "TR-50019235", date: "2026-07-24", material: "MAT-2044 (Catalyst B)", qty: 150, supplyPlant: "PL10 (Houston)", receivePlant: "PL10 (Houston)", mvtType: "311" },
  { doc: "TR-50019236", date: "2026-07-23", material: "MAT-1055 (Base Oil)", qty: 12000, supplyPlant: "PL30 (Chicago)", receivePlant: "PL40 (Detroit)", mvtType: "301" },
  { doc: "TR-50019237", date: "2026-07-23", material: "MAT-8821 (Solvent X)", qty: 800, supplyPlant: "PL20 (Dallas)", receivePlant: "PL10 (Houston)", mvtType: "301" },
  { doc: "TR-50019238", date: "2026-07-22", material: "MAT-2001 (Polymer Resin)", qty: 2500, supplyPlant: "PL40 (Detroit)", receivePlant: "PL40 (Detroit)", mvtType: "311" },
  { doc: "TR-50019239", date: "2026-07-22", material: "MAT-3392 (Additives)", qty: 450, supplyPlant: "PL10 (Houston)", receivePlant: "PL30 (Chicago)", mvtType: "301" },
  { doc: "TR-50019240", date: "2026-07-21", material: "MAT-1055 (Base Oil)", qty: 6000, supplyPlant: "PL30 (Chicago)", receivePlant: "PL30 (Chicago)", mvtType: "311" },
  { doc: "TR-50019241", date: "2026-07-21", material: "MAT-7743 (Packaging Box)", qty: 15000, supplyPlant: "PL20 (Dallas)", receivePlant: "PL40 (Detroit)", mvtType: "301" },
  { doc: "TR-50019242", date: "2026-07-20", material: "MAT-2044 (Catalyst B)", qty: 300, supplyPlant: "PL10 (Houston)", receivePlant: "PL20 (Dallas)", mvtType: "301" },
  { doc: "TR-50019243", date: "2026-07-20", material: "MAT-8821 (Solvent X)", qty: 1200, supplyPlant: "PL40 (Detroit)", receivePlant: "PL10 (Houston)", mvtType: "301" },
  { doc: "TR-50019244", date: "2026-07-19", material: "MAT-2001 (Polymer Resin)", qty: 8500, supplyPlant: "PL30 (Chicago)", receivePlant: "PL20 (Dallas)", mvtType: "301" },
  { doc: "TR-50019245", date: "2026-07-19", material: "MAT-3392 (Additives)", qty: 600, supplyPlant: "PL10 (Houston)", receivePlant: "PL10 (Houston)", mvtType: "311" },
  { doc: "TR-50019246", date: "2026-07-18", material: "MAT-1055 (Base Oil)", qty: 4000, supplyPlant: "PL20 (Dallas)", receivePlant: "PL30 (Chicago)", mvtType: "301" },
  { doc: "TR-50019247", date: "2026-07-18", material: "MAT-7743 (Packaging Box)", qty: 25000, supplyPlant: "PL40 (Detroit)", receivePlant: "PL40 (Detroit)", mvtType: "311" },
  { doc: "TR-50019248", date: "2026-07-17", material: "MAT-2044 (Catalyst B)", qty: 50, supplyPlant: "PL30 (Chicago)", receivePlant: "PL10 (Houston)", mvtType: "301" }
];

export default function StockTransfersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTransfers = mockTransfers.filter(t => 
    t.doc.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.material.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.supplyPlant.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.receivePlant.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      
      {/* Header Container */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
            <ArrowRightLeft className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Stock Transfers
            </h1>
            <p className="text-sm text-slate-500 font-medium">MM Movement Types 301 & 311</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Search transfers..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 w-64 bg-slate-100/50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-slate-400"
            />
          </div>
          <button className="p-2 hover:bg-slate-100 rounded-lg border border-slate-200 text-slate-600 transition-colors tooltip" title="Filter">
            <Filter className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Transfers (Mtd)", value: "1,248", trend: "+12%", trendUp: true, icon: ArrowRightLeft, color: "text-emerald-600", bg: "bg-emerald-100" },
          { label: "Pending Receipts", value: "45", trend: "-5%", trendUp: false, icon: Clock, color: "text-amber-600", bg: "bg-amber-100" },
          { label: "Plant-to-Plant (301)", value: "892", trend: "+8%", trendUp: true, icon: Package, color: "text-blue-600", bg: "bg-blue-100" },
          { label: "Storage Loc (311)", value: "356", trend: "+15%", trendUp: true, icon: RefreshCw, color: "text-purple-600", bg: "bg-purple-100" },
        ].map((kpi, i) => (
          <div key={i} className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">{kpi.label}</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-bold text-slate-800">{kpi.value}</h3>
                  <span className={`text-xs font-semibold ${kpi.trendUp ? 'text-emerald-600' : 'text-red-500'}`}>
                    {kpi.trend}
                  </span>
                </div>
              </div>
              <div className={`p-2 rounded-lg ${kpi.bg} ${kpi.color}`}>
                <kpi.icon className="w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid Container */}
      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="overflow-auto flex-1">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Transfer Doc</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Date</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Movement Type</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Material</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Qty</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Supplying Plant</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Receiving Plant</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-center">Status</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredTransfers.map((t, idx) => (
                <tr key={idx} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer group">
                  <td className="px-6 py-3">
                    <div className="font-medium text-emerald-700">{t.doc}</div>
                  </td>
                  <td className="px-6 py-3">
                    <div className="text-sm text-slate-600">{t.date}</div>
                  </td>
                  <td className="px-6 py-3">
                    <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-semibold ${t.mvtType === '301' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>
                      {t.mvtType}
                    </span>
                  </td>
                  <td className="px-6 py-3">
                    <div className="text-sm font-medium text-slate-800">{t.material.split(' ')[0]}</div>
                    <div className="text-xs text-slate-500">{t.material.substring(t.material.indexOf(' ')+1).replace(/[()]/g, '')}</div>
                  </td>
                  <td className="px-6 py-3 text-right">
                    <div className="text-sm font-semibold text-slate-800">{t.qty.toLocaleString()}</div>
                    <div className="text-xs text-slate-500">KG</div>
                  </td>
                  <td className="px-6 py-3">
                    <div className="text-sm text-slate-700">{t.supplyPlant}</div>
                  </td>
                  <td className="px-6 py-3">
                    <div className="text-sm text-slate-700">{t.receivePlant}</div>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <div className="inline-flex items-center justify-center">
                       {idx % 5 === 0 ? (
                         <div className="flex items-center gap-1 text-amber-600 bg-amber-50 px-2 py-1 rounded-full text-xs font-medium border border-amber-200">
                           <Clock className="w-3 h-3" /> In Transit
                         </div>
                       ) : (
                         <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full text-xs font-medium border border-emerald-200">
                           <CheckCircle2 className="w-3 h-3" /> Completed
                         </div>
                       )}
                    </div>
                  </td>
                  <td className="px-6 py-3 text-right">
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredTransfers.length === 0 && (
             <div className="flex flex-col items-center justify-center py-16 text-slate-500">
               <Package className="w-12 h-12 mb-4 text-slate-300" />
               <p className="text-lg font-medium">No transfers found</p>
               <p className="text-sm">Try adjusting your search criteria</p>
             </div>
          )}
        </div>
        
        {/* Pagination/Footer */}
        <div className="border-t border-slate-200/60 bg-slate-50/50 p-4 flex items-center justify-between text-sm text-slate-600">
           <div>
             Showing <span className="font-semibold text-slate-800">1</span> to <span className="font-semibold text-slate-800">{filteredTransfers.length}</span> of <span className="font-semibold text-slate-800">{mockTransfers.length}</span> entries
           </div>
           <div className="flex items-center gap-2">
             <button className="px-3 py-1 border border-slate-200 rounded bg-white hover:bg-slate-50 text-slate-400 disabled:opacity-50" disabled>Previous</button>
             <button className="px-3 py-1 border border-slate-200 rounded bg-emerald-50 text-emerald-700 font-medium">1</button>
             <button className="px-3 py-1 border border-slate-200 rounded bg-white hover:bg-slate-50">2</button>
             <button className="px-3 py-1 border border-slate-200 rounded bg-white hover:bg-slate-50">Next</button>
           </div>
        </div>
      </div>
    </div>
  );
}
