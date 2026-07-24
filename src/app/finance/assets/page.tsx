import React, { useState } from 'react';
import { SmartTable, Column, FormField } from '@/components/SmartTable';

const assetsData = [
  { id: '1000-001', desc: 'Heavy Duty Compressor', capDate: '2023-01-15', life: '10y', apc: 'PKR 1,200,000', accDep: 'PKR 360,000', nbv: 'PKR 840,000' },
  { id: '1000-002', desc: 'Refinery Boiler', capDate: '2022-06-10', life: '15y', apc: 'PKR 2,500,000', accDep: 'PKR 666,667', nbv: 'PKR 1,833,333' },
  { id: '1000-003', desc: 'Control System Server', capDate: '2025-02-20', life: '5y', apc: 'PKR 150,000', accDep: 'PKR 30,000', nbv: 'PKR 120,000' },
  { id: '1000-004', desc: 'Storage Tank A', capDate: '2020-11-01', life: '20y', apc: 'PKR 850,000', accDep: 'PKR 212,500', nbv: 'PKR 637,500' },
  { id: '1000-005', desc: 'Transport Fleet (5 trucks)', capDate: '2024-03-12', life: '7y', apc: 'PKR 750,000', accDep: 'PKR 214,285', nbv: 'PKR 535,715' },
  { id: '1000-006', desc: 'Lab Equipment Set', capDate: '2021-09-05', life: '8y', apc: 'PKR 420,000', accDep: 'PKR 210,000', nbv: 'PKR 210,000' },
  { id: '1000-007', desc: 'Pipeline Section X', capDate: '2019-04-18', life: '25y', apc: 'PKR 4,000,000', accDep: 'PKR 1,120,000', nbv: 'PKR 2,880,000' },
  { id: '1000-008', desc: 'Cooling Tower', capDate: '2023-08-30', life: '15y', apc: 'PKR 1,800,000', accDep: 'PKR 240,000', nbv: 'PKR 1,560,000' },
  { id: '1000-009', desc: 'Office Building A', capDate: '2015-01-01', life: '40y', apc: 'PKR 12,000,000', accDep: 'PKR 3,300,000', nbv: 'PKR 8,700,000' },
  { id: '1000-010', desc: 'Security System', capDate: '2026-01-10', life: '5y', apc: 'PKR 250,000', accDep: 'PKR 25,000', nbv: 'PKR 225,000' },
];

export default function AssetAccounting() {
  const [items, setItems] = useState(assetsData);

  const columns: Column[] = [
    { key: 'id', title: 'Asset ID' },
    { key: 'desc', title: 'Description' },
    { key: 'capDate', title: 'Cap. Date' },
    { key: 'life', title: 'Useful Life' },
    { key: 'apc', title: 'APC Value' },
    { key: 'accDep', title: 'Acc. Dep.' },
    { key: 'nbv', title: 'Net Book Value' }
  ];

  const formFields: FormField[] = [
    { name: 'id', label: 'Asset ID', type: 'text', required: true },
    { name: 'desc', label: 'Description', type: 'text', required: true },
    { name: 'capDate', label: 'Cap. Date', type: 'date', required: true },
    { name: 'life', label: 'Useful Life', type: 'text', required: true },
    { name: 'apc', label: 'APC Value', type: 'text', required: true },
    { name: 'accDep', label: 'Acc. Dep.', type: 'text', required: true },
    { name: 'nbv', label: 'Net Book Value', type: 'text', required: true }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">SAP FI Asset Accounting</h1>
            <p className="text-sm text-slate-500 mt-1">Asset Register & Depreciation Ledger</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-sm transition-colors shadow-lg shadow-indigo-900/50">
              + Capitalize Asset
            </button>
            <button className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 rounded text-sm transition-colors">
              Run Depreciation
            </button>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-4 gap-4">
          <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex flex-col">
            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Total Assets</div>
            <div className="text-2xl font-semibold text-slate-800">142</div>
            <div className="text-xs text-emerald-600 mt-2">+3 this period</div>
          </div>
          <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex flex-col">
            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Total APC</div>
            <div className="text-2xl font-semibold text-slate-800">PKR 23.9M</div>
            <div className="text-xs text-indigo-600 mt-2">Acquisition Value</div>
          </div>
          <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex flex-col">
            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Acc. Depreciation</div>
            <div className="text-2xl font-semibold text-slate-800">PKR 6.38M</div>
            <div className="text-xs text-rose-600 mt-2">-PKR 125K ytd</div>
          </div>
          <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex flex-col">
            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Total NBV</div>
            <div className="text-2xl font-semibold text-slate-800">PKR 17.52M</div>
            <div className="text-xs text-slate-500 mt-2">Net Book Value</div>
          </div>
        </div>

        {/* Asset Register Grid */}
        <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
          <SmartTable data={items} columns={columns} formFields={formFields} onAdd={(newItem) => setItems([newItem, ...items])} />
        </div>

      </div>
    </div>
  );
}