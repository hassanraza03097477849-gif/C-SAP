'use client';
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Filter, Download, ArrowRight, LayoutGrid, ChevronDown, ListTree } from 'lucide-react';

const DepotAccounting = () => {
  const [viewMode, setViewMode] = useState('matrix'); // 'matrix' or 'list'

  return (
    <div className="h-screen w-full bg-[#E5E9EC] flex flex-col font-mono text-[10px] text-[#333] overflow-hidden">
      {/* SAP Menu Bar */}
      <div className="bg-white/80 backdrop-blur-md border-b border-[#B8C5D0] p-1 flex items-center shadow-sm z-30">
        <div className="flex space-x-2 px-1">
          <span className="cursor-pointer hover:bg-slate-300 px-1">Report</span>
          <span className="cursor-pointer hover:bg-slate-300 px-1">Edit</span>
          <span className="cursor-pointer hover:bg-slate-300 px-1">Goto</span>
          <span className="cursor-pointer hover:bg-slate-300 px-1">Settings</span>
          <span className="cursor-pointer hover:bg-slate-300 px-1">System</span>
          <span className="cursor-pointer hover:bg-slate-300 px-1">Help</span>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-white/80 backdrop-blur-md border-b border-[#B8C5D0] p-1 flex items-center justify-between z-20">
        <div className="flex space-x-1 items-center">
          <Button variant="outline" className="border-slate-200 hover:bg-slate-50 transition-colors">
            <Filter className="w-3 h-3 mr-1" /> Dynamic Selections
          </Button>
          <Button variant="outline" className="border-slate-200 hover:bg-slate-50 transition-colors">
            <Download className="w-3 h-3 mr-1" /> Spreadsheet
          </Button>
          <div className="w-px h-4 bg-slate-300 mx-1"></div>
          <Button variant="outline" className="border-slate-200 hover:bg-slate-50 transition-colors" onClick={() => setViewMode('matrix')}>
            <LayoutGrid className="w-3 h-3 mr-1" /> Matrix View
          </Button>
          <Button variant="outline" className="border-slate-200 hover:bg-slate-50 transition-colors" onClick={() => setViewMode('list')}>
            <ListTree className="w-3 h-3 mr-1" /> Hierarchy View
          </Button>
        </div>
        <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] mb-6">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Cost Center Accounting: Depot P&L Matrix</h1>
        </div>
      </div>

      {/* Filter Options */}
      <div className="bg-white/60 backdrop-blur-md p-2 border-b border-[#B8C5D0] shadow-sm z-10 relative">
        <div className="grid grid-cols-4 gap-4 w-2/3">
          <div className="flex flex-col space-y-1">
            <label className="text-[9px] font-bold text-slate-600">Controlling Area</label>
            <div className="flex"><Input className="h-5 text-[10px] rounded-none border-[#B8C5D0] px-1 bg-white" defaultValue="RPC1" /><Button className="h-5 w-5 p-0 rounded-none bg-slate-200 border border-l-0 border-[#B8C5D0] text-black"><Search className="w-3 h-3" /></Button></div>
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-[9px] font-bold text-slate-600">Fiscal Year</label>
            <Input className="h-5 text-[10px] rounded-none border-[#B8C5D0] px-1 bg-white" defaultValue="2026" />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-[9px] font-bold text-slate-600">Period</label>
            <div className="flex items-center space-x-1">
              <Input className="h-5 text-[10px] rounded-none border-[#B8C5D0] px-1 bg-white w-12" defaultValue="1" />
              <span>to</span>
              <Input className="h-5 text-[10px] rounded-none border-[#B8C5D0] px-1 bg-white w-12" defaultValue="7" />
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-[9px] font-bold text-slate-600">Report Group</label>
            <div className="flex"><Input className="h-5 text-[10px] rounded-none border-[#B8C5D0] px-1 bg-white" defaultValue="ZDEP" /><Button className="h-5 w-5 p-0 rounded-none bg-slate-200 border border-l-0 border-[#B8C5D0] text-black"><Search className="w-3 h-3" /></Button></div>
          </div>
        </div>
        <div className="mt-2">
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:shadow-lg transition-all">
            <ArrowRight className="w-3 h-3 mr-1" /> Execute
          </Button>
        </div>
      </div>

      {/* Main Grid area */}
      <div className="flex-1 overflow-auto bg-white p-2">
        <div className="rounded-sm border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[1px] hover:shadow-md transition-all duration-300">
          <div className="bg-[#D4DDE4] border-b border-[#B8C5D0] p-1 font-bold flex justify-between">
            <span>Depot Profitability Analysis</span>
            <span>Values in PKR</span>
          </div>
          <Table className="w-full text-left border-collapse whitespace-nowrap table-fixed">
            <TableHeader className="bg-white/90 backdrop-blur-md border-b-2 border-black sticky top-0 shadow-sm z-10">
              <TableRow className="even:bg-slate-50/50 hover:bg-slate-50 hover:-translate-y-[1px] transition-all cursor-pointer">
                <TableHead className="bg-slate-100/50 font-semibold text-slate-700">Cost Element / Group</TableHead>
                <TableHead className="bg-slate-100/50 font-semibold text-slate-700">Sahiwal (CC: 1101)</TableHead>
                <TableHead className="bg-slate-100/50 font-semibold text-slate-700">Hattar (CC: 1102)</TableHead>
                <TableHead className="bg-slate-100/50 font-semibold text-slate-700">Karachi (CC: 1103)</TableHead>
                <TableHead className="bg-slate-100/50 font-semibold text-slate-700">Total Company</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* REVENUES */}
              <TableRow className="even:bg-slate-50/50 hover:bg-slate-50 hover:-translate-y-[1px] transition-all cursor-pointer">
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1"><ChevronDown className="w-3 h-3 inline mr-1" /> REVENUES</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right bg-blue-50/50">45,500,000</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right bg-green-50/50">62,800,000</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right bg-purple-50/50">120,450,000</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right bg-slate-100/50">228,750,000</TableCell>
              </TableRow>
              <TableRow className="even:bg-slate-50/50 hover:bg-slate-50 hover:-translate-y-[1px] transition-all cursor-pointer">
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 pl-8">400010 - Product Sales - Lubes</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right font-mono">15,000,000</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right font-mono">22,000,000</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right font-mono">50,000,000</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right font-mono bg-slate-50">87,000,000</TableCell>
              </TableRow>
              <TableRow className="even:bg-slate-50/50 hover:bg-slate-50 hover:-translate-y-[1px] transition-all cursor-pointer">
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 pl-8">400020 - Product Sales - Fuel</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right font-mono">30,500,000</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right font-mono">40,800,000</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right font-mono">70,450,000</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right font-mono bg-slate-50">141,750,000</TableCell>
              </TableRow>

              {/* COGS */}
              <TableRow className="even:bg-slate-50/50 hover:bg-slate-50 hover:-translate-y-[1px] transition-all cursor-pointer">
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1"><ChevronDown className="w-3 h-3 inline mr-1" /> COST OF GOODS SOLD</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right bg-blue-50/50 text-red-700">(32,000,000)</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right bg-green-50/50 text-red-700">(45,000,000)</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right bg-purple-50/50 text-red-700">(90,000,000)</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right bg-slate-100/50 text-red-700">(167,000,000)</TableCell>
              </TableRow>
              <TableRow className="even:bg-slate-50/50 hover:bg-slate-50 hover:-translate-y-[1px] transition-all cursor-pointer">
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 pl-8">500010 - Raw Material Consumed</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right font-mono">(32,000,000)</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right font-mono">(45,000,000)</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right font-mono">(90,000,000)</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right font-mono bg-slate-50">(167,000,000)</TableCell>
              </TableRow>

              {/* GROSS MARGIN */}
              <TableRow className="even:bg-slate-50/50 hover:bg-slate-50 hover:-translate-y-[1px] transition-all cursor-pointer">
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1">GROSS MARGIN</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right bg-blue-100/50">13,500,000</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right bg-green-100/50">17,800,000</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right bg-purple-100/50">30,450,000</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right bg-slate-200/50">61,750,000</TableCell>
              </TableRow>

              {/* OPEX */}
              <TableRow className="even:bg-slate-50/50 hover:bg-slate-50 hover:-translate-y-[1px] transition-all cursor-pointer">
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1"><ChevronDown className="w-3 h-3 inline mr-1" /> OPERATING EXPENSES</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right bg-blue-50/50 text-red-700">(4,200,000)</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right bg-green-50/50 text-red-700">(5,100,000)</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right bg-purple-50/50 text-red-700">(8,500,000)</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right bg-slate-100/50 text-red-700">(17,800,000)</TableCell>
              </TableRow>
              <TableRow className="even:bg-slate-50/50 hover:bg-slate-50 hover:-translate-y-[1px] transition-all cursor-pointer">
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 pl-8">610000 - Salaries & Wages</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right font-mono">(1,500,000)</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right font-mono">(2,000,000)</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right font-mono">(4,000,000)</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right font-mono bg-slate-50">(7,500,000)</TableCell>
              </TableRow>
              <TableRow className="even:bg-slate-50/50 hover:bg-slate-50 hover:-translate-y-[1px] transition-all cursor-pointer">
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 pl-8">620000 - Utilities</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right font-mono">(800,000)</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right font-mono">(900,000)</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right font-mono">(1,500,000)</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right font-mono bg-slate-50">(3,200,000)</TableCell>
              </TableRow>
              <TableRow className="even:bg-slate-50/50 hover:bg-slate-50 hover:-translate-y-[1px] transition-all cursor-pointer">
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 pl-8">630000 - Depreciation</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right font-mono">(1,900,000)</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right font-mono">(2,200,000)</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right font-mono">(3,000,000)</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right font-mono bg-slate-50">(7,100,000)</TableCell>
              </TableRow>

              {/* NET OPERATING PROFIT */}
              <TableRow className="even:bg-slate-50/50 hover:bg-slate-50 hover:-translate-y-[1px] transition-all cursor-pointer">
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1">NET OPERATING PROFIT</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right bg-blue-100">9,300,000</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right bg-green-100">12,700,000</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right bg-purple-100">21,950,000</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right bg-slate-200 border-l-2 border-black">43,950,000</TableCell>
              </TableRow>
              
              {/* Margin % */}
              <TableRow className="even:bg-slate-50/50 hover:bg-slate-50 hover:-translate-y-[1px] transition-all cursor-pointer">
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 italic">Operating Margin %</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right">20.44%</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right">20.22%</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right">18.22%</TableCell>
                <TableCell className="border-r border-[#B8C5D0] px-2 py-1 text-right">19.21%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="bg-[#D4DDE4] border-t border-[#B8C5D0] p-1 flex items-center justify-between text-[9px]">
        <div className="flex space-x-4 px-2">
          <span>Report: Z_DEPOT_PL</span>
          <span>Records: 42</span>
        </div>
        <span>User: DEV_FI01</span>
      </div>
    </div>
  );
};

export default DepotAccounting;