import React, { useState } from 'react';
import { SmartTable, Column, FormField } from '@/components/SmartTable';
import { 
  Fuel, 
  TrendingUp, 
  DollarSign, 
  CheckCircle2, 
  XCircle, 
  AlertCircle,
  Download,
  Filter,
  Search,
  MoreVertical,
  Activity
} from 'lucide-react';

const mockCommissions = [
  { id: 'DLR-1001', name: 'Metro Energy', product: 'HOBC', vol: 45000, rate: 0.12, status: 'Paid' },
  { id: 'DLR-1002', name: 'Highway Star', product: 'HSD', vol: 85000, rate: 0.08, status: 'Pending' },
  { id: 'DLR-1003', name: 'City Center Fuel', product: 'PM', vol: 32000, rate: 0.10, status: 'Paid' },
  { id: 'DLR-1004', name: 'Valley Gas', product: 'HSD', vol: 120000, rate: 0.08, status: 'Processing' },
  { id: 'DLR-1005', name: 'Northside Pumps', product: 'HOBC', vol: 28000, rate: 0.12, status: 'Paid' },
  { id: 'DLR-1006', name: 'East End Auto', product: 'PM', vol: 64000, rate: 0.10, status: 'Failed' },
  { id: 'DLR-1007', name: 'Sunset Service', product: 'HSD', vol: 92000, rate: 0.08, status: 'Paid' },
  { id: 'DLR-1008', name: 'Quick Stop', product: 'PM', vol: 41000, rate: 0.10, status: 'Pending' },
  { id: 'DLR-1009', name: 'River Road Fuel', product: 'HOBC', vol: 19000, rate: 0.12, status: 'Paid' },
  { id: 'DLR-1010', name: 'Central Station', product: 'HSD', vol: 155000, rate: 0.08, status: 'Processing' },
  { id: 'DLR-1011', name: 'Uptown Gas', product: 'PM', vol: 53000, rate: 0.10, status: 'Paid' },
  { id: 'DLR-1012', name: 'County Line Auto', product: 'HSD', vol: 78000, rate: 0.08, status: 'Paid' },
  { id: 'DLR-1013', name: 'Harbor Energy', product: 'HOBC', vol: 34000, rate: 0.12, status: 'Pending' },
  { id: 'DLR-1014', name: 'Southway Fuel', product: 'PM', vol: 88000, rate: 0.10, status: 'Paid' },
  { id: 'DLR-1015', name: 'Oasis Station', product: 'HSD', vol: 105000, rate: 0.08, status: 'Processing' },
  { id: 'DLR-1016', name: 'Pioneer Gas', product: 'PM', vol: 22000, rate: 0.10, status: 'Paid' }
];

const getStatusBadge = (status: string) => {
  switch(status) {
    case 'Paid':
      return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-200"><CheckCircle2 className="w-3.5 h-3.5" /> {status}</span>;
    case 'Pending':
      return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200"><AlertCircle className="w-3.5 h-3.5" /> {status}</span>;
    case 'Processing':
      return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200"><Activity className="w-3.5 h-3.5" /> {status}</span>;
    case 'Failed':
      return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 border border-red-200"><XCircle className="w-3.5 h-3.5" /> {status}</span>;
    default:
      return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200">{status}</span>;
  }
};

export default function OMCCommissionsPage() {
  const [items, setItems] = useState(mockCommissions.map(c => ({ ...c, total: c.vol * c.rate })));

  const columns: Column[] = [
    { key: 'id', title: 'Dealer ID', type: 'text' },
    { key: 'name', title: 'Dealer Name', type: 'text' },
    { key: 'product', title: 'Product', type: 'badge' },
    { key: 'vol', title: 'Sales Vol (Ltrs)', type: 'number' },
    { key: 'rate', title: 'Commission Rate (PKR)', type: 'number' },
    { key: 'total', title: 'Total Commission (PKR)', type: 'number' },
    { key: 'status', title: 'Payment Status', type: 'badge' },
  ];

  const formFields: FormField[] = [
    { name: 'id', label: 'Dealer ID', type: 'text', required: true },
    { name: 'name', label: 'Dealer Name', type: 'text', required: true },
    { name: 'product', label: 'Product', type: 'select', options: ['HOBC', 'HSD', 'PM'], required: true },
    { name: 'vol', label: 'Sales Volume', type: 'number', required: true },
    { name: 'rate', label: 'Commission Rate', type: 'number', required: true },
    { name: 'status', label: 'Payment Status', type: 'select', options: ['Paid', 'Pending', 'Processing', 'Failed'], required: true }
  ];

  const totalVolume = items.reduce((acc, curr) => acc + curr.vol, 0);
  const totalCommission = items.reduce((acc, curr) => acc + (curr.vol * curr.rate), 0);
  const paidCommission = items.filter(c => c.status === 'Paid').reduce((acc, curr) => acc + (curr.vol * curr.rate), 0);
  const activeDealers = new Set(items.map(c => c.id)).size;

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent flex items-center gap-2">
            <DollarSign className="w-8 h-8 text-emerald-500" />
            Dealer Commissions Ledger
          </h1>
          <p className="text-slate-500 text-sm mt-1">Real-time commission tracking and settlement matrix</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search dealers..." 
              className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 w-64 text-slate-800 placeholder-slate-400"
            />
          </div>
          <button className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
            <Filter className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm shadow-emerald-600/20">
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 flex-shrink-0">
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Total Sales Volume</p>
              <h3 className="text-2xl font-bold text-slate-800 mt-1">{totalVolume.toLocaleString()} L</h3>
            </div>
            <div className="p-2 bg-blue-50 rounded-lg">
              <Fuel className="w-5 h-5 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs text-emerald-600 font-medium">
            <TrendingUp className="w-3 h-3 mr-1" />
            <span>+12.5% from last month</span>
          </div>
        </div>

        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Total Commissions</p>
              <h3 className="text-2xl font-bold text-slate-800 mt-1">PKR {totalCommission.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</h3>
            </div>
            <div className="p-2 bg-emerald-50 rounded-lg">
              <DollarSign className="w-5 h-5 text-emerald-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs text-emerald-600 font-medium">
            <TrendingUp className="w-3 h-3 mr-1" />
            <span>+8.2% from last month</span>
          </div>
        </div>

        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Settled Commissions</p>
              <h3 className="text-2xl font-bold text-slate-800 mt-1">PKR {paidCommission.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</h3>
            </div>
            <div className="p-2 bg-indigo-50 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-indigo-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs text-slate-500">
            <span>{((paidCommission / totalCommission) * 100).toFixed(1)}% settlement rate</span>
          </div>
        </div>

        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Active Dealers</p>
              <h3 className="text-2xl font-bold text-slate-800 mt-1">{activeDealers}</h3>
            </div>
            <div className="p-2 bg-amber-50 rounded-lg">
              <Activity className="w-5 h-5 text-amber-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs text-slate-500">
            <span>Across all regions</span>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <SmartTable 
          data={items} 
          columns={columns} 
          formFields={formFields} 
          onAdd={(newItem) => setItems([{...newItem, total: (newItem.vol || 0) * (newItem.rate || 0)}, ...items])} 
        />
      </div>

    </div>
  );
}