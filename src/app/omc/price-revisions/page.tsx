"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  FileText,
  Search,
  Filter,
  Download,
  AlertCircle,
  Activity,
  Calendar,
  Layers,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// Mock Data Generation
const mockData = [
  { id: "REV-1045", date: "2026-07-15", product: "PMG (Petrol)", exRefinery: 185.45, ifem: 4.25, dealerMargin: 8.50, exDepot: 198.20, retail: 202.45, status: "Active" },
  { id: "REV-1044", date: "2026-07-01", product: "HSD (Diesel)", exRefinery: 192.10, ifem: 3.80, dealerMargin: 7.20, exDepot: 203.10, retail: 207.25, status: "Active" },
  { id: "REV-1043", date: "2026-06-16", product: "PMG (Petrol)", exRefinery: 188.30, ifem: 4.25, dealerMargin: 8.50, exDepot: 201.05, retail: 205.30, status: "Archived" },
  { id: "REV-1042", date: "2026-06-16", product: "HSD (Diesel)", exRefinery: 190.50, ifem: 3.80, dealerMargin: 7.20, exDepot: 201.50, retail: 205.65, status: "Archived" },
  { id: "REV-1041", date: "2026-06-01", product: "HOBC (Hi-Octane)", exRefinery: 215.20, ifem: 5.00, dealerMargin: 10.50, exDepot: 230.70, retail: 236.45, status: "Active" },
  { id: "REV-1040", date: "2026-06-01", product: "Kerosene", exRefinery: 165.40, ifem: 2.10, dealerMargin: 4.50, exDepot: 172.00, retail: 175.20, status: "Active" },
  { id: "REV-1039", date: "2026-05-16", product: "PMG (Petrol)", exRefinery: 191.00, ifem: 4.25, dealerMargin: 8.00, exDepot: 203.25, retail: 207.50, status: "Archived" },
  { id: "REV-1038", date: "2026-05-16", product: "HSD (Diesel)", exRefinery: 195.30, ifem: 3.80, dealerMargin: 7.00, exDepot: 206.10, retail: 210.25, status: "Archived" },
  { id: "REV-1037", date: "2026-05-01", product: "PMG (Petrol)", exRefinery: 189.50, ifem: 4.25, dealerMargin: 8.00, exDepot: 201.75, retail: 206.00, status: "Archived" },
  { id: "REV-1036", date: "2026-05-01", product: "HSD (Diesel)", exRefinery: 193.10, ifem: 3.80, dealerMargin: 7.00, exDepot: 203.90, retail: 208.05, status: "Archived" },
  { id: "REV-1035", date: "2026-04-16", product: "LDO (Light Diesel)", exRefinery: 155.60, ifem: 1.50, dealerMargin: 3.20, exDepot: 160.30, retail: 163.15, status: "Active" },
  { id: "REV-1034", date: "2026-04-01", product: "PMG (Petrol)", exRefinery: 180.20, ifem: 4.00, dealerMargin: 7.50, exDepot: 191.70, retail: 195.85, status: "Archived" },
  { id: "REV-1033", date: "2026-04-01", product: "HSD (Diesel)", exRefinery: 185.90, ifem: 3.50, dealerMargin: 6.80, exDepot: 196.20, retail: 200.35, status: "Archived" },
  { id: "REV-1032", date: "2026-03-16", product: "HOBC (Hi-Octane)", exRefinery: 205.80, ifem: 4.80, dealerMargin: 9.50, exDepot: 220.10, retail: 225.30, status: "Archived" },
  { id: "REV-1031", date: "2026-03-16", product: "Kerosene", exRefinery: 160.10, ifem: 2.00, dealerMargin: 4.10, exDepot: 166.20, retail: 169.50, status: "Archived" },
];

export default function OMCPriceRevisions() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("date");
  const [sortDirection, setSortDirection] = useState("desc");

  const handleSort = (field: string) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  const filteredData = mockData.filter(
    (item) =>
      item.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a: any, b: any) => {
    if (a[sortField] < b[sortField]) return sortDirection === "asc" ? -1 : 1;
    if (a[sortField] > b[sortField]) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
            <Activity size={28} />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Price Revisions Ledger
            </h1>
            <p className="text-slate-500 text-sm font-medium">OGRA & OMC Regulatory Pricing Data</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors shadow-sm text-sm font-medium">
            <Filter size={16} />
            Filters
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-sm shadow-emerald-200 text-sm font-medium">
            <Download size={16} />
            Export CSV
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Avg PMG Retail", value: "Rs. 204.31", trend: "+1.2%", icon: DollarSign, color: "text-emerald-500", bg: "bg-emerald-100" },
          { title: "Avg HSD Retail", value: "Rs. 206.26", trend: "-0.5%", icon: TrendingDown, color: "text-blue-500", bg: "bg-blue-100" },
          { title: "Active Revisions", value: "5", trend: "Current", icon: Layers, color: "text-amber-500", bg: "bg-amber-100" },
          { title: "Last Revision", value: "15 Jul 2026", trend: "On Time", icon: Calendar, color: "text-indigo-500", bg: "bg-indigo-100" },
        ].map((kpi, idx) => (
          <div key={idx} className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">{kpi.title}</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-bold text-slate-800">{kpi.value}</h3>
                  <span className={`text-xs font-semibold ${kpi.trend.includes('+') ? 'text-emerald-600' : kpi.trend.includes('-') ? 'text-red-500' : 'text-slate-500'}`}>
                    {kpi.trend}
                  </span>
                </div>
              </div>
              <div className={`p-3 rounded-full ${kpi.bg} ${kpi.color}`}>
                <kpi.icon size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid Container */}
      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-200/60 flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-50/50">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by ID or Product..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 text-sm text-slate-800 bg-white"
            />
          </div>
          <div className="text-sm text-slate-500 font-medium">
            Showing {filteredData.length} records
          </div>
        </div>

        {/* Table Wrapper */}
        <div className="flex-1 overflow-auto">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                {[
                  { key: "id", label: "Revision ID" },
                  { key: "date", label: "Effective Date" },
                  { key: "product", label: "Product" },
                  { key: "exRefinery", label: "Ex-Refinery" },
                  { key: "ifem", label: "IFEM" },
                  { key: "dealerMargin", label: "Dealer Margin" },
                  { key: "exDepot", label: "Ex-Depot" },
                  { key: "retail", label: "Retail Price" },
                  { key: "status", label: "Status" }
                ].map((col) => (
                  <th 
                    key={col.key} 
                    className="px-6 py-4 font-semibold text-slate-600 text-sm"
                  >
                    <div 
                      className="flex items-center gap-1 cursor-pointer hover:text-emerald-600 transition-colors"
                      onClick={() => handleSort(col.key)}
                    >
                      {col.label}
                      {sortField === col.key && (
                        sortDirection === "asc" ? <ChevronUp size={14} className="text-emerald-500" /> : <ChevronDown size={14} className="text-emerald-500" />
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, idx) => (
                <tr key={row.id} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer">
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-2">
                      <FileText size={16} className="text-slate-400 group-hover:text-emerald-500 transition-colors" />
                      <span className="font-semibold text-slate-700 text-sm">{row.id}</span>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-sm text-slate-600 whitespace-nowrap">{row.date}</td>
                  <td className="px-6 py-3 font-medium text-slate-800 text-sm">{row.product}</td>
                  <td className="px-6 py-3 text-sm text-slate-600">{row.exRefinery.toFixed(2)}</td>
                  <td className="px-6 py-3 text-sm text-slate-600">{row.ifem.toFixed(2)}</td>
                  <td className="px-6 py-3 text-sm text-slate-600">{row.dealerMargin.toFixed(2)}</td>
                  <td className="px-6 py-3 text-sm text-slate-600 font-medium">{row.exDepot.toFixed(2)}</td>
                  <td className="px-6 py-3 text-sm font-bold text-slate-800">{row.retail.toFixed(2)}</td>
                  <td className="px-6 py-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${
                      row.status === "Active" 
                        ? "bg-emerald-50 border-emerald-200 text-emerald-700" 
                        : "bg-slate-100 border-slate-200 text-slate-500"
                    }`}>
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
