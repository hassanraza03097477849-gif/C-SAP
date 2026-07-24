import React from 'react';
import { Package, Truck, Clock, CheckCircle, Search, Filter, Download } from 'lucide-react';

const kpis = [
  { title: "Total Import POs", value: "342", trend: "+12%", icon: Package, color: "text-blue-500" },
  { title: "In Transit", value: "85", trend: "-3%", icon: Truck, color: "text-amber-500" },
  { title: "Pending Customs", value: "24", trend: "+5%", icon: Clock, color: "text-purple-500" },
  { title: "Cleared Today", value: "12", trend: "+18%", icon: CheckCircle, color: "text-emerald-500" }
];

const mockData = [
  { po: "4500012934", date: "2026-07-20", supplier: "Global Chemicals Ltd.", material: "Industrial Solvents", quantity: "5,000 L", delivery: "2026-08-15", origin: "Germany", status: "In Transit" },
  { po: "4500012935", date: "2026-07-21", supplier: "Pacific Polymers", material: "HDPE Granules", quantity: "20,000 kg", delivery: "2026-09-01", origin: "South Korea", status: "Pending Customs" },
  { po: "4500012936", date: "2026-07-22", supplier: "EuroTrade AG", material: "Catalysts", quantity: "500 kg", delivery: "2026-08-05", origin: "Switzerland", status: "Cleared" },
  { po: "4500012937", date: "2026-07-22", supplier: "SinoChem", material: "Lubricant Additives", quantity: "10,000 L", delivery: "2026-08-20", origin: "China", status: "In Transit" },
  { po: "4500012938", date: "2026-07-23", supplier: "AmeriGas", material: "Specialty Gases", quantity: "200 Cylinders", delivery: "2026-07-30", origin: "USA", status: "In Transit" },
  { po: "4500012939", date: "2026-07-23", supplier: "Nippon Steel", material: "Piping Materials", quantity: "5,000 kg", delivery: "2026-10-15", origin: "Japan", status: "Order Placed" },
  { po: "4500012940", date: "2026-07-24", supplier: "Global Chemicals Ltd.", material: "Resins", quantity: "15,000 kg", delivery: "2026-08-25", origin: "Germany", status: "Order Placed" },
  { po: "4500012941", date: "2026-07-10", supplier: "AussieMin", material: "Bauxite", quantity: "50,000 MT", delivery: "2026-07-28", origin: "Australia", status: "Pending Customs" },
  { po: "4500012942", date: "2026-07-12", supplier: "BrazilAgro", material: "Ethanol", quantity: "100,000 L", delivery: "2026-08-10", origin: "Brazil", status: "In Transit" },
  { po: "4500012943", date: "2026-07-15", supplier: "Gulf Oil", material: "Crude Base", quantity: "200,000 BBL", delivery: "2026-09-05", origin: "UAE", status: "In Transit" },
  { po: "4500012944", date: "2026-07-18", supplier: "Nordic Paper", material: "Cellulose", quantity: "8,000 kg", delivery: "2026-08-01", origin: "Sweden", status: "Cleared" },
  { po: "4500012945", date: "2026-07-19", supplier: "EuroTrade AG", material: "Additives", quantity: "1,200 kg", delivery: "2026-08-12", origin: "Switzerland", status: "Pending Customs" },
  { po: "4500012946", date: "2026-07-20", supplier: "IndiaChem", material: "Dyes", quantity: "3,500 kg", delivery: "2026-08-22", origin: "India", status: "Order Placed" },
  { po: "4500012947", date: "2026-07-21", supplier: "SinoChem", material: "Plasticizers", quantity: "18,000 L", delivery: "2026-09-15", origin: "China", status: "In Transit" },
  { po: "4500012948", date: "2026-07-24", supplier: "Pacific Polymers", material: "LDPE", quantity: "25,000 kg", delivery: "2026-10-01", origin: "South Korea", status: "Order Placed" }
];

export default function ImportsOrdersPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
          SAP Import Orders
        </h1>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors text-sm font-medium">
            <Filter size={16} /> Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors text-sm font-medium shadow-md shadow-emerald-500/20">
            <Download size={16} /> Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, idx) => (
          <div key={idx} className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">{kpi.title}</p>
                <h3 className="text-2xl font-bold mt-1 text-slate-800">{kpi.value}</h3>
              </div>
              <div className={`p-2 rounded-lg bg-slate-50 ${kpi.color}`}>
                <kpi.icon size={20} />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className={`text-xs font-semibold ${kpi.trend.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                {kpi.trend}
              </span>
              <span className="text-xs text-slate-400">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="p-4 border-b border-slate-200/60 flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search PO Number, Supplier, or Material..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-slate-800 placeholder:text-slate-400"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-auto">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">PO Number</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Date</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Supplier</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Material</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Quantity</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Delivery Date</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Origin</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer group">
                  <td className="px-6 py-3 text-sm font-medium text-emerald-600 group-hover:text-emerald-700">{row.po}</td>
                  <td className="px-6 py-3 text-sm text-slate-600">{row.date}</td>
                  <td className="px-6 py-3 text-sm font-medium text-slate-800">{row.supplier}</td>
                  <td className="px-6 py-3 text-sm text-slate-600">{row.material}</td>
                  <td className="px-6 py-3 text-sm text-slate-700 font-medium">{row.quantity}</td>
                  <td className="px-6 py-3 text-sm text-slate-600">{row.delivery}</td>
                  <td className="px-6 py-3 text-sm text-slate-600">{row.origin}</td>
                  <td className="px-6 py-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border
                      ${row.status === 'Cleared' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 
                        row.status === 'In Transit' ? 'bg-amber-50 text-amber-700 border-amber-200' : 
                        row.status === 'Pending Customs' ? 'bg-purple-50 text-purple-700 border-purple-200' : 
                        'bg-slate-100 text-slate-700 border-slate-200'}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-slate-200/60 bg-slate-50/50 flex items-center justify-between">
          <span className="text-sm text-slate-500">Showing {mockData.length} of 342 entries</span>
          <div className="flex items-center gap-1">
            <button className="px-3 py-1 border border-slate-200 rounded text-sm text-slate-600 hover:bg-white disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 bg-emerald-500 text-white rounded text-sm font-medium">1</button>
            <button className="px-3 py-1 border border-slate-200 rounded text-sm text-slate-600 hover:bg-white">2</button>
            <button className="px-3 py-1 border border-slate-200 rounded text-sm text-slate-600 hover:bg-white">3</button>
            <span className="px-2 text-slate-400">...</span>
            <button className="px-3 py-1 border border-slate-200 rounded text-sm text-slate-600 hover:bg-white">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}