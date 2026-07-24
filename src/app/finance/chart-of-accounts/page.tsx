"use client";

import React, { useState } from "react";
import { Search, Filter, Download, Plus, ChevronDown, ChevronRight, FileText, DollarSign, Activity, Hash } from "lucide-react";

// Mock Data
const kpis = [
  { title: "Total Assets", value: "$4.2B", icon: DollarSign, change: "+12.4%", color: "text-emerald-600", bg: "bg-emerald-100" },
  { title: "Total Liabilities", value: "$1.8B", icon: Activity, change: "-2.1%", color: "text-rose-600", bg: "bg-rose-100" },
  { title: "Active Accounts", value: "2,405", icon: Hash, change: "+14", color: "text-blue-600", bg: "bg-blue-100" },
  { title: "Unposted Entries", value: "142", icon: FileText, change: "-5", color: "text-amber-600", bg: "bg-amber-100" },
];

const coaData = [
  {
    id: "100000",
    name: "Assets",
    type: "Asset",
    group: "Balance Sheet",
    balance: "$4,200,000,000",
    children: [
      {
        id: "110000",
        name: "Current Assets",
        type: "Asset",
        group: "Balance Sheet",
        balance: "$1,500,000,000",
        children: [
          { id: "111000", name: "Cash and Cash Equivalents", type: "Asset", group: "Cash", balance: "$500,000,000" },
          { id: "112000", name: "Accounts Receivable", type: "Asset", group: "Receivables", balance: "$800,000,000" },
          { id: "113000", name: "Inventory", type: "Asset", group: "Inventory", balance: "$200,000,000" },
        ],
      },
      {
        id: "120000",
        name: "Non-Current Assets",
        type: "Asset",
        group: "Balance Sheet",
        balance: "$2,700,000,000",
        children: [
          { id: "121000", name: "Property, Plant & Equipment", type: "Asset", group: "Fixed Assets", balance: "$2,000,000,000" },
          { id: "122000", name: "Intangible Assets", type: "Asset", group: "Intangibles", balance: "$700,000,000" },
        ],
      }
    ]
  },
  {
    id: "200000",
    name: "Liabilities",
    type: "Liability",
    group: "Balance Sheet",
    balance: "$1,800,000,000",
    children: [
      {
        id: "210000",
        name: "Current Liabilities",
        type: "Liability",
        group: "Balance Sheet",
        balance: "$900,000,000",
        children: [
          { id: "211000", name: "Accounts Payable", type: "Liability", group: "Payables", balance: "$600,000,000" },
          { id: "212000", name: "Short-Term Debt", type: "Liability", group: "Debt", balance: "$300,000,000" },
        ],
      },
      {
        id: "220000",
        name: "Long-Term Liabilities",
        type: "Liability",
        group: "Balance Sheet",
        balance: "$900,000,000",
        children: [
          { id: "221000", name: "Long-Term Debt", type: "Liability", group: "Debt", balance: "$700,000,000" },
          { id: "222000", name: "Deferred Tax Liabilities", type: "Liability", group: "Tax", balance: "$200,000,000" },
        ],
      }
    ]
  },
  {
    id: "300000",
    name: "Equity",
    type: "Equity",
    group: "Balance Sheet",
    balance: "$2,400,000,000",
    children: [
      { id: "310000", name: "Common Stock", type: "Equity", group: "Capital", balance: "$1,000,000,000" },
      { id: "320000", name: "Retained Earnings", type: "Equity", group: "Reserves", balance: "$1,400,000,000" },
    ]
  },
  {
    id: "400000",
    name: "Revenue",
    type: "Revenue",
    group: "Income Statement",
    balance: "$5,000,000,000",
    children: [
      { id: "410000", name: "Product Sales", type: "Revenue", group: "Operating", balance: "$4,500,000,000" },
      { id: "420000", name: "Service Revenue", type: "Revenue", group: "Operating", balance: "$500,000,000" },
    ]
  },
  {
    id: "500000",
    name: "Expenses",
    type: "Expense",
    group: "Income Statement",
    balance: "$3,200,000,000",
    children: [
      { id: "510000", name: "Cost of Goods Sold", type: "Expense", group: "COGS", balance: "$1,800,000,000" },
      { id: "520000", name: "Operating Expenses", type: "Expense", group: "OPEX", balance: "$1,400,000,000" },
    ]
  }
];

const TableRow = ({ node, level = 0 }: { node: any, level?: number }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <React.Fragment>
      <tr className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer" onClick={() => hasChildren && setIsExpanded(!isExpanded)}>
        <td className="py-3 px-4 text-sm whitespace-nowrap">
          <div className="flex items-center" style={{ paddingLeft: `${level * 24}px` }}>
            <span className="w-5 h-5 flex items-center justify-center mr-2 text-gray-400 group-hover:text-gray-600 transition-colors">
              {hasChildren ? (
                isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />
              ) : (
                <span className="w-4 h-px bg-gray-300 ml-1"></span>
              )}
            </span>
            <span className={`font-mono ${level === 0 ? 'font-semibold text-gray-900' : 'text-gray-600'}`}>{node.id}</span>
          </div>
        </td>
        <td className="py-3 px-4 text-sm">
          <span className={`${level === 0 ? 'font-semibold text-gray-900' : 'text-gray-700'}`}>{node.name}</span>
        </td>
        <td className="py-3 px-4 text-sm">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">
            {node.type}
          </span>
        </td>
        <td className="py-3 px-4 text-sm text-gray-600">{node.group}</td>
        <td className={`py-3 px-4 text-sm text-right font-medium ${level === 0 ? 'text-gray-900' : 'text-gray-700'}`}>
          {node.balance}
        </td>
        <td className="py-3 px-4 text-sm text-right">
          <button className="text-gray-400 hover:text-indigo-600 opacity-0 group-hover:opacity-100 transition-all" onClick={(e) => e.stopPropagation()}>
            View
          </button>
        </td>
      </tr>
      {isExpanded && hasChildren && node.children.map((child: any) => (
        <TableRow key={child.id} node={child} level={level + 1} />
      ))}
    </React.Fragment>
  );
};

export default function ChartOfAccounts() {
  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Chart of Accounts</h1>
          <p className="text-sm text-gray-500 mt-1">Manage and view your general ledger accounts hierarchy.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-indigo-500 transition-colors" />
            <input
              type="text"
              placeholder="Search accounts..."
              className="pl-9 pr-4 py-2 w-64 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm">
            <Filter size={16} /> Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm">
            <Download size={16} /> Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-all shadow-sm hover:shadow-indigo-500/20 shadow-indigo-500/10 active:scale-95">
            <Plus size={16} /> New Account
          </button>
        </div>
      </div>

      {/* KPI Ribbon */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <div key={index} className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex items-center justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/0 to-gray-50/50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500" />
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-500">{kpi.title}</span>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${kpi.bg} ${kpi.color}`}>
                  <Icon size={16} />
                </div>
              </div>
              <div className="flex items-baseline gap-3">
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">{kpi.value}</h3>
                <span className={`text-xs font-semibold ${kpi.change.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {kpi.change}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Ledger Grid */}
      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="overflow-x-auto flex-1">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">GL Account</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Description</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Type</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Group</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Balance</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {coaData.map((node) => (
                <TableRow key={node.id} node={node} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-gray-50/80 border-t border-gray-200 p-4 text-xs text-gray-500 flex justify-between items-center backdrop-blur-md">
          <span>Showing 5 top-level groups and their descendants.</span>
          <span className="font-medium text-gray-700">Last synced: Just now</span>
        </div>
      </div>
    </div>
  );
}
