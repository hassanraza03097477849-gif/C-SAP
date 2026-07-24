"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Ship, FileCheck2, Calculator, Anchor, FileText, FileClock, Landmark, 
  TrendingUp, TrendingDown, DollarSign, Package, Clock, Globe
} from "lucide-react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell,
  ScatterChart, Scatter, ZAxis,
  LineChart, Line, AreaChart, Area,
  ComposedChart
} from "recharts";

// Hardcoded Mock Data
const kpiData = [
  { title: "Total Import Volume", value: "2.4M MT", icon: Package, trend: "+12.5%", positive: true },
  { title: "Avg Landed Cost", value: "$485/MT", icon: DollarSign, trend: "-3.2%", positive: true },
  { title: "Active Shipments", value: "34", icon: Ship, trend: "+4", positive: true },
  { title: "Avg Transit Time", value: "28 Days", icon: Clock, trend: "+2 Days", positive: false },
  { title: "Total LC Value", value: "$145M", icon: FileClock, trend: "+18%", positive: true },
  { title: "Customs Cleared", value: "92%", icon: Landmark, trend: "+5%", positive: true },
];

const volumeByPortData = [
  { port: "Mundra", volume: 450000, value: 218 },
  { port: "Kandla", volume: 380000, value: 184 },
  { port: "JNPT", volume: 290000, value: 140 },
  { port: "Chennai", volume: 150000, value: 72 },
  { port: "Vizag", volume: 210000, value: 101 },
  { port: "Ennore", volume: 120000, value: 58 },
];

const landedCostBreakdown = [
  { name: "FOB Price", value: 65, color: "#10b981" },
  { name: "Ocean Freight", value: 15, color: "#14b8a6" },
  { name: "Customs Duty", value: 12, color: "#0ea5e9" },
  { name: "Insurance", value: 3, color: "#6366f1" },
  { name: "Port Charges", value: 5, color: "#8b5cf6" },
];

const transitTimesData = [
  { route: "Middle East -> West Coast", distance: 1200, time: 14, cost: 45 },
  { route: "US Gulf -> West Coast", distance: 8500, time: 35, cost: 85 },
  { route: "Russia -> East Coast", distance: 5400, time: 26, cost: 65 },
  { route: "West Africa -> West Coast", distance: 6200, time: 28, cost: 70 },
  { route: "SE Asia -> East Coast", distance: 2800, time: 18, cost: 55 },
  { route: "Europe -> West Coast", distance: 4800, time: 24, cost: 60 },
];

const importTrendData = [
  { month: "Jan", volume: 180, cost: 450 },
  { month: "Feb", volume: 210, cost: 460 },
  { month: "Mar", volume: 195, cost: 480 },
  { month: "Apr", volume: 240, cost: 475 },
  { month: "May", volume: 280, cost: 490 },
  { month: "Jun", volume: 260, cost: 510 },
  { month: "Jul", volume: 310, cost: 485 },
];

const clearingAgentPerformance = [
  { name: "Global Logistics", time: 4.2, cost: 120, volume: 45 },
  { name: "Swift Clear", time: 3.5, cost: 145, volume: 38 },
  { name: "Port Masters", time: 5.1, cost: 110, volume: 25 },
  { name: "Apex Cargo", time: 4.8, cost: 115, volume: 32 },
  { name: "Coastal Forwarders", time: 3.9, cost: 135, volume: 40 },
];

const importModules = [
  { title: "Import Orders", description: "Purchase orders and contracts", icon: FileText, href: "/imports/orders" },
  { title: "LC Tracking", description: "Letter of Credit timelines", icon: FileClock, href: "/imports/lc-tracking" },
  { title: "Invoices", description: "Proforma and commercial invoices", icon: FileCheck2, href: "/imports/invoices" },
  { title: "Shipments", description: "Container and vessel tracking", icon: Ship, href: "/imports/shipments" },
  { title: "Clearing Agents", description: "Customs clearing agent CRM", icon: Anchor, href: "/imports/clearing" },
  { title: "Customs & Duties", description: "Port, terminal, and freight charges", icon: Landmark, href: "/imports/customs" },
  { title: "Landed Cost", description: "Real-time cost calculation engine", icon: Calculator, href: "/imports/landed-cost" },
];

export default function ImportsDashboard() {
  return (
    <div className="bg-slate-50/50 p-6 min-h-screen space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
          Import Analytics Dashboard
        </h1>
        <p className="text-slate-500 mt-1">Comprehensive overview of procurement, shipping, and landed costs.</p>
      </div>

      {/* KPIs */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {kpiData.map((kpi, index) => (
          <Card key={index} className="bg-white/80 backdrop-blur-md border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[2px] transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-500">{kpi.title}</CardTitle>
              <kpi.icon className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-800">{kpi.value}</div>
              <div className={`flex items-center text-xs mt-1 font-medium ${kpi.positive ? 'text-emerald-600' : 'text-rose-600'}`}>
                {kpi.positive ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                {kpi.trend} from last month
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Massive Multi-row Chart Grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        
        {/* Chart 1: Volume by Port (Bar) */}
        <Card className="col-span-1 xl:col-span-2 bg-white/80 backdrop-blur-md border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[2px] transition-all duration-300">
          <CardHeader>
            <CardTitle>Import Volume by Port (MT)</CardTitle>
            <CardDescription>Major discharge ports and corresponding volumes</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={volumeByPortData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="port" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} tickFormatter={(value) => `${value / 1000}k`} />
                <Tooltip cursor={{ fill: '#f1f5f9' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Legend />
                <Bar dataKey="volume" name="Volume (MT)" fill="#10b981" radius={[4, 4, 0, 0]} />
                <Bar dataKey="value" name="Value ($M)" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Chart 2: Landed Cost Breakdown (Pie) */}
        <Card className="col-span-1 bg-white/80 backdrop-blur-md border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[2px] transition-all duration-300">
          <CardHeader>
            <CardTitle>Landed Cost Composition</CardTitle>
            <CardDescription>Average percentage breakdown of total landed cost</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={landedCostBreakdown}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {landedCostBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Legend layout="vertical" verticalAlign="middle" align="right" />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Chart 3: Import Volume & Avg Cost Trend (Composed) */}
        <Card className="col-span-1 xl:col-span-2 bg-white/80 backdrop-blur-md border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[2px] transition-all duration-300">
          <CardHeader>
            <CardTitle>Volume vs Landed Cost Trend</CardTitle>
            <CardDescription>Monthly import volumes against average landed cost</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={importTrendData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" scale="band" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Legend />
                <Bar yAxisId="left" dataKey="volume" name="Volume ('000 MT)" barSize={40} fill="#14b8a6" radius={[4, 4, 0, 0]} />
                <Line yAxisId="right" type="monotone" dataKey="cost" name="Avg Cost ($/MT)" stroke="#6366f1" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Chart 4: Transit Routes & Times (Scatter) */}
        <Card className="col-span-1 bg-white/80 backdrop-blur-md border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[2px] transition-all duration-300">
          <CardHeader>
            <CardTitle>Transit Route Analysis</CardTitle>
            <CardDescription>Distance vs Transit Time (bubble size = freight cost)</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis type="number" dataKey="distance" name="Distance (nm)" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                <YAxis type="number" dataKey="time" name="Time (days)" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                <ZAxis type="number" dataKey="cost" range={[60, 400]} name="Freight Cost" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Legend />
                <Scatter name="Routes" data={transitTimesData} fill="#0ea5e9" fillOpacity={0.7} />
              </ScatterChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Chart 5: Clearing Agent Performance (Area) */}
        <Card className="col-span-1 xl:col-span-3 bg-white/80 backdrop-blur-md border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[2px] transition-all duration-300">
          <CardHeader>
            <CardTitle>Clearing Agent Performance Overview</CardTitle>
            <CardDescription>Comparing clearance time, costs, and volumes handled</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={clearingAgentPerformance} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorTime" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Legend />
                <Area type="monotone" dataKey="time" name="Avg Clearance Time (Days)" stroke="#10b981" fillOpacity={1} fill="url(#colorTime)" />
                <Area type="monotone" dataKey="cost" name="Avg Cost Index" stroke="#6366f1" fillOpacity={1} fill="url(#colorCost)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

      </div>

      {/* Quick Links */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Quick Links & Modules</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {importModules.map((module) => (
            <Link key={module.title} href={module.href}>
              <Card className="h-full bg-white/80 backdrop-blur-md border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[2px] transition-all duration-300 group cursor-pointer">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                  <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-3 rounded-lg group-hover:from-emerald-200 group-hover:to-teal-200 transition-colors">
                    <module.icon className="h-6 w-6 text-emerald-700" />
                  </div>
                  <div>
                    <CardTitle className="text-base text-slate-800 group-hover:text-emerald-700 transition-colors">{module.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-500">{module.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      
    </div>
  );
}
