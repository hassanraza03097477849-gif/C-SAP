"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Save, Printer, Play, Pause, ChevronLeft, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function CreateSalesOrderDense() {
  const [lineItems, setLineItems] = useState([
    { id: 1, material: "MAT-1001-PET", qty: 5000, uom: "L", price: 250, plant: "KHI-01", tax: "18%" },
    { id: 2, material: "MAT-2005-DSL", qty: 10000, uom: "L", price: 240, plant: "HTR-02", tax: "18%" }
  ]);

  const addLineItem = () => {
    setLineItems([...lineItems, { id: lineItems.length + 1, material: "", qty: 0, uom: "L", price: 0, plant: "", tax: "18%" }]);
  };

  const removeLineItem = (id: number) => {
    setLineItems(lineItems.filter(item => item.id !== id));
  };

  const handleSave = () => {
    toast.success("Sales Order Standard (OR) 14002901 saved successfully.");
  };

  return (
    <div className="flex flex-col h-[calc(100vh-5rem)] bg-white border border-slate-200">
      {/* Dense Action Header */}
      <div className="flex items-center justify-between bg-slate-100 px-2 py-1.5 border-b border-slate-300">
        <div className="flex items-center gap-2">
          <Link href="/sales/orders">
            <Button variant="ghost" size="icon" className="h-6 w-6"><ChevronLeft className="h-4 w-4" /></Button>
          </Link>
          <span className="font-semibold text-sm text-slate-800">Create Standard Order: Overview</span>
        </div>
        <div className="flex items-center gap-1">
          <Button onClick={handleSave} size="sm" className="h-7 text-xs bg-slate-800 text-white"><Save className="mr-1.5 h-3 w-3"/> Save</Button>
          <Button variant="outline" size="sm" className="h-7 text-xs"><Play className="mr-1.5 h-3 w-3"/> Simulate</Button>
          <Button variant="outline" size="sm" className="h-7 text-xs"><Pause className="mr-1.5 h-3 w-3"/> Hold</Button>
          <Button variant="outline" size="sm" className="h-7 text-xs"><Printer className="h-3 w-3"/></Button>
        </div>
      </div>

      {/* Main Header Data */}
      <div className="p-3 bg-slate-50 border-b border-slate-300 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-2">
        <div className="space-y-1">
          <Label className="text-[10px] uppercase text-slate-500 font-bold">Standard Order Type</Label>
          <Select defaultValue="OR">
            <SelectTrigger className="h-7 text-xs bg-white"><SelectValue/></SelectTrigger>
            <SelectContent><SelectItem value="OR">OR - Standard Order</SelectItem><SelectItem value="RO">RO - Rush Order</SelectItem></SelectContent>
          </Select>
        </div>
        <div className="space-y-1">
          <Label className="text-[10px] uppercase text-slate-500 font-bold">Sales Organization</Label>
          <Input defaultValue="1000" className="h-7 text-xs bg-white" />
        </div>
        <div className="space-y-1">
          <Label className="text-[10px] uppercase text-slate-500 font-bold">Distribution Channel</Label>
          <Input defaultValue="10 (Direct Sales)" className="h-7 text-xs bg-white" />
        </div>
        <div className="space-y-1">
          <Label className="text-[10px] uppercase text-slate-500 font-bold">Division</Label>
          <Input defaultValue="01 (Oil)" className="h-7 text-xs bg-white" />
        </div>
        <div className="space-y-1">
          <Label className="text-[10px] uppercase text-slate-500 font-bold">Sold-to Party</Label>
          <div className="flex gap-1">
            <Input defaultValue="CUST-40992" className="h-7 text-xs bg-white w-24" />
            <Input defaultValue="Pure Pump 1" disabled className="h-7 text-xs bg-slate-100 w-full" />
          </div>
        </div>
        <div className="space-y-1">
          <Label className="text-[10px] uppercase text-slate-500 font-bold">Ship-to Party</Label>
          <div className="flex gap-1">
            <Input defaultValue="CUST-40992" className="h-7 text-xs bg-white w-24" />
            <Input defaultValue="Pure Pump 1 (Location A)" disabled className="h-7 text-xs bg-slate-100 w-full" />
          </div>
        </div>
      </div>

      {/* Complex Tabbed Body */}
      <div className="flex-1 overflow-hidden flex flex-col">
        <Tabs defaultValue="sales" className="flex-1 flex flex-col">
          <div className="px-2 pt-2 bg-white">
            <TabsList className="h-8 w-full justify-start bg-slate-100 border-b rounded-none p-0">
              <TabsTrigger value="sales" className="text-xs h-8 px-4 data-[state=active]:bg-white data-[state=active]:border-t-2 data-[state=active]:border-t-emerald-500 rounded-none">Sales</TabsTrigger>
              <TabsTrigger value="item" className="text-xs h-8 px-4 data-[state=active]:bg-white data-[state=active]:border-t-2 data-[state=active]:border-t-emerald-500 rounded-none">Item Overview</TabsTrigger>
              <TabsTrigger value="shipping" className="text-xs h-8 px-4 data-[state=active]:bg-white data-[state=active]:border-t-2 data-[state=active]:border-t-emerald-500 rounded-none">Shipping</TabsTrigger>
              <TabsTrigger value="billing" className="text-xs h-8 px-4 data-[state=active]:bg-white data-[state=active]:border-t-2 data-[state=active]:border-t-emerald-500 rounded-none">Billing</TabsTrigger>
              <TabsTrigger value="conditions" className="text-xs h-8 px-4 data-[state=active]:bg-white data-[state=active]:border-t-2 data-[state=active]:border-t-emerald-500 rounded-none">Conditions</TabsTrigger>
            </TabsList>
          </div>

          {/* Sales Tab Dense Content */}
          <TabsContent value="sales" className="flex-1 overflow-y-auto p-4 m-0 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              
              {/* Box 1 */}
              <div className="border border-slate-200 p-3 rounded bg-slate-50/50">
                <h4 className="text-xs font-bold text-slate-800 mb-3 uppercase tracking-wider border-b pb-1">Reference Data</h4>
                <div className="space-y-2">
                  <div className="grid grid-cols-3 items-center gap-2"><Label className="text-[10px] text-right">PO Number</Label><Input className="h-6 text-xs col-span-2" defaultValue="PO-991200" /></div>
                  <div className="grid grid-cols-3 items-center gap-2"><Label className="text-[10px] text-right">PO Date</Label><Input type="date" className="h-6 text-xs col-span-2" defaultValue="2026-07-22" /></div>
                  <div className="grid grid-cols-3 items-center gap-2"><Label className="text-[10px] text-right">Req. Dlv. Date</Label><Input type="date" className="h-6 text-xs col-span-2" defaultValue="2026-07-25" /></div>
                  <div className="grid grid-cols-3 items-center gap-2"><Label className="text-[10px] text-right">Order Reason</Label><Select><SelectTrigger className="h-6 text-[10px] col-span-2"><SelectValue placeholder="..."/></SelectTrigger><SelectContent/></Select></div>
                </div>
              </div>

              {/* Box 2 */}
              <div className="border border-slate-200 p-3 rounded bg-slate-50/50">
                <h4 className="text-xs font-bold text-slate-800 mb-3 uppercase tracking-wider border-b pb-1">Pricing & Statistics</h4>
                <div className="space-y-2">
                  <div className="grid grid-cols-3 items-center gap-2"><Label className="text-[10px] text-right">Net Value</Label><Input className="h-6 text-xs col-span-2 text-right font-bold text-emerald-700 bg-emerald-50" readOnly defaultValue="3,650,000.00" /></div>
                  <div className="grid grid-cols-3 items-center gap-2"><Label className="text-[10px] text-right">Currency</Label><Input className="h-6 text-xs col-span-2" defaultValue="PKR" /></div>
                  <div className="grid grid-cols-3 items-center gap-2"><Label className="text-[10px] text-right">Pricing Date</Label><Input type="date" className="h-6 text-xs col-span-2" defaultValue="2026-07-22" /></div>
                  <div className="grid grid-cols-3 items-center gap-2"><Label className="text-[10px] text-right">Valid From</Label><Input type="date" className="h-6 text-xs col-span-2" /></div>
                </div>
              </div>
              
              {/* Box 3 */}
              <div className="border border-slate-200 p-3 rounded bg-slate-50/50">
                <h4 className="text-xs font-bold text-slate-800 mb-3 uppercase tracking-wider border-b pb-1">Delivery Info</h4>
                <div className="space-y-2">
                  <div className="grid grid-cols-3 items-center gap-2"><Label className="text-[10px] text-right">Dlv. Plant</Label><Input className="h-6 text-xs col-span-2" defaultValue="KHI-01" /></div>
                  <div className="grid grid-cols-3 items-center gap-2"><Label className="text-[10px] text-right">Shipping Pt</Label><Input className="h-6 text-xs col-span-2" defaultValue="SH-KHI" /></div>
                  <div className="grid grid-cols-3 items-center gap-2"><Label className="text-[10px] text-right">Route</Label><Input className="h-6 text-xs col-span-2" defaultValue="R-SND-01" /></div>
                  <div className="grid grid-cols-3 items-center gap-2"><Label className="text-[10px] text-right">Total Wgt.</Label><div className="col-span-2 flex gap-1"><Input className="h-6 text-xs w-full text-right" defaultValue="12000" /><Input className="h-6 text-xs w-10" defaultValue="KG" /></div></div>
                </div>
              </div>

            </div>
          </TabsContent>

          {/* Embedded Line Item Table Tab */}
          <TabsContent value="item" className="flex-1 flex flex-col overflow-hidden m-0">
            <div className="flex bg-slate-100 p-1 border-b gap-1">
               <Button onClick={addLineItem} variant="outline" size="sm" className="h-6 text-[10px] px-2"><Plus className="h-3 w-3 mr-1"/> Insert Row</Button>
               <Button variant="outline" size="sm" className="h-6 text-[10px] px-2">Display Item Details</Button>
            </div>
            <div className="flex-1 overflow-auto bg-white">
              <Table className="w-full text-xs">
                <TableHeader className="bg-slate-200 sticky top-0 shadow-sm z-10">
                  <TableRow className="h-7 border-b border-slate-300">
                    <TableHead className="w-10 px-2 py-0 text-slate-700 h-7">Itm</TableHead>
                    <TableHead className="px-2 py-0 text-slate-700 h-7">Material</TableHead>
                    <TableHead className="px-2 py-0 text-slate-700 h-7 w-32">Order Qty</TableHead>
                    <TableHead className="px-2 py-0 text-slate-700 h-7 w-16">UoM</TableHead>
                    <TableHead className="px-2 py-0 text-slate-700 h-7 w-24">Plnt</TableHead>
                    <TableHead className="px-2 py-0 text-slate-700 h-7 text-right">Rate/Ltr</TableHead>
                    <TableHead className="px-2 py-0 text-slate-700 h-7 text-right">Net Value</TableHead>
                    <TableHead className="px-2 py-0 text-slate-700 h-7 w-16 text-center">Tax</TableHead>
                    <TableHead className="w-10 px-2 py-0 text-slate-700 h-7"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {lineItems.map((item, idx) => (
                    <TableRow key={item.id} className="h-8 border-b border-slate-200 hover:bg-slate-50">
                      <TableCell className="px-2 py-1 font-mono text-[10px]">{(idx + 1) * 10}</TableCell>
                      <TableCell className="px-2 py-1"><Input defaultValue={item.material} className="h-6 text-xs w-full bg-transparent border-transparent focus:bg-white focus:border-emerald-500 transition-all rounded-sm" /></TableCell>
                      <TableCell className="px-2 py-1"><Input type="number" defaultValue={item.qty} className="h-6 text-xs w-full bg-transparent border-transparent focus:bg-white text-right font-mono focus:border-emerald-500 rounded-sm" /></TableCell>
                      <TableCell className="px-2 py-1"><Input defaultValue={item.uom} className="h-6 text-xs w-full bg-transparent border-transparent focus:bg-white uppercase focus:border-emerald-500 rounded-sm text-center" /></TableCell>
                      <TableCell className="px-2 py-1"><Input defaultValue={item.plant} className="h-6 text-xs w-full bg-transparent border-transparent focus:bg-white focus:border-emerald-500 rounded-sm" /></TableCell>
                      <TableCell className="px-2 py-1"><Input type="number" defaultValue={item.price} className="h-6 text-xs w-full bg-transparent border-transparent focus:bg-white text-right font-mono focus:border-emerald-500 rounded-sm" /></TableCell>
                      <TableCell className="px-2 py-1 text-right font-bold text-slate-700 font-mono">{(item.qty * item.price).toLocaleString()}</TableCell>
                      <TableCell className="px-2 py-1 text-center text-slate-500">{item.tax}</TableCell>
                      <TableCell className="px-2 py-1 text-center">
                        <Button onClick={() => removeLineItem(item.id)} variant="ghost" size="icon" className="h-5 w-5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded"><Trash2 className="h-3 w-3"/></Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  {/* Empty rows to make it look like a large grid */}
                  {[...Array(15)].map((_, i) => (
                    <TableRow key={`empty-${i}`} className="h-8 border-b border-slate-100">
                      <TableCell className="px-2 py-1 font-mono text-[10px] text-slate-300">{(lineItems.length + i + 1) * 10}</TableCell>
                      <TableCell colSpan={8} className="px-2 py-1"></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
