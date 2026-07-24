"use client";

import React, { useState } from 'react';
import { 
  Truck, 
  MapPin, 
  Clock, 
  AlertTriangle,
  CheckCircle2,
  Calendar,
  ShieldAlert,
  Search,
  Filter,
  Download,
  MoreVertical
} from 'lucide-react';

const mockTankers = [
  { id: "TN-01-AB-1234", transporter: "Alpha Logistics", capacity: "40,000L", expiry: "2027-05-15", status: "In Transit", location: "Highway 42" },
  { id: "TN-02-CD-5678", transporter: "Omega Transports", capacity: "20,000L", expiry: "2026-11-20", status: "Available", location: "Depot A" },
  { id: "MH-12-EF-9012", transporter: "Beta Freight", capacity: "30,000L", expiry: "2026-08-10", status: "Maintenance", location: "Workshop" },
  { id: "GJ-05-GH-3456", transporter: "Gamma Shipping", capacity: "50,000L", expiry: "2028-02-28", status: "Loading", location: "Terminal B" },
  { id: "RJ-14-IJ-7890", transporter: "Delta Movers", capacity: "40,000L", expiry: "2026-12-05", status: "In Transit", location: "Route 66" },
  { id: "UP-32-KL-1234", transporter: "Epsilon Cargo", capacity: "25,000L", expiry: "2027-09-12", status: "Available", location: "Depot C" },
  { id: "DL-01-MN-5678", transporter: "Zeta Trans", capacity: "35,000L", expiry: "2026-10-30", status: "Unloading", location: "Station 4" },
  { id: "HR-26-OP-9012", transporter: "Eta Logistics", capacity: "45,000L", expiry: "2029-01-15", status: "In Transit", location: "Expressway 1" },
  { id: "KA-03-QR-3456", transporter: "Theta Fleet", capacity: "20,000L", expiry: "2026-07-20", status: "Expired License", location: "Depot A" },
  { id: "TN-09-ST-7890", transporter: "Iota Transport", capacity: "50,000L", expiry: "2027-11-11", status: "Available", location: "Depot B" },
  { id: "KL-07-UV-1234", transporter: "Kappa Delivery", capacity: "40,000L", expiry: "2028-06-05", status: "Loading", location: "Terminal A" },
  { id: "AP-31-WX-5678", transporter: "Lambda Cargo", capacity: "30,000L", expiry: "2026-12-25", status: "In Transit", location: "Highway 9" },
  { id: "TS-08-YZ-9012", transporter: "Mu Logistics", capacity: "25,000L", expiry: "2027-04-18", status: "Available", location: "Depot D" },
  { id: "WB-02-AB-3456", transporter: "Nu Freight", capacity: "45,000L", expiry: "2028-09-30", status: "Maintenance", location: "Workshop 2" },
  { id: "OD-14-CD-7890", transporter: "Xi Movers", capacity: "35,000L", expiry: "2026-08-15", status: "In Transit", location: "Route 10" },
  { id: "CG-04-EF-1234", transporter: "Omicron Transport", capacity: "40,000L", expiry: "2027-03-22", status: "Unloading", location: "Station 2" }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Available': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
    case 'In Transit': return 'bg-blue-100 text-blue-700 border-blue-200';
    case 'Loading':
    case 'Unloading': return 'bg-amber-100 text-amber-700 border-amber-200';
    case 'Maintenance': return 'bg-slate-100 text-slate-700 border-slate-200';
    case 'Expired License': return 'bg-red-100 text-red-700 border-red-200';
    default: return 'bg-slate-100 text-slate-700 border-slate-200';
  }
};

export default function TankersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTankers = mockTankers.filter(t => 
    t.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
    t.transporter.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-emerald-100 text-emerald-600 rounded-lg">
            <Truck className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Tanker Fleet Management</h1>
            <p className="text-sm text-slate-500 font-medium">Real-time vehicle tracking and compliance ledger</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search tankers..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all w-64 text-slate-800 placeholder:text-slate-400"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-sm text-sm font-medium">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Total Fleet</span>
            <Truck className="h-5 w-5 text-blue-500" />
          </div>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-slate-800">482</span>
            <span className="text-sm font-medium text-emerald-500 mb-1">+12 this month</span>
          </div>
        </div>

        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">In Transit</span>
            <MapPin className="h-5 w-5 text-emerald-500" />
          </div>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-slate-800">156</span>
            <span className="text-sm font-medium text-slate-400 mb-1">32% of fleet</span>
          </div>
        </div>

        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Avg Turnaround</span>
            <Clock className="h-5 w-5 text-amber-500" />
          </div>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-slate-800">4.2h</span>
            <span className="text-sm font-medium text-emerald-500 mb-1">-15m vs last week</span>
          </div>
        </div>

        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Compliance Alerts</span>
            <AlertTriangle className="h-5 w-5 text-red-500" />
          </div>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-slate-800">7</span>
            <span className="text-sm font-medium text-red-500 mb-1">Action required</span>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="overflow-auto flex-1 custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Tanker ID</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Transporter</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Capacity</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">License Expiry</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Current Location</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Trip Status</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredTankers.map((tanker) => (
                <tr key={tanker.id} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer">
                  <td className="px-6 py-3 font-medium text-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded bg-slate-100 flex items-center justify-center text-slate-400">
                        <Truck className="h-4 w-4" />
                      </div>
                      {tanker.id}
                    </div>
                  </td>
                  <td className="px-6 py-3 text-slate-600">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                      {tanker.transporter}
                    </div>
                  </td>
                  <td className="px-6 py-3">
                    <span className="inline-flex items-center px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded border border-slate-200">
                      {tanker.capacity}
                    </span>
                  </td>
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-1.5 text-slate-600">
                      {tanker.status === 'Expired License' ? (
                        <ShieldAlert className="h-4 w-4 text-red-500" />
                      ) : (
                        <Calendar className="h-4 w-4 text-slate-400" />
                      )}
                      <span className={tanker.status === 'Expired License' ? 'text-red-600 font-medium' : ''}>
                        {tanker.expiry}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-slate-400" />
                      <span className="truncate max-w-[120px]">{tanker.location}</span>
                    </div>
                  </td>
                  <td className="px-6 py-3">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(tanker.status)}`}>
                      {tanker.status === 'Available' && <CheckCircle2 className="h-3 w-3" />}
                      {tanker.status === 'Expired License' && <ShieldAlert className="h-3 w-3" />}
                      {tanker.status === 'Maintenance' && <Clock className="h-3 w-3" />}
                      {tanker.status}
                    </span>
                  </td>
                  <td className="px-6 py-3">
                    <button className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded transition-colors">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredTankers.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-slate-500">
                    No tankers found matching "{searchTerm}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="bg-slate-50 border-t border-slate-200 p-4 flex items-center justify-between text-sm text-slate-600">
          <div>Showing {filteredTankers.length} of {mockTankers.length} tankers</div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 bg-white border border-slate-200 rounded hover:bg-slate-50 disabled:opacity-50">Previous</button>
            <button className="px-3 py-1 bg-white border border-slate-200 rounded hover:bg-slate-50 disabled:opacity-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}