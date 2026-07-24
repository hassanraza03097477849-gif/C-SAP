"use client";

import React, { useState } from 'react';
import { 
  FileText, 
  Search, 
  Filter, 
  Download, 
  CheckCircle2, 
  Clock, 
  XCircle,
  MoreHorizontal,
  ArrowUpDown
} from 'lucide-react';

// Mock Data
const invoices = [
  { id: '90038100', date: '2026-07-20', payer: 'Pure Petroleum Industries', netValue: 1250000.00, tax: 225000.00, currency: 'INR', status: 'Cleared' },
  { id: '90038101', date: '2026-07-21', payer: 'Tata Motors Ltd', netValue: 850000.00, tax: 153000.00, currency: 'INR', status: 'Pending' },
  { id: '90038102', date: '2026-07-21', payer: 'Larsen & Toubro', netValue: 420000.50, tax: 75600.09, currency: 'INR', status: 'Cleared' },
  { id: '90038103', date: '2026-07-22', payer: 'Mahindra & Mahindra', netValue: 2100000.00, tax: 378000.00, currency: 'INR', status: 'Overdue' },
  { id: '90038104', date: '2026-07-22', payer: 'Infosys Technologies', netValue: 150000.00, tax: 27000.00, currency: 'INR', status: 'Cleared' },
  { id: '90038105', date: '2026-07-22', payer: 'Wipro Limited', netValue: 340000.00, tax: 61200.00, currency: 'INR', status: 'Pending' },
  { id: '90038106', date: '2026-07-23', payer: 'HCL Technologies', netValue: 890000.00, tax: 160200.00, currency: 'INR', status: 'Cleared' },
  { id: '90038107', date: '2026-07-23', payer: 'Maruti Suzuki', netValue: 5600000.00, tax: 1008000.00, currency: 'INR', status: 'Pending' },
  { id: '90038108', date: '2026-07-24', payer: 'Sun Pharmaceuticals', netValue: 450000.00, tax: 81000.00, currency: 'INR', status: 'Cleared' },
  { id: '90038109', date: '2026-07-24', payer: 'Dr. Reddy\'s Labs', netValue: 320000.00, tax: 57600.00, currency: 'INR', status: 'Overdue' },
  { id: '90038110', date: '2026-07-24', payer: 'Adani Ports', netValue: 7800000.00, tax: 1404000.00, currency: 'INR', status: 'Pending' },
  { id: '90038111', date: '2026-07-24', payer: 'Bharti Airtel', netValue: 1200000.00, tax: 216000.00, currency: 'INR', status: 'Cleared' },
  { id: '90038112', date: '2026-07-24', payer: 'Asian Paints', netValue: 670000.00, tax: 120600.00, currency: 'INR', status: 'Cleared' },
  { id: '90038113', date: '2026-07-24', payer: 'Hindustan Unilever', netValue: 2300000.00, tax: 414000.00, currency: 'INR', status: 'Pending' },
  { id: '90038114', date: '2026-07-24', payer: 'ITC Limited', netValue: 950000.00, tax: 171000.00, currency: 'INR', status: 'Cleared' },
  { id: '90038115', date: '2026-07-24', payer: 'Nestle India', netValue: 410000.00, tax: 73800.00, currency: 'INR', status: 'Overdue' },
];

export default function InvoicesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Cleared':
        return <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-1" />;
      case 'Pending':
        return <Clock className="w-4 h-4 text-amber-500 mr-1" />;
      case 'Overdue':
        return <XCircle className="w-4 h-4 text-rose-500 mr-1" />;
      default:
        return <Clock className="w-4 h-4 text-slate-500 mr-1" />;
    }
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Cleared':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'Pending':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'Overdue':
        return 'bg-rose-100 text-rose-700 border-rose-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      {/* Header container */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Billing Documents
          </h1>
          <p className="text-sm text-slate-500 mt-1">Manage and track customer invoices</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search invoices..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-slate-800 placeholder-slate-400 w-64"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-colors">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: 'Total Revenue YTD', value: '₹2.45B', change: '+12.5%', type: 'positive' },
          { title: 'Invoices Issued (MTD)', value: '1,432', change: '+5.2%', type: 'positive' },
          { title: 'Pending Clearing', value: '₹185M', change: '-2.1%', type: 'positive' },
          { title: 'Overdue Amount', value: '₹42M', change: '+8.4%', type: 'negative' },
        ].map((kpi, idx) => (
          <div key={idx} className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
            <h3 className="text-sm font-medium text-slate-500">{kpi.title}</h3>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-800">{kpi.value}</span>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${kpi.type === 'positive' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                {kpi.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid Container */}
      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="overflow-auto flex-1">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">
                  <div className="flex items-center gap-2 cursor-pointer hover:text-slate-900 whitespace-nowrap">
                    Invoice Number <ArrowUpDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">
                  <div className="flex items-center gap-2 cursor-pointer hover:text-slate-900 whitespace-nowrap">
                    Date <ArrowUpDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">
                  <div className="flex items-center gap-2 cursor-pointer hover:text-slate-900 whitespace-nowrap">
                    Payer <ArrowUpDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">
                  <div className="flex items-center justify-end gap-2 cursor-pointer hover:text-slate-900 whitespace-nowrap">
                    Net Value <ArrowUpDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">
                  <div className="text-right whitespace-nowrap">Tax Amount</div>
                </th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">
                  <div className="whitespace-nowrap">Currency</div>
                </th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">
                  <div className="whitespace-nowrap">Accounting Clearing Status</div>
                </th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">
                  <div className="text-center whitespace-nowrap">Actions</div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {invoices.filter(inv => inv.payer.toLowerCase().includes(searchTerm.toLowerCase()) || inv.id.includes(searchTerm)).map((invoice) => (
                <tr key={invoice.id} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer">
                  <td className="px-6 py-3.5">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                      <span className="font-medium text-emerald-600 group-hover:text-emerald-700 whitespace-nowrap">{invoice.id}</span>
                    </div>
                  </td>
                  <td className="px-6 py-3.5 text-sm text-slate-600 whitespace-nowrap">
                    {invoice.date}
                  </td>
                  <td className="px-6 py-3.5 text-sm font-medium text-slate-800 whitespace-nowrap">
                    {invoice.payer}
                  </td>
                  <td className="px-6 py-3.5 text-sm font-semibold text-slate-800 text-right whitespace-nowrap">
                    {invoice.netValue.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </td>
                  <td className="px-6 py-3.5 text-sm text-slate-500 text-right whitespace-nowrap">
                    {invoice.tax.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </td>
                  <td className="px-6 py-3.5 text-sm text-slate-500 whitespace-nowrap">
                    {invoice.currency}
                  </td>
                  <td className="px-6 py-3.5 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusStyle(invoice.status)}`}>
                      {getStatusIcon(invoice.status)}
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-6 py-3.5 text-center whitespace-nowrap">
                    <button className="p-1.5 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-slate-50/95 border-t border-slate-200 px-6 py-3 flex items-center justify-between">
          <span className="text-sm text-slate-500">
            Showing <span className="font-medium text-slate-800">{invoices.length}</span> entries
          </span>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 text-sm border border-slate-200 rounded text-slate-600 hover:bg-slate-100 disabled:opacity-50">Previous</button>
            <button className="px-3 py-1 text-sm bg-emerald-600 text-white rounded hover:bg-emerald-700">1</button>
            <button className="px-3 py-1 text-sm border border-slate-200 rounded text-slate-600 hover:bg-slate-100">2</button>
            <button className="px-3 py-1 text-sm border border-slate-200 rounded text-slate-600 hover:bg-slate-100 disabled:opacity-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}