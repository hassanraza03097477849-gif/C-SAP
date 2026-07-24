"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ArrowDown, Network, BookOpen, Receipt, Coins, Landmark, PieChart, ShieldCheck, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FinanceProcessFlow() {
  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Finance Process Flow</h1>
        <p className="text-slate-500 mt-2 max-w-3xl">
          If you are new to the Financial Accounting (SAP FI) modules, follow this visual guide. 
          It maps out the end-to-end accounting lifecycle for Pure Petroleum, from initial configuration to final reporting. Click any node to jump directly to that module.
        </p>
      </div>

      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        
        {/* Step 1: Configuration */}
        <div className="flex flex-col items-center">
          <Link href="/finance/chart-of-accounts" className="group">
            <Card className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex flex-col w-80 relative overflow-hidden cursor-pointer">
              <div className="absolute top-0 left-0 w-1 h-full bg-slate-400 group-hover:bg-emerald-500 transition-colors" />
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="bg-slate-100 p-2 rounded-md group-hover:bg-emerald-100 transition-colors"><Network className="h-5 w-5 text-slate-600 group-hover:text-emerald-600" /></div>
                  <CardTitle className="text-lg">1. Chart of Accounts</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xs">
                  The foundation. Define GL accounts, asset classes, and expense categories before recording any transactions.
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
          <ArrowDown className="h-8 w-8 text-slate-300 my-2" />
        </div>

        {/* Step 2: Core Ledgers */}
        <div className="flex flex-col items-center">
          <Link href="/finance/general-ledger/new" className="group">
            <Card className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex flex-col w-80 relative overflow-hidden cursor-pointer">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-400 group-hover:bg-emerald-500 transition-colors" />
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="bg-slate-100 p-2 rounded-md group-hover:bg-emerald-100 transition-colors"><BookOpen className="h-5 w-5 text-slate-600 group-hover:text-emerald-600" /></div>
                  <CardTitle className="text-lg">2. General Ledger</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xs">
                  Record manual journal entries and vouchers. Every financial movement in the ERP ultimately lands here.
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
          <ArrowDown className="h-8 w-8 text-slate-300 my-2" />
        </div>

        {/* Step 3: Sub-Ledgers (Branching) */}
        <div className="flex items-start justify-center gap-8 relative w-full max-w-4xl">
          {/* Connector Line above branches */}
          <div className="absolute top-[-16px] left-1/2 w-[600px] h-8 border-t-2 border-l-2 border-r-2 border-slate-300 transform -translate-x-1/2 rounded-t-xl" />
          
          <div className="flex flex-col items-center w-64 pt-4">
            <ArrowDown className="h-6 w-6 text-slate-300 mb-2 absolute top-[-8px] left-[calc(50%-300px)] -translate-x-1/2" />
            <Link href="/finance/payables" className="group w-full">
              <Card className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex flex-col w-full relative overflow-hidden cursor-pointer">
                <div className="absolute top-0 left-0 w-1 h-full bg-red-400 group-hover:bg-emerald-500 transition-colors" />
                <CardHeader className="pb-2 px-4 pt-4">
                  <div className="flex items-center gap-2">
                    <Receipt className="h-4 w-4 text-slate-500" />
                    <CardTitle className="text-base">3A. Payables (AP)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <CardDescription className="text-xs">Supplier invoices, aging, and outward payments.</CardDescription>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="flex flex-col items-center w-64 pt-4 z-10">
            <Link href="/finance/bank-cash" className="group w-full">
              <Card className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex flex-col w-full relative overflow-hidden cursor-pointer">
                <div className="absolute top-0 left-0 w-1 h-full bg-amber-400 group-hover:bg-emerald-500 transition-colors" />
                <CardHeader className="pb-2 px-4 pt-4">
                  <div className="flex items-center gap-2">
                    <Landmark className="h-4 w-4 text-slate-500" />
                    <CardTitle className="text-base">3B. Bank & Cash</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <CardDescription className="text-xs">Cashbooks and bank reconciliation statements.</CardDescription>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="flex flex-col items-center w-64 pt-4">
            <ArrowDown className="h-6 w-6 text-slate-300 mb-2 absolute top-[-8px] right-[calc(50%-300px)] translate-x-1/2" />
            <Link href="/finance/receivables" className="group w-full">
              <Card className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex flex-col w-full relative overflow-hidden cursor-pointer">
                <div className="absolute top-0 left-0 w-1 h-full bg-green-400 group-hover:bg-emerald-500 transition-colors" />
                <CardHeader className="pb-2 px-4 pt-4">
                  <div className="flex items-center gap-2">
                    <Coins className="h-4 w-4 text-slate-500" />
                    <CardTitle className="text-base">3C. Receivables (AR)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <CardDescription className="text-xs">Customer payments, aging, and collections.</CardDescription>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* Connector Line below branches */}
        <div className="relative w-full max-w-4xl h-12 flex justify-center mt-2">
           <div className="absolute top-0 left-1/2 w-[600px] h-8 border-b-2 border-l-2 border-r-2 border-slate-300 transform -translate-x-1/2 rounded-b-xl" />
           <ArrowDown className="h-8 w-8 text-slate-300 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 bg-slate-50" />
        </div>

        {/* Step 4: Final Reporting */}
        <div className="flex flex-col items-center mt-4">
          <Link href="/finance/statements" className="group">
            <Card className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex flex-col w-96 relative overflow-hidden cursor-pointer">
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500" />
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="bg-slate-50 p-2 rounded-md"><PieChart className="h-5 w-5 text-emerald-400" /></div>
                  <CardTitle className="text-lg">4. Financial Statements</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xs text-slate-400">
                  The final output. Generate Dual P&L (Oil vs Lubes), Balance Sheets, and Depot-wise profitability reports.
                </CardDescription>
                <div className="mt-4 flex gap-2">
                  <Button size="sm" variant="secondary" className="w-full text-xs h-7">View Statements</Button>
                  <Link href="/finance/depot-accounting" className="w-full">
                     <Button size="sm" variant="outline" className="w-full text-xs h-7 bg-transparent border-slate-700 text-slate-300 hover:text-slate-800 hover:bg-slate-50">Depot P&L</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

      </div>
    </div>
  );
}