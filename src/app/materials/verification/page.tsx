"use client";

import React, { useState } from 'react';
import { 
  FileText, 
  CheckCircle, 
  AlertTriangle, 
  Clock,
  Search,
  Filter,
  Download,
  MoreVertical
} from 'lucide-react';

const mockInvoices = [
  { id: 'INV-59001', date: '2026-07-24', poNumber: 'PO-40012', vendor: 'Zarar Enterprises', grossAmount: 15400.00, taxAmount: 1540.00, status: 'Cleared' },
  { id: 'INV-59002', date: '2026-07-24', poNumber: 'PO-40015', vendor: 'Global Logistics', grossAmount: 8900.50, taxAmount: 890.05, status: 'Pending' },
  { id: 'INV-59003', date: '2026-07-23', poNumber: 'PO-40008', vendor: 'Techtronics Inc', grossAmount: 45200.00, taxAmount: 4520.00, status: 'Blocked' },
  { id: 'INV-59004', date: '2026-07-23', poNumber: 'PO-40021', vendor: 'Alpha Materials', grossAmount: 1250.00, taxAmount: 125.00, status: 'Paid' },
  { id: 'INV-59005', date: '2026-07-22', poNumber: 'PO-40011', vendor: 'Omega Supplies', grossAmount: 34000.00, taxAmount: 3400.00, status: 'Cleared' },
  { id: 'INV-59006', date: '2026-07-22', poNumber: 'PO-40019', vendor: 'Zarar Enterprises', grossAmount: 6700.00, taxAmount: 670.00, status: 'Paid' },
  { id: 'INV-59007', date: '2026-07-21', poNumber: 'PO-39980', vendor: 'Global Logistics', grossAmount: 11200.75, taxAmount: 1120.07, status: 'Pending' },
  { id: 'INV-59008', date: '2026-07-21', poNumber: 'PO-39995', vendor: 'Techtronics Inc', grossAmount: 5600.00, taxAmount: 560.00, status: 'Blocked' },
  { id: 'INV-59009', date: '2026-07-20', poNumber: 'PO-39950', vendor: 'Beta Services', grossAmount: 2300.00, taxAmount: 230.00, status: 'Cleared' },
  { id: 'INV-59010', date: '2026-07-20', poNumber: 'PO-39965', vendor: 'Delta Systems', grossAmount: 78500.00, taxAmount: 7850.00, status: 'Paid' },
  { id: 'INV-59011', date: '2026-07-19', poNumber: 'PO-39942', vendor: 'Gamma Inc', grossAmount: 450.00, taxAmount: 45.00, status: 'Pending' },
  { id: 'INV-59012', date: '2026-07-19', poNumber: 'PO-39910', vendor: 'Omega Supplies', grossAmount: 89000.00, taxAmount: 8900.00, status: 'Blocked' },
  { id: 'INV-59013', date: '2026-07-18', poNumber: 'PO-39880', vendor: 'Zarar Enterprises', grossAmount: 12400.00, taxAmount: 1240.00, status: 'Paid' },
  { id: 'INV-59014', date: '2026-07-18', poNumber: 'PO-39875', vendor: 'Global Logistics', grossAmount: 3450.00, taxAmount: 345.00, status: 'Cleared' },
  { id: 'INV-59015', date: '2026-07-17', poNumber: 'PO-39850', vendor: 'Alpha Materials', grossAmount: 67800.00, taxAmount: 6780.00, status: 'Pending' },
];

export default function InvoiceVerificationPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredInvoices = mockInvoices.filter(inv => 
    inv.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inv.vendor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inv.poNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'PKR' }).format(amount);
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Cleared': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Paid': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Pending': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Blocked': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      {/* Header Container */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Logistics Invoice Verification
          </h1>
          <p className="text-slate-500 mt-1">MIRO - Enter Incoming Invoice</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search invoices..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-slate-50 text-sm w-64"
            />
          </div>
          <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600 transition-colors">
            <Filter className="w-4 h-4" />
          </button>
          <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600 transition-colors">
            <Download className="w-4 h-4" />
          </button>
          <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm shadow-emerald-600/20">
            New Invoice
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-500 font-medium text-sm">Total Invoices</span>
            <div className="p-2 bg-slate-100 rounded-lg">
              <FileText className="w-4 h-4 text-slate-600" />
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-800">1,284</div>
            <div className="text-xs text-emerald-600 font-medium mt-1">+12% from last month</div>
          </div>
        </div>

        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-500 font-medium text-sm">Pending Clearance</span>
            <div className="p-2 bg-amber-100 rounded-lg">
              <Clock className="w-4 h-4 text-amber-600" />
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-800">42</div>
            <div className="text-xs text-amber-600 font-medium mt-1">Requires review</div>
          </div>
        </div>

        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-500 font-medium text-sm">Blocked Invoices</span>
            <div className="p-2 bg-red-100 rounded-lg">
              <AlertTriangle className="w-4 h-4 text-red-600" />
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-800">18</div>
            <div className="text-xs text-red-600 font-medium mt-1">Price/Qty Discrepancy</div>
          </div>
        </div>

        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-500 font-medium text-sm">Cleared Today</span>
            <div className="p-2 bg-emerald-100 rounded-lg">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-800">PKR 2.4M</div>
            <div className="text-xs text-slate-500 mt-1">84 invoices processed</div>
          </div>
        </div>
      </div>

      {/* Main Grid Container */}
      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="overflow-auto flex-1">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap">Invoice #</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap">Date</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap">PO Number</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Vendor</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right whitespace-nowrap">Gross Amount</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right whitespace-nowrap">Tax Amount</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-center whitespace-nowrap">Clearing Status</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-center whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredInvoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer group">
                  <td className="px-6 py-3.5 text-sm font-medium text-slate-800 whitespace-nowrap">{invoice.id}</td>
                  <td className="px-6 py-3.5 text-sm text-slate-600 whitespace-nowrap">{invoice.date}</td>
                  <td className="px-6 py-3.5 text-sm text-emerald-600 hover:text-emerald-700 hover:underline whitespace-nowrap">{invoice.poNumber}</td>
                  <td className="px-6 py-3.5 text-sm text-slate-700">{invoice.vendor}</td>
                  <td className="px-6 py-3.5 text-sm text-slate-800 font-medium text-right whitespace-nowrap">{formatCurrency(invoice.grossAmount)}</td>
                  <td className="px-6 py-3.5 text-sm text-slate-500 text-right whitespace-nowrap">{formatCurrency(invoice.taxAmount)}</td>
                  <td className="px-6 py-3.5 text-center">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(invoice.status)}`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-6 py-3.5 text-center text-slate-400 group-hover:text-slate-600">
                    <button className="p-1 hover:bg-slate-200 rounded transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {filteredInvoices.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-slate-500">
              <Search className="w-12 h-12 mb-4 text-slate-300" />
              <p className="text-lg font-medium text-slate-700">No invoices found</p>
              <p className="text-sm">Try adjusting your search criteria</p>
            </div>
          )}
        </div>
        
        <div className="border-t border-slate-200 px-6 py-3 bg-slate-50/50 flex items-center justify-between">
          <div className="text-sm text-slate-500">
            Showing <span className="font-medium text-slate-700">{filteredInvoices.length}</span> of <span className="font-medium text-slate-700">{mockInvoices.length}</span> invoices
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-sm text-slate-600 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors disabled:opacity-50">Previous</button>
            <button className="px-3 py-1.5 text-sm text-slate-600 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors disabled:opacity-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}