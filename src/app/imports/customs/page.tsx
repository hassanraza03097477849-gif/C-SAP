"use client";
export const dynamic = 'force-dynamic';

import React, { useState } from "react";
import { Search, Filter, Download, ArrowUpRight, ArrowDownRight, FileText, CheckCircle, AlertTriangle, Clock } from "lucide-react";
import { SmartTable, Column, FormField } from '@/components/SmartTable';

export default function CustomsDutiesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const kpis = [
    { title: "Total Duties Paid", value: "₹45.2M", change: "+12.5%", isPositive: true },
    { title: "Pending Assessments", value: "24", change: "-5", isPositive: true },
    { title: "Avg. Clearance Time", value: "3.2 Days", change: "-0.4 Days", isPositive: true },
    { title: "Total Additional Taxes", value: "₹8.4M", change: "+4.1%", isPositive: false },
  ];

  const [items, setItems] = useState([
    { id: "GD-2026-001", date: "2026-07-01", material: "Crude Oil - Basrah Light", assessedValue: "PKR 1,200,000", basicDuty: "PKR 60,000", additionalTax: "PKR 12,000", totalPayable: "PKR 72,000", status: "Cleared" },
    { id: "GD-2026-002", date: "2026-07-02", material: "Naphtha", assessedValue: "PKR 850,000", basicDuty: "PKR 42,500", additionalTax: "PKR 8,500", totalPayable: "PKR 51,000", status: "In Assessment" },
    { id: "GD-2026-003", date: "2026-07-03", material: "Ethylene", assessedValue: "PKR 420,000", basicDuty: "PKR 21,000", additionalTax: "PKR 4,200", totalPayable: "PKR 25,200", status: "Cleared" },
    { id: "GD-2026-004", date: "2026-07-04", material: "Polypropylene", assessedValue: "PKR 950,000", basicDuty: "PKR 47,500", additionalTax: "PKR 9,500", totalPayable: "PKR 57,000", status: "Pending Duty" },
    { id: "GD-2026-005", date: "2026-07-05", material: "Industrial Machinery Parts", assessedValue: "PKR 3,400,000", basicDuty: "PKR 255,000", additionalTax: "PKR 34,000", totalPayable: "PKR 289,000", status: "Cleared" },
    { id: "GD-2026-006", date: "2026-07-06", material: "Catalysts", assessedValue: "PKR 150,000", basicDuty: "PKR 7,500", additionalTax: "PKR 1,500", totalPayable: "PKR 9,000", status: "Held" }
  ]);

  const columns: Column[] = [
    { key: "id", label: "GD Number", format: (val) => <span className="flex items-center gap-2"><FileText className="w-4 h-4 text-emerald-500" />{val}</span> },
    { key: "date", label: "Date" },
    { key: "material", label: "Material" },
    { key: "assessedValue", label: "Assessed Value" },
    { key: "basicDuty", label: "Basic Duty" },
    { key: "additionalTax", label: "Additional Tax" },
    { key: "totalPayable", label: "Total Payable" },
    { key: "status", label: "Status", format: (val) => getStatusBadge(val as string) }
  ];

  const formFields: FormField[] = [
    { key: "id", label: "GD Number", type: "text", required: true },
    { key: "date", label: "Date", type: "date", required: true },
    { key: "material", label: "Material", type: "text", required: true },
    { key: "assessedValue", label: "Assessed Value", type: "text" },
    { key: "basicDuty", label: "Basic Duty", type: "text" },
    { key: "additionalTax", label: "Additional Tax", type: "text" },
    { key: "totalPayable", label: "Total Payable", type: "text" },
    { key: "status", label: "Status", type: "select", options: ["Cleared", "In Assessment", "Pending Duty", "Held"], required: true }
  ];

  const filteredData = items.filter(row => row.id.toLowerCase().includes(searchTerm.toLowerCase()) || row.material.toLowerCase().includes(searchTerm.toLowerCase()));

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
        <SmartTable data={filteredData} columns={columns} formFields={formFields} onAdd={(newItem) => setItems([newItem, ...items])} />
      </div>
    </div>
  );
}