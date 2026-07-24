"use client";

import React, { useState } from 'react';
import { Download, Filter, Search, RefreshCw, ChevronDown, CheckCircle2, Clock } from 'lucide-react';

const KPICard = ({ title, value, subtitle, icon: Icon, colorClass }: any) => (
  <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex items-start justify-between">
    <div>
      <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
      <h3 className="text-2xl font-bold text-slate-800">{value}</h3>
      <p className="text-xs text-slate-500 mt-2">{subtitle}</p>
    </div>
    <div className={`p-3 rounded-lg bg-emerald-50 ${colorClass}`}>
      <Icon className="w-5 h-5" />
    </div>
  </div>
);

export default function DealerStatementsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const kpis = [
    { title: "Total Outstanding", value: "PKR 4,250,000", subtitle: "+12% from last month", icon: Download, colorClass: "text-emerald-600" },
    { title: "Overdue Amount", value: "PKR 850,000", subtitle: "20% of total outstanding", icon: Clock, colorClass: "text-rose-600" },
    { title: "Cleared Today", value: "PKR 125,000", subtitle: "8 documents cleared", icon: CheckCircle2, colorClass: "text-teal-600" },
    { title: "Open Documents", value: "342", subtitle: "Across 45 dealers", icon: Filter, colorClass: "text-blue-600" }
  ];

  const statements = [
    { customer: "DLR-1001", docNo: "180000101", type: "RV", date: "2026-07-20", amount: "12,500.00", currency: "PKR", clearingDate: "-", status: "Open" },
    { customer: "DLR-1002", docNo: "180000102", type: "DZ", date: "2026-07-19", amount: "-5,000.00", currency: "PKR", clearingDate: "2026-07-20", status: "Cleared" },
    { customer: "DLR-1003", docNo: "180000103", type: "RV", date: "2026-07-18", amount: "45,000.00", currency: "PKR", clearingDate: "-", status: "Open" },
    { customer: "DLR-1004", docNo: "180000104", type: "RV", date: "2026-07-17", amount: "8,750.00", currency: "PKR", clearingDate: "-", status: "Open" },
    { customer: "DLR-1001", docNo: "180000105", type: "DZ", date: "2026-07-16", amount: "-12,500.00", currency: "PKR", clearingDate: "2026-07-17", status: "Cleared" },
    { customer: "DLR-1005", docNo: "180000106", type: "RV", date: "2026-07-15", amount: "105,000.00", currency: "PKR", clearingDate: "-", status: "Open" },
    { customer: "DLR-1002", docNo: "180000107", type: "RV", date: "2026-07-14", amount: "3,200.00", currency: "PKR", clearingDate: "-", status: "Open" },
    { customer: "DLR-1006", docNo: "180000108", type: "RV", date: "2026-07-13", amount: "18,400.00", currency: "PKR", clearingDate: "2026-07-15", status: "Cleared" },
    { customer: "DLR-1003", docNo: "180000109", type: "DZ", date: "2026-07-12", amount: "-20,000.00", currency: "PKR", clearingDate: "2026-07-13", status: "Cleared" },
    { customer: "DLR-1007", docNo: "180000110", type: "RV", date: "2026-07-11", amount: "55,000.00", currency: "PKR", clearingDate: "-", status: "Open" },
    { customer: "DLR-1001", docNo: "180000111", type: "RV", date: "2026-07-10", amount: "6,800.00", currency: "PKR", clearingDate: "-", status: "Open" },
    { customer: "DLR-1008", docNo: "180000112", type: "RV", date: "2026-07-09", amount: "22,100.00", currency: "PKR", clearingDate: "2026-07-10", status: "Cleared" },
    { customer: "DLR-1004", docNo: "180000113", type: "DZ", date: "2026-07-08", amount: "-8,750.00", currency: "PKR", clearingDate: "2026-07-09", status: "Cleared" },
    { customer: "DLR-1009", docNo: "180000114", type: "RV", date: "2026-07-07", amount: "94,000.00", currency: "PKR", clearingDate: "-", status: "Open" },
    { customer: "DLR-1010", docNo: "180000115", type: "RV", date: "2026-07-06", amount: "11,500.00", currency: "PKR", clearingDate: "-", status: "Open" },
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Dealer Statements
          </h1>
          <p className="text-sm text-slate-500 mt-1">Customer Account Line Items (FBL5N)</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search documents..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 w-64"
            />
          </div>
          <button className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
            <Filter className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm shadow-emerald-600/20">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, idx) => (
          <KPICard key={idx} {...kpi} />
        ))}
      </div>

      {/* Main Grid Container */}
      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
          <h2 className="font-semibold text-slate-700">Line Items List</h2>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <RefreshCw className="w-4 h-4" />
            <span>Updated just now</span>
          </div>
        </div>
        
        <div className="flex-1 overflow-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Status</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Customer</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Document No</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Type</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Date</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Amount</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Curr</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Clearing Date</th>
              </tr>
            </thead>
            <tbody>
              {statements.filter(s => s.docNo.includes(searchTerm) || s.customer.toLowerCase().includes(searchTerm.toLowerCase())).map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer group">
                  <td className="px-6 py-3">
                    <div className="flex items-center">
                      {row.status === 'Open' ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-100 text-amber-600" title="Open">
                          <Clock className="w-3.5 h-3.5" />
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-600" title="Cleared">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-3 text-sm font-medium text-slate-800">{row.customer}</td>
                  <td className="px-6 py-3 text-sm text-slate-600 font-mono">{row.docNo}</td>
                  <td className="px-6 py-3 text-sm text-slate-600">{row.type}</td>
                  <td className="px-6 py-3 text-sm text-slate-600">{row.date}</td>
                  <td className="px-6 py-3 text-sm font-medium text-right group-hover:text-emerald-600 transition-colors">
                    {row.amount}
                  </td>
                  <td className="px-6 py-3 text-sm text-slate-500">{row.currency}</td>
                  <td className="px-6 py-3 text-sm text-slate-500">{row.clearingDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}