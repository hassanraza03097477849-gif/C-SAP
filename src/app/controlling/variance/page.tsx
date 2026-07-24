"use client";

import React, { useState } from "react";
import { ArrowDownRight, ArrowUpRight, Filter, Download, Settings, Search, RefreshCw, FileText } from "lucide-react";

// Mock data (15+ rows)
const varianceData = [
  { order: "PRD-10001", material: "RM-A01", plant: "PL01", targetCost: 15000, actualCost: 15200, totalVariance: -200, priceVar: -50, qtyVar: -100, resourceVar: -50 },
  { order: "PRD-10002", material: "RM-B02", plant: "PL01", targetCost: 8500, actualCost: 8100, totalVariance: 400, priceVar: 200, qtyVar: 150, resourceVar: 50 },
  { order: "PRD-10003", material: "RM-C03", plant: "PL02", targetCost: 12000, actualCost: 12500, totalVariance: -500, priceVar: -200, qtyVar: -250, resourceVar: -50 },
  { order: "PRD-10004", material: "RM-A01", plant: "PL01", targetCost: 14500, actualCost: 14450, totalVariance: 50, priceVar: 0, qtyVar: 50, resourceVar: 0 },
  { order: "PRD-10005", material: "RM-D04", plant: "PL03", targetCost: 22000, actualCost: 23500, totalVariance: -1500, priceVar: -800, qtyVar: -500, resourceVar: -200 },
  { order: "PRD-10006", material: "RM-B02", plant: "PL02", targetCost: 9200, actualCost: 9000, totalVariance: 200, priceVar: 100, qtyVar: 50, resourceVar: 50 },
  { order: "PRD-10007", material: "RM-E05", plant: "PL01", targetCost: 18000, actualCost: 18200, totalVariance: -200, priceVar: 0, qtyVar: -150, resourceVar: -50 },
  { order: "PRD-10008", material: "RM-A01", plant: "PL03", targetCost: 15500, actualCost: 15000, totalVariance: 500, priceVar: 250, qtyVar: 200, resourceVar: 50 },
  { order: "PRD-10009", material: "RM-C03", plant: "PL01", targetCost: 11000, actualCost: 11800, totalVariance: -800, priceVar: -300, qtyVar: -400, resourceVar: -100 },
  { order: "PRD-10010", material: "RM-F06", plant: "PL02", targetCost: 25000, actualCost: 24500, totalVariance: 500, priceVar: 300, qtyVar: 100, resourceVar: 100 },
  { order: "PRD-10011", material: "RM-B02", plant: "PL03", targetCost: 8800, actualCost: 8900, totalVariance: -100, priceVar: -50, qtyVar: -25, resourceVar: -25 },
  { order: "PRD-10012", material: "RM-D04", plant: "PL01", targetCost: 21500, actualCost: 21000, totalVariance: 500, priceVar: 200, qtyVar: 200, resourceVar: 100 },
  { order: "PRD-10013", material: "RM-A01", plant: "PL02", targetCost: 16000, actualCost: 16600, totalVariance: -600, priceVar: -200, qtyVar: -300, resourceVar: -100 },
  { order: "PRD-10014", material: "RM-E05", plant: "PL03", targetCost: 17500, actualCost: 17000, totalVariance: 500, priceVar: 200, qtyVar: 250, resourceVar: 50 },
  { order: "PRD-10015", material: "RM-C03", plant: "PL01", targetCost: 12500, actualCost: 12800, totalVariance: -300, priceVar: -100, qtyVar: -150, resourceVar: -50 },
  { order: "PRD-10016", material: "RM-F06", plant: "PL01", targetCost: 26000, actualCost: 25200, totalVariance: 800, priceVar: 400, qtyVar: 300, resourceVar: 100 },
];

export default function COVariancePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'PKR' }).format(value);
  };

  const filteredData = varianceData.filter(row => 
    row.order.toLowerCase().includes(searchTerm.toLowerCase()) || 
    row.material.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.plant.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      
      {/* Header Container */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
            <FileText size={24} />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              CO Variance Ledger
            </h1>
            <p className="text-sm text-slate-500 font-medium">Production Order Variance Analysis (KSS2/KKS1)</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search orders..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-slate-800 w-64"
            />
          </div>
          <button className="p-2 bg-slate-50 text-slate-600 hover:text-emerald-600 border border-slate-200 rounded-lg hover:bg-emerald-50 transition-colors">
            <Filter size={18} />
          </button>
          <button className="p-2 bg-slate-50 text-slate-600 hover:text-emerald-600 border border-slate-200 rounded-lg hover:bg-emerald-50 transition-colors">
            <Download size={18} />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm font-semibold shadow-sm">
            <RefreshCw size={16} />
            <span>Recalculate</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Target Cost */}
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Total Target Cost</span>
            <div className="p-1.5 bg-blue-50 text-blue-600 rounded-md">
              <span className="text-xs font-bold">TC</span>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-800">$262,500.00</h3>
            <p className="text-xs text-slate-500 mt-1">Based on standard cost estimates</p>
          </div>
        </div>

        {/* Total Actual Cost */}
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Total Actual Cost</span>
            <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded-md">
              <span className="text-xs font-bold">AC</span>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-800">$264,050.00</h3>
            <p className="text-xs text-slate-500 mt-1">Settled order costs</p>
          </div>
        </div>

        {/* Total Variance */}
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Total Variance</span>
            <div className="p-1.5 bg-red-50 text-red-600 rounded-md">
              <ArrowDownRight size={16} />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-600">-$1,550.00</h3>
            <p className="text-xs text-slate-500 mt-1">Unfavorable across all plants</p>
          </div>
        </div>

        {/* Variance Breakdown */}
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Key Variance Driver</span>
            <div className="p-1.5 bg-orange-50 text-orange-600 rounded-md">
              <Settings size={16} />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-800">Input Price</h3>
            <p className="text-xs text-slate-500 mt-1">Accounted for 60% of deviations</p>
          </div>
        </div>
      </div>

      {/* Main Grid Container */}
      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="flex-1 overflow-auto custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Order #</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Material</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Plant</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Target Cost</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Actual Cost</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Total Variance</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Input Price Var</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Input Qty Var</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Resource Var</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {filteredData.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer group">
                  <td className="px-6 py-3 font-medium text-emerald-700">{row.order}</td>
                  <td className="px-6 py-3 text-slate-700 font-medium">{row.material}</td>
                  <td className="px-6 py-3">
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium border border-slate-200">{row.plant}</span>
                  </td>
                  <td className="px-6 py-3 text-right text-slate-600 font-mono">{formatCurrency(row.targetCost)}</td>
                  <td className="px-6 py-3 text-right text-slate-600 font-mono">{formatCurrency(row.actualCost)}</td>
                  <td className={`px-6 py-3 text-right font-mono font-medium ${row.totalVariance < 0 ? 'text-red-600' : row.totalVariance > 0 ? 'text-emerald-600' : 'text-slate-500'}`}>
                    <div className="flex items-center justify-end gap-1">
                      {row.totalVariance < 0 ? <ArrowDownRight size={14} /> : row.totalVariance > 0 ? <ArrowUpRight size={14} /> : null}
                      {formatCurrency(row.totalVariance)}
                    </div>
                  </td>
                  <td className={`px-6 py-3 text-right font-mono ${row.priceVar < 0 ? 'text-red-500' : row.priceVar > 0 ? 'text-emerald-500' : 'text-slate-400'}`}>
                    {formatCurrency(row.priceVar)}
                  </td>
                  <td className={`px-6 py-3 text-right font-mono ${row.qtyVar < 0 ? 'text-red-500' : row.qtyVar > 0 ? 'text-emerald-500' : 'text-slate-400'}`}>
                    {formatCurrency(row.qtyVar)}
                  </td>
                  <td className={`px-6 py-3 text-right font-mono ${row.resourceVar < 0 ? 'text-red-500' : row.resourceVar > 0 ? 'text-emerald-500' : 'text-slate-400'}`}>
                    {formatCurrency(row.resourceVar)}
                  </td>
                </tr>
              ))}
              {filteredData.length === 0 && (
                <tr>
                  <td colSpan={9} className="px-6 py-12 text-center text-slate-500">
                    No production orders found matching your search criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="bg-slate-50 border-t border-slate-200 p-3 px-6 flex justify-between items-center text-xs text-slate-500 font-medium">
          <span>Showing {filteredData.length} entries</span>
          <span>Last updated: Just now</span>
        </div>
      </div>
    </div>
  );
}