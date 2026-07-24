"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  companyData, 
  petrolPumps, 
  profitAndLossData, 
  tankInventory,
  regionalSalesData,
  cashflowData,
  depotEfficiencyData,
  tankCapacityData,
  salesPipelineData,
  importsData
} from "@/lib/mockData";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  LineChart, Line, PieChart, Pie, Cell, Radar, RadarChart, PolarGrid, 
  PolarAngleAxis, PolarRadiusAxis, AreaChart, Area, ScatterChart, Scatter, ZAxis, ComposedChart
} from 'recharts';
import { Building2, Droplet, Fuel, Users, Filter, Anchor, TrendingUp } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6'];
const PIE_COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

export default function WelcomeDashboard() {
  const [selectedDepot, setSelectedDepot] = useState("All");

  const totalRevenueOil = profitAndLossData.reduce((acc, curr) => acc + curr.oilRevenue, 0);
  const totalRevenueLube = profitAndLossData.reduce((acc, curr) => acc + curr.lubeRevenue, 0);
  const netMargin = ((totalRevenueOil + totalRevenueLube) * 0.15); // Mock 15% margin

  const filteredTanks = selectedDepot === "All" ? tankInventory : tankInventory.filter(t => t.depot === selectedDepot);
  const filteredPumps = selectedDepot === "All" ? petrolPumps : petrolPumps.filter(p => p.depot === selectedDepot);

  const totalCapacity = filteredTanks.reduce((acc, curr) => acc + curr.capacity, 0);
  const currentStock = filteredTanks.reduce((acc, curr) => acc + curr.currentLevel, 0);
  const stockPercentage = totalCapacity ? Math.round((currentStock / totalCapacity) * 100) : 0;
  const activeLcs = importsData.filter(i => i.status !== 'Cleared').length;

  const expenseData = [
    { name: 'Transport & Freight', value: 450000 },
    { name: 'Depot Operations', value: 300000 },
    { name: 'Marketing', value: 150000 },
    { name: 'Salaries', value: 600000 },
    { name: 'Maintenance', value: 200000 },
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Enterprise Overview</h1>
          <p className="text-slate-500 mt-1 font-medium">{companyData.name} (Global Operations Control)</p>
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-emerald-600" />
          <Select value={selectedDepot} onValueChange={setSelectedDepot}>
            <SelectTrigger className="w-[200px] border-slate-200 hover:border-emerald-400 transition-colors bg-white focus:ring-emerald-500/20">
              <SelectValue placeholder="Global View" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">Global View</SelectItem>
              {companyData.depots.map(depot => (
                <SelectItem key={depot} value={depot}>{depot}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* KPI Row: 6 Cards */}
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {[
          { title: selectedDepot === "All" ? "Total Depots" : "Selected Depot", icon: Building2, val: selectedDepot === "All" ? companyData.depots.length : 1, sub: "Active regional hubs" },
          { title: "Retail Pumps", icon: Fuel, val: filteredPumps.length, sub: "Across the network" },
          { title: "YTD Revenue", icon: Droplet, val: `Rs. ${(totalRevenueOil / 1000000).toFixed(1)}M`, sub: "+12% from last year" },
          { title: "Net Margin (Est.)", icon: TrendingUp, val: `Rs. ${(netMargin / 1000000).toFixed(1)}M`, sub: "15% avg margin" },
          { title: "Tank Utilization", icon: Users, val: `${stockPercentage}%`, sub: "Current capacity usage" },
          { title: "Active LCs", icon: Anchor, val: activeLcs, sub: "In-transit or opened" },
        ].map((kpi, idx) => (
          <Card key={idx} className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs font-semibold text-slate-600 uppercase tracking-wider">{kpi.title}</CardTitle>
              <kpi.icon className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-800">{kpi.val}</div>
              <p className="text-[10px] text-slate-500 mt-1">{kpi.sub}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Massive Dashboard Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12">
        
        {/* Row 1: Dual Segment Revenue & Regional Radar */}
        <Card className="col-span-12 lg:col-span-8 border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-slate-800">Dual Segment Revenue (H1 2026)</CardTitle>
            <CardDescription>Comparing Pure Petroleum Oil vs Lubricants Revenue</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={profitAndLossData} margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis axisLine={false} tickLine={false} tickFormatter={(val) => `Rs${val / 1000000}M`} tick={{fill: '#64748b'}} />
                <Tooltip cursor={{ fill: '#f1f5f9' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Legend />
                <Bar dataKey="oilRevenue" name="Oil Revenue" fill="#0f172a" radius={[4, 4, 0, 0]} />
                <Bar dataKey="lubeRevenue" name="Lube Revenue" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="col-span-12 lg:col-span-4 border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-slate-800">Regional Performance Map</CardTitle>
            <CardDescription>Sales footprint across major territories</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
             <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={regionalSalesData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="region" tick={{ fill: '#475569', fontSize: 11 }} />
                <PolarRadiusAxis angle={30} domain={[0, 150]} tick={{ fill: '#94a3b8', fontSize: 10 }} />
                <Radar name="Oil Index" dataKey="oil" stroke="#0f172a" fill="#0f172a" fillOpacity={0.4} />
                <Radar name="Lubes Index" dataKey="lubes" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                <Legend />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Row 2: Cash Flow Area & OPEX Pie */}
        <Card className="col-span-12 lg:col-span-7 border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-slate-800">Monthly Cash Flow Tracking</CardTitle>
            <CardDescription>Inflow vs Outflow dynamics</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={cashflowData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorIn" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorOut" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Area type="monotone" dataKey="in" name="Cash In" stroke="#10b981" fillOpacity={1} fill="url(#colorIn)" />
                <Area type="monotone" dataKey="out" name="Cash Out" stroke="#ef4444" fillOpacity={1} fill="url(#colorOut)" />
                <Legend />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="col-span-12 lg:col-span-5 border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-slate-800">Operating Expenses Breakdown</CardTitle>
            <CardDescription>Distribution of major OPEX categories</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expenseData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={3}
                  dataKey="value"
                  stroke="none"
                >
                  {expenseData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `Rs. ${value.toLocaleString()}`} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Row 3: Margins Line & Depot Efficiency Scatter */}
        <Card className="col-span-12 lg:col-span-6 border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-slate-800">Margin & Cost Trends</CardTitle>
            <CardDescription>Direct costs by segment over time</CardDescription>
          </CardHeader>
          <CardContent className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={profitAndLossData} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis axisLine={false} tickLine={false} tickFormatter={(val) => `Rs${val / 1000}k`} tick={{fill: '#64748b'}} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Legend />
                <Line type="monotone" dataKey="oilCost" name="Oil Cost" stroke="#0f172a" strokeWidth={3} dot={{ r: 4, fill: '#0f172a' }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="lubeCost" name="Lube Cost" stroke="#10b981" strokeWidth={3} dot={{ r: 4, fill: '#10b981' }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="col-span-12 lg:col-span-6 border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-slate-800">Depot Efficiency Matrix</CardTitle>
            <CardDescription>Volume Throughput vs Operations Cost</CardDescription>
          </CardHeader>
          <CardContent className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 10, right: 30, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis type="number" dataKey="volume" name="Throughput" unit=" kL" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis type="number" dataKey="cost" name="Cost" unit=" k" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <ZAxis type="number" dataKey="rating" range={[100, 500]} name="Efficiency Rating" />
                <Tooltip cursor={{strokeDasharray: '3 3'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Scatter name="Depots" data={depotEfficiencyData} fill="#f59e0b" fillOpacity={0.7} />
              </ScatterChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Row 4: Pipeline Composed & Tank Stacked Bar */}
        <Card className="col-span-12 lg:col-span-6 border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-slate-800">Sales Fulfillment Funnel</CardTitle>
            <CardDescription>Order progression and conversion tracking</CardDescription>
          </CardHeader>
          <CardContent className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart layout="vertical" data={salesPipelineData} margin={{ top: 10, right: 20, bottom: 0, left: 20 }}>
                <CartesianGrid stroke="#e2e8f0" horizontal={false} strokeDasharray="3 3" />
                <XAxis type="number" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#334155', fontWeight: 500}} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Legend />
                <Bar dataKey="count" name="Volume" barSize={20} fill="#3b82f6" radius={[0, 4, 4, 0]} />
                <Line dataKey="conversion" name="Conv Rate %" stroke="#f59e0b" strokeWidth={3} dot={{r:4}} />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="col-span-12 lg:col-span-6 border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-slate-800">Depot Tank Capacity Utilization</CardTitle>
            <CardDescription>Allocated stock vs available headroom</CardDescription>
          </CardHeader>
          <CardContent className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={tankCapacityData} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Legend />
                <Bar dataKey="used" name="Utilized Capacity" stackId="a" fill="#10b981" radius={[0, 0, 4, 4]} />
                <Bar dataKey="free" name="Available Headroom" stackId="a" fill="#e2e8f0" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
