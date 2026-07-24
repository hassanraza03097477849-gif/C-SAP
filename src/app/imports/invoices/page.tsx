"use client";

import React, { useState } from "react";
import {
  FileText,
  DollarSign,
  TrendingUp,
  AlertCircle,
  Search,
  Filter,
  Download,
  Plus,
  MoreVertical,
  CheckCircle2,
  Clock,
  XCircle
} from "lucide-react";

export default function ImportsInvoicesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const kpis = [
    { title: "Total Invoices", value: "3,482", icon: FileText, change: "+12% vs last month" },
    { title: "Total Amount", value: "PKR 45.2M", icon: DollarSign, change: "+5% vs last month" },
    { title: "Pending Clearance", value: "142", icon: Clock, change: "-8% vs last month" },
    { title: "Discrepancies", value: "18", icon: AlertCircle, change: "-2% vs last month" },
  ];

  const invoices = [
    { id: "INV-2026-001", date: "2026-07-24", poRef: "PO-9001", supplier: "Karachi Logistics Supplies", amount: "PKR 124,500.00", tax: "PKR 12,450.00", total: "PKR 136,950.00", status: "Paid" },
    { id: "INV-2026-002", date: "2026-07-23", poRef: "PO-9005", supplier: "Apex Manufacturing", amount: "PKR 89,000.00", tax: "PKR 8,900.00", total: "PKR 97,900.00", status: "Pending" },
    { id: "INV-2026-003", date: "2026-07-22", poRef: "PO-8992", supplier: "Sunrise Electronics", amount: "PKR 210,000.00", tax: "PKR 21,000.00", total: "PKR 231,000.00", status: "Processing" },
    { id: "INV-2026-004", date: "2026-07-22", poRef: "PO-9010", supplier: "Quantum Components", amount: "PKR 45,600.00", tax: "PKR 4,560.00", total: "PKR 50,160.00", status: "Paid" },
    { id: "INV-2026-005", date: "2026-07-21", poRef: "PO-8988", supplier: "Nexus Hardware", amount: "PKR 320,000.00", tax: "PKR 32,000.00", total: "PKR 352,000.00", status: "Disputed" },
    { id: "INV-2026-006", date: "2026-07-20", poRef: "PO-8975", supplier: "Karachi Logistics Supplies", amount: "PKR 56,700.00", tax: "PKR 5,670.00", total: "PKR 62,370.00", status: "Paid" },
    { id: "INV-2026-007", date: "2026-07-19", poRef: "PO-8999", supplier: "Stellar Systems", amount: "PKR 18,900.00", tax: "PKR 1,890.00", total: "PKR 20,790.00", status: "Pending" },
    { id: "INV-2026-008", date: "2026-07-19", poRef: "PO-8960", supplier: "Orion Logistics", amount: "PKR 78,500.00", tax: "PKR 7,850.00", total: "PKR 86,350.00", status: "Paid" },
    { id: "INV-2026-009", date: "2026-07-18", poRef: "PO-8955", supplier: "Apex Manufacturing", amount: "PKR 145,000.00", tax: "PKR 14,500.00", total: "PKR 159,500.00", status: "Processing" },
    { id: "INV-2026-010", date: "2026-07-17", poRef: "PO-8940", supplier: "Zenith Corp", amount: "PKR 92,300.00", tax: "PKR 9,230.00", total: "PKR 101,530.00", status: "Paid" },
    { id: "INV-2026-011", date: "2026-07-16", poRef: "PO-8935", supplier: "Quantum Components", amount: "PKR 22,400.00", tax: "PKR 2,240.00", total: "PKR 24,640.00", status: "Pending" },
    { id: "INV-2026-012", date: "2026-07-15", poRef: "PO-8920", supplier: "Sunrise Electronics", amount: "PKR 310,000.00", tax: "PKR 31,000.00", total: "PKR 341,000.00", status: "Paid" },
    { id: "INV-2026-013", date: "2026-07-14", poRef: "PO-8910", supplier: "Nexus Hardware", amount: "PKR 67,800.00", tax: "PKR 6,780.00", total: "PKR 74,580.00", status: "Disputed" },
    { id: "INV-2026-014", date: "2026-07-13", poRef: "PO-8905", supplier: "Stellar Systems", amount: "PKR 41,200.00", tax: "PKR 4,120.00", total: "PKR 45,320.00", status: "Paid" },
    { id: "INV-2026-015", date: "2026-07-12", poRef: "PO-8890", supplier: "Karachi Logistics Supplies", amount: "PKR 156,000.00", tax: "PKR 15,600.00", total: "PKR 171,600.00", status: "Processing" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "Pending":
        return "bg-amber-100 text-amber-700 border-amber-200";
      case "Processing":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Disputed":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Paid":
        return <CheckCircle2 className="w-4 h-4 mr-1" />;
      case "Pending":
      case "Processing":
        return <Clock className="w-4 h-4 mr-1" />;
      case "Disputed":
        return <XCircle className="w-4 h-4 mr-1" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      {/* Header Container */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Import Invoices
          </h1>
          <p className="text-sm text-slate-500 mt-1">Manage and track commercial and proforma invoices</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search invoices..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all w-64"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors shadow-sm shadow-emerald-600/20">
            <Plus className="w-4 h-4" />
            New Invoice
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, index) => (
          <div
            key={index}
            className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                <kpi.icon className="w-5 h-5" />
              </div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${kpi.change.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                {kpi.change}
              </span>
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-medium text-slate-500">{kpi.title}</h3>
              <p className="text-2xl font-bold text-slate-800">{kpi.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid Container */}
      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="flex items-center justify-between p-4 border-b border-slate-100">
          <h2 className="text-lg font-semibold text-slate-800">Invoice Ledger</h2>
          <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
        
        <div className="flex-1 overflow-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Invoice Number</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Date</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">PO Ref</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Supplier</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Amount</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Tax</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Total</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Status</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer group">
                  <td className="px-6 py-3">
                    <span className="font-medium text-slate-800">{invoice.id}</span>
                  </td>
                  <td className="px-6 py-3 text-sm text-slate-600">{invoice.date}</td>
                  <td className="px-6 py-3">
                    <span className="text-sm text-emerald-600 hover:underline">{invoice.poRef}</span>
                  </td>
                  <td className="px-6 py-3 text-sm text-slate-700">{invoice.supplier}</td>
                  <td className="px-6 py-3 text-sm text-slate-700 text-right">{invoice.amount}</td>
                  <td className="px-6 py-3 text-sm text-slate-500 text-right">{invoice.tax}</td>
                  <td className="px-6 py-3 text-sm font-semibold text-slate-800 text-right">{invoice.total}</td>
                  <td className="px-6 py-3">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(invoice.status)}`}>
                      {getStatusIcon(invoice.status)}
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination footer */}
        <div className="flex items-center justify-between p-4 border-t border-slate-100 bg-slate-50/50">
          <p className="text-sm text-slate-500">Showing <span className="font-medium text-slate-800">1</span> to <span className="font-medium text-slate-800">15</span> of <span className="font-medium text-slate-800">3,482</span> invoices</p>
          <div className="flex items-center gap-1">
            <button className="px-3 py-1 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed">Previous</button>
            <button className="px-3 py-1 text-sm font-medium text-white bg-emerald-600 rounded-lg">1</button>
            <button className="px-3 py-1 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50">2</button>
            <button className="px-3 py-1 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50">3</button>
            <span className="px-2 text-slate-400">...</span>
            <button className="px-3 py-1 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}