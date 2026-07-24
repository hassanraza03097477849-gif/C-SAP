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
import { SmartTable, Column, FormField } from '@/components/SmartTable';

export default function ImportsInvoicesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const kpis = [
    { title: "Total Invoices", value: "3,482", icon: FileText, change: "+12% vs last month" },
    { title: "Total Amount", value: "PKR 45.2M", icon: DollarSign, change: "+5% vs last month" },
    { title: "Pending Clearance", value: "142", icon: Clock, change: "-8% vs last month" },
    { title: "Discrepancies", value: "18", icon: AlertCircle, change: "-2% vs last month" },
  ];

  const [items, setItems] = useState([
    { id: "INV-2026-001", date: "2026-07-24", poRef: "PO-9001", supplier: "Karachi Logistics Supplies", amount: "PKR 124,500.00", tax: "PKR 12,450.00", total: "PKR 136,950.00", status: "Paid" },
    { id: "INV-2026-002", date: "2026-07-23", poRef: "PO-9005", supplier: "Lahore Manufacturing", amount: "PKR 89,000.00", tax: "PKR 8,900.00", total: "PKR 97,900.00", status: "Pending" },
    { id: "INV-2026-003", date: "2026-07-22", poRef: "PO-8992", supplier: "Islamabad Electronics", amount: "PKR 210,000.00", tax: "PKR 21,000.00", total: "PKR 231,000.00", status: "Processing" },
    { id: "INV-2026-004", date: "2026-07-22", poRef: "PO-9010", supplier: "Peshawar Components", amount: "PKR 45,600.00", tax: "PKR 4,560.00", total: "PKR 50,160.00", status: "Paid" },
    { id: "INV-2026-005", date: "2026-07-21", poRef: "PO-8988", supplier: "Quetta Hardware", amount: "PKR 320,000.00", tax: "PKR 32,000.00", total: "PKR 352,000.00", status: "Disputed" }
  ]);

  const columns: Column[] = [
    { key: "id", label: "Invoice Number" },
    { key: "date", label: "Date" },
    { key: "poRef", label: "PO Ref" },
    { key: "supplier", label: "Supplier" },
    { key: "amount", label: "Amount" },
    { key: "tax", label: "Tax" },
    { key: "total", label: "Total" },
    { key: "status", label: "Status", format: (value) => (
      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(value as string)}`}>
        {getStatusIcon(value as string)}
        {value}
      </span>
    )}
  ];

  const formFields: FormField[] = [
    { key: "id", label: "Invoice Number", type: "text", required: true },
    { key: "date", label: "Date", type: "date", required: true },
    { key: "poRef", label: "PO Ref", type: "text" },
    { key: "supplier", label: "Supplier", type: "text", required: true },
    { key: "amount", label: "Amount", type: "text" },
    { key: "tax", label: "Tax", type: "text" },
    { key: "total", label: "Total", type: "text", required: true },
    { key: "status", label: "Status", type: "select", options: ["Paid", "Pending", "Processing", "Disputed"], required: true }
  ];

  const filteredInvoices = items.filter(item => item.id.toLowerCase().includes(searchTerm.toLowerCase()) || item.supplier.toLowerCase().includes(searchTerm.toLowerCase()));

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
        
        <SmartTable data={filteredInvoices} columns={columns} formFields={formFields} onAdd={(newItem) => setItems([newItem, ...items])} />
      </div>
    </div>
  );
}