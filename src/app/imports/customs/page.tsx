"use client";
export const dynamic = 'force-dynamic';

import React, { useState } from "react";
import { Search, Filter, Download, ArrowUpRight, ArrowDownRight, FileText, CheckCircle, AlertTriangle, Clock } from "lucide-react";

export default function CustomsDutiesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const kpis = [
    { title: "Total Duties Paid", value: "₹45.2M", change: "+12.5%", isPositive: true },
    { title: "Pending Assessments", value: "24", change: "-5", isPositive: true },
    { title: "Avg. Clearance Time", value: "3.2 Days", change: "-0.4 Days", isPositive: true },
    { title: "Total Additional Taxes", value: "₹8.4M", change: "+4.1%", isPositive: false },
  ];

  const ledgerData = [
    { id: "GD-2026-001", date: "2026-07-01", material: "Crude Oil - Basrah Light", assessedValue: "₹1,200,000", basicDuty: "₹60,000", additionalTax: "₹12,000", totalPayable: "₹72,000", status: "Cleared" },
    { id: "GD-2026-002", date: "2026-07-02", material: "Naphtha", assessedValue: "₹850,000", basicDuty: "₹42,500", additionalTax: "₹8,500", totalPayable: "₹51,000", status: "In Assessment" },
    { id: "GD-2026-003", date: "2026-07-03", material: "Ethylene", assessedValue: "₹420,000", basicDuty: "₹21,000", additionalTax: "₹4,200", totalPayable: "₹25,200", status: "Cleared" },
    { id: "GD-2026-004", date: "2026-07-04", material: "Polypropylene", assessedValue: "₹950,000", basicDuty: "₹47,500", additionalTax: "₹9,500", totalPayable: "₹57,000", status: "Pending Duty" },
    { id: "GD-2026-005", date: "2026-07-05", material: "Industrial Machinery Parts", assessedValue: "₹3,400,000", basicDuty: "₹255,000", additionalTax: "₹34,000", totalPayable: "₹289,000", status: "Cleared" },
    { id: "GD-2026-006", date: "2026-07-06", material: "Catalysts", assessedValue: "₹150,000", basicDuty: "₹7,500", additionalTax: "₹1,500", totalPayable: "₹9,000", status: "Held" },
    { id: "GD-2026-007", date: "2026-07-08", material: "Methanol", assessedValue: "₹600,000", basicDuty: "₹30,000", additionalTax: "₹6,000", totalPayable: "₹36,000", status: "Cleared" },
    { id: "GD-2026-008", date: "2026-07-10", material: "Specialty Chemicals", assessedValue: "₹1,800,000", basicDuty: "₹135,000", additionalTax: "₹18,000", totalPayable: "₹153,000", status: "In Assessment" },
    { id: "GD-2026-009", date: "2026-07-11", material: "Pipes & Fittings", assessedValue: "₹500,000", basicDuty: "₹25,000", additionalTax: "₹5,000", totalPayable: "₹30,000", status: "Cleared" },
    { id: "GD-2026-010", date: "2026-07-12", material: "Safety Equipment", assessedValue: "₹200,000", basicDuty: "₹10,000", additionalTax: "₹2,000", totalPayable: "₹12,000", status: "Cleared" },
    { id: "GD-2026-011", date: "2026-07-14", material: "Pump Assemblies", assessedValue: "₹2,200,000", basicDuty: "₹165,000", additionalTax: "₹22,000", totalPayable: "₹187,000", status: "Pending Duty" },
    { id: "GD-2026-012", date: "2026-07-15", material: "Control Valves", assessedValue: "₹750,000", basicDuty: "₹37,500", additionalTax: "₹7,500", totalPayable: "₹45,000", status: "Cleared" },
    { id: "GD-2026-013", date: "2026-07-18", material: "Lubricants", assessedValue: "₹320,000", basicDuty: "₹16,000", additionalTax: "₹3,200", totalPayable: "₹19,200", status: "Cleared" },
    { id: "GD-2026-014", date: "2026-07-20", material: "Compressors", assessedValue: "₹4,100,000", basicDuty: "₹307,500", additionalTax: "₹41,000", totalPayable: "₹348,500", status: "In Assessment" },
    { id: "GD-2026-015", date: "2026-07-22", material: "Laboratory Reagents", assessedValue: "₹90,000", basicDuty: "₹4,500", additionalTax: "₹900", totalPayable: "₹5,400", status: "Cleared" }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Cleared":
        return <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium"><CheckCircle className="w-3 h-3" /> {status}</span>;
      case "In Assessment":
        return <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium"><Clock className="w-3 h-3" /> {status}</span>;
      case "Pending Duty":
        return <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-medium"><Clock className="w-3 h-3" /> {status}</span>;
      case "Held":
        return <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-100 text-red-700 text-xs font-medium"><AlertTriangle className="w-3 h-3" /> {status}</span>;
      default:
        return <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">{status}</span>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Customs & Duties Ledger
          </h1>
          <p className="text-sm text-slate-500 mt-1">Manage and track Goods Declarations, port charges, and assessed duties.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search GD Number or Material..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 w-64 transition-all"
            />
          </div>
          <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600 transition-colors">
            <Filter className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-colors">
            <Download className="w-4 h-4" /> Export
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, index) => (
          <div key={index} className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
            <p className="text-sm font-medium text-slate-500">{kpi.title}</p>
            <div className="flex items-end justify-between mt-2">
              <h3 className="text-2xl font-bold text-slate-800">{kpi.value}</h3>
              <span className={`flex items-center text-xs font-medium ${kpi.isPositive ? 'text-emerald-600' : 'text-red-500'}`}>
                {kpi.isPositive ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                {kpi.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Ledger Grid */}
      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="flex-1 overflow-auto">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap">GD Number</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap">Date</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Material</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right whitespace-nowrap">Assessed Value</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right whitespace-nowrap">Basic Duty</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right whitespace-nowrap">Additional Tax</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right whitespace-nowrap">Total Payable</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Status</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {ledgerData.filter(row => row.id.toLowerCase().includes(searchTerm.toLowerCase()) || row.material.toLowerCase().includes(searchTerm.toLowerCase())).map((row, index) => (
                <tr key={index} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer group">
                  <td className="px-6 py-3 text-sm font-medium text-emerald-600 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                    {row.id}
                  </td>
                  <td className="px-6 py-3 text-sm text-slate-500">{row.date}</td>
                  <td className="px-6 py-3 text-sm text-slate-800 font-medium">{row.material}</td>
                  <td className="px-6 py-3 text-sm text-slate-600 text-right tabular-nums">{row.assessedValue}</td>
                  <td className="px-6 py-3 text-sm text-slate-600 text-right tabular-nums">{row.basicDuty}</td>
                  <td className="px-6 py-3 text-sm text-slate-600 text-right tabular-nums">{row.additionalTax}</td>
                  <td className="px-6 py-3 text-sm font-semibold text-slate-800 text-right tabular-nums">{row.totalPayable}</td>
                  <td className="px-6 py-3 text-sm">{getStatusBadge(row.status)}</td>
                  <td className="px-6 py-3 text-sm text-center">
                    <button className="text-slate-400 hover:text-emerald-600 font-medium transition-colors text-xs uppercase tracking-wider">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {ledgerData.length === 0 && (
            <div className="flex flex-col items-center justify-center p-12 text-slate-500">
              <FileText className="w-12 h-12 mb-3 text-slate-300" />
              <p>No records found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}