"use client";

import React, { useState } from "react";
import { Check, Search, Filter, Download, MoreHorizontal, Settings, AlertCircle, FileText, CheckCircle2, XCircle } from "lucide-react";

export default function AccountsPayableF110() {
  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const kpis = [
    { title: "Total Outstanding", value: "$4,285,900", sub: "+12% vs last month", icon: <FileText className="w-5 h-5 text-blue-400" /> },
    { title: "Due This Week", value: "$1,150,400", sub: "34 invoices pending", icon: <AlertCircle className="w-5 h-5 text-amber-400" /> },
    { title: "Ready for Payment (F110)", value: "$850,200", sub: "22 selected items", icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" /> },
    { title: "Blocked Invoices", value: "$125,500", sub: "5 items require review", icon: <XCircle className="w-5 h-5 text-rose-400" /> },
  ];

  const invoices = [
    { id: "INV-2026-8901", supplier: "TechCorp Global", ref: "PO-9921", amount: 45000.0, date: "2026-07-25", status: "Approved" },
    { id: "INV-2026-8902", supplier: "Apex Supplies", ref: "PO-9922", amount: 12500.5, date: "2026-07-26", status: "Pending" },
    { id: "INV-2026-8903", supplier: "Quantum Systems", ref: "PO-9923", amount: 250000.0, date: "2026-07-28", status: "Approved" },
    { id: "INV-2026-8904", supplier: "Stellar Logistics", ref: "PO-9924", amount: 8400.0, date: "2026-07-29", status: "Blocked" },
    { id: "INV-2026-8905", supplier: "Nexus Services", ref: "PO-9925", amount: 120000.0, date: "2026-07-30", status: "Approved" },
    { id: "INV-2026-8906", supplier: "TechCorp Global", ref: "PO-9926", amount: 15500.0, date: "2026-07-30", status: "Pending" },
    { id: "INV-2026-8907", supplier: "Orion Networks", ref: "PO-9927", amount: 45000.0, date: "2026-08-02", status: "Approved" },
    { id: "INV-2026-8908", supplier: "Vertex Solutions", ref: "PO-9928", amount: 67800.0, date: "2026-08-05", status: "Approved" },
    { id: "INV-2026-8909", supplier: "Zenith Inc", ref: "PO-9929", amount: 9200.0, date: "2026-08-10", status: "Blocked" },
    { id: "INV-2026-8910", supplier: "Apex Supplies", ref: "PO-9930", amount: 18450.0, date: "2026-08-12", status: "Approved" },
  ];

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedInvoices(invoices.map((inv) => inv.id));
    } else {
      setSelectedInvoices([]);
    }
  };

  const handleSelectInvoice = (id: string) => {
    setSelectedInvoices((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "PKR",
    }).format(amount);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved": return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
      case "Pending": return "bg-amber-500/10 text-amber-500 border-amber-500/20";
      case "Blocked": return "bg-rose-500/10 text-rose-500 border-rose-500/20";
      default: return "bg-slate-500/10 text-slate-500 border-slate-500/20";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      {/* Header */}
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Accounts Payable <span className="text-sm font-normal text-slate-500 bg-slate-100 px-2 py-0.5 rounded">F110</span>
          </h1>
          <p className="text-xs text-slate-500 mt-1">Automatic Payment Program - Proposal Run</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-800 text-sm font-medium rounded-md transition-colors border border-slate-200">
            Proposal Parameters
          </button>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-md transition-colors shadow-lg shadow-blue-500/20">
            Schedule Payment Run
          </button>
        </div>
      </header>

      {/* KPI Ribbon */}
      <div className="grid grid-cols-4 gap-4 shrink-0">
        {kpis.map((kpi, idx) => (
          <div key={idx} className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{kpi.title}</span>
              {kpi.icon}
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-1">{kpi.value}</div>
            <div className="text-xs text-slate-500">{kpi.sub}</div>
          </div>
        ))}
      </div>

      {/* Main Content - Matrix Grid */}
      <main className="flex-1 flex flex-col p-6 overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search supplier, bill #..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-1.5 bg-white border border-slate-200 rounded-md text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 w-64 transition-all"
              />
            </div>
            <button className="p-1.5 bg-white border border-slate-200 rounded-md text-slate-600 hover:text-slate-800 hover:bg-slate-50 transition-colors">
              <Filter className="w-4 h-4" />
            </button>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-slate-600">Selected:</span>
            <span className="font-semibold text-blue-600">{selectedInvoices.length}</span>
            <span className="text-slate-300 mx-2">|</span>
            <button className="p-1.5 text-slate-600 hover:text-slate-800 transition-colors">
              <Download className="w-4 h-4" />
            </button>
            <button className="p-1.5 text-slate-600 hover:text-slate-800 transition-colors">
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
                <tr className="bg-slate-50 text-slate-600 border-b border-slate-200 text-xs uppercase tracking-wider">
                  <th className="px-6 py-4 font-semibold text-slate-600 text-sm">
                    <input
                      type="checkbox"
                      checked={selectedInvoices.length === invoices.length}
                      onChange={handleSelectAll}
                      className="w-4 h-4 rounded border-slate-300 bg-white checked:bg-blue-500 focus:ring-blue-500/50"
                    />
                  </th>
                  <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Bill #</th>
                  <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Supplier</th>
                  <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Reference</th>
                  <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Amount</th>
                  <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Maturity Date</th>
                  <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Status</th>
                  <th className="px-6 py-4 font-semibold text-slate-600 text-sm"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {invoices.map((inv) => (
                  <tr
                    key={inv.id}
                    className={`hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer ${selectedInvoices.includes(inv.id) ? "bg-blue-50" : ""}`}
                  >
                    <td className="p-3 text-center">
                      <input
                        type="checkbox"
                        checked={selectedInvoices.includes(inv.id)}
                        onChange={() => handleSelectInvoice(inv.id)}
                        className="w-4 h-4 rounded border-slate-300 bg-white checked:bg-blue-500 focus:ring-blue-500/50 transition-colors"
                      />
                    </td>
                    <td className="p-3 font-medium text-slate-800">{inv.id}</td>
                    <td className="p-3">{inv.supplier}</td>
                    <td className="p-3 text-slate-500">{inv.ref}</td>
                    <td className="p-3 text-right font-mono text-slate-800">{formatCurrency(inv.amount)}</td>
                    <td className="p-3">
                      <span className="text-slate-800">{inv.date}</span>
                    </td>
                    <td className="p-3">
                      <span className={`px-2 py-1 text-[10px] uppercase font-bold tracking-wider rounded-full border ${getStatusColor(inv.status)}`}>
                        {inv.status}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <button className="text-slate-400 hover:text-slate-600 transition-colors">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}