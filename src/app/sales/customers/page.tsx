"use client";

import React, { useState } from "react";
import {
  Users,
  Building,
  DollarSign,
  AlertTriangle,
  Search,
  Filter,
  Download,
  Plus,
  ShieldCheck,
  ShieldAlert,
  MoreHorizontal
} from "lucide-react";

// Mock Data
const MOCK_CUSTOMERS = [
  { id: "100001", name: "Reliance Industries Ltd", salesOrg: "1000", distChannel: "10", division: "00", creditLimit: "₹500,000,000", blockStatus: "Active" },
  { id: "100002", name: "Tata Consultancy Services", salesOrg: "1000", distChannel: "10", division: "00", creditLimit: "₹250,000,000", blockStatus: "Active" },
  { id: "100003", name: "Larsen & Toubro", salesOrg: "2000", distChannel: "20", division: "01", creditLimit: "₹100,000,000", blockStatus: "Active" },
  { id: "100004", name: "Infosys Technologies", salesOrg: "1000", distChannel: "10", division: "00", creditLimit: "₹150,000,000", blockStatus: "Blocked" },
  { id: "100005", name: "HDFC Bank", salesOrg: "3000", distChannel: "30", division: "02", creditLimit: "₹1,000,000,000", blockStatus: "Active" },
  { id: "100006", name: "State Bank of India", salesOrg: "3000", distChannel: "30", division: "02", creditLimit: "₹2,000,000,000", blockStatus: "Active" },
  { id: "100007", name: "Maruti Suzuki India", salesOrg: "2000", distChannel: "20", division: "01", creditLimit: "₹300,000,000", blockStatus: "Credit Hold" },
  { id: "100008", name: "Sun Pharmaceuticals", salesOrg: "4000", distChannel: "40", division: "03", creditLimit: "₹80,000,000", blockStatus: "Active" },
  { id: "100009", name: "ITC Limited", salesOrg: "1000", distChannel: "10", division: "00", creditLimit: "₹450,000,000", blockStatus: "Active" },
  { id: "100010", name: "Bajaj Finance", salesOrg: "3000", distChannel: "30", division: "02", creditLimit: "₹600,000,000", blockStatus: "Active" },
  { id: "100011", name: "Mahindra & Mahindra", salesOrg: "2000", distChannel: "20", division: "01", creditLimit: "₹220,000,000", blockStatus: "Blocked" },
  { id: "100012", name: "Wipro Limited", salesOrg: "1000", distChannel: "10", division: "00", creditLimit: "₹120,000,000", blockStatus: "Active" },
  { id: "100013", name: "Asian Paints", salesOrg: "4000", distChannel: "40", division: "03", creditLimit: "₹90,000,000", blockStatus: "Active" },
  { id: "100014", name: "Nestle India", salesOrg: "4000", distChannel: "40", division: "03", creditLimit: "₹110,000,000", blockStatus: "Active" },
  { id: "100015", name: "Hindustan Unilever", salesOrg: "4000", distChannel: "40", division: "03", creditLimit: "₹350,000,000", blockStatus: "Credit Hold" },
];

export default function CustomersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCustomers = MOCK_CUSTOMERS.filter((customer) =>
    Object.values(customer).some((val) =>
      val.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      
      {/* Header Container */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Customer Master Data (VD03/XD03)
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Manage central customer records and credit lines across sales organizations.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search customers..."
              className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 w-64 transition-all text-slate-800"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="p-2 border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors bg-white">
            <Filter className="h-4 w-4" />
          </button>
          <button className="p-2 border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors bg-white">
            <Download className="h-4 w-4" />
          </button>
          <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm shadow-emerald-600/20">
            <Plus className="h-4 w-4" />
            New Customer
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 shrink-0">
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-slate-500">Total Customers</h3>
            <div className="p-2 bg-emerald-100/50 rounded-lg">
              <Users className="h-4 w-4 text-emerald-600" />
            </div>
          </div>
          <p className="text-2xl font-semibold text-slate-800">1,248</p>
          <p className="text-xs text-emerald-600 font-medium mt-2 flex items-center gap-1">
            +12 this month
          </p>
        </div>

        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-slate-500">Active Sales Orgs</h3>
            <div className="p-2 bg-teal-100/50 rounded-lg">
              <Building className="h-4 w-4 text-teal-600" />
            </div>
          </div>
          <p className="text-2xl font-semibold text-slate-800">4</p>
          <p className="text-xs text-slate-500 font-medium mt-2">
            Across 3 regions
          </p>
        </div>

        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-slate-500">Credit Holds</h3>
            <div className="p-2 bg-amber-100/50 rounded-lg">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
            </div>
          </div>
          <p className="text-2xl font-semibold text-slate-800">18</p>
          <p className="text-xs text-amber-600 font-medium mt-2 flex items-center gap-1">
            Requires attention
          </p>
        </div>

        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-slate-500">Total Credit Limit</h3>
            <div className="p-2 bg-blue-100/50 rounded-lg">
              <DollarSign className="h-4 w-4 text-blue-600" />
            </div>
          </div>
          <p className="text-2xl font-semibold text-slate-800">₹8.4B</p>
          <p className="text-xs text-slate-500 font-medium mt-2">
            Sanctioned limits
          </p>
        </div>
      </div>

      {/* Main Grid Container */}
      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="overflow-auto flex-1 custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Customer ID</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Customer Name</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Sales Org</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Dist. Channel</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Division</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Credit Limit</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Block Status</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredCustomers.length > 0 ? (
                filteredCustomers.map((customer) => (
                  <tr key={customer.id} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer">
                    <td className="px-6 py-3">
                      <span className="font-mono text-xs font-medium text-slate-700 bg-slate-100 px-2 py-1 rounded">
                        {customer.id}
                      </span>
                    </td>
                    <td className="px-6 py-3">
                      <div className="font-medium text-sm text-slate-800">{customer.name}</div>
                    </td>
                    <td className="px-6 py-3">
                      <span className="text-sm text-slate-600">{customer.salesOrg}</span>
                    </td>
                    <td className="px-6 py-3">
                      <span className="text-sm text-slate-600">{customer.distChannel}</span>
                    </td>
                    <td className="px-6 py-3">
                      <span className="text-sm text-slate-600">{customer.division}</span>
                    </td>
                    <td className="px-6 py-3 text-right">
                      <span className="text-sm font-medium text-slate-700">{customer.creditLimit}</span>
                    </td>
                    <td className="px-6 py-3">
                      <div className="flex items-center gap-1.5">
                        {customer.blockStatus === "Active" && (
                          <>
                            <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                            <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/50">
                              Active
                            </span>
                          </>
                        )}
                        {customer.blockStatus === "Blocked" && (
                          <>
                            <ShieldAlert className="h-3.5 w-3.5 text-red-500" />
                            <span className="text-xs font-medium text-red-700 bg-red-50 px-2 py-0.5 rounded-full border border-red-200/50">
                              Blocked
                            </span>
                          </>
                        )}
                        {customer.blockStatus === "Credit Hold" && (
                          <>
                            <AlertTriangle className="h-3.5 w-3.5 text-amber-500" />
                            <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/50">
                              Credit Hold
                            </span>
                          </>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-3 text-center">
                      <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded transition-colors">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="px-6 py-12 text-center text-slate-500 text-sm">
                    No customers found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination / Footer */}
        <div className="bg-slate-50/80 border-t border-slate-200 p-4 flex items-center justify-between text-sm text-slate-500">
          <div>
            Showing <span className="font-medium text-slate-700">{filteredCustomers.length}</span> results
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 border border-slate-200 bg-white rounded hover:bg-slate-50 transition-colors disabled:opacity-50" disabled>
              Previous
            </button>
            <button className="px-3 py-1 border border-slate-200 bg-white rounded hover:bg-slate-50 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
