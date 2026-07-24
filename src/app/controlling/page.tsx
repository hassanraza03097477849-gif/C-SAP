"use client";

import React from "react";
import Link from "next/link";
import {
  PieChart,
  Pie,
  Cell,
  ComposedChart,
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart
} from "recharts";
import { 
  Briefcase, 
  TrendingDown, 
  TrendingUp, 
  Target, 
  Activity, 
  AlertCircle,
  ChevronRight,
  PieChart as PieChartIcon,
  BarChart2,
  Map,
  Layers,
  Settings,
  DollarSign
} from "lucide-react";

// Mock Data
const kpiData = [
  { title: "Total Budget", value: "$12.4M", trend: "+4.5%", icon: Target, isPositive: true },
  { title: "Actual Expenses", value: "$9.8M", trend: "-1.2%", icon: TrendingDown, isPositive: true },
  { title: "Variance", value: "$2.6M", trend: "+12.1%", icon: Activity, isPositive: true },
  { title: "Active Cost Centers", value: "142", trend: "0%", icon: Briefcase, isPositive: true },
  { title: "Profit Margin", value: "24.5%", trend: "+2.3%", icon: TrendingUp, isPositive: true },
  { title: "Unallocated Costs", value: "$450K", trend: "-5.4%", icon: AlertCircle, isPositive: false },
];

const costCenterAllocation = [
  { name: "Operations", value: 45 },
  { name: "R&D", value: 25 },
  { name: "Sales & Marketing", value: 20 },
  { name: "HR & Admin", value: 10 },
];
const COLORS = ["#10b981", "#14b8a6", "#0f766e", "#047857"];

const budgetVsActuals = [
  { segment: "North", budget: 4000, actual: 3200 },
  { segment: "South", budget: 3000, actual: 2800 },
  { segment: "East", budget: 2000, actual: 2100 },
  { segment: "West", budget: 2780, actual: 2600 },
];

const profitabilityByDepot = [
  { depot: "DP-001", revenue: 4500, cost: 3100 },
  { depot: "DP-002", revenue: 3200, cost: 2100 },
  { depot: "DP-003", revenue: 5800, cost: 4200 },
  { depot: "DP-004", revenue: 4100, cost: 2900 },
  { depot: "DP-005", revenue: 3900, cost: 3100 },
];

const varianceTrend = [
  { month: "Jan", variance: 400 },
  { month: "Feb", variance: 300 },
  { month: "Mar", variance: 550 },
  { month: "Apr", variance: 450 },
  { month: "May", variance: 700 },
  { month: "Jun", variance: 650 },
];

const cumulativeExpenses = [
  { month: "Jan", expenses: 1200 },
  { month: "Feb", expenses: 2500 },
  { month: "Mar", expenses: 3900 },
  { month: "Apr", expenses: 5400 },
  { month: "May", expenses: 7100 },
  { month: "Jun", expenses: 9800 },
];

const quickLinks = [
  { name: "Cost Centers", path: "/controlling/cost-centers", icon: Briefcase, desc: "Manage operational cost centers" },
  { name: "Budgets", path: "/controlling/budgets", icon: Target, desc: "Allocate and review budgets" },
  { name: "Expense Allocation", path: "/controlling/expense-allocation", icon: DollarSign, desc: "Track cross-department expenses" },
  { name: "Profitability", path: "/controlling/profitability", icon: TrendingUp, desc: "Analyze margins and profit" },
  { name: "Segments", path: "/controlling/segments", icon: Map, desc: "Regional segment performance" },
  { name: "Variance", path: "/controlling/variance", icon: Activity, desc: "Budget vs Actual deviations" },
];

export default function ControllingDashboard() {
  return (
    <div className="min-h-screen bg-slate-50/50 p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Controlling (CO) Overview
          </h1>
          <p className="text-slate-500 mt-1">Management accounting, reporting, and cost control metrics.</p>
        </div>
        <button className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all">
          Generate CO Report
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {kpiData.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[2px] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                  <Icon size={20} />
                </div>
                <span className={`text-sm font-medium ${kpi.isPositive ? 'text-emerald-600' : 'text-red-500'}`}>
                  {kpi.trend}
                </span>
              </div>
              <h3 className="text-slate-500 text-sm font-medium mb-1">{kpi.title}</h3>
              <p className="text-2xl font-bold text-slate-800">{kpi.value}</p>
            </div>
          );
        })}
      </div>

      {/* Charts Grid - Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Budget vs Actuals */}
        <div className="bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[2px] transition-all duration-300">
          <h2 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
            <BarChart2 className="w-5 h-5 mr-2 text-emerald-500" />
            Budget vs Actuals by Segment
          </h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={budgetVsActuals}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="segment" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Legend />
                <Bar dataKey="budget" name="Budget" fill="#10b981" radius={[4, 4, 0, 0]} />
                <Line type="monotone" dataKey="actual" name="Actual" stroke="#0f766e" strokeWidth={3} dot={{ r: 4 }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Cost Center Allocation */}
        <div className="bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[2px] transition-all duration-300">
          <h2 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
            <PieChartIcon className="w-5 h-5 mr-2 text-emerald-500" />
            Cost Center Allocation
          </h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={costCenterAllocation}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {costCenterAllocation.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Charts Grid - Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profitability by Depot */}
        <div className="lg:col-span-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[2px] transition-all duration-300">
          <h2 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
            <Layers className="w-5 h-5 mr-2 text-emerald-500" />
            Profitability by Depot
          </h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={profitabilityByDepot}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="depot" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Legend />
                <Bar dataKey="revenue" name="Revenue" fill="#14b8a6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="cost" name="Cost" fill="#99f6e4" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Cumulative Expenses */}
        <div className="lg:col-span-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[2px] transition-all duration-300">
          <h2 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-emerald-500" />
            Cumulative Expenses
          </h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={cumulativeExpenses}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Area type="monotone" dataKey="expenses" stroke="#10b981" fill="#10b981" fillOpacity={0.2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Variance Trend */}
        <div className="lg:col-span-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[2px] transition-all duration-300">
          <h2 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
            <Activity className="w-5 h-5 mr-2 text-emerald-500" />
            Variance Trend
          </h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={varianceTrend}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Line type="monotone" dataKey="variance" stroke="#0f766e" strokeWidth={3} dot={{ r: 4, fill: '#0f766e' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="pt-6">
        <h2 className="text-xl font-bold text-slate-800 mb-6">Quick Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickLinks.map((link, idx) => {
            const Icon = link.icon;
            return (
              <Link key={idx} href={link.path}>
                <div className="group bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl p-5 flex items-center justify-between shadow-sm hover:shadow-[0_4px_20px_-4px_rgba(52,211,153,0.15)] hover:border-emerald-200 transition-all cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-slate-50 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                      <Icon className="w-5 h-5 text-slate-500 group-hover:text-emerald-600 transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 group-hover:text-emerald-700 transition-colors">{link.name}</h3>
                      <p className="text-sm text-slate-500">{link.desc}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-emerald-500 transition-colors" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
