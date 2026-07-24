"use client";

'use client';
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Save, FileText, Printer, HelpCircle, Check, X } from 'lucide-react';

const JournalVoucher = () => {
  const [lines, setLines] = useState([
    { pk: '40', acct: '110010', desc: 'Depot Tanks - Sahiwal', amt: '500000.00', cc: '1000', order: 'SAH-01' },
    { pk: '50', acct: '210000', desc: 'Bank & Cash', amt: '500000.00', cc: '1000', order: '' },
    { pk: '', acct: '', desc: '', amt: '', cc: '', order: '' },
    { pk: '', acct: '', desc: '', amt: '', cc: '', order: '' },
    { pk: '', acct: '', desc: '', amt: '', cc: '', order: '' },
    { pk: '', acct: '', desc: '', amt: '', cc: '', order: '' },
    { pk: '', acct: '', desc: '', amt: '', cc: '', order: '' },
  ]);

  return (
    <div className="h-screen w-full bg-[#E5E9EC] flex flex-col font-mono text-[10px] text-[#333] overflow-hidden">
      {/* Menu Bar */}
      <div className="bg-white/80 backdrop-blur-md border-b border-[#B8C5D0] p-1 flex items-center shadow-sm z-30">
        <div className="flex space-x-2 px-1">
          <span className="cursor-pointer hover:bg-slate-300 px-1">Document</span>
          <span className="cursor-pointer hover:bg-slate-300 px-1">Edit</span>
          <span className="cursor-pointer hover:bg-slate-300 px-1">Goto</span>
          <span className="cursor-pointer hover:bg-slate-300 px-1">Extras</span>
          <span className="cursor-pointer hover:bg-slate-300 px-1">Settings</span>
          <span className="cursor-pointer hover:bg-slate-300 px-1">Environment</span>
          <span className="cursor-pointer hover:bg-slate-300 px-1">System</span>
          <span className="cursor-pointer hover:bg-slate-300 px-1">Help</span>
        </div>
      </div>
      
      {/* Toolbar */}
      <div className="bg-white/80 backdrop-blur-md border-b border-[#B8C5D0] p-1 flex items-center justify-between z-20">
        <div className="flex space-x-1 items-center">
          <Button variant="ghost" size="sm" className="h-6 w-6 p-1 hover:bg-[#D4DDE4]"><Save className="w-4 h-4 text-blue-800" /></Button>
          <div className="w-px h-4 bg-slate-300 mx-1"></div>
          <Button variant="ghost" size="sm" className="h-6 w-6 p-1 hover:bg-[#D4DDE4]"><FileText className="w-4 h-4 text-blue-800" /></Button>
          <Button variant="ghost" size="sm" className="h-6 w-6 p-1 hover:bg-[#D4DDE4]"><Printer className="w-4 h-4 text-slate-600" /></Button>
        </div>
        <div className="flex space-x-1 items-center">
          <Input className="h-5 text-[10px] w-48 bg-white border-[#B8C5D0] rounded-none px-1" placeholder="Command" />
          <Button variant="ghost" size="sm" className="h-6 w-6 p-1 hover:bg-[#D4DDE4]"><HelpCircle className="w-4 h-4 text-blue-800" /></Button>
        </div>
      </div>

      {/* Header Info */}
      <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] mb-6">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Enter G/L Account Document: Header Data</h1>
      </div>

      <div className="flex-1 overflow-auto p-1">
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[1px] hover:shadow-md transition-all duration-300 mb-1">
          <Tabs defaultValue="header" className="w-full">
            <TabsList className="h-6 bg-white/80 backdrop-blur-md border-b border-[#B8C5D0] w-full justify-start rounded-none p-0">
              <TabsTrigger value="header" className="h-6 text-[10px] rounded-none data-[state=active]:bg-[#F7F9FA] data-[state=active]:border-t-2 data-[state=active]:border-t-blue-500 data-[state=active]:border-b-0 border-r border-l border-transparent px-4">Header Data</TabsTrigger>
              <TabsTrigger value="details" className="h-6 text-[10px] rounded-none data-[state=active]:bg-[#F7F9FA] data-[state=active]:border-t-2 data-[state=active]:border-t-blue-500 data-[state=active]:border-b-0 border-r border-l border-transparent px-4">Details</TabsTrigger>
            </TabsList>
            <TabsContent value="header" className="p-2 m-0 h-32">
              <div className="grid grid-cols-6 gap-x-2 gap-y-1">
                {/* Col 1 */}
                <label className="col-span-1 flex items-center justify-end pr-1">Document Date</label>
                <div className="col-span-1"><Input className="h-5 text-[10px] bg-white border-[#B8C5D0] rounded-none px-1 w-full" defaultValue="22.07.2026" /></div>
                
                <label className="col-span-1 flex items-center justify-end pr-1">Company Code</label>
                <div className="col-span-1"><Input className="h-5 text-[10px] bg-white border-[#B8C5D0] rounded-none px-1 w-full" defaultValue="1000" /></div>

                <label className="col-span-1 flex items-center justify-end pr-1">Currency/Rate</label>
                <div className="col-span-1 flex space-x-1">
                  <Input className="h-5 text-[10px] bg-white border-[#B8C5D0] rounded-none px-1 w-12" defaultValue="PKR" />
                  <Input className="h-5 text-[10px] bg-white border-[#B8C5D0] rounded-none px-1 flex-1" />
                </div>

                {/* Col 2 */}
                <label className="col-span-1 flex items-center justify-end pr-1">Posting Date</label>
                <div className="col-span-1"><Input className="h-5 text-[10px] bg-white border-[#B8C5D0] rounded-none px-1 w-full" defaultValue="22.07.2026" /></div>

                <label className="col-span-1 flex items-center justify-end pr-1">Period</label>
                <div className="col-span-1"><Input className="h-5 text-[10px] bg-white border-[#B8C5D0] rounded-none px-1 w-full" defaultValue="07" /></div>

                <label className="col-span-1 flex items-center justify-end pr-1">Translation dte</label>
                <div className="col-span-1"><Input className="h-5 text-[10px] bg-white border-[#B8C5D0] rounded-none px-1 w-full" defaultValue="22.07.2026" /></div>

                {/* Col 3 */}
                <label className="col-span-1 flex items-center justify-end pr-1">Document Type</label>
                <div className="col-span-1"><Input className="h-5 text-[10px] bg-white border-[#B8C5D0] rounded-none px-1 w-full" defaultValue="SA" /></div>

                <label className="col-span-1 flex items-center justify-end pr-1">Cross-CC no.</label>
                <div className="col-span-1"><Input className="h-5 text-[10px] bg-white border-[#B8C5D0] rounded-none px-1 w-full" /></div>

                <label className="col-span-1 flex items-center justify-end pr-1">Trading Part.</label>
                <div className="col-span-1"><Input className="h-5 text-[10px] bg-white border-[#B8C5D0] rounded-none px-1 w-full" /></div>

                {/* Ref & Header Text */}
                <label className="col-span-1 flex items-center justify-end pr-1 mt-2">Reference</label>
                <div className="col-span-2 mt-2"><Input className="h-5 text-[10px] bg-white border-[#B8C5D0] rounded-none px-1 w-full" defaultValue="INV-99238" /></div>
                
                <label className="col-span-1 flex items-center justify-end pr-1 mt-2">Doc.Header Text</label>
                <div className="col-span-2 mt-2"><Input className="h-5 text-[10px] bg-white border-[#B8C5D0] rounded-none px-1 w-full" defaultValue="Monthly Sahiwal Transfer" /></div>
              </div>
            </TabsContent>
            <TabsContent value="details" className="p-2 m-0 h-32 flex items-center justify-center text-slate-400">
              Additional Details Form Not Implemented
            </TabsContent>
          </Tabs>
        </div>

        {/* Line Items Grid */}
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[1px] hover:shadow-md transition-all duration-300">
          <div className="bg-[#D4DDE4] p-1 border-b border-[#B8C5D0] flex space-x-1 items-center font-bold">
            <span>Items (Bal: <span className="text-green-700">0.00</span>)</span>
            <Check className="w-3 h-3 text-green-700 ml-2" />
          </div>
          <Table className="w-full text-left border-collapse whitespace-nowrap">
            <TableHeader className="bg-white/80 backdrop-blur-md border-b border-[#B8C5D0]">
              <TableRow className="even:bg-slate-50/50 hover:bg-slate-50 hover:-translate-y-[1px] transition-all cursor-pointer">
                <TableHead className="bg-slate-100/50 font-semibold text-slate-700">Itm</TableHead>
                <TableHead className="bg-slate-100/50 font-semibold text-slate-700">PK</TableHead>
                <TableHead className="bg-slate-100/50 font-semibold text-slate-700">Account</TableHead>
                <TableHead className="bg-slate-100/50 font-semibold text-slate-700">Short Text</TableHead>
                <TableHead className="bg-slate-100/50 font-semibold text-slate-700">Amount in doc.curr.</TableHead>
                <TableHead className="bg-slate-100/50 font-semibold text-slate-700">Tx</TableHead>
                <TableHead className="bg-slate-100/50 font-semibold text-slate-700">Cost Ctr</TableHead>
                <TableHead className="bg-slate-100/50 font-semibold text-slate-700">Order</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {lines.map((line, idx) => (
                <TableRow key={idx} className="even:bg-slate-50/50 hover:bg-slate-50 hover:-translate-y-[1px] transition-all cursor-pointer">
                  <TableCell className="border-r border-[#B8C5D0] px-1 py-0 bg-[#F0F2F4] text-center text-slate-500">{idx + 1}</TableCell>
                  <TableCell className="border-r border-[#B8C5D0] px-0 py-0"><Input className="h-full w-full border-none rounded-none text-[10px] px-1 focus-visible:ring-1 bg-transparent" value={line.pk} readOnly /></TableCell>
                  <TableCell className="border-r border-[#B8C5D0] px-0 py-0"><Input className="h-full w-full border-none rounded-none text-[10px] px-1 focus-visible:ring-1 bg-transparent" value={line.acct} readOnly /></TableCell>
                  <TableCell className="border-r border-[#B8C5D0] px-0 py-0"><Input className="h-full w-full border-none rounded-none text-[10px] px-1 focus-visible:ring-1 bg-transparent" value={line.desc} readOnly /></TableCell>
                  <TableCell className="border-r border-[#B8C5D0] px-0 py-0"><Input className="h-full w-full border-none rounded-none text-[10px] px-1 focus-visible:ring-1 bg-transparent text-right" value={line.amt} readOnly /></TableCell>
                  <TableCell className="border-r border-[#B8C5D0] px-0 py-0"><Input className="h-full w-full border-none rounded-none text-[10px] px-1 focus-visible:ring-1 bg-transparent" /></TableCell>
                  <TableCell className="border-r border-[#B8C5D0] px-0 py-0"><Input className="h-full w-full border-none rounded-none text-[10px] px-1 focus-visible:ring-1 bg-transparent" value={line.cc} readOnly /></TableCell>
                  <TableCell className="border-r border-[#B8C5D0] px-0 py-0"><Input className="h-full w-full border-none rounded-none text-[10px] px-1 focus-visible:ring-1 bg-transparent" value={line.order} readOnly /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Input area for next line item */}
        <div className="mt-1 p-2 border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[1px] hover:shadow-md transition-all duration-300">
          <div className="font-bold mb-1 border-b border-[#B8C5D0] pb-1">Next Line Item</div>
          <div className="flex space-x-2">
            <div className="flex flex-col w-12">
              <label className="text-[9px]">PstKy</label>
              <Input className="h-5 text-[10px] bg-white border-[#B8C5D0] rounded-none px-1" />
            </div>
            <div className="flex flex-col w-32">
              <label className="text-[9px]">Account</label>
              <Input className="h-5 text-[10px] bg-white border-[#B8C5D0] rounded-none px-1" />
            </div>
            <div className="flex flex-col w-32">
              <label className="text-[9px]">SGL Ind</label>
              <Input className="h-5 text-[10px] bg-white border-[#B8C5D0] rounded-none px-1" />
            </div>
            <div className="flex flex-col w-32">
              <label className="text-[9px]">TType</label>
              <Input className="h-5 text-[10px] bg-white border-[#B8C5D0] rounded-none px-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer / Status bar */}
      <div className="bg-[#D4DDE4] border-t border-[#B8C5D0] p-1 flex items-center justify-between text-[9px]">
        <div className="flex space-x-4 px-2">
          <span className="flex items-center"><div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div> SYSTEM OK</span>
          <span>RP_PRD</span>
        </div>
        <span>Pure Petroleum (800) | INS</span>
      </div>
    </div>
  );
};

export default JournalVoucher;