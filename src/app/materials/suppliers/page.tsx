import React from 'react';
import { 
  Building2, 
  Users, 
  Globe2, 
  ShieldAlert, 
  Search, 
  Filter, 
  Download, 
  Plus 
} from 'lucide-react';

const mockSuppliers = [
  { id: '1000001', name: 'Reliance Industries', purOrg: '1000', city: 'Mumbai', country: 'IN', payTerms: 'NT30', status: 'Active' },
  { id: '1000002', name: 'Tata Steel', purOrg: '1000', city: 'Jamshedpur', country: 'IN', payTerms: 'NT60', status: 'Active' },
  { id: '1000003', name: 'BASF SE', purOrg: '2000', city: 'Ludwigshafen', country: 'DE', payTerms: 'NT30', status: 'Active' },
  { id: '1000004', name: 'Dow Chemical', purOrg: '3000', city: 'Midland', country: 'US', payTerms: 'NT90', status: 'Active' },
  { id: '1000005', name: 'SABIC', purOrg: '1000', city: 'Riyadh', country: 'SA', payTerms: 'NT30', status: 'Active' },
  { id: '1000006', name: 'ExxonMobil', purOrg: '3000', city: 'Irving', country: 'US', payTerms: 'NT30', status: 'Blocked' },
  { id: '1000007', name: 'Ineos', purOrg: '2000', city: 'London', country: 'GB', payTerms: 'NT60', status: 'Active' },
  { id: '1000008', name: 'LyondellBasell', purOrg: '3000', city: 'Houston', country: 'US', payTerms: 'NT30', status: 'Active' },
  { id: '1000009', name: 'Mitsubishi Chemical', purOrg: '4000', city: 'Tokyo', country: 'JP', payTerms: 'NT60', status: 'Active' },
  { id: '1000010', name: 'LG Chem', purOrg: '4000', city: 'Seoul', country: 'KR', payTerms: 'NT30', status: 'Active' },
  { id: '1000011', name: 'DuPont', purOrg: '3000', city: 'Wilmington', country: 'US', payTerms: 'NT30', status: 'Active' },
  { id: '1000012', name: 'Bayer AG', purOrg: '2000', city: 'Leverkusen', country: 'DE', payTerms: 'NT60', status: 'Active' },
  { id: '1000013', name: 'Air Liquide', purOrg: '2000', city: 'Paris', country: 'FR', payTerms: 'NT30', status: 'Active' },
  { id: '1000014', name: 'AkzoNobel', purOrg: '2000', city: 'Amsterdam', country: 'NL', payTerms: 'NT90', status: 'Blocked' },
  { id: '1000015', name: 'Evonik', purOrg: '2000', city: 'Essen', country: 'DE', payTerms: 'NT30', status: 'Active' },
  { id: '1000016', name: 'Covestro', purOrg: '2000', city: 'Leverkusen', country: 'DE', payTerms: 'NT60', status: 'Active' },
  { id: '1000017', name: 'Solvay', purOrg: '2000', city: 'Brussels', country: 'BE', payTerms: 'NT30', status: 'Active' },
];

export default function SuppliersPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Vendor Master Data (MK03)
          </h1>
          <p className="text-sm text-slate-500 mt-1">Manage supplier profiles, purchasing organizations, and payment terms</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-medium transition-colors">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
            <Plus className="w-4 h-4" />
            New Vendor (XK01)
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-100/50 rounded-lg">
              <Building2 className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Total Vendors</p>
              <h3 className="text-2xl font-bold text-slate-800">1,248</h3>
            </div>
          </div>
        </div>
        
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-teal-100/50 rounded-lg">
              <Users className="w-6 h-6 text-teal-600" />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Active Suppliers</p>
              <h3 className="text-2xl font-bold text-slate-800">1,102</h3>
            </div>
          </div>
        </div>
        
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100/50 rounded-lg">
              <Globe2 className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Global Reach (Countries)</p>
              <h3 className="text-2xl font-bold text-slate-800">42</h3>
            </div>
          </div>
        </div>
        
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-rose-100/50 rounded-lg">
              <ShieldAlert className="w-6 h-6 text-rose-600" />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Blocked Accounts</p>
              <h3 className="text-2xl font-bold text-slate-800">146</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid Container */}
      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-50/50">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text"
              placeholder="Search by Vendor ID, Name, or City..."
              className="w-full pl-9 pr-4 py-2 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-slate-800"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-lg text-sm font-medium transition-colors w-full sm:w-auto justify-center">
            <Filter className="w-4 h-4" />
            Advanced Filter
          </button>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Vendor ID</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Name</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Purchasing Org</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">City</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Country</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Payment Terms</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Block Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockSuppliers.map((supplier) => (
                <tr key={supplier.id} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer group">
                  <td className="px-6 py-3">
                    <span className="font-mono text-sm font-medium text-emerald-600 group-hover:text-emerald-700 transition-colors">
                      {supplier.id}
                    </span>
                  </td>
                  <td className="px-6 py-3">
                    <span className="text-sm font-medium text-slate-800">{supplier.name}</span>
                  </td>
                  <td className="px-6 py-3">
                    <span className="text-sm text-slate-600 bg-slate-100 px-2 py-1 rounded-md font-mono">{supplier.purOrg}</span>
                  </td>
                  <td className="px-6 py-3">
                    <span className="text-sm text-slate-600">{supplier.city}</span>
                  </td>
                  <td className="px-6 py-3">
                    <span className="text-sm font-medium text-slate-700">{supplier.country}</span>
                  </td>
                  <td className="px-6 py-3">
                    <span className="text-sm text-slate-600 bg-slate-100 px-2 py-1 rounded-md">{supplier.payTerms}</span>
                  </td>
                  <td className="px-6 py-3">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                      supplier.status === 'Active' 
                        ? 'bg-emerald-100 text-emerald-700' 
                        : 'bg-rose-100 text-rose-700'
                    }`}>
                      {supplier.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-medium">Showing 1 to {mockSuppliers.length} of {mockSuppliers.length} entries</span>
          <div className="flex items-center gap-1">
            <button className="px-3 py-1 text-sm text-slate-400 cursor-not-allowed">Previous</button>
            <button className="px-3 py-1 text-sm bg-emerald-600 text-white rounded-md font-medium shadow-sm">1</button>
            <button className="px-3 py-1 text-sm text-slate-600 hover:bg-slate-200 rounded-md transition-colors">2</button>
            <button className="px-3 py-1 text-sm text-slate-600 hover:bg-slate-200 rounded-md transition-colors">3</button>
            <span className="px-2 text-slate-400">...</span>
            <button className="px-3 py-1 text-sm text-slate-600 hover:bg-slate-200 rounded-md transition-colors">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
