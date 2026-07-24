"use client";

import React, { useState } from "react";
import { 
  Building2, 
  TrendingUp, 
  Wallet, 
  ArrowRightLeft, 
  Download, 
  Filter, 
  Search, 
  Plus 
} from "lucide-react";

// Mock Data
const kpis = [
  { title: "Total Segment Revenue", value: "€ 4.2B", icon: TrendingUp, change: "+5.2%", trend: "up" },
  { title: "Operating Profit (EBIT)", value: "€ 842M", icon: Wallet, change: "+2.1%", trend: "up" },
  { title: "Inter-segment Transfers", value: "€ 315M", icon: ArrowRightLeft, change: "-1.5%", trend: "down" },
  { title: "Active Segments", value: "8", icon: Building2, change: "0%", trend: "neutral" }
];

const mockSegments = [
  { id: "SEG-1000", name: "Consumer Products", profitCenter: "PC-CP01", assets: "€ 1.2B", liabilities: "€ 400M", extRev: "€ 950M", intRev: "€ 50M", netProfit: "€ 120M" },
  { id: "SEG-2000", name: "Industrial Solutions", profitCenter: "PC-IN02", assets: "€ 2.5B", liabilities: "€ 1.1B", extRev: "€ 1.8B", intRev: "€ 120M", netProfit: "€ 350M" },
  { id: "SEG-3000", name: "Healthcare & Pharma", profitCenter: "PC-HC01", assets: "€ 3.1B", liabilities: "€ 850M", extRev: "€ 2.1B", intRev: "€ 0M", netProfit: "€ 480M" },
  { id: "SEG-4000", name: "Automotive Parts", profitCenter: "PC-AP03", assets: "€ 1.8B", liabilities: "€ 720M", extRev: "€ 1.2B", intRev: "€ 300M", netProfit: "€ 150M" },
  { id: "SEG-5000", name: "Electronics", profitCenter: "PC-EL01", assets: "€ 900M", liabilities: "€ 300M", extRev: "€ 600M", intRev: "€ 80M", netProfit: "€ 95M" },
  { id: "SEG-6000", name: "Energy & Utilities", profitCenter: "PC-EU01", assets: "€ 4.5B", liabilities: "€ 2.2B", extRev: "€ 3.2B", intRev: "€ 150M", netProfit: "€ 550M" },
  { id: "SEG-7000", name: "Financial Services", profitCenter: "PC-FS02", assets: "€ 8.2B", liabilities: "€ 6.1B", extRev: "€ 1.5B", intRev: "€ 400M", netProfit: "€ 820M" },
  { id: "SEG-8000", name: "Real Estate", profitCenter: "PC-RE01", assets: "€ 5.5B", liabilities: "€ 2.8B", extRev: "€ 800M", intRev: "€ 50M", netProfit: "€ 210M" },
  { id: "SEG-1100", name: "CP - Europe", profitCenter: "PC-CP02", assets: "€ 600M", liabilities: "€ 200M", extRev: "€ 450M", intRev: "€ 20M", netProfit: "€ 65M" },
  { id: "SEG-1200", name: "CP - APAC", profitCenter: "PC-CP03", assets: "€ 750M", liabilities: "€ 250M", extRev: "€ 620M", intRev: "€ 40M", netProfit: "€ 85M" },
  { id: "SEG-2100", name: "IS - Heavy Mach.", profitCenter: "PC-IN03", assets: "€ 1.5B", liabilities: "€ 800M", extRev: "€ 900M", intRev: "€ 60M", netProfit: "€ 140M" },
  { id: "SEG-2200", name: "IS - Robotics", profitCenter: "PC-IN04", assets: "€ 1.1B", liabilities: "€ 450M", extRev: "€ 750M", intRev: "€ 80M", netProfit: "€ 180M" },
  { id: "SEG-3100", name: "HC - Devices", profitCenter: "PC-HC02", assets: "€ 1.2B", liabilities: "€ 350M", extRev: "€ 850M", intRev: "€ 10M", netProfit: "€ 190M" },
  { id: "SEG-3200", name: "HC - Biotech", profitCenter: "PC-HC03", assets: "€ 2.4B", liabilities: "€ 600M", extRev: "€ 1.4B", intRev: "€ 5M", netProfit: "€ 310M" },
  { id: "SEG-4100", name: "AP - EV Battery", profitCenter: "PC-AP04", assets: "€ 2.1B", liabilities: "€ 1.1B", extRev: "€ 1.1B", intRev: "€ 400M", netProfit: "€ 120M" },
  { id: "SEG-9000", name: "Corporate Services", profitCenter: "PC-CS01", assets: "€ 500M", liabilities: "€ 150M", extRev: "€ 0M", intRev: "€ 800M", netProfit: "€ 0M" }
];

export default function SegmentsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSegments = mockSegments.filter(
    (seg) =>
      seg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      seg.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      seg.profitCenter.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      
      {/* Header Container */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Segment Reporting
          </h1>
          <p className="text-sm text-slate-500 mt-1">FAGLL03 / Segment Analysis & Profitability</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search segments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 w-64"
            />
          </div>
          <button className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors" title="Filter">
            <Filter className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm">
            <Download className="w-4 h-4" />
            Export ALV
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors shadow-sm shadow-emerald-600/20">
            <Plus className="w-4 h-4" />
            New Segment
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, idx) => (
          <div key={idx} className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                <kpi.icon className="w-5 h-5" />
              </div>
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                kpi.trend === "up" ? "bg-emerald-100 text-emerald-700" :
                kpi.trend === "down" ? "bg-rose-100 text-rose-700" :
                "bg-slate-100 text-slate-700"
              }`}>
                {kpi.change}
              </span>
            </div>
            <h3 className="text-slate-500 text-sm font-medium">{kpi.title}</h3>
            <p className="text-2xl font-bold text-slate-800 mt-1">{kpi.value}</p>
          </div>
        ))}
      </div>

      {/* Main Grid Container */}
      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="overflow-auto flex-1 custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Segment ID</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Segment Name</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Profit Center</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Total Assets</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Total Liabilities</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">External Revenue</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Inter-segment Revenue</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Net Profit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredSegments.map((seg, idx) => (
                <tr key={idx} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer">
                  <td className="px-6 py-4 text-sm font-medium text-emerald-700 whitespace-nowrap">{seg.id}</td>
                  <td className="px-6 py-4 text-sm text-slate-700 whitespace-nowrap">{seg.name}</td>
                  <td className="px-6 py-4 text-sm text-slate-600 whitespace-nowrap">{seg.profitCenter}</td>
                  <td className="px-6 py-4 text-sm text-slate-800 text-right whitespace-nowrap">{seg.assets}</td>
                  <td className="px-6 py-4 text-sm text-slate-800 text-right whitespace-nowrap">{seg.liabilities}</td>
                  <td className="px-6 py-4 text-sm text-slate-800 text-right whitespace-nowrap">{seg.extRev}</td>
                  <td className="px-6 py-4 text-sm text-slate-500 text-right whitespace-nowrap">{seg.intRev}</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-800 text-right whitespace-nowrap">{seg.netProfit}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredSegments.length === 0 && (
            <div className="flex flex-col items-center justify-center p-12 text-slate-500">
              <Building2 className="w-12 h-12 mb-4 text-slate-300" />
              <p className="text-lg font-medium text-slate-600">No segments found</p>
              <p className="text-sm">Try adjusting your search filters.</p>
            </div>
          )}
        </div>
        <div className="bg-slate-50 border-t border-slate-200 p-4 text-xs text-slate-500 flex justify-between items-center">
          <span>Showing {filteredSegments.length} of {mockSegments.length} segments</span>
          <div className="flex gap-4">
            <span>System: SAP S/4HANA</span>
            <span>Client: 100</span>
            <span>User: JDOE</span>
          </div>
        </div>
      </div>

    </div>
  );
}
