"use client";

import React, { useState } from "react";

export default function ExpenseAllocationPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const kpis = [
    { title: "Total Pool Assessed", value: "$12.4M", trend: "+2.1%" },
    { title: "Pending Cycles", value: "3", trend: "-1" },
    { title: "Total Segments", value: "145", trend: "+12" },
    { title: "Allocation Errors", value: "0", trend: "0" }
  ];

  const assessmentData = [
    { id: 1, cycle: "IT_ALLOC_01", segment: "IT Support", senderCC: "CC-9010 (IT HQ)", receiverCC: "CC-1020 (Sales)", base: "Headcount", pool: "$1,200,000", allocated: "$450,000" },
    { id: 2, cycle: "IT_ALLOC_01", segment: "IT Support", senderCC: "CC-9010 (IT HQ)", receiverCC: "CC-2050 (Marketing)", base: "Headcount", pool: "$1,200,000", allocated: "$350,000" },
    { id: 3, cycle: "IT_ALLOC_01", segment: "IT Support", senderCC: "CC-9010 (IT HQ)", receiverCC: "CC-3010 (R&D)", base: "Headcount", pool: "$1,200,000", allocated: "$400,000" },
    { id: 4, cycle: "HR_ALLOC_02", segment: "Recruiting", senderCC: "CC-8020 (HR)", receiverCC: "CC-1020 (Sales)", base: "Headcount", pool: "$850,000", allocated: "$400,000" },
    { id: 5, cycle: "HR_ALLOC_02", segment: "Recruiting", senderCC: "CC-8020 (HR)", receiverCC: "CC-3010 (R&D)", base: "Headcount", pool: "$850,000", allocated: "$450,000" },
    { id: 6, cycle: "FAC_ALLOC_01", segment: "Building Rent", senderCC: "CC-7050 (Facilities)", receiverCC: "CC-1020 (Sales)", base: "Square Ft", pool: "$3,500,000", allocated: "$1,500,000" },
    { id: 7, cycle: "FAC_ALLOC_01", segment: "Building Rent", senderCC: "CC-7050 (Facilities)", receiverCC: "CC-2050 (Marketing)", base: "Square Ft", pool: "$3,500,000", allocated: "$1,000,000" },
    { id: 8, cycle: "FAC_ALLOC_01", segment: "Building Rent", senderCC: "CC-7050 (Facilities)", receiverCC: "CC-3010 (R&D)", base: "Square Ft", pool: "$3,500,000", allocated: "$1,000,000" },
    { id: 9, cycle: "MGMT_ALLOC_01", segment: "Exec Overhead", senderCC: "CC-9900 (Exec)", receiverCC: "CC-1020 (Sales)", base: "Revenue", pool: "$5,000,000", allocated: "$2,500,000" },
    { id: 10, cycle: "MGMT_ALLOC_01", segment: "Exec Overhead", senderCC: "CC-9900 (Exec)", receiverCC: "CC-2050 (Marketing)", base: "Revenue", pool: "$5,000,000", allocated: "$1,500,000" },
    { id: 11, cycle: "MGMT_ALLOC_01", segment: "Exec Overhead", senderCC: "CC-9900 (Exec)", receiverCC: "CC-3010 (R&D)", base: "Revenue", pool: "$5,000,000", allocated: "$1,000,000" },
    { id: 12, cycle: "LEGAL_ALLOC_01", segment: "Compliance", senderCC: "CC-8500 (Legal)", receiverCC: "CC-1020 (Sales)", base: "Fixed %", pool: "$900,000", allocated: "$450,000" },
    { id: 13, cycle: "LEGAL_ALLOC_01", segment: "Compliance", senderCC: "CC-8500 (Legal)", receiverCC: "CC-2050 (Marketing)", base: "Fixed %", pool: "$900,000", allocated: "$270,000" },
    { id: 14, cycle: "LEGAL_ALLOC_01", segment: "Compliance", senderCC: "CC-8500 (Legal)", receiverCC: "CC-3010 (R&D)", base: "Fixed %", pool: "$900,000", allocated: "$180,000" },
    { id: 15, cycle: "CAF_ALLOC_01", segment: "Cafeteria Sub", senderCC: "CC-7100 (Cafeteria)", receiverCC: "CC-1020 (Sales)", base: "Headcount", pool: "$450,000", allocated: "$225,000" }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Expense Allocation (KSU5)
          </h1>
          <p className="text-sm text-slate-500 mt-1">Execute Actual Assessment Cycle</p>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search cycles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 bg-white"
          />
          <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
            Execute Cycle
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, idx) => (
          <div key={idx} className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
            <p className="text-sm font-medium text-slate-500">{kpi.title}</p>
            <div className="flex items-end justify-between mt-2">
              <span className="text-2xl font-bold text-slate-800">{kpi.value}</span>
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${kpi.trend.startsWith('+') ? 'bg-emerald-100 text-emerald-700' : kpi.trend.startsWith('-') ? 'bg-rose-100 text-rose-700' : 'bg-slate-100 text-slate-700'}`}>
                {kpi.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="overflow-auto flex-1 p-2">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Cycle</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Segment</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Sender Cost Center</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Receiver Cost Center</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Allocation Base</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Total Pool Amount</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Allocated Amount</th>
              </tr>
            </thead>
            <tbody>
              {assessmentData
                .filter(row => row.cycle.toLowerCase().includes(searchTerm.toLowerCase()) || row.segment.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((row) => (
                <tr key={row.id} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer">
                  <td className="px-6 py-3 text-sm font-medium text-slate-800">{row.cycle}</td>
                  <td className="px-6 py-3 text-sm text-slate-600">{row.segment}</td>
                  <td className="px-6 py-3 text-sm text-slate-600">{row.senderCC}</td>
                  <td className="px-6 py-3 text-sm text-slate-600">{row.receiverCC}</td>
                  <td className="px-6 py-3 text-sm text-slate-600">{row.base}</td>
                  <td className="px-6 py-3 text-sm text-slate-800 font-medium text-right">{row.pool}</td>
                  <td className="px-6 py-3 text-sm text-emerald-600 font-semibold text-right">{row.allocated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}