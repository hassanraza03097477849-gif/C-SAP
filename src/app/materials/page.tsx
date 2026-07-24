"use client";

import React from "react";
import Link from "next/link";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  Box,
  Truck,
  FileText,
  ClipboardList,
  ArrowRightLeft,
  AlertTriangle,
  DollarSign,
  CheckSquare,
  TrendingUp,
  Package,
  Activity
} from "lucide-react";

// --- Mock Data ---
const valuationData = [
  { month: "Jan", value: 450000 },
  { month: "Feb", value: 480000 },
  { month: "Mar", value: 460000 },
  { month: "Apr", value: 510000 },
  { month: "May", value: 530000 },
  { month: "Jun", value: 580000 },
];

const supplierData = [
  { name: "GlobalTech", spend: 120000 },
  { name: "Nexus Ind.", spend: 95000 },
  { name: "Apex Supply", spend: 85000 },
  { name: "Quantum Ltd", spend: 65000 },
  { name: "Zenith Corp", spend: 50000 },
];

const reqData = [
  { week: "W1", open: 45, fulfilled: 30 },
  { week: "W2", open: 55, fulfilled: 40 },
  { week: "W3", open: 35, fulfilled: 50 },
  { week: "W4", open: 60, fulfilled: 45 },
];

const warehouseData = [
  { name: "Central", value: 45 },
  { name: "North", value: 25 },
  { name: "South", value: 20 },
  { name: "East", value: 10 },
];

const COLORS = ["#059669", "#10b981", "#34d399", "#6ee7b7"];

const kpis = [
  { title: "Total Inventory Value", value: "$4.2M", trend: "+5.2%", icon: DollarSign },
  { title: "Open Requisitions", value: "142", trend: "-12", icon: FileText },
  { title: "Pending Receipts", value: "38", trend: "+4", icon: ClipboardList },
  { title: "Active Suppliers", value: "85", trend: "+2", icon: Truck },
  { title: "Low Stock Alerts", value: "14", trend: "-3", icon: AlertTriangle },
  { title: "Turnover Ratio", value: "4.8", trend: "+0.4", icon: TrendingUp },
];

const quickLinks = [
  { name: "Inventory Management", path: "/materials/inventory", icon: Box },
  { name: "Suppliers", path: "/materials/suppliers", icon: Truck },
  { name: "Requisitions", path: "/materials/requisitions", icon: FileText },
  { name: "Goods Receipts", path: "/materials/receipts", icon: ClipboardList },
  { name: "Stock Transfers", path: "/materials/transfers", icon: ArrowRightLeft },
  { name: "Reorder Planning", path: "/materials/reorder", icon: Package },
  { name: "Valuation", path: "/materials/valuation", icon: DollarSign },
  { name: "Invoice Verification", path: "/materials/verification", icon: CheckSquare },
];

export default function MaterialsDashboard() {
  return (
    <div className="bg-slate-50/50 p-6 min-h-screen space-y-8 font-sans text-slate-800">
      
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
            Materials (SAP MM)
          </h1>
          <p className="text-slate-500 mt-1">Overview & Analytics</p>
        </div>
      </div>

      {/* KPIs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {kpis.map((kpi, idx) => (
          <div 
            key={idx} 
            className="bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl p-5 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[2px] transition-all duration-300 group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-emerald-50 rounded-lg group-hover:bg-emerald-100 transition-colors">
                <kpi.icon className="w-5 h-5 text-emerald-600" />
              </div>
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${kpi.trend.startsWith('+') ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                {kpi.trend}
              </span>
            </div>
            <h3 className="text-slate-500 text-sm font-medium">{kpi.title}</h3>
            <p className="text-2xl font-bold text-slate-800 mt-1">{kpi.value}</p>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Chart 1: Valuation Trend */}
        <div className="bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[2px] transition-all duration-300">
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <Activity className="w-5 h-5 text-emerald-500" />
            Inventory Valuation Trend
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={valuationData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} dx={-10} tickFormatter={(val) => `$${val/1000}k`} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                  itemStyle={{ color: '#059669' }}
                />
                <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={3} dot={{ r: 4, fill: '#10b981', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Top Suppliers */}
        <div className="bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[2px] transition-all duration-300">
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <Truck className="w-5 h-5 text-emerald-500" />
            Top Suppliers by Spend
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={supplierData} layout="vertical" margin={{ top: 5, right: 20, bottom: 5, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                <XAxis type="number" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} tickFormatter={(val) => `$${val/1000}k`} />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: '#475569', fontWeight: 500 }} width={80} />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                />
                <Bar dataKey="spend" fill="#34d399" radius={[0, 4, 4, 0]} barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 3: Purchase Requisitions */}
        <div className="bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[2px] transition-all duration-300">
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-500" />
            Purchase Requisitions
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={reqData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <defs>
                  <linearGradient id="colorOpen" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorFulfilled" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} dx={-10} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                <Area type="monotone" dataKey="open" name="Open PRs" stroke="#10b981" fillOpacity={1} fill="url(#colorOpen)" strokeWidth={2} />
                <Area type="monotone" dataKey="fulfilled" name="Fulfilled PRs" stroke="#0ea5e9" fillOpacity={1} fill="url(#colorFulfilled)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 4: Warehouse Distribution */}
        <div className="bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[2px] transition-all duration-300">
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <Box className="w-5 h-5 text-emerald-500" />
            Stock Distribution by Warehouse
          </h3>
          <div className="h-[300px] w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={warehouseData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={110}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {warehouseData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                />
                <Legend iconType="circle" verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* Quick Links */}
      <div>
        <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          Quick Links
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickLinks.map((link, idx) => (
            <Link 
              key={idx} 
              href={link.path}
              className="group bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl p-4 flex items-center gap-3 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[2px] transition-all duration-300"
            >
              <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-emerald-50 transition-colors">
                <link.icon className="w-5 h-5 text-slate-500 group-hover:text-emerald-600 transition-colors" />
              </div>
              <span className="font-medium text-slate-700 group-hover:text-emerald-700 transition-colors">
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}