import React, { useState } from 'react';
import { FileText, Calendar, Box, Package, ArrowRightLeft, MapPin, Hash, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import { SmartTable, Column, FormField } from '@/components/SmartTable';

const columns: Column[] = [
  { header: 'Material Doc', accessor: 'matDoc' },
  { header: 'Posting Date', accessor: 'date' },
  { header: 'PO Number', accessor: 'poNumber' },
  { header: 'Mvt Type', accessor: 'mvtType' },
  { header: 'Material', accessor: 'material' },
  { header: 'Received Qty', accessor: 'qty' },
  { header: 'SLoc', accessor: 'sloc' }
];

const formFields: FormField[] = [
  { name: 'matDoc', label: 'Material Doc', type: 'text', required: true },
  { name: 'date', label: 'Posting Date', type: 'date', required: true },
  { name: 'poNumber', label: 'PO Number', type: 'text' },
  { name: 'mvtType', label: 'Movement Type', type: 'select', options: ['101', '102', '122'] },
  { name: 'material', label: 'Material', type: 'text', required: true },
  { name: 'qty', label: 'Received Qty', type: 'text' },
  { name: 'sloc', label: 'Storage Location', type: 'select', options: ['0001', '0002', '0003'] }
];

export default function GoodsReceiptsPage() {
  const kpis = [
    { title: 'Total Receipts (MTD)', value: '1,245', icon: Package, trend: '+12%', color: 'text-emerald-600' },
    { title: 'Pending Putaway', value: '342', icon: Box, trend: '-5%', color: 'text-amber-500' },
    { title: 'Processing Time', value: '1.2h', icon: Clock, trend: '-18%', color: 'text-teal-500' },
    { title: 'Discrepancies', value: '4', icon: AlertCircle, trend: '0%', color: 'text-rose-500' }
  ];

  const [items, setItems] = useState([
    { matDoc: '5000001234', date: '2026-07-24', poNumber: '4500009871', mvtType: '101', material: 'RM-1001 (Polymer Resin)', qty: '10,000 KG', sloc: '0001' },
    { matDoc: '5000001235', date: '2026-07-24', poNumber: '4500009872', mvtType: '101', material: 'PK-500 (Pallets)', qty: '500 PC', sloc: '0002' },
    { matDoc: '5000001236', date: '2026-07-23', poNumber: '4500009865', mvtType: '101', material: 'CH-200 (Catalyst)', qty: '50 L', sloc: '0001' },
    { matDoc: '5000001237', date: '2026-07-23', poNumber: '4500009868', mvtType: '122', material: 'RM-1001 (Polymer Resin)', qty: '1,000 KG', sloc: '0001' },
    { matDoc: '5000001238', date: '2026-07-22', poNumber: '4500009855', mvtType: '101', material: 'SP-10 (Spare Parts)', qty: '12 PC', sloc: '0003' },
    { matDoc: '5000001239', date: '2026-07-22', poNumber: '4500009856', mvtType: '101', material: 'RM-3005 (Solvent)', qty: '5,000 L', sloc: '0001' },
    { matDoc: '5000001240', date: '2026-07-21', poNumber: '4500009850', mvtType: '101', material: 'PK-100 (Drums)', qty: '200 PC', sloc: '0002' },
    { matDoc: '5000001241', date: '2026-07-21', poNumber: '4500009851', mvtType: '101', material: 'RM-4001 (Additive A)', qty: '2,500 KG', sloc: '0001' },
    { matDoc: '5000001242', date: '2026-07-20', poNumber: '4500009842', mvtType: '101', material: 'LB-001 (Lubricant)', qty: '100 L', sloc: '0003' },
    { matDoc: '5000001243', date: '2026-07-20', poNumber: '4500009843', mvtType: '101', material: 'RM-1001 (Polymer Resin)', qty: '12,000 KG', sloc: '0001' },
    { matDoc: '5000001244', date: '2026-07-19', poNumber: '4500009835', mvtType: '101', material: 'CH-250 (Inhibitor)', qty: '20 L', sloc: '0001' },
    { matDoc: '5000001245', date: '2026-07-19', poNumber: '4500009836', mvtType: '101', material: 'PK-500 (Pallets)', qty: '300 PC', sloc: '0002' },
    { matDoc: '5000001246', date: '2026-07-18', poNumber: '4500009820', mvtType: '101', material: 'RM-3005 (Solvent)', qty: '6,000 L', sloc: '0001' },
    { matDoc: '5000001247', date: '2026-07-18', poNumber: '4500009822', mvtType: '102', material: 'RM-3005 (Solvent)', qty: '500 L', sloc: '0001' },
    { matDoc: '5000001248', date: '2026-07-17', poNumber: '4500009815', mvtType: '101', material: 'SP-25 (Valves)', qty: '50 PC', sloc: '0003' },
  ]);

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      {/* Header Container */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Goods Receipts (MIGO)
          </h1>
          <p className="text-slate-500 text-sm mt-1">Material document ledger and processing metrics</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium text-sm flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Storage Map
          </button>
          <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-sm shadow-emerald-200 font-medium text-sm flex items-center gap-2">
            <Package className="w-4 h-4" />
            Post Receipt
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, index) => (
          <div key={index} className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-500">{kpi.title}</span>
                <div className={`p-2 rounded-lg bg-slate-50 ${kpi.color}`}>
                  <kpi.icon className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-slate-800">{kpi.value}</span>
                <span className={`text-xs font-medium ${kpi.trend.startsWith('+') ? 'text-emerald-600' : kpi.trend === '0%' ? 'text-slate-400' : 'text-rose-500'}`}>
                  {kpi.trend}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid Container */}
      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="p-4 border-b border-slate-200/60 flex items-center justify-between bg-slate-50/50">
          <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-600" />
            Recent Material Documents
          </h2>
          <div className="flex items-center gap-2">
            <input 
              type="text" 
              placeholder="Search documents, POs..." 
              className="px-3 py-1.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 w-64 bg-white"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-auto flex flex-col">
          <SmartTable data={items} columns={columns} formFields={formFields} onAdd={(newItem) => setItems([newItem, ...items])} />
        </div>
      </div>
    </div>
  );
}