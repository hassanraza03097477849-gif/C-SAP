"use client";

import React from "react";
import Link from "next/link";
import {
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  Truck,
  Droplets,
  Banknote,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  FileText,
  Activity,
  ShieldCheck,
  CreditCard,
  Wifi,
  BarChart3,
} from "lucide-react";

// Mock Data
const kpiData = [
  { title: "Active Tankers", value: "342", trend: "+12", trendUp: true, icon: Truck },
  { title: "Daily Fuel Movement (L)", value: "2.4M", trend: "+5.2%", trendUp: true, icon: Droplets },
  { title: "Pending Settlements", value: "$1.2M", trend: "-2.1%", trendUp: false, icon: Banknote },
  { title: "Revenue (MTD)", value: "$45.8M", trend: "+15.3%", trendUp: true, icon: TrendingUp },
  { title: "Quality Alerts", value: "3", trend: "-2", trendUp: false, icon: AlertTriangle },
  { title: "Completed Deliveries", value: "1,204", trend: "+45", trendUp: true, icon: CheckCircle },
];

const fleetStatusData = [
  { name: "In Transit", value: 180, color: "#10b981" }, // Emerald 500
  { name: "Loading", value: 85, color: "#3b82f6" },    // Blue 500
  { name: "Unloading", value: 50, color: "#f59e0b" },  // Amber 500
  { name: "Maintenance", value: 27, color: "#ef4444" }, // Red 500
];

const fuelMovementData = [
  { day: "Mon", petrol: 400000, diesel: 240000 },
  { day: "Tue", petrol: 300000, diesel: 139800 },
  { day: "Wed", petrol: 200000, diesel: 980000 },
  { day: "Thu", petrol: 278000, diesel: 390800 },
  { day: "Fri", petrol: 189000, diesel: 480000 },
  { day: "Sat", petrol: 239000, diesel: 380000 },
  { day: "Sun", petrol: 349000, diesel: 430000 },
];

const commissionPayoutsData = [
  { month: "Jan", standard: 4000, bonus: 2400 },
  { month: "Feb", standard: 3000, bonus: 1398 },
  { month: "Mar", standard: 2000, bonus: 9800 },
  { month: "Apr", standard: 2780, bonus: 3908 },
  { month: "May", standard: 1890, bonus: 4800 },
  { month: "Jun", standard: 2390, bonus: 3800 },
];

const priceRevisionsData = [
  { date: "W1", petrol: 104.2, diesel: 92.4 },
  { date: "W2", petrol: 105.1, diesel: 93.1 },
  { date: "W3", petrol: 104.8, diesel: 92.8 },
  { date: "W4", petrol: 106.3, diesel: 94.2 },
];

const quickLinks = [
  { name: "Fuel Movement", href: "/omc/fuel-movement", icon: Droplets },
  { name: "Tankers", href: "/omc/tankers", icon: Truck },
  { name: "Settlements", href: "/omc/settlements", icon: FileText },
  { name: "Commissions", href: "/omc/commissions", icon: Banknote },
  { name: "Price Revisions", href: "/omc/price-revisions", icon: TrendingUp },
  { name: "Sales Mgmt", href: "/omc/sales-mgmt", icon: BarChart3 },
  { name: "Transport", href: "/omc/transport", icon: Activity },
  { name: "Quality", href: "/omc/quality", icon: ShieldCheck },
  { name: "POS Integration", href: "/omc/pos-integration", icon: Wifi },
  { name: "Wet Stock", href: "/omc/wet-stock", icon: CreditCard },
];

export default function OMCDashboard() {
  return (
    <div className="min-h-screen bg-slate-50/50 p-6 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">
              OMC Overview Dashboard
            </h1>
            <p className="text-slate-500 mt-1">Real-time insights across Oil Marketing Company operations.</p>
          </div>
        </div>

        {/* KPIs Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {kpiData.map((kpi, idx) => {
            const Icon = kpi.icon;
            return (
              <div 
                key={idx} 
                className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[2px] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="h-12 w-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${kpi.trendUp ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                    {kpi.trend}
                  </div>
                </div>
                <div>
                  <h3 className="text-slate-500 text-sm font-medium">{kpi.title}</h3>
                  <p className="text-3xl font-bold text-slate-800 mt-1">{kpi.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Daily Fuel Movement Area Chart */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[2px] transition-all duration-300">
            <h3 className="text-lg font-semibold text-slate-800 mb-6">Daily Fuel Movements (Liters)</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={fuelMovementData}>
                  <defs>
                    <linearGradient id="colorPetrol" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorDiesel" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px -4px rgba(0,0,0,0.1)' }}
                  />
                  <Legend />
                  <Area type="monotone" dataKey="petrol" stroke="#10b981" fillOpacity={1} fill="url(#colorPetrol)" />
                  <Area type="monotone" dataKey="diesel" stroke="#0ea5e9" fillOpacity={1} fill="url(#colorDiesel)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Fleet Status Pie Chart */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[2px] transition-all duration-300">
            <h3 className="text-lg font-semibold text-slate-800 mb-6">Fleet Status</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={fleetStatusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={110}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {fleetStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px -4px rgba(0,0,0,0.1)' }}
                  />
                  <Legend verticalAlign="bottom" height={36}/>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Commission Payouts Bar Chart */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[2px] transition-all duration-300">
            <h3 className="text-lg font-semibold text-slate-800 mb-6">Commission Payouts (Thousands PKR)</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={commissionPayoutsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                  <Tooltip 
                    cursor={{fill: '#f1f5f9'}}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px -4px rgba(0,0,0,0.1)' }}
                  />
                  <Legend />
                  <Bar dataKey="standard" stackId="a" fill="#14b8a6" radius={[0, 0, 4, 4]} />
                  <Bar dataKey="bonus" stackId="a" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Price Revisions Line Chart */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[2px] transition-all duration-300">
            <h3 className="text-lg font-semibold text-slate-800 mb-6">Price Revisions Trend</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={priceRevisionsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} domain={['dataMin - 2', 'dataMax + 2']}/>
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px -4px rgba(0,0,0,0.1)' }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="petrol" stroke="#ef4444" strokeWidth={3} activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="diesel" stroke="#f59e0b" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

        {/* Quick Links Section */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
          <h2 className="text-xl font-bold text-slate-800 mb-6">Quick Links</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {quickLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <Link key={idx} href={link.href}>
                  <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-100 hover:border-emerald-200 hover:-translate-y-[2px] transition-all duration-300 text-center group cursor-pointer h-full">
                    <Icon className="h-8 w-8 text-slate-400 group-hover:text-emerald-500 mb-3 transition-colors" />
                    <span className="text-sm font-medium text-slate-600 group-hover:text-emerald-700 transition-colors">
                      {link.name}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}