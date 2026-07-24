import React from 'react';
import { Truck, Package, Clock, CheckCircle, Search, Filter, Download, Plus } from 'lucide-react';

const KPICard = ({ title, value, icon: Icon, trend }: { title: string; value: string; icon: React.ElementType; trend: string }) => (
  <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
    <div className="flex justify-between items-start mb-4">
      <div className="p-2 bg-emerald-100/50 rounded-lg">
        <Icon className="w-5 h-5 text-emerald-600" />
      </div>
      <span className={`text-sm font-medium ${trend.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
        {trend}
      </span>
    </div>
    <div>
      <h3 className="text-sm font-medium text-slate-500">{title}</h3>
      <p className="text-2xl font-bold text-slate-800">{value}</p>
    </div>
  </div>
);

const SHIPMENTS = [
  { id: 'SHP-9001', date: '2026-07-24', agent: 'DHL Global Forwarding', vessel: 'TRK-8422A', ref: 'DEL-44192', route: 'NY -> LA', status: 'In Transit' },
  { id: 'SHP-9002', date: '2026-07-23', agent: 'FedEx Freight', vessel: 'VSL-OCEAN1', ref: 'DEL-44193', route: 'LA -> TYO', status: 'Departed' },
  { id: 'SHP-9003', date: '2026-07-24', agent: 'Maersk Line', vessel: 'VSL-MAERSK7', ref: 'DEL-44194', route: 'SH -> ROT', status: 'Planning' },
  { id: 'SHP-9004', date: '2026-07-22', agent: 'UPS Supply Chain', vessel: 'TRK-9912B', ref: 'DEL-44180', route: 'CHI -> NY', status: 'Delivered' },
  { id: 'SHP-9005', date: '2026-07-24', agent: 'XPO Logistics', vessel: 'TRK-5521C', ref: 'DEL-44195', route: 'DAL -> MIA', status: 'Loading' },
  { id: 'SHP-9006', date: '2026-07-25', agent: 'Kuehne + Nagel', vessel: 'FLT-KN88', ref: 'DEL-44200', route: 'LHR -> JFK', status: 'Scheduled' },
  { id: 'SHP-9007', date: '2026-07-21', agent: 'DB Schenker', vessel: 'TRK-1109D', ref: 'DEL-44175', route: 'BER -> PAR', status: 'Delivered' },
  { id: 'SHP-9008', date: '2026-07-24', agent: 'DHL Global Forwarding', vessel: 'TRK-8423A', ref: 'DEL-44196', route: 'NY -> BOS', status: 'In Transit' },
  { id: 'SHP-9009', date: '2026-07-24', agent: 'FedEx Freight', vessel: 'TRK-2244E', ref: 'DEL-44197', route: 'SF -> SEA', status: 'In Transit' },
  { id: 'SHP-9010', date: '2026-07-26', agent: 'C.H. Robinson', vessel: 'TRK-7765F', ref: 'DEL-44205', route: 'ATL -> ORL', status: 'Planning' },
  { id: 'SHP-9011', date: '2026-07-23', agent: 'Expeditors', vessel: 'FLT-EX12', ref: 'DEL-44188', route: 'HKG -> SFO', status: 'Customs' },
  { id: 'SHP-9012', date: '2026-07-24', agent: 'UPS Supply Chain', vessel: 'TRK-9913B', ref: 'DEL-44198', route: 'CHI -> DET', status: 'Loading' },
  { id: 'SHP-9013', date: '2026-07-20', agent: 'Maersk Line', vessel: 'VSL-MAERSK2', ref: 'DEL-44150', route: 'SIN -> DXB', status: 'Delivered' },
  { id: 'SHP-9014', date: '2026-07-24', agent: 'XPO Logistics', vessel: 'TRK-5522C', ref: 'DEL-44199', route: 'DAL -> HOU', status: 'In Transit' },
  { id: 'SHP-9015', date: '2026-07-25', agent: 'DHL Global Forwarding', vessel: 'TRK-8424A', ref: 'DEL-44201', route: 'MIA -> ATL', status: 'Scheduled' },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Delivered': return 'bg-emerald-100 text-emerald-700';
    case 'In Transit': return 'bg-blue-100 text-blue-700';
    case 'Departed': return 'bg-indigo-100 text-indigo-700';
    case 'Loading': return 'bg-amber-100 text-amber-700';
    case 'Scheduled': return 'bg-purple-100 text-purple-700';
    case 'Planning': return 'bg-slate-100 text-slate-700';
    case 'Customs': return 'bg-orange-100 text-orange-700';
    default: return 'bg-slate-100 text-slate-700';
  }
};

export default function DispatchesPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            SD Dispatches
          </h1>
          <p className="text-sm text-slate-500 mt-1">Manage shipments and dispatch schedules</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium">
            <Plus className="w-4 h-4" />
            New Dispatch
          </button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard title="Total Active Shipments" value="248" icon={Truck} trend="+12%" />
        <KPICard title="Pending Dispatches" value="56" icon={Clock} trend="-5%" />
        <KPICard title="Delivered Today" value="89" icon={CheckCircle} trend="+18%" />
        <KPICard title="Total Volume (Tons)" value="1,452" icon={Package} trend="+8%" />
      </div>

      {/* Main Grid Container */}
      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        {/* Table Toolbar */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search shipments..." 
              className="pl-9 pr-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-slate-50/50 w-64"
            />
          </div>
          <div className="text-sm text-slate-500">
            Showing 15 of 248 records
          </div>
        </div>
        
        <div className="flex-1 overflow-auto">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Shipment Number</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Date</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Forwarding Agent</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Truck/Vessel ID</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Delivery Ref</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Route</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {SHIPMENTS.map((shipment) => (
                <tr key={shipment.id} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer group">
                  <td className="px-6 py-3">
                    <span className="font-medium text-emerald-600 group-hover:text-emerald-700">{shipment.id}</span>
                  </td>
                  <td className="px-6 py-3 text-sm text-slate-600">{shipment.date}</td>
                  <td className="px-6 py-3 text-sm text-slate-800 font-medium">{shipment.agent}</td>
                  <td className="px-6 py-3 text-sm text-slate-600">{shipment.vessel}</td>
                  <td className="px-6 py-3 text-sm text-slate-600">{shipment.ref}</td>
                  <td className="px-6 py-3 text-sm text-slate-600">{shipment.route}</td>
                  <td className="px-6 py-3">
                    <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${getStatusColor(shipment.status)}`}>
                      {shipment.status}
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
