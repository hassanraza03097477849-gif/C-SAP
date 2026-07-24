"use client";

import React, { useState } from 'react';
import { 
  ChevronRight, 
  ChevronDown, 
  Search, 
  Download, 
  Printer, 
  Settings, 
  Filter,
  TrendingUp,
  DollarSign,
  Activity,
  Briefcase
} from 'lucide-react';

// --- DATA TYPES ---
interface StatementNode {
  id: string;
  name: string;
  glAccount?: string;
  amount: number;
  comparisonAmount?: number;
  children?: StatementNode[];
}

// --- DUMMY DATA ---
const financialData: StatementNode[] = [
  {
    id: "1",
    name: "Assets",
    amount: 15420000,
    comparisonAmount: 14500000,
    children: [
      {
        id: "1.1",
        name: "Current Assets",
        amount: 8500000,
        comparisonAmount: 7800000,
        children: [
          { id: "1.1.1", name: "Cash and Cash Equivalents", glAccount: "100000", amount: 2500000, comparisonAmount: 2100000 },
          { id: "1.1.2", name: "Accounts Receivable", glAccount: "120000", amount: 3200000, comparisonAmount: 3000000 },
          { id: "1.1.3", name: "Inventory", glAccount: "130000", amount: 2800000, comparisonAmount: 2700000 }
        ]
      },
      {
        id: "1.2",
        name: "Non-Current Assets",
        amount: 6920000,
        comparisonAmount: 6700000,
        children: [
          { id: "1.2.1", name: "Property, Plant & Equipment", glAccount: "150000", amount: 5000000, comparisonAmount: 5100000 },
          { id: "1.2.2", name: "Intangible Assets", glAccount: "170000", amount: 1500000, comparisonAmount: 1200000 },
          { id: "1.2.3", name: "Long-term Investments", glAccount: "180000", amount: 420000, comparisonAmount: 400000 }
        ]
      }
    ]
  },
  {
    id: "2",
    name: "Liabilities & Equity",
    amount: 15420000,
    comparisonAmount: 14500000,
    children: [
      {
        id: "2.1",
        name: "Current Liabilities",
        amount: 4200000,
        comparisonAmount: 4000000,
        children: [
          { id: "2.1.1", name: "Accounts Payable", glAccount: "200000", amount: 1800000, comparisonAmount: 1900000 },
          { id: "2.1.2", name: "Short-term Debt", glAccount: "210000", amount: 1500000, comparisonAmount: 1200000 },
          { id: "2.1.3", name: "Accrued Liabilities", glAccount: "220000", amount: 900000, comparisonAmount: 900000 }
        ]
      },
      {
        id: "2.2",
        name: "Long-Term Liabilities",
        amount: 5500000,
        comparisonAmount: 5200000,
        children: [
          { id: "2.2.1", name: "Long-term Debt", glAccount: "250000", amount: 4800000, comparisonAmount: 4500000 },
          { id: "2.2.2", name: "Deferred Tax Liabilities", glAccount: "260000", amount: 700000, comparisonAmount: 700000 }
        ]
      },
      {
        id: "2.3",
        name: "Shareholders' Equity",
        amount: 5720000,
        comparisonAmount: 5300000,
        children: [
          { id: "2.3.1", name: "Common Stock", glAccount: "300000", amount: 1000000, comparisonAmount: 1000000 },
          { id: "2.3.2", name: "Retained Earnings", glAccount: "310000", amount: 4720000, comparisonAmount: 4300000 }
        ]
      }
    ]
  },
  {
    id: "3",
    name: "Income Statement",
    amount: 3850000,
    comparisonAmount: 3200000,
    children: [
      {
        id: "3.1",
        name: "Revenue",
        amount: 12500000,
        comparisonAmount: 11200000,
        children: [
          { id: "3.1.1", name: "Product Sales", glAccount: "400000", amount: 9500000, comparisonAmount: 8500000 },
          { id: "3.1.2", name: "Service Revenue", glAccount: "410000", amount: 3000000, comparisonAmount: 2700000 }
        ]
      },
      {
        id: "3.2",
        name: "Cost of Goods Sold (COGS)",
        amount: -5200000,
        comparisonAmount: -4800000,
        children: [
          { id: "3.2.1", name: "Direct Materials", glAccount: "500000", amount: -2800000, comparisonAmount: -2500000 },
          { id: "3.2.2", name: "Direct Labor", glAccount: "510000", amount: -1500000, comparisonAmount: -1400000 },
          { id: "3.2.3", name: "Manufacturing Overhead", glAccount: "520000", amount: -900000, comparisonAmount: -900000 }
        ]
      },
      {
        id: "3.3",
        name: "Gross Profit",
        amount: 7300000,
        comparisonAmount: 6400000
      },
      {
        id: "3.4",
        name: "Operating Expenses (OPEX)",
        amount: -2800000,
        comparisonAmount: -2600000,
        children: [
          { id: "3.4.1", name: "Sales & Marketing", glAccount: "600000", amount: -1200000, comparisonAmount: -1100000 },
          { id: "3.4.2", name: "Research & Development", glAccount: "610000", amount: -800000, comparisonAmount: -750000 },
          { id: "3.4.3", name: "General & Administrative", glAccount: "620000", amount: -800000, comparisonAmount: -750000 }
        ]
      },
      {
        id: "3.5",
        name: "Operating Income (EBIT)",
        amount: 4500000,
        comparisonAmount: 3800000
      },
      {
        id: "3.6",
        name: "Interest & Taxes",
        amount: -650000,
        comparisonAmount: -600000,
        children: [
          { id: "3.6.1", name: "Interest Expense", glAccount: "700000", amount: -250000, comparisonAmount: -220000 },
          { id: "3.6.2", name: "Income Tax Expense", glAccount: "710000", amount: -400000, comparisonAmount: -380000 }
        ]
      },
      {
        id: "3.7",
        name: "Net Income",
        amount: 3850000,
        comparisonAmount: 3200000
      }
    ]
  }
];

// --- FORMATTERS ---
const formatCurrency = (val: number) => {
  const isNegative = val < 0;
  const absVal = Math.abs(val);
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'PKR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(absVal);
  return isNegative ? `(${formatted})` : formatted;
};

const formatPercent = (val: number) => {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
  }).format(val);
  return val > 0 ? `+${formatted}` : formatted;
};

// --- COMPONENTS ---

export default function FinancialStatementsPage() {
  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({
    "1": true,
    "1.1": true,
    "1.2": true,
    "2": true,
    "2.1": true,
    "3": true,
    "3.1": true,
    "3.2": true,
    "3.4": true
  });
  
  const [searchQuery, setSearchQuery] = useState("");

  const toggleRow = (id: string) => {
    setExpandedRows(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    const traverse = (nodes: StatementNode[]) => {
      nodes.forEach(node => {
        if (node.children) {
          allExpanded[node.id] = true;
          traverse(node.children);
        }
      });
    };
    traverse(financialData);
    setExpandedRows(allExpanded);
  };

  const collapseAll = () => {
    setExpandedRows({});
  };

  // Row Renderer
  const renderRow = (node: StatementNode, depth: number = 0) => {
    const isExpanded = !!expandedRows[node.id];
    const hasChildren = node.children && node.children.length > 0;
    const paddingLeft = `${depth * 1.5 + 1}rem`;
    
    let variance = 0;
    let variancePct = 0;
    if (node.comparisonAmount !== undefined) {
      variance = node.amount - node.comparisonAmount;
      variancePct = node.comparisonAmount !== 0 ? variance / Math.abs(node.comparisonAmount) : 0;
    }

    const rowBg = depth === 0 
      ? 'font-semibold text-slate-800' 
      : depth === 1 
      ? 'font-medium text-slate-200' 
      : 'text-slate-300';

    return (
      <React.Fragment key={node.id}>
        <tr className={`hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer ${rowBg}`}>
          <td className="py-2 pr-4 align-middle" style={{ paddingLeft }}>
            <div className="flex items-center space-x-2">
              {hasChildren ? (
                <button 
                  onClick={() => toggleRow(node.id)}
                  className="p-0.5 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                </button>
              ) : (
                <span className="w-5 inline-block" />
              )}
              <span className={`text-sm ${depth === 0 ? 'text-slate-900 dark:text-slate-100' : 'text-slate-700 dark:text-slate-300'}`}>
                {node.name}
              </span>
            </div>
          </td>
          <td className="py-2 px-4 text-sm text-slate-500 font-mono text-center">
            {node.glAccount || "-"}
          </td>
          <td className="py-2 px-4 text-sm text-right font-medium text-slate-900 dark:text-slate-100">
            {formatCurrency(node.amount)}
          </td>
          <td className="py-2 px-4 text-sm text-right text-slate-600 dark:text-slate-400">
            {node.comparisonAmount !== undefined ? formatCurrency(node.comparisonAmount) : "-"}
          </td>
          <td className={`py-2 px-4 text-sm text-right ${variance > 0 ? 'text-emerald-600 dark:text-emerald-500' : variance < 0 ? 'text-rose-600 dark:text-rose-500' : 'text-slate-500'}`}>
            {variance !== 0 ? formatCurrency(variance) : "-"}
          </td>
          <td className={`py-2 px-4 text-sm text-right ${variancePct > 0 ? 'text-emerald-600 dark:text-emerald-500' : variancePct < 0 ? 'text-rose-600 dark:text-rose-500' : 'text-slate-500'}`}>
            {variancePct !== 0 ? formatPercent(variancePct) : "-"}
          </td>
        </tr>
        {isExpanded && hasChildren && node.children!.map(child => renderRow(child, depth + 1))}
      </React.Fragment>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      
      {/* HEADER */}
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Financial Statements (F.01)</h1>
          <p className="text-xs text-slate-500 mt-1">Period: Q3 2026 vs Q3 2025 | Company Code: RIL1 | Ledger: 0L</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="absolute left-2.5 top-2 h-4 w-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search account..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-1.5 bg-slate-100 dark:bg-white border border-slate-200 dark:border-slate-800 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow w-64"
            />
          </div>
          <button className="p-2 border border-slate-200 dark:border-slate-800 rounded-md hover:bg-slate-100 dark:hover:bg-white text-slate-600 dark:text-slate-400 transition-colors">
            <Filter size={16} />
          </button>
          <button className="p-2 border border-slate-200 dark:border-slate-800 rounded-md hover:bg-slate-100 dark:hover:bg-white text-slate-600 dark:text-slate-400 transition-colors">
            <Download size={16} />
          </button>
          <button className="p-2 border border-slate-200 dark:border-slate-800 rounded-md hover:bg-slate-100 dark:hover:bg-white text-slate-600 dark:text-slate-400 transition-colors">
            <Printer size={16} />
          </button>
          <button className="p-2 border border-slate-200 dark:border-slate-800 rounded-md hover:bg-slate-100 dark:hover:bg-white text-slate-600 dark:text-slate-400 transition-colors">
            <Settings size={16} />
          </button>
        </div>
      </header>

      {/* KPI RIBBON */}
      <div className="flex-none grid grid-cols-1 md:grid-cols-4 gap-px bg-slate-200 dark:bg-slate-50 border-b border-slate-200 dark:border-slate-800">
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex flex-col">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-medium uppercase tracking-wider">Total Revenue</span>
            <DollarSign size={14} className="text-blue-500" />
          </div>
          <div className="flex items-end justify-between">
            <span className="text-2xl font-semibold">$12.5M</span>
            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-1.5 py-0.5 rounded">+8.2%</span>
          </div>
        </div>
        
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex flex-col">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-medium uppercase tracking-wider">Net Income</span>
            <Briefcase size={14} className="text-purple-500" />
          </div>
          <div className="flex items-end justify-between">
            <span className="text-2xl font-semibold">$3.85M</span>
            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-1.5 py-0.5 rounded">+11.4%</span>
          </div>
        </div>
        
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex flex-col">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-medium uppercase tracking-wider">Gross Margin</span>
            <Activity size={14} className="text-amber-500" />
          </div>
          <div className="flex items-end justify-between">
            <span className="text-2xl font-semibold">58.4%</span>
            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-1.5 py-0.5 rounded">+2.1%</span>
          </div>
        </div>
        
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex flex-col">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-medium uppercase tracking-wider">Operating Cash</span>
            <TrendingUp size={14} className="text-emerald-500" />
          </div>
          <div className="flex items-end justify-between">
            <span className="text-2xl font-semibold">$4.2M</span>
            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-1.5 py-0.5 rounded">+5.0%</span>
          </div>
        </div>
      </div>

      {/* TOOLBAR */}
      <div className="flex-none px-6 py-2 bg-slate-50 dark:bg-white/50 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center text-sm">
        <div className="flex space-x-4">
          <button onClick={expandAll} className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-xs">
            Expand All
          </button>
          <button onClick={collapseAll} className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-xs">
            Collapse All
          </button>
        </div>
        <div className="text-xs text-slate-500">
          Amounts in PKR. Negative denotes credit balance (COGS/Expenses).
        </div>
      </div>

      {/* MAIN TABLE AREA */}
      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <table className="w-full text-left border-collapse">
          <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Financial Statement Item</th>
              <th className="px-6 py-4 font-semibold text-slate-600 text-sm">GL Account</th>
              <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Current Period</th>
              <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Prior Period</th>
              <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Variance</th>
              <th className="px-6 py-4 font-semibold text-slate-600 text-sm">% Change</th>
            </tr>
          </thead>
          <tbody>
            {financialData.map(node => renderRow(node, 0))}
          </tbody>
        </table>
      </div>

    </div>
  );
}