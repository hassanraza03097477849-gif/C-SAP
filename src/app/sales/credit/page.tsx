"use client";

import React, { useState } from 'react';
import { Search, Filter, Download, ShieldAlert, CreditCard, Activity, UserCheck, AlertTriangle } from 'lucide-react';

const mockCreditData = [
  { id: "10001", customer: "Pure Petroleum Industries", cca: "IN01", limit: 5000000, exposure: 4200000, risk: "Low", blocked: false },
  { id: "10002", customer: "Tata Motors", cca: "IN01", limit: 3000000, exposure: 1500000, risk: "Low", blocked: false },
  { id: "10003", customer: "Adani Enterprises", cca: "IN01", limit: 8000000, exposure: 7500000, risk: "High", blocked: true },
  { id: "10004", customer: "Mahindra & Mahindra", cca: "IN01", limit: 2500000, exposure: 1200000, risk: "Low", blocked: false },
  { id: "10005", customer: "Larsen & Toubro", cca: "IN01", limit: 6000000, exposure: 3000000, risk: "Medium", blocked: false },
  { id: "10006", customer: "JSW Steel", cca: "IN01", limit: 4000000, exposure: 3900000, risk: "High", blocked: false },
  { id: "10007", customer: "Hindustan Unilever", cca: "IN01", limit: 2000000, exposure: 500000, risk: "Low", blocked: false },
  { id: "10008", customer: "Bharti Airtel", cca: "IN01", limit: 3500000, exposure: 2000000, risk: "Medium", blocked: false },
  { id: "10009", customer: "Maruti Suzuki", cca: "IN01", limit: 4500000, exposure: 2500000, risk: "Low", blocked: false },
  { id: "10010", customer: "ITC Limited", cca: "IN01", limit: 1500000, exposure: 800000, risk: "Low", blocked: false },
  { id: "10011", customer: "Wipro", cca: "IN01", limit: 2200000, exposure: 2150000, risk: "High", blocked: true },
  { id: "10012", customer: "Infosys", cca: "IN01", limit: 5500000, exposure: 1000000, risk: "Low", blocked: false },
  { id: "10013", customer: "HCL Tech", cca: "IN01", limit: 3200000, exposure: 3100000, risk: "High", blocked: false },
  { id: "10014", customer: "Sun Pharma", cca: "IN01", limit: 2800000, exposure: 1400000, risk: "Medium", blocked: false },
  { id: "10015", customer: "NTPC", cca: "IN01", limit: 7000000, exposure: 6000000, risk: "Medium", blocked: false },
];

export default function SDCreditPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
  };

  const filteredData = mockCreditData.filter(d => 
    d.customer.toLowerCase().includes(searchTerm.toLowerCase()) || 
    d.id.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      {/* Header container */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Credit Management
          </h1>
          <p className="text-slate-600 text-sm mt-1">SAP FD32 / UKM_BP Ledger</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search customer..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 bg-slate-50 text-slate-800"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-medium transition-colors border border-slate-200">
            <Filter className="h-4 w-4" /> Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
            <Download className="h-4 w-4" /> Export
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 shrink-0">
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">Total Credit Limit</p>
              <p className="text-2xl font-bold text-slate-800">{formatCurrency(60700000)}</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
              <CreditCard className="h-5 w-5" />
            </div>
          </div>
        </div>
        
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">Total Exposure</p>
              <p className="text-2xl font-bold text-slate-800">{formatCurrency(36850000)}</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
              <Activity className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">Customers Evaluated</p>
              <p className="text-2xl font-bold text-slate-800">15</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <UserCheck className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">Blocked Accounts</p>
              <p className="text-2xl font-bold text-rose-600">2</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
              <ShieldAlert className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid Container */}
      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="overflow-auto flex-1">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Customer ID</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Customer Name</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">CCA</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Credit Limit</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Exposure</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Available Limit</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Risk Category</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Blocked Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredData.map((row) => {
                const available = row.limit - row.exposure;
                const utilization = (row.exposure / row.limit) * 100;
                
                return (
                  <tr key={row.id} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer">
                    <td className="px-6 py-3 text-sm font-medium text-slate-800">{row.id}</td>
                    <td className="px-6 py-3 text-sm text-slate-700 font-medium">{row.customer}</td>
                    <td className="px-6 py-3 text-sm text-slate-600">{row.cca}</td>
                    <td className="px-6 py-3 text-sm text-slate-800 font-medium">{formatCurrency(row.limit)}</td>
                    <td className="px-6 py-3 text-sm">
                      <div className="flex flex-col gap-1">
                        <span className="text-slate-800 font-medium">{formatCurrency(row.exposure)}</span>
                        <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${
                              utilization > 90 ? 'bg-rose-500' : 
                              utilization > 75 ? 'bg-amber-500' : 
                              'bg-emerald-500'
                            }`}
                            style={{ width: `${Math.min(utilization, 100)}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className={`px-6 py-3 text-sm font-medium ${available < 0 ? 'text-rose-600' : 'text-emerald-600'}`}>
                      {formatCurrency(available)}
                    </td>
                    <td className="px-6 py-3">
                      <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                        row.risk === 'High' ? 'bg-rose-100 text-rose-700' :
                        row.risk === 'Medium' ? 'bg-amber-100 text-amber-700' :
                        'bg-emerald-100 text-emerald-700'
                      }`}>
                        {row.risk}
                      </span>
                    </td>
                    <td className="px-6 py-3">
                      {row.blocked ? (
                        <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-rose-50 text-rose-600 border border-rose-200">
                          <AlertTriangle className="h-3.5 w-3.5" /> Blocked
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-slate-50 text-slate-600 border border-slate-200">
                          <UserCheck className="h-3.5 w-3.5" /> Active
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {filteredData.length === 0 && (
            <div className="p-8 text-center text-slate-500 text-sm">
              No credit records found for the given search criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}