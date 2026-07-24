"use client";

import React, { useState } from 'react';
import { 
  FileText, 
  Search, 
  Filter, 
  Download, 
  RefreshCcw,
  CheckCircle2,
  Clock,
  AlertCircle,
  Truck
} from 'lucide-react';

const mockOrders = [
  { id: '10005432', date: '2026-07-24', soldTo: 'Reliance Retail', material: 'M-1004 (Polypropylene)', netValue: 450000.00, currency: 'INR', status: 'Completed', block: 'None' },
  { id: '10005433', date: '2026-07-24', soldTo: 'Tata Motors', material: 'M-2011 (ABS Plastic)', netValue: 850000.00, currency: 'INR', status: 'In Process', block: 'None' },
  { id: '10005434', date: '2026-07-23', soldTo: 'L&T Construction', material: 'M-3005 (PVC Pipes)', netValue: 1200000.00, currency: 'INR', status: 'On Hold', block: 'Credit Limit' },
  { id: '10005435', date: '2026-07-23', soldTo: 'Maruti Suzuki', material: 'M-1004 (Polypropylene)', netValue: 620000.00, currency: 'INR', status: 'Completed', block: 'None' },
  { id: '10005436', date: '2026-07-22', soldTo: 'Asian Paints', material: 'M-4022 (Solvents)', netValue: 340000.00, currency: 'INR', status: 'In Process', block: 'None' },
  { id: '10005437', date: '2026-07-22', soldTo: 'Pidilite Industries', material: 'M-4025 (Adhesives Base)', netValue: 780000.00, currency: 'INR', status: 'Completed', block: 'None' },
  { id: '10005438', date: '2026-07-21', soldTo: 'Reliance Retail', material: 'M-2011 (ABS Plastic)', netValue: 920000.00, currency: 'INR', status: 'Completed', block: 'None' },
  { id: '10005439', date: '2026-07-21', soldTo: 'Godrej Consumer', material: 'M-1004 (Polypropylene)', netValue: 410000.00, currency: 'INR', status: 'In Process', block: 'None' },
  { id: '10005440', date: '2026-07-20', soldTo: 'Hindustan Unilever', material: 'M-5010 (Surfactants)', netValue: 1550000.00, currency: 'INR', status: 'On Hold', block: 'Quality Check' },
  { id: '10005441', date: '2026-07-20', soldTo: 'Apollo Tyres', material: 'M-6001 (Synthetic Rubber)', netValue: 2100000.00, currency: 'INR', status: 'Completed', block: 'None' },
  { id: '10005442', date: '2026-07-19', soldTo: 'MRF Tyres', material: 'M-6001 (Synthetic Rubber)', netValue: 1850000.00, currency: 'INR', status: 'In Process', block: 'None' },
  { id: '10005443', date: '2026-07-19', soldTo: 'Tata Motors', material: 'M-3005 (PVC Pipes)', netValue: 320000.00, currency: 'INR', status: 'Completed', block: 'None' },
  { id: '10005444', date: '2026-07-18', soldTo: 'L&T Construction', material: 'M-1004 (Polypropylene)', netValue: 880000.00, currency: 'INR', status: 'Completed', block: 'None' },
  { id: '10005445', date: '2026-07-18', soldTo: 'Asian Paints', material: 'M-4022 (Solvents)', netValue: 450000.00, currency: 'INR', status: 'On Hold', block: 'Pricing Error' },
  { id: '10005446', date: '2026-07-17', soldTo: 'Reliance Retail', material: 'M-5010 (Surfactants)', netValue: 1100000.00, currency: 'INR', status: 'Completed', block: 'None' },
];

export default function SalesOrdersPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOrders = mockOrders.filter(order => 
    order.id.includes(searchTerm) || 
    order.soldTo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.material.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'In Process': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'On Hold': return 'bg-amber-100 text-amber-700 border-amber-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed': return <CheckCircle2 className="w-4 h-4 mr-1.5" />;
      case 'In Process': return <Clock className="w-4 h-4 mr-1.5" />;
      case 'On Hold': return <AlertCircle className="w-4 h-4 mr-1.5" />;
      default: return null;
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case 'emerald': return 'bg-emerald-50 text-emerald-600';
      case 'blue': return 'bg-blue-50 text-blue-600';
      case 'amber': return 'bg-amber-50 text-amber-600';
      case 'teal': return 'bg-teal-50 text-teal-600';
      default: return 'bg-slate-50 text-slate-600';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-100/50 rounded-lg">
            <FileText className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Sales Orders (VA03)
            </h1>
            <p className="text-sm text-slate-500 font-medium">Manage and track customer orders</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search orders..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-slate-800 placeholder-slate-400 w-64"
            />
          </div>
          <button className="p-2 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors">
            <Filter className="w-4 h-4" />
          </button>
          <button className="p-2 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors">
            <RefreshCcw className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm shadow-emerald-600/20">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Orders (MTD)', value: '1,248', change: '+12.5%', icon: FileText, color: 'emerald' },
          { label: 'Open Value (INR)', value: '₹48.5M', change: '-2.4%', icon: Clock, color: 'blue' },
          { label: 'Blocked Orders', value: '14', change: '+3', icon: AlertCircle, color: 'amber' },
          { label: 'Deliveries Today', value: '156', change: '+18.2%', icon: Truck, color: 'teal' },
        ].map((kpi, index) => (
          <div key={index} className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
            <div className="flex items-center justify-between group h-full">
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">{kpi.label}</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-bold text-slate-800">{kpi.value}</h3>
                  <span className={`text-xs font-semibold ${kpi.change.startsWith('+') ? 'text-emerald-500' : 'text-red-500'}`}>
                    {kpi.change}
                  </span>
                </div>
              </div>
              <div className={`p-3 rounded-lg group-hover:scale-110 transition-transform ${getIconColor(kpi.color)}`}>
                <kpi.icon className="w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="overflow-auto flex-1 custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap">Order Number</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap">Date</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap">Sold-To Party</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap">Material</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right whitespace-nowrap">Net Value</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap">Curr.</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap">Overall Status</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap">Delivery Block</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer">
                  <td className="px-6 py-3.5 whitespace-nowrap">
                    <span className="font-mono font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-100 group-hover:border-emerald-200 transition-colors">
                      {order.id}
                    </span>
                  </td>
                  <td className="px-6 py-3.5 text-sm text-slate-600 whitespace-nowrap">{order.date}</td>
                  <td className="px-6 py-3.5 text-sm font-medium text-slate-800 whitespace-nowrap">{order.soldTo}</td>
                  <td className="px-6 py-3.5 text-sm text-slate-600 truncate max-w-[200px]">{order.material}</td>
                  <td className="px-6 py-3.5 text-sm font-semibold text-slate-800 text-right whitespace-nowrap">
                    {order.netValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </td>
                  <td className="px-6 py-3.5 text-sm text-slate-500 whitespace-nowrap">{order.currency}</td>
                  <td className="px-6 py-3.5 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-3.5 whitespace-nowrap">
                    {order.block !== 'None' ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded border border-red-100">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {order.block}
                      </span>
                    ) : (
                      <span className="text-xs font-medium text-slate-400">None</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredOrders.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 text-slate-400">
              <FileText className="w-12 h-12 mb-3 text-slate-200" />
              <p className="text-base font-medium text-slate-500">No orders found matching your search.</p>
            </div>
          )}
        </div>
        
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-3 flex items-center justify-between">
          <span className="text-xs font-medium text-slate-500">
            Showing <strong className="text-slate-700">{filteredOrders.length}</strong> of <strong className="text-slate-700">{mockOrders.length}</strong> entries
          </span>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-slate-200 rounded text-xs font-medium text-slate-400 cursor-not-allowed">Previous</button>
            <button className="px-3 py-1 border border-emerald-500 bg-emerald-50 rounded text-xs font-medium text-emerald-700">1</button>
            <button className="px-3 py-1 border border-slate-200 bg-white hover:bg-slate-50 rounded text-xs font-medium text-slate-600 transition-colors">2</button>
            <button className="px-3 py-1 border border-slate-200 bg-white hover:bg-slate-50 rounded text-xs font-medium text-slate-600 transition-colors">Next</button>
          </div>
        </div>
      </div>
      
    </div>
  );
}
