"use client";

import React from "react";
import { 
  BarChart3, 
  TrendingUp, 
  DollarSign, 
  Percent,
  Download,
  Filter,
  Search,
  MoreVertical
} from "lucide-react";

const MOCK_DATA = [
  { id: "1001", customerGroup: "CG01 - Retail", productHierarchy: "PH10 - Electronics", region: "NA - North America", volume: 15400, revenue: 1250000, cogs: 850000, margin: 400000, netContribution: 310000 },
  { id: "1002", customerGroup: "CG02 - Wholesale", productHierarchy: "PH10 - Electronics", region: "EMEA - Europe", volume: 22000, revenue: 1850000, cogs: 1300000, margin: 550000, netContribution: 420000 },
  { id: "1003", customerGroup: "CG03 - Enterprise", productHierarchy: "PH20 - Software", region: "APAC - Asia Pacific", volume: 5500, revenue: 2100000, cogs: 400000, margin: 1700000, netContribution: 1550000 },
  { id: "1004", customerGroup: "CG01 - Retail", productHierarchy: "PH30 - Accessories", region: "NA - North America", volume: 45000, revenue: 675000, cogs: 300000, margin: 375000, netContribution: 250000 },
  { id: "1005", customerGroup: "CG02 - Wholesale", productHierarchy: "PH20 - Software", region: "NA - North America", volume: 8000, revenue: 3200000, cogs: 600000, margin: 2600000, netContribution: 2400000 },
  { id: "1006", customerGroup: "CG03 - Enterprise", productHierarchy: "PH10 - Electronics", region: "EMEA - Europe", volume: 12000, revenue: 1450000, cogs: 1000000, margin: 450000, netContribution: 380000 },
  { id: "1007", customerGroup: "CG01 - Retail", productHierarchy: "PH10 - Electronics", region: "LATAM - Latin America", volume: 9500, revenue: 850000, cogs: 600000, margin: 250000, netContribution: 190000 },
  { id: "1008", customerGroup: "CG02 - Wholesale", productHierarchy: "PH30 - Accessories", region: "APAC - Asia Pacific", volume: 65000, revenue: 1100000, cogs: 500000, margin: 600000, netContribution: 450000 },
  { id: "1009", customerGroup: "CG03 - Enterprise", productHierarchy: "PH20 - Software", region: "NA - North America", volume: 3200, revenue: 1800000, cogs: 350000, margin: 1450000, netContribution: 1300000 },
  { id: "1010", customerGroup: "CG01 - Retail", productHierarchy: "PH20 - Software", region: "EMEA - Europe", volume: 14000, revenue: 950000, cogs: 200000, margin: 750000, netContribution: 620000 },
  { id: "1011", customerGroup: "CG02 - Wholesale", productHierarchy: "PH10 - Electronics", region: "APAC - Asia Pacific", volume: 18500, revenue: 1650000, cogs: 1100000, margin: 550000, netContribution: 410000 },
  { id: "1012", customerGroup: "CG03 - Enterprise", productHierarchy: "PH30 - Accessories", region: "LATAM - Latin America", volume: 22000, revenue: 450000, cogs: 200000, margin: 250000, netContribution: 180000 },
  { id: "1013", customerGroup: "CG01 - Retail", productHierarchy: "PH10 - Electronics", region: "APAC - Asia Pacific", volume: 11000, revenue: 980000, cogs: 700000, margin: 280000, netContribution: 210000 },
  { id: "1014", customerGroup: "CG02 - Wholesale", productHierarchy: "PH20 - Software", region: "EMEA - Europe", volume: 6800, revenue: 2750000, cogs: 500000, margin: 2250000, netContribution: 2050000 },
  { id: "1015", customerGroup: "CG03 - Enterprise", productHierarchy: "PH10 - Electronics", region: "NA - North America", volume: 9200, revenue: 1150000, cogs: 800000, margin: 350000, netContribution: 260000 },
];

export default function ProfitabilityPage() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "PKR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-US").format(num);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      {/* Header Container */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            CO-PA Profitability Analysis
          </h1>
          <p className="text-sm text-slate-500 mt-1">Transaction KE30 - Operating Concern 1000</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search segments..." 
              className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all w-64"
            />
          </div>
          <button className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
            <Filter className="h-4 w-4" />
          </button>
          <button className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
            <Download className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Total Revenue</p>
              <h3 className="text-2xl font-bold text-slate-800">$20,155,000</h3>
            </div>
            <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
              <DollarSign className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-emerald-600 font-medium flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              +12.5%
            </span>
            <span className="text-slate-400 ml-2">vs last period</span>
          </div>
        </div>

        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Total COGS</p>
              <h3 className="text-2xl font-bold text-slate-800">$8,900,000</h3>
            </div>
            <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
              <BarChart3 className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-emerald-600 font-medium flex items-center">
              <TrendingUp className="h-4 w-4 mr-1 rotate-180" />
              -2.4%
            </span>
            <span className="text-slate-400 ml-2">vs last period</span>
          </div>
        </div>

        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Gross Margin</p>
              <h3 className="text-2xl font-bold text-slate-800">$11,255,000</h3>
            </div>
            <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
              <Percent className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-emerald-600 font-medium flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              +8.1%
            </span>
            <span className="text-slate-400 ml-2">vs last period</span>
          </div>
        </div>

        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Net Contribution</p>
              <h3 className="text-2xl font-bold text-slate-800">$8,970,000</h3>
            </div>
            <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
              <DollarSign className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-emerald-600 font-medium flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              +15.3%
            </span>
            <span className="text-slate-400 ml-2">vs last period</span>
          </div>
        </div>
      </div>

      {/* Main Grid Container */}
      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="overflow-auto flex-1">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap">Customer Group</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap">Product Hierarchy</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap">Region</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap text-right">Sales Qty</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap text-right">Revenue</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap text-right">COGS</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap text-right">Gross Margin</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap text-right">Margin %</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap text-right">Net Contribution</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_DATA.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer group">
                  <td className="px-6 py-3 text-sm text-slate-800 font-medium">{row.customerGroup}</td>
                  <td className="px-6 py-3 text-sm text-slate-600">{row.productHierarchy}</td>
                  <td className="px-6 py-3 text-sm text-slate-600">
                    <span className="inline-flex items-center px-2 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                      {row.region}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-sm text-slate-600 text-right font-mono">{formatNumber(row.volume)}</td>
                  <td className="px-6 py-3 text-sm text-slate-800 text-right font-mono">{formatCurrency(row.revenue)}</td>
                  <td className="px-6 py-3 text-sm text-slate-600 text-right font-mono">{formatCurrency(row.cogs)}</td>
                  <td className="px-6 py-3 text-sm text-emerald-600 font-medium text-right font-mono">{formatCurrency(row.margin)}</td>
                  <td className="px-6 py-3 text-sm text-slate-600 text-right font-mono">
                    <div className="flex items-center justify-end gap-2">
                      <span>{((row.margin / row.revenue) * 100).toFixed(1)}%</span>
                      <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-emerald-500 rounded-full"
                          style={{ width: `${(row.margin / row.revenue) * 100}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-sm text-teal-600 font-bold text-right font-mono">{formatCurrency(row.netContribution)}</td>
                  <td className="px-6 py-3 text-center">
                    <button className="text-slate-400 hover:text-emerald-600 transition-colors opacity-0 group-hover:opacity-100">
                      <MoreVertical className="h-4 w-4 mx-auto" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="sticky bottom-0 bg-slate-50/95 backdrop-blur-md z-10 border-t border-slate-200">
              <tr className="font-semibold">
                <td colSpan={3} className="px-6 py-4 text-sm text-slate-800">Total</td>
                <td className="px-6 py-4 text-sm text-slate-800 text-right font-mono">
                  {formatNumber(MOCK_DATA.reduce((acc, curr) => acc + curr.volume, 0))}
                </td>
                <td className="px-6 py-4 text-sm text-slate-800 text-right font-mono">
                  {formatCurrency(MOCK_DATA.reduce((acc, curr) => acc + curr.revenue, 0))}
                </td>
                <td className="px-6 py-4 text-sm text-slate-800 text-right font-mono">
                  {formatCurrency(MOCK_DATA.reduce((acc, curr) => acc + curr.cogs, 0))}
                </td>
                <td className="px-6 py-4 text-sm text-emerald-600 text-right font-mono">
                  {formatCurrency(MOCK_DATA.reduce((acc, curr) => acc + curr.margin, 0))}
                </td>
                <td className="px-6 py-4 text-sm text-slate-800 text-right font-mono">
                  {((MOCK_DATA.reduce((acc, curr) => acc + curr.margin, 0) / MOCK_DATA.reduce((acc, curr) => acc + curr.revenue, 0)) * 100).toFixed(1)}%
                </td>
                <td className="px-6 py-4 text-sm text-teal-600 text-right font-mono">
                  {formatCurrency(MOCK_DATA.reduce((acc, curr) => acc + curr.netContribution, 0))}
                </td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}