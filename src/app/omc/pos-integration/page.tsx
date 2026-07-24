"use client";

import React, { useState } from 'react';
import { 
  Fuel, 
  CreditCard, 
  TrendingUp, 
  Activity, 
  Search, 
  Filter,
  Download,
  Terminal,
  MapPin,
  Clock,
  Droplet
} from 'lucide-react';

const mockTransactions = [
  { id: 'TXN-001', site: 'Site-A-Mumbai', nozzle: 'N-01', timestamp: '2026-07-24 10:15:00', product: 'Petrol', qty: 25.5, amount: 2500.00, payment: 'Credit Card' },
  { id: 'TXN-002', site: 'Site-B-Delhi', nozzle: 'N-05', timestamp: '2026-07-24 10:18:22', product: 'Diesel', qty: 50.0, amount: 4500.00, payment: 'UPI' },
  { id: 'TXN-003', site: 'Site-C-Pune', nozzle: 'N-02', timestamp: '2026-07-24 10:20:15', product: 'Premium Petrol', qty: 15.0, amount: 1650.00, payment: 'Cash' },
  { id: 'TXN-004', site: 'Site-A-Mumbai', nozzle: 'N-03', timestamp: '2026-07-24 10:25:40', product: 'Diesel', qty: 120.0, amount: 10800.00, payment: 'Fleet Card' },
  { id: 'TXN-005', site: 'Site-D-Bangalore', nozzle: 'N-08', timestamp: '2026-07-24 10:28:10', product: 'Petrol', qty: 30.2, amount: 2959.60, payment: 'Debit Card' },
  { id: 'TXN-006', site: 'Site-E-Chennai', nozzle: 'N-01', timestamp: '2026-07-24 10:31:05', product: 'Petrol', qty: 12.5, amount: 1225.00, payment: 'UPI' },
  { id: 'TXN-007', site: 'Site-B-Delhi', nozzle: 'N-06', timestamp: '2026-07-24 10:33:50', product: 'Diesel', qty: 45.0, amount: 4050.00, payment: 'Cash' },
  { id: 'TXN-008', site: 'Site-A-Mumbai', nozzle: 'N-02', timestamp: '2026-07-24 10:36:15', product: 'Petrol', qty: 22.0, amount: 2156.00, payment: 'Credit Card' },
  { id: 'TXN-009', site: 'Site-C-Pune', nozzle: 'N-04', timestamp: '2026-07-24 10:40:00', product: 'Diesel', qty: 60.5, amount: 5445.00, payment: 'Fleet Card' },
  { id: 'TXN-010', site: 'Site-D-Bangalore', nozzle: 'N-07', timestamp: '2026-07-24 10:42:30', product: 'Premium Petrol', qty: 18.5, amount: 2035.00, payment: 'UPI' },
  { id: 'TXN-011', site: 'Site-E-Chennai', nozzle: 'N-03', timestamp: '2026-07-24 10:45:12', product: 'Diesel', qty: 80.0, amount: 7200.00, payment: 'Credit Card' },
  { id: 'TXN-012', site: 'Site-A-Mumbai', nozzle: 'N-04', timestamp: '2026-07-24 10:48:45', product: 'Diesel', qty: 40.0, amount: 3600.00, payment: 'Cash' },
  { id: 'TXN-013', site: 'Site-B-Delhi', nozzle: 'N-02', timestamp: '2026-07-24 10:51:20', product: 'Petrol', qty: 15.8, amount: 1548.40, payment: 'UPI' },
  { id: 'TXN-014', site: 'Site-C-Pune', nozzle: 'N-01', timestamp: '2026-07-24 10:55:05', product: 'Petrol', qty: 28.0, amount: 2744.00, payment: 'Debit Card' },
  { id: 'TXN-015', site: 'Site-D-Bangalore', nozzle: 'N-05', timestamp: '2026-07-24 10:58:30', product: 'Diesel', qty: 55.5, amount: 4995.00, payment: 'Fleet Card' },
  { id: 'TXN-016', site: 'Site-E-Chennai', nozzle: 'N-04', timestamp: '2026-07-24 11:02:15', product: 'Petrol', qty: 35.0, amount: 3430.00, payment: 'Credit Card' }
];

export default function POSIntegrationPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTransactions = mockTransactions.filter(txn => 
    txn.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
    txn.site.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            POS Integration
          </h1>
          <p className="text-sm text-slate-500 mt-1">Live Terminal & Sales Ledger</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search Txn ID or Site..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 bg-slate-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none w-64 text-slate-800 placeholder:text-slate-400"
            />
          </div>
          <button className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg transition-colors">
            <Filter className="h-4 w-4" />
          </button>
          <button className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg transition-colors">
            <Download className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex flex-col justify-between h-full">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-slate-500">Live POS Terminals</h3>
              <div className="p-2 bg-emerald-100 rounded-lg">
                <Terminal className="h-5 w-5 text-emerald-600" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-bold text-slate-800">1,248</p>
              <p className="text-xs text-emerald-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" /> +12 Active
              </p>
            </div>
          </div>
        </div>

        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex flex-col justify-between h-full">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-slate-500">Today's Volume (L)</h3>
              <div className="p-2 bg-blue-100 rounded-lg">
                <Droplet className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-bold text-slate-800">452.8K</p>
              <p className="text-xs text-emerald-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" /> +5.2% vs yesterday
              </p>
            </div>
          </div>
        </div>

        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex flex-col justify-between h-full">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-slate-500">Total Transactions</h3>
              <div className="p-2 bg-purple-100 rounded-lg">
                <Activity className="h-5 w-5 text-purple-600" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-bold text-slate-800">18,492</p>
              <p className="text-xs text-emerald-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" /> +8.1% vs average
              </p>
            </div>
          </div>
        </div>

        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex flex-col justify-between h-full">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-slate-500">Revenue Processed</h3>
              <div className="p-2 bg-amber-100 rounded-lg">
                <CreditCard className="h-5 w-5 text-amber-600" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-bold text-slate-800">₹42.5M</p>
              <p className="text-xs text-emerald-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" /> +3.4% vs yesterday
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Ledger Grid */}
      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="flex-1 overflow-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Txn ID</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Site</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Nozzle</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Timestamp</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Product</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Qty (Ltrs)</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Amount (₹)</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Payment Mode</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredTransactions.map((txn, index) => (
                <tr key={index} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer">
                  <td className="px-6 py-3 text-sm font-medium text-emerald-600">{txn.id}</td>
                  <td className="px-6 py-3 text-sm text-slate-700 flex items-center gap-2">
                    <MapPin className="h-3 w-3 text-slate-400" />
                    {txn.site}
                  </td>
                  <td className="px-6 py-3 text-sm text-slate-700">
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-medium border border-slate-200">
                      {txn.nozzle}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-sm text-slate-600 flex items-center gap-2">
                    <Clock className="h-3 w-3 text-slate-400" />
                    {txn.timestamp}
                  </td>
                  <td className="px-6 py-3 text-sm text-slate-700">
                    <div className="flex items-center gap-2">
                      <Fuel className={`h-4 w-4 ${txn.product === 'Petrol' || txn.product === 'Premium Petrol' ? 'text-amber-500' : 'text-blue-500'}`} />
                      {txn.product}
                    </div>
                  </td>
                  <td className="px-6 py-3 text-sm text-slate-800 font-medium text-right">{txn.qty.toFixed(1)}</td>
                  <td className="px-6 py-3 text-sm text-slate-800 font-semibold text-right">{txn.amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                  <td className="px-6 py-3 text-sm">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
                      ${txn.payment === 'Credit Card' || txn.payment === 'Debit Card' ? 'bg-blue-50 text-blue-700 border border-blue-100' : 
                        txn.payment === 'UPI' ? 'bg-purple-50 text-purple-700 border border-purple-100' : 
                        txn.payment === 'Cash' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 
                        'bg-slate-100 text-slate-700 border border-slate-200'}`}>
                      {txn.payment}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Footer minimal info */}
      <div className="text-xs text-slate-500 flex justify-between items-center px-2">
        <span>Showing {filteredTransactions.length} of {mockTransactions.length} transactions</span>
        <span className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Live Sync Active
        </span>
      </div>
    </div>
  );
}
