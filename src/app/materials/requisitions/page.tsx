"use client";

import React, { useState } from 'react';
import { 
  FileText, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  Search,
  Filter,
  Download,
  Plus
} from 'lucide-react';

const mockRequisitions = [
  { id: "10001928", item: "00010", material: "RAW-101 (Steel Sheets)", qty: 500, unit: "KG", req: "J. Smith", date: "2026-07-28", status: "Approved" },
  { id: "10001928", item: "00020", material: "RAW-102 (Aluminium)", qty: 250, unit: "KG", req: "J. Smith", date: "2026-07-28", status: "Approved" },
  { id: "10001929", item: "00010", material: "PACK-01 (Cardboard)", qty: 1000, unit: "EA", req: "M. Johnson", date: "2026-07-25", status: "Pending" },
  { id: "10001930", item: "00010", material: "CHEM-50 (Solvent X)", qty: 50, unit: "L", req: "R. Davis", date: "2026-08-01", status: "In Review" },
  { id: "10001931", item: "00010", material: "ELEC-220 (Motors)", qty: 10, unit: "EA", req: "K. Lee", date: "2026-07-30", status: "Rejected" },
  { id: "10001932", item: "00010", material: "RAW-101 (Steel Sheets)", qty: 300, unit: "KG", req: "S. White", date: "2026-08-05", status: "Approved" },
  { id: "10001933", item: "00010", material: "TOOL-90 (Drill Bits)", qty: 50, unit: "EA", req: "T. Brown", date: "2026-07-26", status: "Pending" },
  { id: "10001933", item: "00020", material: "TOOL-91 (Safety Goggles)", qty: 100, unit: "EA", req: "T. Brown", date: "2026-07-26", status: "Pending" },
  { id: "10001934", item: "00010", material: "RAW-205 (Copper Wire)", qty: 800, unit: "M", req: "L. Green", date: "2026-08-10", status: "Approved" },
  { id: "10001935", item: "00010", material: "PACK-02 (Tape)", qty: 500, unit: "EA", req: "M. Johnson", date: "2026-07-29", status: "Approved" },
  { id: "10001936", item: "00010", material: "CHEM-80 (Lubricant)", qty: 200, unit: "L", req: "R. Davis", date: "2026-08-02", status: "In Review" },
  { id: "10001937", item: "00010", material: "OFF-10 (Printer Paper)", qty: 50, unit: "BOX", req: "A. Clark", date: "2026-07-27", status: "Approved" },
  { id: "10001937", item: "00020", material: "OFF-11 (Ink Cartridges)", qty: 20, unit: "EA", req: "A. Clark", date: "2026-07-27", status: "Approved" },
  { id: "10001938", item: "00010", material: "RAW-103 (Iron Ore)", qty: 2000, unit: "KG", req: "J. Smith", date: "2026-08-15", status: "Pending" },
  { id: "10001939", item: "00010", material: "ELEC-225 (Sensors)", qty: 150, unit: "EA", req: "K. Lee", date: "2026-08-05", status: "Approved" },
  { id: "10001940", item: "00010", material: "RAW-105 (Plastic Pellets)", qty: 1000, unit: "KG", req: "S. White", date: "2026-08-08", status: "In Review" },
];

export default function MaterialsRequisitionsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRequisitions = mockRequisitions.filter(req => 
    req.id.includes(searchTerm) || 
    req.material.toLowerCase().includes(searchTerm.toLowerCase()) ||
    req.req.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Approved': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'Pending': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'In Review': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Rejected': return 'bg-rose-100 text-rose-700 border-rose-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      
      {/* Header Container */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Purchase Requisitions
          </h1>
          <p className="text-sm text-slate-500 mt-1">Manage and track material requests (ME53N)</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium shadow-sm">
            <Download className="w-4 h-4" /> Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium shadow-sm">
            <Plus className="w-4 h-4" /> Create PR
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 shrink-0">
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-slate-500">Total PRs (YTD)</h3>
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><FileText className="w-5 h-5" /></div>
          </div>
          <div className="text-2xl font-bold text-slate-800">1,284</div>
          <p className="text-xs text-emerald-600 mt-1 flex items-center gap-1">
            <span className="font-medium">+12%</span> vs last month
          </p>
        </div>
        
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-slate-500">Pending Approval</h3>
            <div className="p-2 bg-amber-50 text-amber-600 rounded-lg"><Clock className="w-5 h-5" /></div>
          </div>
          <div className="text-2xl font-bold text-slate-800">42</div>
          <p className="text-xs text-amber-600 mt-1 flex items-center gap-1">
            <span className="font-medium">Requires attention</span>
          </p>
        </div>

        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-slate-500">Fully Released</h3>
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><CheckCircle2 className="w-5 h-5" /></div>
          </div>
          <div className="text-2xl font-bold text-slate-800">1,150</div>
          <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
            <span className="font-medium">89.5%</span> release rate
          </p>
        </div>

        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-slate-500">Rejected PRs</h3>
            <div className="p-2 bg-rose-50 text-rose-600 rounded-lg"><AlertCircle className="w-5 h-5" /></div>
          </div>
          <div className="text-2xl font-bold text-slate-800">18</div>
          <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
            <span className="font-medium text-emerald-600">-5%</span> vs last month
          </p>
        </div>
      </div>

      {/* Main Grid Container */}
      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-200 bg-white/50 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by PR Number, Material, or Requisitioner..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-slate-800"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-2 text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium">
              <Filter className="w-4 h-4" /> Filter
            </button>
          </div>
        </div>

        {/* Table Area */}
        <div className="flex-1 overflow-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">PR Number</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Item</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Material</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Quantity</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Unit</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Requisitioner</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Delivery Date</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Release Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredRequisitions.map((req, idx) => (
                <tr key={`${req.id}-${req.item}-${idx}`} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer">
                  <td className="px-6 py-3 text-sm font-medium text-emerald-700">{req.id}</td>
                  <td className="px-6 py-3 text-sm text-slate-600">{req.item}</td>
                  <td className="px-6 py-3 text-sm text-slate-800 font-medium">{req.material}</td>
                  <td className="px-6 py-3 text-sm text-slate-700 text-right font-medium">{req.qty.toLocaleString()}</td>
                  <td className="px-6 py-3 text-sm text-slate-500">{req.unit}</td>
                  <td className="px-6 py-3 text-sm text-slate-700 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">
                      {req.req.split(' ').map(n => n[0]).join('')}
                    </div>
                    {req.req}
                  </td>
                  <td className="px-6 py-3 text-sm text-slate-600">{req.date}</td>
                  <td className="px-6 py-3">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(req.status)}`}>
                      {req.status}
                    </span>
                  </td>
                </tr>
              ))}
              {filteredRequisitions.length === 0 && (
                <tr>
                  <td colSpan={8} className="px-6 py-12 text-center text-slate-500 text-sm">
                    No purchase requisitions found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Footer */}
        <div className="p-3 border-t border-slate-200 bg-slate-50 text-xs text-slate-500 flex justify-between items-center shrink-0">
          <span>Showing {filteredRequisitions.length} of {mockRequisitions.length} items</span>
          <span>SAP ME53N • Standard Layout</span>
        </div>
      </div>

    </div>
  );
}
