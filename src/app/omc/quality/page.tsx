import React from 'react';
import { 
  Beaker, 
  CheckCircle2, 
  XCircle, 
  FileText, 
  Droplet, 
  ThermometerSun,
  Activity,
  AlertTriangle,
  Search,
  Filter
} from 'lucide-react';

const mockData = [
  { id: 'LR-2026-001', date: '2026-07-24', product: 'HSD (High Speed Diesel)', density: 832.5, flashPoint: 52, status: 'Pass' },
  { id: 'LR-2026-002', date: '2026-07-24', product: 'PMG (Premium Motor Gasoline)', density: 721.4, flashPoint: -40, status: 'Pass' },
  { id: 'LR-2026-003', date: '2026-07-23', product: 'HOBC (High Octane Blending Component)', density: 735.1, flashPoint: -38, status: 'Pass' },
  { id: 'LR-2026-004', date: '2026-07-23', product: 'Jet A-1', density: 798.2, flashPoint: 40, status: 'Fail' },
  { id: 'LR-2026-005', date: '2026-07-22', product: 'HSD (High Speed Diesel)', density: 830.1, flashPoint: 54, status: 'Pass' },
  { id: 'LR-2026-006', date: '2026-07-22', product: 'PMG (Premium Motor Gasoline)', density: 725.0, flashPoint: -41, status: 'Pass' },
  { id: 'LR-2026-007', date: '2026-07-21', product: 'HSD (High Speed Diesel)', density: 835.0, flashPoint: 49, status: 'Fail' },
  { id: 'LR-2026-008', date: '2026-07-21', product: 'HOBC (High Octane Blending Component)', density: 733.8, flashPoint: -39, status: 'Pass' },
  { id: 'LR-2026-009', date: '2026-07-20', product: 'Jet A-1', density: 801.5, flashPoint: 41, status: 'Pass' },
  { id: 'LR-2026-010', date: '2026-07-20', product: 'HSD (High Speed Diesel)', density: 831.9, flashPoint: 53, status: 'Pass' },
  { id: 'LR-2026-011', date: '2026-07-19', product: 'PMG (Premium Motor Gasoline)', density: 720.5, flashPoint: -42, status: 'Pass' },
  { id: 'LR-2026-012', date: '2026-07-19', product: 'HOBC (High Octane Blending Component)', density: 736.2, flashPoint: -37, status: 'Pass' },
  { id: 'LR-2026-013', date: '2026-07-18', product: 'HSD (High Speed Diesel)', density: 840.1, flashPoint: 45, status: 'Fail' },
  { id: 'LR-2026-014', date: '2026-07-18', product: 'Jet A-1', density: 799.0, flashPoint: 39, status: 'Fail' },
  { id: 'LR-2026-015', date: '2026-07-17', product: 'PMG (Premium Motor Gasoline)', density: 722.8, flashPoint: -40, status: 'Pass' },
];

export default function QualityPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Quality Assurance Ledger
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Comprehensive fuel quality testing and certification tracking
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search reports..." 
              className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 w-64 text-slate-800 placeholder:text-slate-400"
            />
          </div>
          <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-slate-600">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Total Samples Tested</p>
              <p className="text-2xl font-bold text-slate-800 mt-1">1,248</p>
            </div>
            <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
              <Beaker className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Passing Rate</p>
              <p className="text-2xl font-bold text-slate-800 mt-1">98.5%</p>
            </div>
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
              <Activity className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Critical Failures</p>
              <p className="text-2xl font-bold text-slate-800 mt-1">4</p>
            </div>
            <div className="p-3 bg-red-50 text-red-600 rounded-lg">
              <AlertTriangle className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Pending Reports</p>
              <p className="text-2xl font-bold text-slate-800 mt-1">12</p>
            </div>
            <div className="p-3 bg-amber-50 text-amber-600 rounded-lg">
              <FileText className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="overflow-auto flex-1">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Lab Report No.</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Sample Date</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Product</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">
                  <div className="flex items-center gap-1">
                    <Droplet className="w-4 h-4" />
                    Density (kg/m³)
                  </div>
                </th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">
                  <div className="flex items-center gap-1">
                    <ThermometerSun className="w-4 h-4" />
                    Flash Point (°C)
                  </div>
                </th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockData.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer">
                  <td className="px-6 py-4 text-sm font-medium text-slate-700">{row.id}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{row.date}</td>
                  <td className="px-6 py-4 text-sm text-slate-700">{row.product}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{row.density.toFixed(1)}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{row.flashPoint}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${
                      row.status === 'Pass' 
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60' 
                        : 'bg-red-50 text-red-700 border border-red-200/60'
                    }`}>
                      {row.status === 'Pass' ? <CheckCircle2 className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
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
