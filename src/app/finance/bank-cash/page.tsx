"use client";

import React, { useState } from 'react';
import { 
  Landmark, 
  Banknote, 
  TrendingUp, 
  TrendingDown,
  FileSearch,
  Filter,
  Download
} from 'lucide-react';

const kpis = [
  { id: 1, name: 'Total Bank Balance', value: '₹ 45,23,50,000', icon: Landmark, change: '+2.4%', changeType: 'positive' },
  { id: 2, name: 'Total Cash Balance', value: '₹ 1,12,40,000', icon: Banknote, change: '-0.8%', changeType: 'negative' },
  { id: 3, name: 'Inflow (MTD)', value: '₹ 12,50,00,000', icon: TrendingUp, change: '+15.2%', changeType: 'positive' },
  { id: 4, name: 'Outflow (MTD)', value: '₹ 8,30,00,000', icon: TrendingDown, change: '+5.1%', changeType: 'negative' },
];

const ledgerData = [
  { id: '1', date: '2026-07-23', docNum: 'PAY-10492', particulars: 'Vendor Payment - Tata Steel', debit: 0, credit: 5000000, balance: 452350000 },
  { id: '2', date: '2026-07-22', docNum: 'REC-20941', particulars: 'Customer Receipt - L&T', debit: 12000000, credit: 0, balance: 457350000 },
  { id: '3', date: '2026-07-22', docNum: 'PAY-10491', particulars: 'Utility Bill - Adani Power', debit: 0, credit: 150000, balance: 445350000 },
  { id: '4', date: '2026-07-21', docNum: 'TRF-30012', particulars: 'Inter-bank Transfer to HDFC', debit: 0, credit: 20000000, balance: 445500000 },
  { id: '5', date: '2026-07-21', docNum: 'REC-20940', particulars: 'Interest Received - SBI', debit: 350000, credit: 0, balance: 465500000 },
  { id: '6', date: '2026-07-20', docNum: 'PAY-10490', particulars: 'Salary Disbursement', debit: 0, credit: 18500000, balance: 465150000 },
  { id: '7', date: '2026-07-19', docNum: 'REC-20939', particulars: 'Customer Receipt - Reliance Retail', debit: 25000000, credit: 0, balance: 483650000 },
  { id: '8', date: '2026-07-18', docNum: 'PAY-10489', particulars: 'Tax Payment - GST', debit: 0, credit: 8000000, balance: 458650000 },
  { id: '9', date: '2026-07-18', docNum: 'TRF-30011', particulars: 'Cash Withdrawal for Petty Cash', debit: 0, credit: 500000, balance: 466650000 },
  { id: '10', date: '2026-07-17', docNum: 'REC-20938', particulars: 'Customer Receipt - JSW', debit: 9000000, credit: 0, balance: 467150000 },
  { id: '11', date: '2026-07-16', docNum: 'PAY-10488', particulars: 'Vendor Payment - Infosys', debit: 0, credit: 4500000, balance: 458150000 },
  { id: '12', date: '2026-07-15', docNum: 'REC-20937', particulars: 'Dividend Income', debit: 1200000, credit: 0, balance: 462650000 },
];

function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

export default function BankCashBook() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = ledgerData.filter(item => 
    item.particulars.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.docNum.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Bank & Cashbook</h1>
          <p className="text-sm text-slate-500 mt-1">Real-time ledger and cash flow monitoring</p>
        </div>
        <div className="flex gap-3">
          <button className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-slate-200">
            <Download className="w-4 h-4" />
            Export CSV
          </button>
          <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-blue-500/20">
            New Transaction
          </button>
        </div>
      </div>

      {/* KPI Ribbon */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6 shrink-0">
        {kpis.map((kpi) => (
          <div key={kpi.id} className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">{kpi.name}</p>
              <p className="text-xl font-bold text-slate-800 mt-1">{kpi.value}</p>
            </div>
            <div className={`p-3 rounded-lg ${kpi.changeType === 'positive' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-rose-500/10 text-rose-600'}`}>
              <kpi.icon className="w-6 h-6" />
            </div>
          </div>
        ))}
      </div>

      {/* Ledger Grid */}
      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        {/* Grid Toolbar */}
        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row gap-4 justify-between items-center bg-white shrink-0">
          <div className="relative w-full sm:w-96">
            <FileSearch className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by Document # or Particulars..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-slate-200 text-slate-800 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-400"
            />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <button className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 px-3 py-2 rounded-lg text-sm font-medium transition-colors border border-slate-200 w-full sm:w-auto justify-center">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
        </div>

        {/* Table Container */}
        <div className="flex-1 overflow-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Date</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Document #</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Particulars</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Debit (In)</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Credit (Out)</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Running Balance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredData.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer">
                  <td className="px-6 py-4 text-slate-600">{row.date}</td>
                  <td className="px-6 py-4">
                    <span className="font-mono text-xs bg-slate-50 text-slate-600 px-2 py-1 rounded border border-slate-200 group-hover:border-slate-300">
                      {row.docNum}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-800">{row.particulars}</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-medium">
                    {row.debit > 0 ? formatCurrency(row.debit) : '-'}
                  </td>
                  <td className="px-6 py-4 text-right text-rose-600 font-medium">
                    {row.credit > 0 ? formatCurrency(row.credit) : '-'}
                  </td>
                  <td className="px-6 py-4 text-right font-semibold text-slate-800">
                    {formatCurrency(row.balance)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredData.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-slate-500">
              <FileSearch className="w-12 h-12 mb-3 opacity-20" />
              <p>No transactions found for "{searchTerm}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}