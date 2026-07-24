"use client";

import React, { useState } from 'react';
import { Package, Truck, CheckCircle2, Clock } from 'lucide-react';

const KPIData = [
  { id: 1, title: 'Total Deliveries', value: '1,245', icon: Package, trend: '+5.2%', trendUp: true },
  { id: 2, title: 'In Transit', value: '432', icon: Truck, trend: '+2.1%', trendUp: true },
  { id: 3, title: 'Completed', value: '789', icon: CheckCircle2, trend: '+8.4%', trendUp: true },
  { id: 4, title: 'Pending PGI', value: '24', icon: Clock, trend: '-1.5%', trendUp: false },
];

const DeliveryData = [
  { id: '80001001', date: '2026-07-24', soRef: '4000501', shipTo: 'Tech Corp (1001)', material: 'RM-01', qty: '100 EA', route: 'US-EAST', status: 'Completed' },
  { id: '80001002', date: '2026-07-24', soRef: '4000502', shipTo: 'Global Industries (1002)', material: 'RM-02', qty: '500 KG', route: 'EU-WEST', status: 'In Transit' },
  { id: '80001003', date: '2026-07-23', soRef: '4000503', shipTo: 'Local Retail (1003)', material: 'FG-01', qty: '50 EA', route: 'US-WEST', status: 'Pending PGI' },
  { id: '80001004', date: '2026-07-23', soRef: '4000504', shipTo: 'Tech Corp (1001)', material: 'RM-03', qty: '200 EA', route: 'US-EAST', status: 'Completed' },
  { id: '80001005', date: '2026-07-22', soRef: '4000505', shipTo: 'Global Industries (1002)', material: 'RM-01', qty: '150 EA', route: 'EU-WEST', status: 'Completed' },
  { id: '80001006', date: '2026-07-22', soRef: '4000506', shipTo: 'Local Retail (1003)', material: 'RM-04', qty: '300 EA', route: 'US-WEST', status: 'In Transit' },
  { id: '80001007', date: '2026-07-21', soRef: '4000507', shipTo: 'Tech Corp (1001)', material: 'FG-02', qty: '75 EA', route: 'US-EAST', status: 'Completed' },
  { id: '80001008', date: '2026-07-21', soRef: '4000508', shipTo: 'Global Industries (1002)', material: 'RM-02', qty: '400 KG', route: 'EU-WEST', status: 'Pending PGI' },
  { id: '80001009', date: '2026-07-20', soRef: '4000509', shipTo: 'Local Retail (1003)', material: 'FG-01', qty: '20 EA', route: 'US-WEST', status: 'Completed' },
  { id: '80001010', date: '2026-07-20', soRef: '4000510', shipTo: 'Tech Corp (1001)', material: 'RM-01', qty: '120 EA', route: 'US-EAST', status: 'In Transit' },
  { id: '80001011', date: '2026-07-19', soRef: '4000511', shipTo: 'Global Industries (1002)', material: 'RM-03', qty: '250 EA', route: 'EU-WEST', status: 'Completed' },
  { id: '80001012', date: '2026-07-19', soRef: '4000512', shipTo: 'Local Retail (1003)', material: 'RM-04', qty: '350 EA', route: 'US-WEST', status: 'Pending PGI' },
  { id: '80001013', date: '2026-07-18', soRef: '4000513', shipTo: 'Tech Corp (1001)', material: 'FG-02', qty: '90 EA', route: 'US-EAST', status: 'Completed' },
  { id: '80001014', date: '2026-07-18', soRef: '4000514', shipTo: 'Global Industries (1002)', material: 'RM-01', qty: '180 EA', route: 'EU-WEST', status: 'In Transit' },
  { id: '80001015', date: '2026-07-17', soRef: '4000515', shipTo: 'Local Retail (1003)', material: 'RM-02', qty: '600 KG', route: 'US-WEST', status: 'Completed' },
];

export default function DeliveryPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = DeliveryData.filter(item => 
    item.id.includes(searchTerm) || 
    item.shipTo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.soRef.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Outbound Delivery (VL03N)</h1>
          <p className="text-slate-500 text-sm mt-1">Manage and track outbound deliveries and goods issue</p>
        </div>
        <div className="flex gap-3">
          <input 
            type="text" 
            placeholder="Search deliveries..." 
            className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-colors">
            Create Delivery
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPIData.map((kpi) => (
          <div key={kpi.id} className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                <kpi.icon size={20} />
              </div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${kpi.trendUp ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                {kpi.trend}
              </span>
            </div>
            <div>
              <p className="text-slate-500 text-sm font-medium">{kpi.title}</p>
              <h3 className="text-2xl font-bold text-slate-800 mt-1">{kpi.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="overflow-auto flex-1">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Delivery Doc</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Date</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Sales Order Ref</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Ship-To Party</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Material</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Quantity</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Route</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Goods Issue Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredData.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer">
                  <td className="px-6 py-3 text-sm font-medium text-emerald-600">{row.id}</td>
                  <td className="px-6 py-3 text-sm text-slate-600">{row.date}</td>
                  <td className="px-6 py-3 text-sm text-slate-600">{row.soRef}</td>
                  <td className="px-6 py-3 text-sm text-slate-800 font-medium">{row.shipTo}</td>
                  <td className="px-6 py-3 text-sm text-slate-600">{row.material}</td>
                  <td className="px-6 py-3 text-sm text-slate-800">{row.qty}</td>
                  <td className="px-6 py-3 text-sm text-slate-600">{row.route}</td>
                  <td className="px-6 py-3 text-sm">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      row.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' :
                      row.status === 'In Transit' ? 'bg-blue-100 text-blue-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}