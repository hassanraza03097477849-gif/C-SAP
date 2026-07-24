"use client";

import React, { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { SmartTable, Column, FormField } from '@/components/SmartTable';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const MOCK_AGING_AR = [
  { customer: "PSO", current: "PKR 12,00,000", d30: "PKR 5,50,000", d60: "PKR 2,10,000", d90: "PKR 0", d90plus: "PKR 1,20,000", total: "PKR 20,80,000" },
  { customer: "Packages Mall", current: "PKR 8,00,000", d30: "PKR 0", d60: "PKR 0", d90: "PKR 0", d90plus: "PKR 0", total: "PKR 8,00,000" },
  { customer: "Nishat Mills", current: "PKR 0", d30: "PKR 4,50,000", d60: "PKR 3,00,000", d90: "PKR 1,00,000", d90plus: "PKR 5,00,000", total: "PKR 13,50,000" },
];

const MOCK_AGING_AP = [
  { vendor: "PSO", current: "PKR 8,00,000", d30: "PKR 4,00,000", d60: "PKR 0", d90: "PKR 50,000", d90plus: "PKR 0", total: "PKR 12,50,000" },
  { vendor: "LESCO", current: "PKR 15,00,000", d30: "PKR 1,00,000", d60: "PKR 0", d90: "PKR 0", d90plus: "PKR 0", total: "PKR 16,00,000" },
  { vendor: "Systems Ltd", current: "PKR 2,00,000", d30: "PKR 50,000", d60: "PKR 20,000", d90: "PKR 10,000", d90plus: "PKR 1,00,000", total: "PKR 3,80,000" },
];

export default function AgingPage() {
  const [items, setItems] = useState(MOCK_AGING_AR);
  const [apItems, setApItems] = useState(MOCK_AGING_AP);

  const columnsAR: Column[] = [
    { key: 'customer', title: 'Customer' },
    { key: 'current', title: 'Current' },
    { key: 'd30', title: '0-30 Days' },
    { key: 'd60', title: '31-60 Days' },
    { key: 'd90', title: '61-90 Days' },
    { key: 'd90plus', title: '90+ Days' },
    { key: 'total', title: 'Total Balance' }
  ];

  const columnsAP: Column[] = [
    { key: 'vendor', title: 'Vendor' },
    { key: 'current', title: 'Current' },
    { key: 'd30', title: '0-30 Days' },
    { key: 'd60', title: '31-60 Days' },
    { key: 'd90', title: '61-90 Days' },
    { key: 'd90plus', title: '90+ Days' },
    { key: 'total', title: 'Total Balance' }
  ];

  const formFieldsAR: FormField[] = [
    { name: 'customer', label: 'Customer', type: 'text', required: true },
    { name: 'current', label: 'Current', type: 'text', required: true },
    { name: 'd30', label: '0-30 Days', type: 'text', required: true },
    { name: 'd60', label: '31-60 Days', type: 'text', required: true },
    { name: 'd90', label: '61-90 Days', type: 'text', required: true },
    { name: 'd90plus', label: '90+ Days', type: 'text', required: true },
    { name: 'total', label: 'Total Balance', type: 'text', required: true }
  ];

  const formFieldsAP: FormField[] = [
    { name: 'vendor', label: 'Vendor', type: 'text', required: true },
    { name: 'current', label: 'Current', type: 'text', required: true },
    { name: 'd30', label: '0-30 Days', type: 'text', required: true },
    { name: 'd60', label: '31-60 Days', type: 'text', required: true },
    { name: 'd90', label: '61-90 Days', type: 'text', required: true },
    { name: 'd90plus', label: '90+ Days', type: 'text', required: true },
    { name: 'total', label: 'Total Balance', type: 'text', required: true }
  ];

  return (
    <div className="flex flex-col h-screen bg-slate-50 overflow-hidden text-[10px] font-sans">
      {/* Top Header */}
      <div className="flex justify-between items-center shrink-0 z-10 p-2">
        <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] mb-6">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">SAP FI - Aging Analysis (S_ALR_87012085)</h1>
          <span className="text-slate-400 font-medium text-xs">| Pure Petroleum</span>
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
             <Input defaultValue="Pure Petroleum" className="h-5 text-[9px] px-1 bg-white border-[#9ca3af] rounded-sm" />
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
            <span className="text-emerald-700 bg-emerald-100 px-2 rounded-full border border-emerald-200 shadow-sm">Total AR: PKR 42,30,000</span>
          </div>
          <div className="flex-1 overflow-auto p-1">
            <SmartTable data={items} columns={columnsAR} formFields={formFieldsAR} onAdd={(newItem) => setItems([newItem, ...items])} />
          </div>
        </div>

        {/* AP Aging Table */}
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[1px] hover:shadow-md transition-all duration-300 rounded-xl flex-1 flex flex-col min-h-[200px] overflow-hidden">
          <div className="bg-slate-50 p-2 font-bold border-b border-slate-200 text-slate-800 flex justify-between rounded-t-xl">
            <span>Accounts Payable (Vendor) Aging Analysis</span>
            <span className="text-rose-700 bg-rose-100 px-2 rounded-full border border-rose-200 shadow-sm">Total AP: PKR 32,30,000</span>
          </div>
          <div className="flex-1 overflow-auto p-1">
            <SmartTable data={apItems} columns={columnsAP} formFields={formFieldsAP} onAdd={(newItem) => setApItems([newItem, ...apItems])} />
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