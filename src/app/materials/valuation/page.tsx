"use client";

import React, { useState } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  PackageSearch, 
  DollarSign, 
  Search, 
  Filter, 
  Download, 
  MoreHorizontal
} from 'lucide-react';

const valuationData = [
  { id: 1, material: "RAW-1001", plant: "1000", valClass: "3000", priceControl: "V", stdPrice: "$0.00", map: "$12.50", totalStock: "1,500 PC", totalValue: "$18,750.00" },
  { id: 2, material: "RAW-1002", plant: "1000", valClass: "3000", priceControl: "V", stdPrice: "$0.00", map: "$8.25", totalStock: "3,200 PC", totalValue: "$26,400.00" },
  { id: 3, material: "RAW-1003", plant: "1100", valClass: "3000", priceControl: "V", stdPrice: "$0.00", map: "$15.75", totalStock: "850 PC", totalValue: "$13,387.50" },
  { id: 4, material: "FIN-2001", plant: "1000", valClass: "7920", priceControl: "S", stdPrice: "$145.00", map: "$142.10", totalStock: "450 EA", totalValue: "$65,250.00" },
  { id: 5, material: "FIN-2002", plant: "1000", valClass: "7920", priceControl: "S", stdPrice: "$210.50", map: "$215.00", totalStock: "120 EA", totalValue: "$25,260.00" },
  { id: 6, material: "SFG-3001", plant: "1200", valClass: "7900", priceControl: "S", stdPrice: "$55.00", map: "$54.20", totalStock: "890 PC", totalValue: "$48,950.00" },
  { id: 7, material: "SFG-3002", plant: "1200", valClass: "7900", priceControl: "S", stdPrice: "$42.50", map: "$43.10", totalStock: "1,100 PC", totalValue: "$46,750.00" },
  { id: 8, material: "PKG-4001", plant: "1000", valClass: "3050", priceControl: "V", stdPrice: "$0.00", map: "$1.20", totalStock: "15,000 EA", totalValue: "$18,000.00" },
  { id: 9, material: "PKG-4002", plant: "1100", valClass: "3050", priceControl: "V", stdPrice: "$0.00", map: "$0.85", totalStock: "22,000 EA", totalValue: "$18,700.00" },
  { id: 10, material: "RAW-1004", plant: "1000", valClass: "3000", priceControl: "V", stdPrice: "$0.00", map: "$4.60", totalStock: "4,500 PC", totalValue: "$20,700.00" },
  { id: 11, material: "RAW-1005", plant: "1200", valClass: "3000", priceControl: "V", stdPrice: "$0.00", map: "$18.90", totalStock: "620 PC", totalValue: "$11,718.00" },
  { id: 12, material: "FIN-2003", plant: "1100", valClass: "7920", priceControl: "S", stdPrice: "$320.00", map: "$315.50", totalStock: "85 EA", totalValue: "$27,200.00" },
  { id: 13, material: "FIN-2004", plant: "1200", valClass: "7920", priceControl: "S", stdPrice: "$85.50", map: "$88.00", totalStock: "340 EA", totalValue: "$29,070.00" },
  { id: 14, material: "SFG-3003", plant: "1000", valClass: "7900", priceControl: "S", stdPrice: "$112.00", map: "$110.80", totalStock: "210 PC", totalValue: "$23,520.00" },
  { id: 15, material: "RAW-1006", plant: "1100", valClass: "3000", priceControl: "V", stdPrice: "$0.00", map: "$22.40", totalStock: "400 PC", totalValue: "$8,960.00" },
];

export default function MaterialsValuationPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = valuationData.filter(item => 
    item.material.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.plant.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Material Valuation (MBEW)
          </h1>
          <p className="text-slate-500 text-sm mt-1">Real-time ledger of material prices and inventory values.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search Material/Plant..."
              className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-slate-800"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-100 transition-colors text-sm font-medium">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-slate-50 rounded-lg hover:bg-emerald-700 transition-colors shadow-sm text-sm font-medium">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">Total Valuation</p>
              <h3 className="text-2xl font-bold text-slate-800">$402,615.50</h3>
            </div>
            <div className="p-2 bg-emerald-100/50 rounded-lg text-emerald-600">
              <DollarSign className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs text-emerald-600 font-medium">
            <TrendingUp className="w-3 h-3" />
            <span>+2.4% vs last month</span>
          </div>
        </div>

        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">Active Materials</p>
              <h3 className="text-2xl font-bold text-slate-800">4,291</h3>
            </div>
            <div className="p-2 bg-blue-100/50 rounded-lg text-blue-600">
              <PackageSearch className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <span>Across 3 active plants</span>
          </div>
        </div>

        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">Avg Price Variance</p>
              <h3 className="text-2xl font-bold text-slate-800">1.8%</h3>
            </div>
            <div className="p-2 bg-amber-100/50 rounded-lg text-amber-600">
              <Calculator className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs text-amber-600 font-medium">
            <span>Standard vs Moving Average</span>
          </div>
        </div>

        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">Unvalued Stock</p>
              <h3 className="text-2xl font-bold text-slate-800">12</h3>
            </div>
            <div className="p-2 bg-indigo-100/50 rounded-lg text-indigo-600">
              <PackageSearch className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <span>Pending valuation class assignment</span>
          </div>
        </div>
      </div>

      {/* Main Grid Container */}
      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="flex-1 overflow-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Material</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Plant</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Val. Class</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Ctrl</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Std. Price</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">MAP</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Total Stock</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Total Value</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredData.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer">
                  <td className="px-6 py-4 text-sm font-medium text-slate-800">{row.material}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{row.plant}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                      {row.valClass}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold ${row.priceControl === 'S' ? 'bg-blue-50 text-blue-700' : 'bg-emerald-50 text-emerald-700'}`}>
                      {row.priceControl}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 font-mono">{row.stdPrice}</td>
                  <td className="px-6 py-4 text-sm text-slate-600 font-mono">{row.map}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{row.totalStock}</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-800 font-mono">{row.totalValue}</td>
                  <td className="px-6 py-4 text-sm text-right">
                    <button className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredData.length === 0 && (
                <tr>
                  <td colSpan={9} className="px-6 py-12 text-center text-slate-500 text-sm">
                    No materials found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="bg-slate-50 border-t border-slate-200 p-4 flex items-center justify-between text-sm text-slate-600">
          <div>Showing {filteredData.length} of {valuationData.length} materials</div>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-white transition-colors disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-white transition-colors bg-white font-medium">1</button>
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-white transition-colors">2</button>
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-white transition-colors">3</button>
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-white transition-colors">Next</button>
          </div>
        </div>
      </div>

    </div>
  );
}
