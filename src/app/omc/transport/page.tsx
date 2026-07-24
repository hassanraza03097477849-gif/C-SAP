"use client";

import React, { useState } from "react";
import { 
  Truck, 
  MapPin, 
  DollarSign, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Search,
  Filter,
  Download,
  MoreVertical,
  Activity
} from "lucide-react";

// Mock Data
const kpis = [
  { title: "Total Trips Today", value: "142", trend: "+12%", icon: Truck, color: "text-blue-500" },
  { title: "Avg Freight Rate/Ltr", value: "$0.042", trend: "-2.1%", icon: DollarSign, color: "text-emerald-500" },
  { title: "Active Destinations", value: "38", trend: "+4", icon: MapPin, color: "text-purple-500" },
  { title: "Delayed Trips", value: "3", trend: "-1", icon: Clock, color: "text-rose-500" },
];

const mockTrips = [
  { id: "TRP-2024-001", date: "2026-07-24", transporter: "Alpha Logistics", destination: "North Hub", distance: 450, rate: 0.045, total: 2025, status: "In Transit" },
  { id: "TRP-2024-002", date: "2026-07-24", transporter: "Beta Freight", destination: "South Terminal", distance: 320, rate: 0.040, total: 1280, status: "Delivered" },
  { id: "TRP-2024-003", date: "2026-07-24", transporter: "Gamma Transport", destination: "East Depot", distance: 150, rate: 0.038, total: 570, status: "Pending" },
  { id: "TRP-2024-004", date: "2026-07-23", transporter: "Delta Cargo", destination: "West Port", distance: 890, rate: 0.052, total: 4628, status: "Delayed" },
  { id: "TRP-2024-005", date: "2026-07-23", transporter: "Alpha Logistics", destination: "Central Station", distance: 210, rate: 0.039, total: 819, status: "Delivered" },
  { id: "TRP-2024-006", date: "2026-07-22", transporter: "Omega Shipping", destination: "North Hub", distance: 450, rate: 0.046, total: 2070, status: "Delivered" },
  { id: "TRP-2024-007", date: "2026-07-22", transporter: "Beta Freight", destination: "South Terminal", distance: 320, rate: 0.041, total: 1312, status: "Delivered" },
  { id: "TRP-2024-008", date: "2026-07-22", transporter: "Gamma Transport", destination: "East Depot", distance: 150, rate: 0.038, total: 570, status: "Delivered" },
  { id: "TRP-2024-009", date: "2026-07-21", transporter: "Delta Cargo", destination: "West Port", distance: 890, rate: 0.051, total: 4539, status: "Delivered" },
  { id: "TRP-2024-010", date: "2026-07-21", transporter: "Alpha Logistics", destination: "Central Station", distance: 210, rate: 0.039, total: 819, status: "Delivered" },
  { id: "TRP-2024-011", date: "2026-07-20", transporter: "Omega Shipping", destination: "North Hub", distance: 450, rate: 0.045, total: 2025, status: "Delivered" },
  { id: "TRP-2024-012", date: "2026-07-20", transporter: "Beta Freight", destination: "South Terminal", distance: 320, rate: 0.040, total: 1280, status: "Delivered" },
  { id: "TRP-2024-013", date: "2026-07-19", transporter: "Gamma Transport", destination: "East Depot", distance: 150, rate: 0.037, total: 555, status: "Delivered" },
  { id: "TRP-2024-014", date: "2026-07-19", transporter: "Delta Cargo", destination: "West Port", distance: 890, rate: 0.050, total: 4450, status: "Delivered" },
  { id: "TRP-2024-015", date: "2026-07-18", transporter: "Alpha Logistics", destination: "Central Station", distance: 210, rate: 0.038, total: 798, status: "Delivered" },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Delivered":
      return <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700 border border-emerald-200"><CheckCircle2 className="w-3 h-3" /> {status}</span>;
    case "In Transit":
      return <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 border border-blue-200"><Truck className="w-3 h-3" /> {status}</span>;
    case "Pending":
      return <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700 border border-amber-200"><Clock className="w-3 h-3" /> {status}</span>;
    case "Delayed":
      return <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-rose-100 text-rose-700 border border-rose-200"><AlertCircle className="w-3 h-3" /> {status}</span>;
    default:
      return <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"><Activity className="w-3 h-3" /> {status}</span>;
  }
};

export default function TransportLedger() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTrips = mockTrips.filter(trip => 
    trip.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
    trip.transporter.toLowerCase().includes(searchTerm.toLowerCase()) ||
    trip.destination.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      {/* Header Container */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Transport & Logistics Ledger</h1>
          <p className="text-sm text-slate-500 mt-1">Real-time freight rate and route tracking</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search trips, transporters..." 
              className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 w-64 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600 transition-colors flex items-center gap-2 text-sm font-medium">
            <Filter className="w-4 h-4" />
            <span className="hidden sm:inline">Filter</span>
          </button>
          <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600 transition-colors flex items-center gap-2 text-sm font-medium">
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Export</span>
          </button>
        </div>
      </div>

      {/* KPIs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, idx) => (
          <div key={idx} className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">{kpi.title}</p>
                <h3 className="text-2xl font-bold text-slate-800">{kpi.value}</h3>
              </div>
              <div className={`p-2 rounded-lg bg-slate-50 ${kpi.color} bg-opacity-10`}>
                <kpi.icon className={`w-5 h-5 ${kpi.color}`} />
              </div>
            </div>
            <div className="mt-4 flex items-center text-xs">
              <span className={`font-medium ${kpi.trend.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'}`}>
                {kpi.trend}
              </span>
              <span className="text-slate-400 ml-2">vs previous period</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid Container */}
      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="overflow-auto flex-1">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Trip ID</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Date</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Transporter</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Destination Site</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Distance (km)</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Freight Rate/Ltr</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Total Freight</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-center">Status</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredTrips.map((trip, idx) => (
                <tr key={idx} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer group">
                  <td className="px-6 py-3 text-sm font-medium text-slate-700 whitespace-nowrap">{trip.id}</td>
                  <td className="px-6 py-3 text-sm text-slate-500 whitespace-nowrap">{trip.date}</td>
                  <td className="px-6 py-3 text-sm text-slate-700 whitespace-nowrap">{trip.transporter}</td>
                  <td className="px-6 py-3 text-sm text-slate-700 whitespace-nowrap flex items-center gap-2">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    {trip.destination}
                  </td>
                  <td className="px-6 py-3 text-sm text-slate-700 text-right whitespace-nowrap font-medium">{trip.distance.toLocaleString()}</td>
                  <td className="px-6 py-3 text-sm text-slate-700 text-right whitespace-nowrap">${trip.rate.toFixed(3)}</td>
                  <td className="px-6 py-3 text-sm font-semibold text-slate-800 text-right whitespace-nowrap">${trip.total.toLocaleString()}</td>
                  <td className="px-6 py-3 text-center whitespace-nowrap">{getStatusBadge(trip.status)}</td>
                  <td className="px-6 py-3 text-center whitespace-nowrap">
                    <button className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors opacity-0 group-hover:opacity-100">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredTrips.length === 0 && (
                <tr>
                  <td colSpan={9} className="px-6 py-12 text-center text-slate-500 text-sm">
                    No trips found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="bg-slate-50/95 border-t border-slate-200 px-6 py-3 text-sm text-slate-500 flex justify-between items-center">
          <span>Showing {filteredTrips.length} of {mockTrips.length} trips</span>
          <span className="font-medium">Total Freight Value: ${filteredTrips.reduce((acc, curr) => acc + curr.total, 0).toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
