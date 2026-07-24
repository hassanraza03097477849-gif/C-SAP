"use client";

import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const MOCK_AGING_AR = [
  { customer: "Reliance Petrochem", current: "₹12,00,000", d30: "₹5,50,000", d60: "₹2,10,000", d90: "₹0", d90plus: "₹1,20,000", total: "₹20,80,000" },
  { customer: "TATA Steel", current: "₹8,00,000", d30: "₹0", d60: "₹0", d90: "₹0", d90plus: "₹0", total: "₹8,00,000" },
  { customer: "L&T Infra", current: "₹0", d30: "₹4,50,000", d60: "₹3,00,000", d90: "₹1,00,000", d90plus: "₹5,00,000", total: "₹13,50,000" },
];

const MOCK_AGING_AP = [
  { vendor: "Reliance Petrochem", current: "₹8,00,000", d30: "₹4,00,000", d60: "₹0", d90: "₹50,000", d90plus: "₹0", total: "₹12,50,000" },
  { vendor: "Adani Power", current: "₹15,00,000", d30: "₹1,00,000", d60: "₹0", d90: "₹0", d90plus: "₹0", total: "₹16,00,000" },
  { vendor: "Infosys Ltd", current: "₹2,00,000", d30: "₹50,000", d60: "₹20,000", d90: "₹10,000", d90plus: "₹1,00,000", total: "₹3,80,000" },
];

export default function AgingPage() {
  return (
    <div className="flex flex-col h-screen bg-slate-50 overflow-hidden text-[10px] font-sans">
      {/* Top Header */}
      <div className="flex justify-between items-center shrink-0 z-10 p-2">
        <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] mb-6">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">SAP FI - Aging Analysis (S_ALR_87012085)</h1>
          <span className="text-slate-400 font-medium text-xs">| Reliance Petrochem</span>
        </div>
        <div className="flex gap-2 pr-2">
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:shadow-lg transition-all">Execute (F8)</Button>
          <Button variant="outline" className="border-slate-200 hover:bg-slate-50 transition-colors">Export (F9)</Button>
          <Button variant="outline" className="border-slate-200 hover:bg-slate-50 transition-colors">Exit (Shift+F3)</Button>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-2 flex flex-col gap-2">
        {/* Selection Screen */}
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[1px] hover:shadow-md transition-all duration-300 rounded-xl p-3 grid grid-cols-6 gap-3">
           <div className="col-span-6 font-bold text-[#1f2937] border-b border-[#9ca3af] pb-1 mb-1">Selection Criteria</div>
           
           <div className="flex flex-col gap-0.5 col-span-1">
             <Label className="text-[9px] font-bold text-[#4b5563]">Customer/Vendor</Label>
             <Input defaultValue="Reliance Petrochem" className="h-5 text-[9px] px-1 bg-white border-[#9ca3af] rounded-sm" />
           </div>
           <div className="flex flex-col gap-0.5 col-span-1">
             <Label className="text-[9px] font-bold text-[#4b5563]">Company Code</Label>
             <Input defaultValue="RELI" className="h-5 text-[9px] px-1 bg-white border-[#9ca3af] rounded-sm" />
           </div>
           <div className="flex flex-col gap-0.5 col-span-1">
             <Label className="text-[9px] font-bold text-[#4b5563]">Key Date</Label>
             <Input type="date" defaultValue="2026-07-22" className="h-5 text-[9px] px-1 bg-white border-[#9ca3af] rounded-sm" />
           </div>
           <div className="flex flex-col gap-0.5 col-span-3"></div>

           <div className="col-span-6 font-bold text-[#1f2937] border-b border-[#9ca3af] pb-1 mb-1 mt-2">Grid Setup (Days)</div>
           <div className="flex gap-2 col-span-6 items-center">
             <Label className="text-[9px]">Grid 1</Label><Input defaultValue="30" className="h-5 w-12 text-[9px] px-1 text-center" />
             <Label className="text-[9px]">Grid 2</Label><Input defaultValue="60" className="h-5 w-12 text-[9px] px-1 text-center" />
             <Label className="text-[9px]">Grid 3</Label><Input defaultValue="90" className="h-5 w-12 text-[9px] px-1 text-center" />
           </div>
        </div>

        {/* AR Aging Table */}
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[1px] hover:shadow-md transition-all duration-300 rounded-xl flex-1 flex flex-col min-h-[200px] overflow-hidden">
          <div className="bg-slate-50 p-2 font-bold border-b border-slate-200 text-slate-800 flex justify-between rounded-t-xl">
            <span>Accounts Receivable (Customer) Aging Analysis</span>
            <span className="text-emerald-700 bg-emerald-100 px-2 rounded-full border border-emerald-200 shadow-sm">Total AR: ₹42,30,000</span>
          </div>
          <div className="flex-1 overflow-auto p-1">
            <Table className="[&_td]:p-1.5 [&_th]:p-1.5">
              <TableHeader className="bg-slate-100 sticky top-0 shadow-[0_1px_0_0_#e2e8f0]">
                <TableRow className="even:bg-slate-50/50 hover:bg-slate-50 hover:-translate-y-[1px] transition-all cursor-pointer">
                  <TableHead className="bg-slate-100/50 font-semibold text-slate-700">Customer</TableHead>
                  <TableHead className="bg-slate-100/50 font-semibold text-slate-700 text-right">Current</TableHead>
                  <TableHead className="bg-slate-100/50 font-semibold text-slate-700 text-right">0-30 Days</TableHead>
                  <TableHead className="bg-slate-100/50 font-semibold text-slate-700 text-right">31-60 Days</TableHead>
                  <TableHead className="bg-slate-100/50 font-semibold text-slate-700 text-right">61-90 Days</TableHead>
                  <TableHead className="bg-slate-100/50 font-semibold text-slate-700 text-right">90+ Days</TableHead>
                  <TableHead className="bg-slate-100/50 font-semibold text-slate-700 text-right">Total Balance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {MOCK_AGING_AR.map((row, idx) => (
                  <TableRow key={idx} className="even:bg-slate-50/50 hover:bg-slate-50 hover:-translate-y-[1px] transition-all cursor-pointer">
                    <TableCell className="border-r border-slate-200 font-medium text-slate-700">{row.customer}</TableCell>
                    <TableCell className="border-r border-slate-200 text-right font-mono text-slate-600">{row.current}</TableCell>
                    <TableCell className={`border-r border-slate-200 text-right font-mono ${row.d30 !== '₹0' ? 'text-emerald-700 bg-emerald-50' : 'text-slate-400'}`}>{row.d30}</TableCell>
                    <TableCell className={`border-r border-slate-200 text-right font-mono ${row.d60 !== '₹0' ? 'text-amber-600 bg-amber-50' : 'text-slate-400'}`}>{row.d60}</TableCell>
                    <TableCell className={`border-r border-slate-200 text-right font-mono ${row.d90 !== '₹0' ? 'text-orange-600 bg-orange-50' : 'text-slate-400'}`}>{row.d90}</TableCell>
                    <TableCell className={`border-r border-slate-200 text-right font-mono font-bold ${row.d90plus !== '₹0' ? 'text-rose-700 bg-rose-100 shadow-[inset_0_0_8px_rgba(225,29,72,0.2)]' : 'text-slate-400'}`}>{row.d90plus}</TableCell>
                    <TableCell className="text-right font-mono font-bold text-slate-800">{row.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* AP Aging Table */}
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[1px] hover:shadow-md transition-all duration-300 rounded-xl flex-1 flex flex-col min-h-[200px] overflow-hidden">
          <div className="bg-slate-50 p-2 font-bold border-b border-slate-200 text-slate-800 flex justify-between rounded-t-xl">
            <span>Accounts Payable (Vendor) Aging Analysis</span>
            <span className="text-rose-700 bg-rose-100 px-2 rounded-full border border-rose-200 shadow-sm">Total AP: ₹32,30,000</span>
          </div>
          <div className="flex-1 overflow-auto p-1">
            <Table className="[&_td]:p-1.5 [&_th]:p-1.5">
              <TableHeader className="bg-slate-100 sticky top-0 shadow-[0_1px_0_0_#e2e8f0]">
                <TableRow className="even:bg-slate-50/50 hover:bg-slate-50 hover:-translate-y-[1px] transition-all cursor-pointer">
                  <TableHead className="bg-slate-100/50 font-semibold text-slate-700">Vendor</TableHead>
                  <TableHead className="bg-slate-100/50 font-semibold text-slate-700 text-right">Current</TableHead>
                  <TableHead className="bg-slate-100/50 font-semibold text-slate-700 text-right">0-30 Days</TableHead>
                  <TableHead className="bg-slate-100/50 font-semibold text-slate-700 text-right">31-60 Days</TableHead>
                  <TableHead className="bg-slate-100/50 font-semibold text-slate-700 text-right">61-90 Days</TableHead>
                  <TableHead className="bg-slate-100/50 font-semibold text-slate-700 text-right">90+ Days</TableHead>
                  <TableHead className="bg-slate-100/50 font-semibold text-slate-700 text-right">Total Balance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {MOCK_AGING_AP.map((row, idx) => (
                  <TableRow key={idx} className="even:bg-slate-50/50 hover:bg-slate-50 hover:-translate-y-[1px] transition-all cursor-pointer">
                    <TableCell className="border-r border-slate-200 font-medium text-slate-700">{row.vendor}</TableCell>
                    <TableCell className="border-r border-slate-200 text-right font-mono text-slate-600">{row.current}</TableCell>
                    <TableCell className={`border-r border-slate-200 text-right font-mono ${row.d30 !== '₹0' ? 'text-emerald-700 bg-emerald-50' : 'text-slate-400'}`}>{row.d30}</TableCell>
                    <TableCell className={`border-r border-slate-200 text-right font-mono ${row.d60 !== '₹0' ? 'text-amber-600 bg-amber-50' : 'text-slate-400'}`}>{row.d60}</TableCell>
                    <TableCell className={`border-r border-slate-200 text-right font-mono ${row.d90 !== '₹0' ? 'text-orange-600 bg-orange-50' : 'text-slate-400'}`}>{row.d90}</TableCell>
                    <TableCell className={`border-r border-slate-200 text-right font-mono font-bold ${row.d90plus !== '₹0' ? 'text-rose-700 bg-rose-100 shadow-[inset_0_0_8px_rgba(225,29,72,0.2)]' : 'text-slate-400'}`}>{row.d90plus}</TableCell>
                    <TableCell className="text-right font-mono font-bold text-slate-800">{row.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Bottom Status */}
      <div className="bg-[#e5e7eb] border-t border-[#9ca3af] p-1 flex justify-between items-center text-[9px] text-[#4b5563] shrink-0">
        <div className="flex gap-4">
          <span>System: PRD (1)</span>
          <span>Client: 800</span>
          <span>Program: RFDOPR10</span>
        </div>
        <div>
          <span>List contains 6 items</span>
        </div>
      </div>
    </div>
  );
}
