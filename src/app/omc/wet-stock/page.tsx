import React from 'react';
import { 
  Droplets, 
  Database, 
  AlertTriangle, 
  CheckCircle2, 
  TrendingDown, 
  Activity, 
  MapPin, 
  Filter, 
  Download 
} from 'lucide-react';

const mockInventoryData = [
  { id: 'TNK-001', depot: 'North Hub', product: 'PMS', safeFill: '50,000', deadStock: '1,500', currentDip: '45,200', pumpable: '43,700', status: 'Optimal' },
  { id: 'TNK-002', depot: 'North Hub', product: 'AGO', safeFill: '80,000', deadStock: '2,000', currentDip: '12,500', pumpable: '10,500', status: 'Low' },
  { id: 'TNK-003', depot: 'South Terminal', product: 'PMS', safeFill: '100,000', deadStock: '3,000', currentDip: '95,000', pumpable: '92,000', status: 'High' },
  { id: 'TNK-004', depot: 'South Terminal', product: 'DPK', safeFill: '40,000', deadStock: '1,000', currentDip: '20,000', pumpable: '19,000', status: 'Optimal' },
  { id: 'TNK-005', depot: 'East Depot', product: 'AGO', safeFill: '60,000', deadStock: '1,500', currentDip: '5,000', pumpable: '3,500', status: 'Critical' },
  { id: 'TNK-006', depot: 'East Depot', product: 'PMS', safeFill: '60,000', deadStock: '1,500', currentDip: '58,000', pumpable: '56,500', status: 'High' },
  { id: 'TNK-007', depot: 'West Wing', product: 'PMS', safeFill: '75,000', deadStock: '2,000', currentDip: '35,000', pumpable: '33,000', status: 'Optimal' },
  { id: 'TNK-008', depot: 'West Wing', product: 'AGO', safeFill: '75,000', deadStock: '2,000', currentDip: '70,000', pumpable: '68,000', status: 'Optimal' },
  { id: 'TNK-009', depot: 'Central Hub', product: 'DPK', safeFill: '50,000', deadStock: '1,200', currentDip: '10,000', pumpable: '8,800', status: 'Low' },
  { id: 'TNK-010', depot: 'Central Hub', product: 'PMS', safeFill: '120,000', deadStock: '4,000', currentDip: '60,000', pumpable: '56,000', status: 'Optimal' },
  { id: 'TNK-011', depot: 'North Hub', product: 'DPK', safeFill: '30,000', deadStock: '800', currentDip: '28,000', pumpable: '27,200', status: 'High' },
  { id: 'TNK-012', depot: 'South Terminal', product: 'AGO', safeFill: '90,000', deadStock: '2,500', currentDip: '45,000', pumpable: '42,500', status: 'Optimal' },
  { id: 'TNK-013', depot: 'East Depot', product: 'DPK', safeFill: '45,000', deadStock: '1,000', currentDip: '3,000', pumpable: '2,000', status: 'Critical' },
  { id: 'TNK-014', depot: 'West Wing', product: 'DPK', safeFill: '55,000', deadStock: '1,500', currentDip: '50,000', pumpable: '48,500', status: 'High' },
  { id: 'TNK-015', depot: 'Central Hub', product: 'AGO', safeFill: '110,000', deadStock: '3,500', currentDip: '85,000', pumpable: '81,500', status: 'Optimal' },
];

export default function OMCWetStockPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-emerald-100 text-emerald-600 rounded-lg">
            <Droplets size={24} className="stroke-[2.5]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Wet Stock Inventory
            </h1>
            <p className="text-sm text-slate-500 font-medium mt-1">Real-time depot storage and tank management</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors text-sm font-semibold shadow-sm">
            <Filter size={16} />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors text-sm font-semibold shadow-sm shadow-emerald-200">
            <Download size={16} />
            Export
          </button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Total Pumpable Vol", value: "632,500 L", icon: <Database size={20} />, trend: "+2.4%", colorTheme: "emerald" },
          { title: "Active Tanks", value: "15 / 15", icon: <Activity size={20} />, trend: "100%", colorTheme: "blue" },
          { title: "Critical Levels", value: "2 Tanks", icon: <AlertTriangle size={20} />, trend: "Needs Action", colorTheme: "rose" },
          { title: "Dead Stock Total", value: "28,200 L", icon: <TrendingDown size={20} />, trend: "Stable", colorTheme: "amber" }
        ].map((kpi, idx) => {
          const colorStyles = {
            emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600' },
            blue: { bg: 'bg-blue-50', text: 'text-blue-600' },
            rose: { bg: 'bg-rose-50', text: 'text-rose-600' },
            amber: { bg: 'bg-amber-50', text: 'text-amber-600' }
          }[kpi.colorTheme as 'emerald' | 'blue' | 'rose' | 'amber'];

          return (
            <div key={idx} className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-slate-500">{kpi.title}</span>
                <div className={`p-2 rounded-lg ${colorStyles.bg} ${colorStyles.text}`}>
                  {kpi.icon}
                </div>
              </div>
              <div className="flex items-end justify-between">
                <h3 className="text-2xl font-bold text-slate-800">{kpi.value}</h3>
                <span className={`text-xs font-medium ${colorStyles.text} ${colorStyles.bg} px-2 py-1 rounded-md`}>
                  {kpi.trend}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Grid Container */}
      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="overflow-auto flex-1 p-0">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Tank ID</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Depot</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Product</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Safe Fill Vol (L)</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Dead Stock (L)</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Current Dip (L)</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Pumpable Vol (L)</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockInventoryData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer group">
                  <td className="px-6 py-3.5 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <Database size={16} className="text-slate-400 group-hover:text-emerald-500 transition-colors" />
                      <span className="font-semibold text-slate-700">{row.id}</span>
                    </div>
                  </td>
                  <td className="px-6 py-3.5 whitespace-nowrap text-sm text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-slate-400" />
                      {row.depot}
                    </div>
                  </td>
                  <td className="px-6 py-3.5 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 rounded-md text-xs font-bold ${
                      row.product === 'PMS' ? 'bg-orange-100 text-orange-700' :
                      row.product === 'AGO' ? 'bg-blue-100 text-blue-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {row.product}
                    </span>
                  </td>
                  <td className="px-6 py-3.5 whitespace-nowrap text-sm font-medium text-slate-600">{row.safeFill}</td>
                  <td className="px-6 py-3.5 whitespace-nowrap text-sm font-medium text-slate-500">{row.deadStock}</td>
                  <td className="px-6 py-3.5 whitespace-nowrap text-sm font-bold text-slate-700">{row.currentDip}</td>
                  <td className="px-6 py-3.5 whitespace-nowrap text-sm font-bold text-emerald-600">{row.pumpable}</td>
                  <td className="px-6 py-3.5 whitespace-nowrap">
                    <div className="flex items-center">
                      {row.status === 'Optimal' && <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold"><CheckCircle2 size={12} /> {row.status}</span>}
                      {row.status === 'High' && <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold"><TrendingDown size={12} className="rotate-180" /> {row.status}</span>}
                      {row.status === 'Low' && <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold"><TrendingDown size={12} /> {row.status}</span>}
                      {row.status === 'Critical' && <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold"><AlertTriangle size={12} /> {row.status}</span>}
                    </div>
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