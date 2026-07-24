"use client";

import React, { useState } from 'react';
import { 
  Building2, 
  Users, 
  Lock, 
  CheckCircle2, 
  Search, 
  Filter, 
  Download, 
  MoreVertical 
} from 'lucide-react';

// Mock Data
const mockCostCenters = [
  { id: '1000', name: 'Corporate Headquarters', group: 'CORP', person: 'John Smith', dept: 'Executive', companyCode: 'US01', validFrom: '2023-01-01', validTo: '9999-12-31', status: 'Active' },
  { id: '1010', name: 'Finance & Accounting', group: 'CORP', person: 'Sarah Jenkins', dept: 'Finance', companyCode: 'US01', validFrom: '2023-01-01', validTo: '9999-12-31', status: 'Active' },
  { id: '1020', name: 'Human Resources', group: 'CORP', person: 'Michael Brown', dept: 'HR', companyCode: 'US01', validFrom: '2023-01-01', validTo: '9999-12-31', status: 'Active' },
  { id: '2000', name: 'Manufacturing Plant 1', group: 'PROD', person: 'David Lee', dept: 'Production', companyCode: 'US01', validFrom: '2023-01-01', validTo: '9999-12-31', status: 'Active' },
  { id: '2010', name: 'Quality Assurance', group: 'PROD', person: 'Emily Chen', dept: 'Quality', companyCode: 'US01', validFrom: '2023-01-01', validTo: '9999-12-31', status: 'Active' },
  { id: '2020', name: 'Maintenance', group: 'PROD', person: 'Robert Wilson', dept: 'Engineering', companyCode: 'US01', validFrom: '2023-01-01', validTo: '2026-12-31', status: 'Active' },
  { id: '3000', name: 'Sales North America', group: 'SALES', person: 'Jessica Taylor', dept: 'Sales', companyCode: 'US01', validFrom: '2023-01-01', validTo: '9999-12-31', status: 'Active' },
  { id: '3010', name: 'Marketing', group: 'SALES', person: 'William Davis', dept: 'Marketing', companyCode: 'US01', validFrom: '2023-01-01', validTo: '9999-12-31', status: 'Active' },
  { id: '4000', name: 'IT Infrastructure', group: 'IT', person: 'Thomas Anderson', dept: 'IT', companyCode: 'US01', validFrom: '2023-01-01', validTo: '9999-12-31', status: 'Active' },
  { id: '4010', name: 'Software Development', group: 'IT', person: 'Lisa Wong', dept: 'IT', companyCode: 'US01', validFrom: '2023-01-01', validTo: '9999-12-31', status: 'Active' },
  { id: '5000', name: 'R&D Center', group: 'RD', person: 'Dr. James Miller', dept: 'Research', companyCode: 'US01', validFrom: '2023-01-01', validTo: '9999-12-31', status: 'Active' },
  { id: '6000', name: 'Logistics East', group: 'LOG', person: 'Amanda White', dept: 'Supply Chain', companyCode: 'US01', validFrom: '2023-01-01', validTo: '9999-12-31', status: 'Locked' },
  { id: '6010', name: 'Warehouse Central', group: 'LOG', person: 'Daniel Martin', dept: 'Supply Chain', companyCode: 'US01', validFrom: '2023-01-01', validTo: '9999-12-31', status: 'Active' },
  { id: '7000', name: 'European Operations', group: 'EU', person: 'Sophie Dubois', dept: 'Operations', companyCode: 'EU01', validFrom: '2023-01-01', validTo: '9999-12-31', status: 'Active' },
  { id: '7010', name: 'EU Sales', group: 'EU', person: 'Marco Rossi', dept: 'Sales', companyCode: 'EU01', validFrom: '2023-01-01', validTo: '9999-12-31', status: 'Active' },
];

export default function CostCentersPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = mockCostCenters.filter(cc => 
    cc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    cc.id.includes(searchTerm) ||
    cc.group.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      
      {/* Header Container */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Cost Centers Master Data
          </h1>
          <p className="text-sm text-slate-500 mt-1">Manage and monitor organizational cost centers (KS03)</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search cost centers..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-slate-800 w-64"
            />
          </div>
          <button className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
            <Filter className="w-4 h-4" />
          </button>
          <button className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
            <Download className="w-4 h-4" />
          </button>
          <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
            Create New (KS01)
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Total Cost Centers</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">156</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
            <Building2 className="w-5 h-5" />
          </div>
        </div>
        
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Active Centers</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">142</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>

        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Locked Centers</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">14</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-600">
            <Lock className="w-5 h-5" />
          </div>
        </div>

        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Cost Center Groups</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">8</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
            <Users className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Main Grid Container */}
      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="overflow-auto flex-1">
          <table className="w-full text-left border-collapse min-w-max">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Cost Center ID</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Name</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">CC Group</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Person Responsible</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Department</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Company Code</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Valid From</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Valid To</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Status</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredData.map((cc) => (
                <tr key={cc.id} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer group">
                  <td className="px-6 py-3">
                    <span className="font-mono text-sm font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded">
                      {cc.id}
                    </span>
                  </td>
                  <td className="px-6 py-3">
                    <span className="text-sm font-medium text-slate-800">{cc.name}</span>
                  </td>
                  <td className="px-6 py-3">
                    <span className="text-sm text-slate-600">{cc.group}</span>
                  </td>
                  <td className="px-6 py-3">
                    <span className="text-sm text-slate-600">{cc.person}</span>
                  </td>
                  <td className="px-6 py-3">
                    <span className="text-sm text-slate-600">{cc.dept}</span>
                  </td>
                  <td className="px-6 py-3">
                    <span className="text-sm text-slate-600">{cc.companyCode}</span>
                  </td>
                  <td className="px-6 py-3">
                    <span className="text-sm text-slate-500">{cc.validFrom}</span>
                  </td>
                  <td className="px-6 py-3">
                    <span className="text-sm text-slate-500">{cc.validTo}</span>
                  </td>
                  <td className="px-6 py-3">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      cc.status === 'Active' 
                        ? 'bg-emerald-100 text-emerald-700' 
                        : 'bg-rose-100 text-rose-700'
                    }`}>
                      {cc.status}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-right">
                    <button className="text-slate-400 hover:text-slate-600 p-1 rounded-md hover:bg-slate-100 opacity-0 group-hover:opacity-100 transition-all">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
              
              {filteredData.length === 0 && (
                <tr>
                  <td colSpan={10} className="px-6 py-12 text-center text-slate-500 text-sm">
                    No cost centers found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-3 flex items-center justify-between text-xs text-slate-500">
          <div>
            Showing <span className="font-medium text-slate-800">{filteredData.length}</span> entries
          </div>
          <div className="flex gap-4">
            <button className="hover:text-slate-800 transition-colors">Previous</button>
            <button className="hover:text-slate-800 transition-colors">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
