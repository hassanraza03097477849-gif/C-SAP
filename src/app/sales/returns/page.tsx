"use client";

import React, { useState } from 'react';
import { Search, Filter, Download, ArrowLeft, MoreHorizontal, CheckCircle, AlertCircle, Clock } from 'lucide-react';

export default function SalesReturnsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const mockData = [
    { id: "RE-1004523", date: "2026-07-24", invRef: "INV-990123", customer: "Acme Corp", material: "Steel Coil 500mm", qty: 2, status: "Pending Inspection" },
    { id: "RE-1004524", date: "2026-07-24", invRef: "INV-990111", customer: "Globex Inc", material: "Aluminum Sheets", qty: 15, status: "Approved" },
    { id: "RE-1004525", date: "2026-07-23", invRef: "INV-990098", customer: "Stark Ind", material: "Titanium Rods", qty: 5, status: "Rejected" },
    { id: "RE-1004526", date: "2026-07-23", invRef: "INV-989543", customer: "Wayne Ent", material: "Copper Wire 2mm", qty: 100, status: "Approved" },
    { id: "RE-1004527", date: "2026-07-22", invRef: "INV-989201", customer: "Acme Corp", material: "Brass Fittings", qty: 50, status: "Pending Inspection" },
    { id: "RE-1004528", date: "2026-07-21", invRef: "INV-989100", customer: "LexCorp", material: "Steel Coil 500mm", qty: 1, status: "Approved" },
    { id: "RE-1004529", date: "2026-07-21", invRef: "INV-989088", customer: "Umbrella Corp", material: "PVC Pipes", qty: 200, status: "Approved" },
    { id: "RE-1004530", date: "2026-07-20", invRef: "INV-988902", customer: "Globex Inc", material: "Aluminum Sheets", qty: 8, status: "Pending Inspection" },
    { id: "RE-1004531", date: "2026-07-20", invRef: "INV-988880", customer: "Massive Dynamic", material: "Iron Ore Batch", qty: 1, status: "Rejected" },
    { id: "RE-1004532", date: "2026-07-19", invRef: "INV-988705", customer: "Cyberdyne", material: "Silicon Wafers", qty: 500, status: "Approved" },
    { id: "RE-1004533", date: "2026-07-18", invRef: "INV-988500", customer: "Weyland-Yutani", material: "Carbon Fiber Rolls", qty: 12, status: "Pending Inspection" },
    { id: "RE-1004534", date: "2026-07-18", invRef: "INV-988450", customer: "Stark Ind", material: "Titanium Rods", qty: 3, status: "Approved" },
    { id: "RE-1004535", date: "2026-07-17", invRef: "INV-988220", customer: "Acme Corp", material: "Steel Coil 500mm", qty: 5, status: "Rejected" },
    { id: "RE-1004536", date: "2026-07-16", invRef: "INV-988100", customer: "Oscorp", material: "Glass Panels", qty: 30, status: "Pending Inspection" },
    { id: "RE-1004537", date: "2026-07-15", invRef: "INV-987900", customer: "Wayne Ent", material: "Copper Wire 2mm", qty: 150, status: "Approved" },
    { id: "RE-1004538", date: "2026-07-15", invRef: "INV-987888", customer: "Globex Inc", material: "Aluminum Sheets", qty: 25, status: "Pending Inspection" },
  ];

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'Approved': return <CheckCircle className="w-4 h-4 text-emerald-500" />;
      case 'Rejected': return <AlertCircle className="w-4 h-4 text-red-500" />;
      default: return <Clock className="w-4 h-4 text-amber-500" />;
    }
  };

  const getStatusBadgeClass = (status: string) => {
    switch(status) {
      case 'Approved': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'Rejected': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-amber-100 text-amber-700 border-amber-200';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      
      {/* Header Container */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-500">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              SAP SD Returns
            </h1>
            <p className="text-sm text-slate-500 mt-1">Returns Order Processing Ledger (VA03)</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search returns..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-slate-800 w-64"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors text-slate-700 shadow-sm">
            <Filter className="w-4 h-4" /> Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors shadow-sm">
            <Download className="w-4 h-4" /> Export
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 shrink-0">
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <p className="text-sm font-medium text-slate-500 mb-1">Total Returns (MTD)</p>
          <div className="flex items-end gap-2">
            <h3 className="text-2xl font-bold text-slate-800">4,281</h3>
            <span className="text-xs font-medium text-emerald-600 mb-1 flex items-center">
              +12.5%
            </span>
          </div>
        </div>
        
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <p className="text-sm font-medium text-slate-500 mb-1">Value Returned</p>
          <div className="flex items-end gap-2">
            <h3 className="text-2xl font-bold text-slate-800">$1.2M</h3>
            <span className="text-xs font-medium text-red-500 mb-1 flex items-center">
              +5.2%
            </span>
          </div>
        </div>
        
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <p className="text-sm font-medium text-slate-500 mb-1">Pending Inspection</p>
          <div className="flex items-end gap-2">
            <h3 className="text-2xl font-bold text-slate-800">142</h3>
            <span className="text-xs font-medium text-amber-500 mb-1 flex items-center">
              -2.1%
            </span>
          </div>
        </div>
        
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <p className="text-sm font-medium text-slate-500 mb-1">Avg Process Time</p>
          <div className="flex items-end gap-2">
            <h3 className="text-2xl font-bold text-slate-800">2.4d</h3>
            <span className="text-xs font-medium text-emerald-600 mb-1 flex items-center">
              -1.1d
            </span>
          </div>
        </div>
      </div>

      {/* Main Grid Container */}
      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="flex-1 overflow-auto">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Return Document</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Date</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Original Invoice Ref</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Customer</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Material</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Return Qty</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Inspection Status</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockData.filter(d => 
                d.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
                d.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                d.material.toLowerCase().includes(searchTerm.toLowerCase())
              ).map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer group">
                  <td className="px-6 py-3">
                    <div className="font-medium text-emerald-700">{row.id}</div>
                  </td>
                  <td className="px-6 py-3 text-sm text-slate-600">{row.date}</td>
                  <td className="px-6 py-3 text-sm text-slate-600">{row.invRef}</td>
                  <td className="px-6 py-3">
                    <div className="font-medium text-slate-800">{row.customer}</div>
                  </td>
                  <td className="px-6 py-3 text-sm text-slate-600">{row.material}</td>
                  <td className="px-6 py-3 text-sm font-medium text-slate-800 text-right">{row.qty}</td>
                  <td className="px-6 py-3">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusBadgeClass(row.status)}`}>
                      {getStatusIcon(row.status)}
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-right">
                    <button className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded transition-colors opacity-0 group-hover:opacity-100">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-sm text-slate-500">
          <div>Showing 1 to {mockData.length} of {mockData.length} entries</div>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-100 disabled:opacity-50">Prev</button>
            <button className="px-3 py-1 bg-emerald-600 text-white rounded hover:bg-emerald-700">1</button>
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-100">2</button>
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-100">3</button>
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-100">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
