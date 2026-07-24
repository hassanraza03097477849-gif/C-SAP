"use client";

import React, { useState } from "react";
import { Search, Filter, Plus, FileText, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { SmartTable, Column, FormField } from '@/components/SmartTable';

export default function ClearingAgentsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const kpis = [
    { title: "Total Active Agents", value: "24", change: "+2 this month", icon: <CheckCircle className="text-emerald-500" size={24} /> },
    { title: "Total Open Dockets", value: "156", change: "-12 from last week", icon: <FileText className="text-blue-500" size={24} /> },
    { title: "Avg Clearance Time", value: "3.2 Days", change: "-0.5 days (MoM)", icon: <Clock className="text-amber-500" size={24} /> },
    { title: "Licenses Expiring", value: "3", change: "Next 30 days", icon: <AlertCircle className="text-rose-500" size={24} /> },
  ];

  const [items, setItems] = useState([
    { id: "AGT-1001", name: "Karachi Clearers Ltd.", openDockets: 12, clearedYTD: 345, avgTime: "2.8 Days", expiry: "2026-12-15", status: "Active" },
    { id: "AGT-1002", name: "Lahore Oceanic Freight", openDockets: 8, clearedYTD: 210, avgTime: "3.5 Days", expiry: "2026-10-22", status: "Active" },
    { id: "AGT-1003", name: "Swift Customs Brokers", openDockets: 24, clearedYTD: 530, avgTime: "2.1 Days", expiry: "2027-03-10", status: "Active" },
    { id: "AGT-1004", name: "Islamabad Logistics", openDockets: 0, clearedYTD: 15, avgTime: "4.2 Days", expiry: "2026-08-05", status: "Suspended" },
    { id: "AGT-1005", name: "Meridian Forwarding", openDockets: 15, clearedYTD: 280, avgTime: "3.1 Days", expiry: "2026-11-30", status: "Active" },
    { id: "AGT-1006", name: "Apex Customs Agents", openDockets: 5, clearedYTD: 145, avgTime: "2.9 Days", expiry: "2026-09-15", status: "Active" }
  ]);

  const columns: Column[] = [
    { key: "id", label: "Agent ID" },
    { key: "name", label: "Name" },
    { key: "openDockets", label: "Open Dockets" },
    { key: "clearedYTD", label: "Cleared (YTD)" },
    { key: "avgTime", label: "Avg Clearance Time" },
    { key: "expiry", label: "License Expiry" },
    { key: "status", label: "Status", format: (value) => (
      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
        value === "Active" ? "bg-emerald-100 text-emerald-700" :
        value === "Suspended" ? "bg-rose-100 text-rose-700" :
        "bg-amber-100 text-amber-700"
      }`}>
        {value}
      </span>
    ) }
  ];

  const formFields: FormField[] = [
    { key: "id", label: "Agent ID", type: "text", required: true },
    { key: "name", label: "Name", type: "text", required: true },
    { key: "openDockets", label: "Open Dockets", type: "number" },
    { key: "clearedYTD", label: "Cleared (YTD)", type: "number" },
    { key: "avgTime", label: "Avg Clearance Time", type: "text" },
    { key: "expiry", label: "License Expiry", type: "date" },
    { key: "status", label: "Status", type: "select", options: ["Active", "Suspended", "Expiring Soon"], required: true }
  ];

  const filteredAgents = items.filter(agent => 
    agent.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    agent.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      
      {/* Header Container */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Clearing Agents CRM
          </h1>
          <p className="text-slate-500 mt-1">Manage customs clearing agents and performance metrics.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text"
              placeholder="Search agents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow w-64 text-slate-800"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm hover:bg-slate-50 transition-colors">
            <Filter size={16} />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors">
            <Plus size={16} />
            New Agent
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, idx) => (
          <div key={idx} className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">{kpi.title}</p>
                <h3 className="text-2xl font-bold text-slate-800 mt-1">{kpi.value}</h3>
              </div>
              <div className="p-2 bg-slate-50 rounded-lg">
                {kpi.icon}
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-4">{kpi.change}</p>
          </div>
        ))}
      </div>

      {/* Main Grid Container */}
      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <SmartTable data={filteredAgents} columns={columns} formFields={formFields} onAdd={(newItem) => setItems([newItem, ...items])} />
      </div>

    </div>
  );
}