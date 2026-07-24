"use client";

import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend,
  LineChart, Line,
  PieChart, Pie, Cell,
  ComposedChart,
} from 'recharts';
import Link from 'next/link';
import { 
  TrendingUp, Users, ShoppingCart, Truck, CreditCard, 
  RotateCcw, FileText, Activity, DollarSign, Package
} from 'lucide-react';

const mockDispatchVolume = [
  { name: 'Jan', volume: 4000 },
  { name: 'Feb', volume: 3000 },
  { name: 'Mar', volume: 2000 },
  { name: 'Apr', volume: 2780 },
  { name: 'May', volume: 1890 },
  { name: 'Jun', volume: 2390 },
  { name: 'Jul', volume: 3490 },
];

const mockSalesByProduct = [
  { name: 'Polymer', value: 400 },
  { name: 'Elastomer', value: 300 },
  { name: 'Polyester', value: 300 },
  { name: 'Aromatics', value: 200 },
];

const COLORS = ['#10b981', '#14b8a6', '#0ea5e9', '#6366f1'];

const mockOrderToCash = [
  { name: 'Week 1', orders: 4000, cash: 2400, cycleTime: 24 },
  { name: 'Week 2', orders: 3000, cash: 1398, cycleTime: 22 },
  { name: 'Week 3', orders: 2000, cash: 9800, cycleTime: 29 },
  { name: 'Week 4', orders: 2780, cash: 3908, cycleTime: 20 },
  { name: 'Week 5', orders: 1890, cash: 4800, cycleTime: 21 },
];

const mockRegionalSales = [
  { name: 'North', sales: 4000 },
  { name: 'South', sales: 3000 },
  { name: 'East', sales: 2000 },
  { name: 'West', sales: 2780 },
];

export default function SalesDashboard() {
  const kpis = [
    { title: "Total Revenue", value: "₹45.2B", change: "+12.5%", icon: DollarSign },
    { title: "Active Orders", value: "1,234", change: "+5.2%", icon: ShoppingCart },
    { title: "Avg. Cycle Time", value: "22 Days", change: "-2.1%", icon: Activity },
    { title: "Dispatches Today", value: "89", change: "+15.0%", icon: Truck },
    { title: "Total Customers", value: "4,521", change: "+3.4%", icon: Users },
    { title: "Credit Utilization", value: "68%", change: "-1.5%", icon: CreditCard },
  ];

  const quickLinks = [
    { name: "Customers", path: "/sales/customers", icon: Users },
    { name: "Pricing", path: "/sales/pricing", icon: DollarSign },
    { name: "Delivery", path: "/sales/delivery", icon: Truck },
    { name: "Invoices", path: "/sales/invoices", icon: FileText },
    { name: "Credit", path: "/sales/credit", icon: CreditCard },
    { name: "Returns", path: "/sales/returns", icon: RotateCcw },
    { name: "Dealer Statements", path: "/sales/dealer-statements", icon: FileText },
    { name: "Dispatches", path: "/sales/dispatches", icon: Truck },
    { name: "Orders", path: "/sales/orders", icon: ShoppingCart },
  ];

  return (
    <div className="bg-slate-50/50 p-6 min-h-screen space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Sales & Distribution (SD) Overview
          </h1>
          <p className="text-slate-500 mt-1">Comprehensive tracking of sales, deliveries, and billing</p>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {kpis.map((kpi, i) => (
          <div 
            key={i}
            className="bg-white/80 backdrop-blur-md rounded-xl p-6 border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[2px] transition-all duration-300"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-slate-500">{kpi.title}</p>
                <h3 className="text-2xl font-bold text-slate-800 mt-2">{kpi.value}</h3>
              </div>
              <div className="p-3 bg-emerald-50 rounded-lg">
                <kpi.icon className="w-5 h-5 text-emerald-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className={`font-medium ${kpi.change.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'}`}>
                {kpi.change}
              </span>
              <span className="text-slate-400 ml-2">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Dispatch Volume */}
        <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[2px] transition-all duration-300">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Dispatch Volume Trend</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockDispatchVolume}>
                <defs>
                  <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="volume" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorVolume)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Order to Cash */}
        <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[2px] transition-all duration-300">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Order to Cash Cycle</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={mockOrderToCash}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend />
                <Bar yAxisId="left" dataKey="orders" fill="#14b8a6" radius={[4, 4, 0, 0]} />
                <Bar yAxisId="left" dataKey="cash" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
                <Line yAxisId="right" type="monotone" dataKey="cycleTime" stroke="#6366f1" strokeWidth={3} dot={{r: 4, fill: '#6366f1'}} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sales by Product */}
        <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[2px] transition-all duration-300">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Revenue by Product Category</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={mockSalesByProduct}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={110}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {mockSalesByProduct.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Regional Sales */}
        <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[2px] transition-all duration-300">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Regional Sales Distribution</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockRegionalSales} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                <XAxis type="number" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  cursor={{fill: 'rgba(241, 245, 249, 0.5)'}}
                />
                <Bar dataKey="sales" fill="#10b981" radius={[0, 4, 4, 0]} barSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <h3 className="text-lg font-semibold text-slate-800 mb-6">Quick Links</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {quickLinks.map((link, i) => (
            <Link 
              key={i} 
              href={link.path}
              className="flex items-center space-x-3 p-4 rounded-xl border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/50 hover:-translate-y-[2px] transition-all duration-300 group"
            >
              <div className="p-2 bg-slate-50 group-hover:bg-emerald-100 rounded-lg transition-colors">
                <link.icon className="w-5 h-5 text-slate-500 group-hover:text-emerald-600" />
              </div>
              <span className="font-medium text-slate-700 group-hover:text-emerald-700">{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
