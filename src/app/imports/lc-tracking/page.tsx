"use client";

import React, { useState } from "react";
import { Search, Filter, Download, ArrowUpDown, FileText, CheckCircle2, Clock, AlertCircle } from "lucide-react";

export default function LcTrackingPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const mockData = [
    { id: "LC-2026-001", bank: "Standard Chartered", applicant: "Pure Petroleum", beneficiary: "Saudi Aramco", value: "2,500,000", currency: "PKR", expiry: "2026-08-15", status: "Active" },
    { id: "LC-2026-002", bank: "CitiBank NA", applicant: "Pure Petroleum", beneficiary: "ExxonMobil", value: "4,100,000", currency: "PKR", expiry: "2026-09-01", status: "Pending Amendment" },
    { id: "LC-2026-003", bank: "HSBC", applicant: "Pure Petroleum", beneficiary: "BP PLC", value: "1,850,000", currency: "PKR", expiry: "2026-07-30", status: "Active" },
    { id: "LC-2026-004", bank: "JPMorgan Chase", applicant: "Pure Petroleum", beneficiary: "Chevron", value: "3,200,000", currency: "PKR", expiry: "2026-10-12", status: "Draft" },
    { id: "LC-2026-005", bank: "Deutsche Bank", applicant: "Pure Petroleum", beneficiary: "TotalEnergies", value: "5,600,000", currency: "PKR", expiry: "2026-11-20", status: "Active" },
    { id: "LC-2026-006", bank: "BNP Paribas", applicant: "Pure Petroleum", beneficiary: "Shell", value: "2,900,000", currency: "PKR", expiry: "2026-08-05", status: "Expired" },
    { id: "LC-2026-007", bank: "Barclays", applicant: "Pure Petroleum", beneficiary: "Sinopec", value: "6,400,000", currency: "PKR", expiry: "2026-12-15", status: "Active" },
    { id: "LC-2026-008", bank: "Bank of America", applicant: "Pure Petroleum", beneficiary: "PetroChina", value: "1,200,000", currency: "PKR", expiry: "2026-07-28", status: "Active" },
    { id: "LC-2026-009", bank: "Standard Chartered", applicant: "Pure Petroleum", beneficiary: "Gazprom", value: "4,500,000", currency: "PKR", expiry: "2026-09-10", status: "Pending Bank" },
    { id: "LC-2026-010", bank: "CitiBank NA", applicant: "Pure Petroleum", beneficiary: "Equinor", value: "2,150,000", currency: "PKR", expiry: "2026-10-01", status: "Active" },
    { id: "LC-2026-011", bank: "HSBC", applicant: "Pure Petroleum", beneficiary: "Eni", value: "3,800,000", currency: "PKR", expiry: "2026-08-25", status: "Draft" },
    { id: "LC-2026-012", bank: "JPMorgan Chase", applicant: "Pure Petroleum", beneficiary: "Valero", value: "1,550,000", currency: "PKR", expiry: "2026-11-05", status: "Active" },
    { id: "LC-2026-013", bank: "Deutsche Bank", applicant: "Pure Petroleum", beneficiary: "Marathon", value: "2,750,000", currency: "PKR", expiry: "2026-12-30", status: "Active" },
    { id: "LC-2026-014", bank: "BNP Paribas", applicant: "Pure Petroleum", beneficiary: "Phillips 66", value: "4,200,000", currency: "PKR", expiry: "2026-09-18", status: "Pending Amendment" },
    { id: "LC-2026-015", bank: "Barclays", applicant: "Pure Petroleum", beneficiary: "Pemex", value: "1,900,000", currency: "PKR", expiry: "2026-07-25", status: "Active" }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case "Active": return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "Pending Amendment": return "bg-amber-100 text-amber-700 border-amber-200";
      case "Pending Bank": return "bg-blue-100 text-blue-700 border-blue-200";
      case "Draft": return "bg-slate-100 text-slate-700 border-slate-200";
      case "Expired": return "bg-rose-100 text-rose-700 border-rose-200";
      default: return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      
      {/* Header Container */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-100 rounded-lg">
            <FileText className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              LC Tracking Ledger
            </h1>
            <p className="text-slate-500 text-sm font-medium mt-1">Real-time monitoring of Letters of Credit</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search LCs..." 
              className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-slate-800 placeholder:text-slate-400 w-64 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors shadow-sm shadow-emerald-600/20">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 flex-shrink-0">
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex flex-col gap-2">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-sm font-semibold tracking-wide uppercase">Total Active LCs</span>
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
          </div>
          <div className="text-3xl font-bold text-slate-800">42</div>
          <div className="text-xs font-medium text-emerald-600 bg-emerald-50 w-fit px-2 py-1 rounded-md">+5 this week</div>
        </div>
        
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex flex-col gap-2">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-sm font-semibold tracking-wide uppercase">Total Exposure (PKR)</span>
            <FileText className="w-5 h-5 text-blue-500" />
          </div>
          <div className="text-3xl font-bold text-slate-800">PKR 128.5M</div>
          <div className="text-xs font-medium text-blue-600 bg-blue-50 w-fit px-2 py-1 rounded-md">Across 8 currencies</div>
        </div>

        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex flex-col gap-2">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-sm font-semibold tracking-wide uppercase">Expiring in 30 Days</span>
            <Clock className="w-5 h-5 text-amber-500" />
          </div>
          <div className="text-3xl font-bold text-slate-800">14</div>
          <div className="text-xs font-medium text-amber-600 bg-amber-50 w-fit px-2 py-1 rounded-md">Requires attention</div>
        </div>

        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex flex-col gap-2">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-sm font-semibold tracking-wide uppercase">Pending Amendments</span>
            <AlertCircle className="w-5 h-5 text-rose-500" />
          </div>
          <div className="text-3xl font-bold text-slate-800">7</div>
          <div className="text-xs font-medium text-rose-600 bg-rose-50 w-fit px-2 py-1 rounded-md">-2 since yesterday</div>
        </div>
      </div>

      {/* Main Grid Container */}
      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="overflow-auto flex-1 custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[1200px]">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap">
                  <div className="flex items-center gap-2 cursor-pointer hover:text-emerald-600 transition-colors">
                    LC Number <ArrowUpDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap">
                  <div className="flex items-center gap-2 cursor-pointer hover:text-emerald-600 transition-colors">
                    Issuing Bank <ArrowUpDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap">Applicant</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap">Beneficiary</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap text-right">
                  <div className="flex items-center justify-end gap-2 cursor-pointer hover:text-emerald-600 transition-colors">
                    Value <ArrowUpDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap">Currency</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap">
                  <div className="flex items-center gap-2 cursor-pointer hover:text-emerald-600 transition-colors">
                    Expiry Date <ArrowUpDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockData.filter(item => item.id.toLowerCase().includes(searchTerm.toLowerCase()) || item.bank.toLowerCase().includes(searchTerm.toLowerCase())).map((row) => (
                <tr key={row.id} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer group">
                  <td className="px-6 py-3.5 whitespace-nowrap text-sm font-medium text-slate-800">
                    {row.id}
                  </td>
                  <td className="px-6 py-3.5 whitespace-nowrap text-sm text-slate-600 font-medium group-hover:text-slate-800 transition-colors">
                    {row.bank}
                  </td>
                  <td className="px-6 py-3.5 whitespace-nowrap text-sm text-slate-600">
                    {row.applicant}
                  </td>
                  <td className="px-6 py-3.5 whitespace-nowrap text-sm text-slate-600">
                    {row.beneficiary}
                  </td>
                  <td className="px-6 py-3.5 whitespace-nowrap text-sm font-semibold text-slate-800 text-right">
                    {row.value}
                  </td>
                  <td className="px-6 py-3.5 whitespace-nowrap text-sm font-medium text-slate-500">
                    {row.currency}
                  </td>
                  <td className="px-6 py-3.5 whitespace-nowrap text-sm text-slate-600">
                    {row.expiry}
                  </td>
                  <td className="px-6 py-3.5 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${getStatusColor(row.status)}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Footer */}
        <div className="px-6 py-3 border-t border-slate-200/60 bg-slate-50/50 flex items-center justify-between text-sm text-slate-500 flex-shrink-0">
          <div>Showing 1 to {mockData.length} of {mockData.length} entries</div>
          <div className="flex gap-1">
            <button className="px-3 py-1 rounded border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-50 text-slate-600 transition-colors">Previous</button>
            <button className="px-3 py-1 rounded border border-emerald-500 bg-emerald-50 text-emerald-700 font-medium">1</button>
            <button className="px-3 py-1 rounded border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-50 text-slate-600 transition-colors">Next</button>
          </div>
        </div>
      </div>

    </div>
  );
}