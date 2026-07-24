import React from 'react';
import { LucideWallet, LucideTrendingUp, LucideArrowDownRight, LucideActivity } from 'lucide-react';

export default function COBudgetsPage() {
  const kpis = [
    { title: "Total Planned Fixed", value: "PKR 4.2M", icon: LucideWallet, color: "text-emerald-600" },
    { title: "Total Planned Variable", value: "PKR 1.8M", icon: LucideTrendingUp, color: "text-teal-600" },
    { title: "Overall Total Plan", value: "PKR 6.0M", icon: LucideActivity, color: "text-slate-600" },
    { title: "Actual to Date", value: "PKR 2.1M", icon: LucideArrowDownRight, color: "text-rose-600" },
  ];

  const gridData = [
    { id: 1, cc: "10010 (IT HQ)", gl: "400010", desc: "Salaries - IT", fixed: 1200000, var: 0, totalP: 1200000, actual: 400000, cons: 33 },
    { id: 2, cc: "10010 (IT HQ)", gl: "400020", desc: "Contractors", fixed: 300000, var: 150000, totalP: 450000, actual: 200000, cons: 44 },
    { id: 3, cc: "10010 (IT HQ)", gl: "400030", desc: "Software Licenses", fixed: 500000, var: 50000, totalP: 550000, actual: 520000, cons: 94 },
    { id: 4, cc: "10010 (IT HQ)", gl: "400040", desc: "Hardware Depr", fixed: 250000, var: 0, totalP: 250000, actual: 125000, cons: 50 },
    { id: 5, cc: "10010 (IT HQ)", gl: "400050", desc: "Cloud Hosting", fixed: 200000, var: 400000, totalP: 600000, actual: 350000, cons: 58 },
    { id: 6, cc: "10020 (HR HQ)", gl: "400010", desc: "Salaries - HR", fixed: 800000, var: 0, totalP: 800000, actual: 260000, cons: 32 },
    { id: 7, cc: "10020 (HR HQ)", gl: "400020", desc: "Contractors", fixed: 50000, var: 100000, totalP: 150000, actual: 40000, cons: 26 },
    { id: 8, cc: "10020 (HR HQ)", gl: "400060", desc: "Recruiting Fees", fixed: 0, var: 250000, totalP: 250000, actual: 150000, cons: 60 },
    { id: 9, cc: "10030 (Sales US)", gl: "400010", desc: "Salaries - Sales", fixed: 1500000, var: 0, totalP: 1500000, actual: 500000, cons: 33 },
    { id: 10, cc: "10030 (Sales US)", gl: "400070", desc: "Commissions", fixed: 0, var: 850000, totalP: 850000, actual: 300000, cons: 35 },
    { id: 11, cc: "10030 (Sales US)", gl: "400080", desc: "Travel & Exp", fixed: 100000, var: 400000, totalP: 500000, actual: 120000, cons: 24 },
    { id: 12, cc: "10040 (Mktg Global)", gl: "400010", desc: "Salaries - Mktg", fixed: 900000, var: 0, totalP: 900000, actual: 300000, cons: 33 },
    { id: 13, cc: "10040 (Mktg Global)", gl: "400090", desc: "Ad Spend", fixed: 0, var: 1200000, totalP: 1200000, actual: 800000, cons: 66 },
    { id: 14, cc: "10040 (Mktg Global)", gl: "400100", desc: "Events & PR", fixed: 200000, var: 300000, totalP: 500000, actual: 100000, cons: 20 },
    { id: 15, cc: "10050 (Exec)", gl: "400010", desc: "Salaries - Exec", fixed: 2000000, var: 0, totalP: 2000000, actual: 660000, cons: 33 },
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      {/* Header Container */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            CO Budgets (KP06)
          </h1>
          <p className="text-slate-500 mt-1">Cost Center & Cost Element Planning Ledger</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition-colors font-medium text-sm">
            Save Plan
          </button>
          <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-medium text-sm">
            Export
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, i) => (
          <div key={i} className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-500">{kpi.title}</span>
              <kpi.icon className={`h-5 w-5 ${kpi.color}`} />
            </div>
            <div className="text-2xl font-bold text-slate-800">{kpi.value}</div>
          </div>
        ))}
      </div>

      {/* Main Grid Container */}
      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="overflow-auto flex-1">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap">Cost Center</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap">Cost Element</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap">Description</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap text-right">Fixed Plan ($)</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap text-right">Variable Plan ($)</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap text-right">Total Plan ($)</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap text-right">Actual to Date ($)</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap text-center">Cons. %</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {gridData.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer">
                  <td className="px-6 py-3 text-sm text-slate-800 whitespace-nowrap">{row.cc}</td>
                  <td className="px-6 py-3 text-sm text-slate-800 whitespace-nowrap font-mono">{row.gl}</td>
                  <td className="px-6 py-3 text-sm text-slate-600 whitespace-nowrap">{row.desc}</td>
                  <td className="px-6 py-3 text-sm text-slate-800 text-right whitespace-nowrap">{row.fixed.toLocaleString()}</td>
                  <td className="px-6 py-3 text-sm text-slate-800 text-right whitespace-nowrap">{row.var.toLocaleString()}</td>
                  <td className="px-6 py-3 text-sm text-slate-800 font-medium text-right whitespace-nowrap">{row.totalP.toLocaleString()}</td>
                  <td className="px-6 py-3 text-sm text-slate-800 text-right whitespace-nowrap">{row.actual.toLocaleString()}</td>
                  <td className="px-6 py-3 text-sm text-center whitespace-nowrap">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      row.cons > 90 ? 'bg-rose-100 text-rose-700' :
                      row.cons > 75 ? 'bg-amber-100 text-amber-700' :
                      'bg-emerald-100 text-emerald-700'
                    }`}>
                      {row.cons}%
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