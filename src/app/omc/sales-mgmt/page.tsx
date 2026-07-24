"use client";

import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  TrendingUp, 
  TrendingDown,
  AlertCircle,
  CheckCircle2,
  Package,
  Truck,
  Droplet,
  Fuel,
  Activity,
  Calendar,
  Filter,
  Search,
  Download,
  MoreVertical,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock Data
const MOCK_DATA = [
  { id: "S-1001", dealer: "Raza Petroleum", location: "Karachi South", vol: 45000, indents: 12, status: "Fulfilled", trend: "up" },
  { id: "S-1002", dealer: "Khan Fillers", location: "Lahore Central", vol: 38500, indents: 8, status: "Pending", trend: "down" },
  { id: "S-1003", dealer: "Ahmed & Sons", location: "Islamabad E-11", vol: 52000, indents: 15, status: "Fulfilled", trend: "up" },
  { id: "S-1004", dealer: "Bukhari Fuels", location: "Multan Cantt", vol: 29000, indents: 6, status: "Partial", trend: "down" },
  { id: "S-1005", dealer: "Shahid Gas", location: "Peshawar City", vol: 41200, indents: 10, status: "Fulfilled", trend: "up" },
  { id: "S-1006", dealer: "Zaman Energy", location: "Quetta", vol: 18500, indents: 4, status: "Pending", trend: "down" },
  { id: "S-1007", dealer: "Malik & Co", location: "Faisalabad", vol: 33000, indents: 9, status: "Fulfilled", trend: "up" },
  { id: "S-1008", dealer: "Hassan Motors", location: "Gujranwala", vol: 27500, indents: 7, status: "Partial", trend: "up" },
  { id: "S-1009", dealer: "Tariq Petroleum", location: "Sialkot", vol: 39800, indents: 11, status: "Fulfilled", trend: "up" },
  { id: "S-1010", dealer: "Rehman Fuels", location: "Hyderabad", vol: 44000, indents: 13, status: "Pending", trend: "down" },
  { id: "S-1011", dealer: "Qureshi Gas", location: "Sukkur", vol: 22000, indents: 5, status: "Fulfilled", trend: "up" },
  { id: "S-1012", dealer: "Nawaz Energy", location: "Rawalpindi", vol: 48000, indents: 14, status: "Partial", trend: "up" },
  { id: "S-1013", dealer: "Farooq Motors", location: "Bahawalpur", vol: 31500, indents: 8, status: "Fulfilled", trend: "down" },
  { id: "S-1014", dealer: "Usman & Bros", location: "Sargodha", vol: 25000, indents: 6, status: "Pending", trend: "down" },
  { id: "S-1015", dealer: "Kamran Petroleum", location: "Sheikhupura", vol: 36500, indents: 10, status: "Fulfilled", trend: "up" },
];

export default function OMCSalesMgmt() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = MOCK_DATA.filter(row => 
    row.dealer.toLowerCase().includes(searchTerm.toLowerCase()) || 
    row.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      
      {/* Header Container */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Sales & Ledger Management
          </h1>
          <p className="text-slate-500 text-sm mt-1 flex items-center gap-2">
            <Calendar className="w-4 h-4" /> 
            {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search dealer or ID..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all w-64 text-slate-800"
            />
          </div>
          <button className="p-2 border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
            <Filter className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm shadow-emerald-500/20">
            <Download className="w-4 h-4" />
            Export Ledger
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 flex-shrink-0">
        <Card className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <CardContent className="p-0">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-slate-500">Total Daily Volume</p>
                <h3 className="text-2xl font-bold text-slate-800 mt-1">531.5k L</h3>
              </div>
              <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                <Fuel className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp className="w-4 h-4 text-emerald-500 mr-1" />
              <span className="text-emerald-500 font-medium">+12.5%</span>
              <span className="text-slate-400 ml-2">vs yesterday</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <CardContent className="p-0">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-slate-500">Active Indents</p>
                <h3 className="text-2xl font-bold text-slate-800 mt-1">138</h3>
              </div>
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                <Package className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp className="w-4 h-4 text-emerald-500 mr-1" />
              <span className="text-emerald-500 font-medium">+5</span>
              <span className="text-slate-400 ml-2">new since morning</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <CardContent className="p-0">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-slate-500">Fulfillment Rate</p>
                <h3 className="text-2xl font-bold text-slate-800 mt-1">84.2%</h3>
              </div>
              <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
                <Truck className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
              <span className="text-red-500 font-medium">-2.1%</span>
              <span className="text-slate-400 ml-2">vs last week</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <CardContent className="p-0">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-slate-500">Pending Issues</p>
                <h3 className="text-2xl font-bold text-slate-800 mt-1">12</h3>
              </div>
              <div className="p-2 bg-amber-100 text-amber-600 rounded-lg">
                <AlertCircle className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <Activity className="w-4 h-4 text-amber-500 mr-1" />
              <span className="text-amber-500 font-medium">Requires attention</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Grid Container */}
      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
          <h2 className="font-semibold text-slate-800 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-emerald-600" />
            Retail Station Sales Ledger
          </h2>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>Showing {filteredData.length} entries</span>
          </div>
        </div>
        
        <div className="flex-1 overflow-auto">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Site ID</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Dealer & Location</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Daily Volume (L)</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-center">Active Indents</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Fulfillment Status</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredData.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer group">
                  <td className="px-6 py-4 text-sm font-medium text-slate-700">
                    {row.id}
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-slate-800">{row.dealer}</div>
                    <div className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3" /> {row.location}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-right font-medium">
                    <div className="flex items-center justify-end gap-2 text-slate-800">
                      {row.trend === 'up' ? (
                        <TrendingUp className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-500" />
                      )}
                      {row.vol.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-center text-slate-700">
                    <Badge variant="outline" className="bg-slate-50 font-mono text-slate-600 border-slate-200">
                      {row.indents}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {row.status === 'Fulfilled' && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                      {row.status === 'Pending' && <AlertCircle className="w-4 h-4 text-amber-500" />}
                      {row.status === 'Partial' && <Activity className="w-4 h-4 text-blue-500" />}
                      <span className={`text-sm font-medium ${
                        row.status === 'Fulfilled' ? 'text-emerald-600' :
                        row.status === 'Pending' ? 'text-amber-600' :
                        'text-blue-600'
                      }`}>
                        {row.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-emerald-600 transition-colors opacity-0 group-hover:opacity-100">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {filteredData.length === 0 && (
            <div className="flex flex-col items-center justify-center p-12 text-slate-500">
              <Search className="w-12 h-12 text-slate-300 mb-4" />
              <p className="text-lg font-medium text-slate-600">No records found</p>
              <p className="text-sm">Try adjusting your search criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
