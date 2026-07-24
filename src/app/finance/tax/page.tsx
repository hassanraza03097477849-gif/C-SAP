"use client";

import React, { useState } from 'react';

const taxData = [
  { id: 1, country: 'IN', code: 'IGST18', type: 'Output', rate: 18.00, gl: '2040100', validFrom: '2023-01-01', validTo: '9999-12-31', status: 'Active' },
  { id: 2, country: 'US', code: 'NY01', type: 'Output', rate: 8.875, gl: '2040200', validFrom: '2023-01-01', validTo: '9999-12-31', status: 'Active' },
  { id: 3, country: 'DE', code: 'VST19', type: 'Input', rate: 19.00, gl: '1540000', validFrom: '2023-01-01', validTo: '9999-12-31', status: 'Active' },
  { id: 4, country: 'GB', code: 'S20', type: 'Output', rate: 20.00, gl: '2040300', validFrom: '2023-01-01', validTo: '9999-12-31', status: 'Active' },
  { id: 5, country: 'IN', code: 'CGST9', type: 'Output', rate: 9.00, gl: '2040101', validFrom: '2023-01-01', validTo: '9999-12-31', status: 'Active' },
  { id: 6, country: 'IN', code: 'SGST9', type: 'Output', rate: 9.00, gl: '2040102', validFrom: '2023-01-01', validTo: '9999-12-31', status: 'Active' },
  { id: 7, country: 'FR', code: 'TVA20', type: 'Output', rate: 20.00, gl: '2040400', validFrom: '2023-01-01', validTo: '9999-12-31', status: 'Active' },
  { id: 8, country: 'JP', code: 'JCT10', type: 'Input', rate: 10.00, gl: '1540100', validFrom: '2023-01-01', validTo: '9999-12-31', status: 'Active' },
];

export default function TaxConfigurationPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = taxData.filter(tax => 
    tax.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tax.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tax.gl.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      <div className="max-w-[1600px] mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">FI Tax Configuration</h1>
            <p className="text-sm text-neutral-400">Manage global tax codes, rates, and GL mappings (FTXP/OB40 equivalent)</p>
          </div>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 rounded-md text-sm transition-colors">
              Export Matrix
            </button>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md text-sm font-medium transition-colors shadow-lg shadow-blue-900/20">
              + New Tax Code
            </button>
          </div>
        </div>

        {/* 4 Tight KPIs Ribbon */}
        <div className="grid grid-cols-4 gap-4">
          {[
            { label: 'Active Tax Codes', value: '142', sub: '+3 this month' },
            { label: 'Countries Configured', value: '38', sub: 'Global footprint' },
            { label: 'Pending Approvals', value: '5', sub: 'Requires dual-control' },
            { label: 'Last Transport', value: 'TR-99482', sub: '2 hours ago' },
          ].map((kpi, i) => (
            <div key={i} className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
              <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">{kpi.label}</span>
              <div className="mt-2 flex items-baseline space-x-2">
                <span className="text-2xl font-semibold text-slate-800 tracking-tight">{kpi.value}</span>
                <span className="text-xs text-neutral-500">{kpi.sub}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Configuration Matrix (Table) */}
        <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
          
          {/* Toolbar */}
          <div className="p-4 border-b border-neutral-800 flex justify-between items-center bg-neutral-900/50">
            <div className="flex space-x-4 items-center">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input 
                  type="text" 
                  placeholder="Search code, country, GL..." 
                  className="pl-9 pr-4 py-1.5 bg-neutral-950 border border-neutral-800 rounded-md text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 w-64 transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="h-4 w-px bg-neutral-700"></div>
              <div className="flex space-x-2">
                <button className="text-xs px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 rounded text-neutral-300">All Countries</button>
                <button className="text-xs px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 rounded text-neutral-300">Input Only</button>
                <button className="text-xs px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 rounded text-neutral-300">Output Only</button>
              </div>
            </div>
            
            <div className="text-xs text-neutral-400">
              Showing {filteredData.length} entries
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Country</th>
                  <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Tax Code</th>
                  <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Tax Type</th>
                  <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Rate %</th>
                  <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Target GL</th>
                  <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Valid From</th>
                  <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Valid To</th>
                  <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Status</th>
                  <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/50">
                {filteredData.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer">
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 rounded bg-neutral-800 flex items-center justify-center text-[10px] font-bold text-neutral-300 border border-neutral-700">
                          {row.country}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 font-medium text-slate-800">{row.code}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center px-1.5 py-0.5 rounded-sm text-[10px] font-medium border ${
                        row.type === 'Output' 
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                          : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                      }`}>
                        {row.type}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-neutral-300">
                      {row.rate.toFixed(3)}%
                    </td>
                    <td className="px-4 py-3 font-mono text-neutral-300">{row.gl}</td>
                    <td className="px-4 py-3 text-neutral-400 text-xs">{row.validFrom}</td>
                    <td className="px-4 py-3 text-neutral-400 text-xs">{row.validTo}</td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button className="text-neutral-500 hover:text-slate-800 transition-colors p-1 opacity-0 group-hover:opacity-100">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
