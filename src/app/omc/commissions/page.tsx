import React from 'react';
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
  const totalVolume = mockCommissions.reduce((acc, curr) => acc + curr.vol, 0);
  const totalCommission = mockCommissions.reduce((acc, curr) => acc + (curr.vol * curr.rate), 0);
  const paidCommission = mockCommissions.filter(c => c.status === 'Paid').reduce((acc, curr) => acc + (curr.vol * curr.rate), 0);
  const activeDealers = new Set(mockCommissions.map(c => c.id)).size;

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
              <h3 className="text-2xl font-bold text-slate-800 mt-1">${totalCommission.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</h3>
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
              <h3 className="text-2xl font-bold text-slate-800 mt-1">${paidCommission.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</h3>
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
        <div className="overflow-auto flex-1">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Dealer ID</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Dealer Name</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Product</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Sales Vol (Ltrs)</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Commission Rate</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Total Commission</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-center">Payment Status</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockCommissions.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer group">
                  <td className="px-6 py-4 text-sm font-medium text-slate-800">{row.id}</td>
                  <td className="px-6 py-4 text-sm text-slate-600 font-medium">{row.name}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-semibold">
                      {row.product}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700 text-right tabular-nums">{row.vol.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm text-slate-700 text-right tabular-nums">${row.rate.toFixed(3)}</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-800 text-right tabular-nums">
                    ${(row.vol * row.rate).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {getStatusBadge(row.status)}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-slate-200/60 bg-slate-50/50 flex items-center justify-between text-sm text-slate-500">
          <div>Showing 1 to {mockCommissions.length} of {mockCommissions.length} entries</div>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-slate-200 rounded-md hover:bg-slate-100 transition-colors disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 border border-emerald-500 bg-emerald-50 text-emerald-700 font-medium rounded-md">1</button>
            <button className="px-3 py-1 border border-slate-200 rounded-md hover:bg-slate-100 transition-colors">Next</button>
          </div>
        </div>
      </div>

    </div>
  );
}