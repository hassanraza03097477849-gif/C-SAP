"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  arAgingData, 
  liquidityData, 
  budgetVsActualData, 
  workingCapitalData,
  depreciationForecastData,
  glBalanceDistribution
} from "@/lib/mockData";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  LineChart, Line, PieChart, Pie, Cell, Radar, RadarChart, PolarGrid, 
  PolarAngleAxis, PolarRadiusAxis, AreaChart, Area, ComposedChart
} from 'recharts';
import { Activity, CreditCard, DollarSign, FileText, Banknote, Briefcase, Calculator, Building, ShieldAlert } from "lucide-react";
import Link from "next/link";

const PIE_COLORS = ['#3b82f6', '#ef4444', '#10b981'];

export default function FinanceDashboard() {
  const currentRatio = workingCapitalData[workingCapitalData.length - 1].ratio;

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Finance Overview (FI)</h1>
          <p className="text-slate-500 mt-1 font-medium">Global Treasury, Accounting, and Asset Management</p>
        </div>
        <div className="flex items-center gap-2">
           <span className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-3 py-1 rounded-md shadow-sm font-bold uppercase text-[10px]">Company Code: 1000</span>
        </div>
      </div>

      {/* KPI Row: 6 Cards */}
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {[
          { title: "Total Assets", icon: Building, val: "Rs. 4.5M", sub: "Fixed & Current Assets" },
          { title: "Total Liabilities", icon: Briefcase, val: "Rs. 1.2M", sub: "AP & Loans" },
          { title: "Cash on Hand", icon: Banknote, val: "Rs. 900k", sub: "Operating liquidity" },
          { title: "YTD Net Profit", icon: Activity, val: "Rs. 1.8M", sub: "After taxes & OPEX" },
          { title: "Working Capital Ratio", icon: Calculator, val: currentRatio, sub: "Current Assets / Liabilities" },
          { title: "Unposted Entries", icon: ShieldAlert, val: "14", sub: "Pending GL approval" },
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
        
        {/* Row 1: Working Capital Trends & AR Aging */}
        <Card className="col-span-12 lg:col-span-7 border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-slate-800">Working Capital Trends</CardTitle>
            <CardDescription>Current Assets vs Current Liabilities over H1</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={workingCapitalData} margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis yAxisId="left" axisLine={false} tickLine={false} tickFormatter={(val) => `Rs${val}k`} tick={{fill: '#64748b'}} />
                <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} domain={[0, 3]} tick={{fill: '#64748b'}} />
                <Tooltip cursor={{ fill: '#f1f5f9' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Legend />
                <Bar yAxisId="left" dataKey="currentAssets" name="Current Assets" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                <Bar yAxisId="left" dataKey="currentLiabilities" name="Current Liabs" fill="#ef4444" radius={[4, 4, 0, 0]} />
                <Line yAxisId="right" type="monotone" dataKey="ratio" name="Current Ratio" stroke="#10b981" strokeWidth={3} dot={{r: 4}} />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="col-span-12 lg:col-span-5 border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-slate-800">AR Aging Analysis</CardTitle>
            <CardDescription>Accounts Receivable by Overdue Buckets</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
             <ResponsiveContainer width="100%" height="100%">
              <BarChart layout="vertical" data={arAgingData} margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                <XAxis type="number" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} tickFormatter={(val) => `Rs${val/1000}k`} />
                <YAxis dataKey="customer" type="category" axisLine={false} tickLine={false} tick={{fill: '#334155', fontSize: 11}} width={80} />
                <Tooltip cursor={{ fill: '#f1f5f9' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Legend />
                <Bar dataKey="0-30" name="0-30 Days" stackId="a" fill="#10b981" />
                <Bar dataKey="31-60" name="31-60 Days" stackId="a" fill="#f59e0b" />
                <Bar dataKey="61-90" name="61-90 Days" stackId="a" fill="#f97316" />
                <Bar dataKey="90+" name="90+ Days" stackId="a" fill="#ef4444" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Row 2: Liquidity Dynamics & GL Balance */}
        <Card className="col-span-12 lg:col-span-7 border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-slate-800">Liquidity Dynamics (Cash Flows)</CardTitle>
            <CardDescription>Operating, Investing, and Financing Cash Flows</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={liquidityData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorOp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorInv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorFin" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Area type="monotone" dataKey="operating" name="Operating Cash" stroke="#10b981" fillOpacity={1} fill="url(#colorOp)" />
                <Area type="monotone" dataKey="investing" name="Investing Cash" stroke="#ef4444" fillOpacity={1} fill="url(#colorInv)" />
                <Area type="monotone" dataKey="financing" name="Financing Cash" stroke="#3b82f6" fillOpacity={1} fill="url(#colorFin)" />
                <Legend />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="col-span-12 lg:col-span-5 border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-slate-800">GL Balance Distribution</CardTitle>
            <CardDescription>Accounting Equation Breakdown</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={glBalanceDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={3}
                  dataKey="value"
                  stroke="none"
                >
                  {glBalanceDistribution.map((entry, index) => (
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
            <CardTitle className="text-slate-800">Budget vs Actuals</CardTitle>
            <CardDescription>Variance analysis by Cost Center</CardDescription>
          </CardHeader>
          <CardContent className="h-[280px]">
             <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={budgetVsActualData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="department" tick={{ fill: '#475569', fontSize: 11 }} />
                <PolarRadiusAxis angle={30} domain={[0, 150]} tick={{ fill: '#94a3b8', fontSize: 10 }} />
                <Radar name="Budget (Plan)" dataKey="budget" stroke="#94a3b8" fill="#94a3b8" fillOpacity={0.2} />
                <Radar name="Actual Spend" dataKey="actual" stroke="#ef4444" fill="#ef4444" fillOpacity={0.5} />
                <Legend />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="col-span-12 lg:col-span-6 border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-slate-800">Depreciation Forecast</CardTitle>
            <CardDescription>Projected fixed asset depreciation expense</CardDescription>
          </CardHeader>
          <CardContent className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={depreciationForecastData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Legend />
                <Line type="monotone" dataKey="machinery" name="Machinery" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3 }} />
                <Line type="monotone" dataKey="buildings" name="Buildings" stroke="#10b981" strokeWidth={2} dot={{ r: 3 }} />
                <Line type="monotone" dataKey="vehicles" name="Vehicles" stroke="#f59e0b" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

      </div>

      {/* Quick Links Row */}
      <h2 className="text-xl font-bold tracking-tight text-slate-800 mt-4">Finance Sub-Modules</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { href: "/finance/chart-of-accounts", title: "Chart of Accounts", icon: FileText, desc: "GL hierarchies & groups" },
          { href: "/finance/receivables", title: "Accounts Receivable", icon: DollarSign, desc: "Customer invoices & aging" },
          { href: "/finance/payables", title: "Accounts Payable", icon: CreditCard, desc: "Supplier bills & clearing" },
          { href: "/finance/bank-cash", title: "Bank & Cashbook", icon: Activity, desc: "Liquidity & daily receipts" },
          { href: "/finance/assets", title: "Asset Accounting", icon: Building, desc: "Fixed assets & depreciation" },
          { href: "/finance/tax", title: "Tax Configuration", icon: Calculator, desc: "Jurisdictions & rates" },
          { href: "/finance/statements", title: "Financial Statements", icon: Briefcase, desc: "P&L and Balance Sheet" },
          { href: "/finance/audit", title: "Security Audit Log", icon: ShieldAlert, desc: "Immutable financial controls" },
        ].map((link, idx) => (
          <Link key={idx} href={link.href}>
            <Card className="hover:bg-emerald-50/50 hover:border-emerald-200 transition-all cursor-pointer h-full border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.05)] bg-white/80 backdrop-blur-md group">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-semibold text-slate-700 group-hover:text-emerald-700 transition-colors">{link.title}</CardTitle>
                <link.icon className="h-4 w-4 text-emerald-500/70 group-hover:text-emerald-600 transition-colors" />
              </CardHeader>
              <CardContent>
                <p className="text-xs text-slate-500">{link.desc}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

    </div>
  );
}
