"use client";

import React, { useState } from "react";
import {
  FileText,
  Search,
  Filter,
  Download,
  CheckCircle2,
  AlertCircle,
  Clock,
  TrendingUp,
  CreditCard,
  DollarSign,
  Briefcase,
  ChevronDown,
  MoreHorizontal
} from "lucide-react";

// Mock Data
const kpiData = [
  { title: "Total Pending Payables", value: "₹45.2M", change: "+5.2%", icon: DollarSign, trend: "up" },
  { title: "Processed Settlements", value: "1,248", change: "+12.5%", icon: CheckCircle2, trend: "up" },
  { title: "Dealer Deductions", value: "₹2.1M", change: "-1.4%", icon: TrendingUp, trend: "down" },
  { title: "Avg. Settlement Time", value: "2.4 Days", change: "-0.5 Days", icon: Clock, trend: "down" }
];

const mockSettlements = Array.from({ length: 25 }).map((_, i) => {
  const isDealer = i % 3 !== 0;
  const gross = Math.floor(Math.random() * 5000000) + 100000;
  const deds = Math.floor(gross * (Math.random() * 0.15));
  const net = gross - deds;
  const statusPool = ["Pending", "Processing", "Completed", "Failed"];
  const status = statusPool[Math.floor(Math.random() * statusPool.length)];

  return {
    id: `SET-${2023000 + i}`,
    type: isDealer ? "Dealer" : "Transporter",
    partyName: isDealer ? `Dealer Alpha ${i + 1}` : `Logistics Corp ${i + 1}`,
    grossAmount: gross,
    deductions: deds,
    netPayable: net,
    status: status,
    date: `2024-03-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
  };
});

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export default function OMCSettlementsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSettlements = mockSettlements.filter(s =>
    s.partyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-200"><CheckCircle2 className="w-3.5 h-3.5" /> {status}</span>;
      case "Pending":
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200"><Clock className="w-3.5 h-3.5" /> {status}</span>;
      case "Processing":
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200"><TrendingUp className="w-3.5 h-3.5" /> {status}</span>;
      case "Failed":
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 border border-red-200"><AlertCircle className="w-3.5 h-3.5" /> {status}</span>;
      default:
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200">{status}</span>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Settlement Ledger
          </h1>
          <p className="text-sm text-slate-500 mt-1">Manage dealer and transporter payables</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search settlements..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all w-64 text-slate-800 placeholder-slate-400"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium shadow-sm">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors text-sm font-medium shadow-sm shadow-emerald-500/20">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 flex-shrink-0">
        {kpiData.map((kpi, i) => (
          <div key={i} className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">{kpi.title}</p>
                <h3 className="text-2xl font-bold text-slate-800 mt-1">{kpi.value}</h3>
              </div>
              <div className="p-2 bg-emerald-50 rounded-lg">
                <kpi.icon className="w-5 h-5 text-emerald-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1.5">
              <span className={`text-xs font-medium ${kpi.trend === 'up' ? 'text-emerald-600' : 'text-emerald-600'}`}>
                {kpi.change}
              </span>
              <span className="text-xs text-slate-400">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Ledger Grid */}
      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="overflow-auto flex-1">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Settlement ID</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Date</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Type</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Party Name</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Gross Amount</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Deductions</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Net Payable</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-center">Status</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredSettlements.map((settlement) => (
                <tr key={settlement.id} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer group">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-emerald-500" />
                      <span className="font-medium text-emerald-700 text-sm">{settlement.id}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                    {settlement.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 text-sm text-slate-700">
                      {settlement.type === "Dealer" ? <Briefcase className="w-3.5 h-3.5 text-slate-400" /> : <CreditCard className="w-3.5 h-3.5 text-slate-400" />}
                      {settlement.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-medium text-slate-800 text-sm">{settlement.partyName}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-slate-700">
                    {formatCurrency(settlement.grossAmount)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-rose-600">
                    -{formatCurrency(settlement.deductions)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-bold text-slate-800">
                    {formatCurrency(settlement.netPayable)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {getStatusBadge(settlement.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded transition-colors opacity-0 group-hover:opacity-100">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredSettlements.length === 0 && (
            <div className="flex flex-col items-center justify-center p-12 text-slate-500">
              <Search className="w-12 h-12 text-slate-300 mb-4" />
              <p className="text-lg font-medium text-slate-800">No settlements found</p>
              <p className="text-sm">Try adjusting your search filters.</p>
            </div>
          )}
        </div>
        <div className="px-6 py-3 border-t border-slate-200/60 bg-slate-50/50 flex items-center justify-between">
          <span className="text-sm text-slate-500">
            Showing <span className="font-medium text-slate-800">{filteredSettlements.length}</span> of <span className="font-medium text-slate-800">{mockSettlements.length}</span> settlements
          </span>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 border border-slate-200 rounded text-sm font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed">Previous</button>
            <button className="px-3 py-1.5 border border-slate-200 rounded text-sm font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
