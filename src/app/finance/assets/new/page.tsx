import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function AssetRegister() {
  return (
    <div className="min-h-screen bg-zinc-50/50 p-4 text-[10px] font-sans flex flex-col gap-4">
      <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] mb-6">
        <div className="flex items-center justify-between">
          <div className="font-bold uppercase flex items-center gap-3">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-3 py-1 rounded-md shadow-sm">FI-AA</span>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Create Asset: Initial Screen</h1>
          </div>
          <div className="flex gap-2">
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:shadow-lg transition-all">Save</Button>
          <Button variant="outline" className="border-slate-200 hover:bg-slate-50 transition-colors">Back</Button>
          <Button variant="outline" className="border-slate-200 hover:bg-slate-50 transition-colors">Exit</Button>
        </div>
      </div>
      </div>

      <Card className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[1px] hover:shadow-md transition-all duration-300">
        <CardContent className="p-2 flex flex-col gap-2">
          <div className="grid grid-cols-6 gap-2">
            <div className="col-span-2 grid grid-cols-3 items-center gap-1">
              <Label className="text-[10px] text-right pr-2">Asset Class</Label>
              <Input className="col-span-2 h-6 text-[10px] rounded-none border-zinc-400" defaultValue="3000 (Machinery & Equipment)" />
            </div>
            <div className="col-span-2 grid grid-cols-3 items-center gap-1">
              <Label className="text-[10px] text-right pr-2">Company Code</Label>
              <Input className="col-span-2 h-6 text-[10px] rounded-none border-zinc-400 bg-zinc-200" readOnly value="1000 (Reliance)" />
            </div>
            <div className="col-span-2 grid grid-cols-3 items-center gap-1">
              <Label className="text-[10px] text-right pr-2">Number of similar assets</Label>
              <Input className="col-span-2 h-6 text-[10px] rounded-none border-zinc-400" defaultValue="1" type="number" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="general" className="flex-1 flex flex-col gap-2">
        <TabsList className="h-9 w-full justify-start rounded-lg border border-emerald-100/50 bg-white/80 backdrop-blur-md p-1 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.05)]">
          <TabsTrigger value="general" className="text-[11px] h-full rounded-md px-4 data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-700 data-[state=active]:shadow-sm transition-all duration-300">General Data</TabsTrigger>
          <TabsTrigger value="time" className="text-[11px] h-full rounded-md px-4 data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-700 data-[state=active]:shadow-sm transition-all duration-300">Time-dependent</TabsTrigger>
          <TabsTrigger value="allocations" className="text-[11px] h-full rounded-md px-4 data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-700 data-[state=active]:shadow-sm transition-all duration-300">Allocations</TabsTrigger>
          <TabsTrigger value="origin" className="text-[11px] h-full rounded-md px-4 data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-700 data-[state=active]:shadow-sm transition-all duration-300">Origin</TabsTrigger>
          <TabsTrigger value="depreciation" className="text-[11px] h-full rounded-md px-4 data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-700 data-[state=active]:shadow-sm transition-all duration-300">Deprec. Areas</TabsTrigger>
        </TabsList>

        <div className="flex-1 bg-white/90 backdrop-blur-md border border-emerald-100/50 rounded-xl p-4 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
          <TabsContent value="general" className="m-0 h-full flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-4">
              <fieldset className="border border-zinc-300 p-2">
                <legend className="text-[10px] font-bold text-zinc-600 px-1">Description</legend>
                <div className="grid grid-cols-4 gap-1 items-center mb-1">
                  <Label className="text-[10px] text-right pr-2">Description 1</Label>
                  <Input className="col-span-3 h-6 text-[10px] rounded-none border-zinc-400" defaultValue="Heavy Duty Centrifugal Pump" />
                </div>
                <div className="grid grid-cols-4 gap-1 items-center mb-1">
                  <Label className="text-[10px] text-right pr-2">Description 2</Label>
                  <Input className="col-span-3 h-6 text-[10px] rounded-none border-zinc-400" defaultValue="Refinery Unit B - Cooling Sys" />
                </div>
                <div className="grid grid-cols-4 gap-1 items-center mb-1">
                  <Label className="text-[10px] text-right pr-2">Asset main text</Label>
                  <Input className="col-span-3 h-6 text-[10px] rounded-none border-zinc-400" />
                </div>
                <div className="grid grid-cols-4 gap-1 items-center mb-1">
                  <Label className="text-[10px] text-right pr-2">Account determin.</Label>
                  <Input className="col-span-1 h-6 text-[10px] rounded-none border-zinc-400" defaultValue="30000" />
                  <span className="col-span-2 text-[9px] text-zinc-500">Machinery & Equipment</span>
                </div>
              </fieldset>
              <fieldset className="border border-zinc-300 p-2">
                <legend className="text-[10px] font-bold text-zinc-600 px-1">Inventory</legend>
                <div className="grid grid-cols-4 gap-1 items-center mb-1">
                  <Label className="text-[10px] text-right pr-2">Quantity</Label>
                  <Input className="col-span-1 h-6 text-[10px] rounded-none border-zinc-400" defaultValue="1" type="number" />
                  <Input className="col-span-1 h-6 text-[10px] rounded-none border-zinc-400" defaultValue="PC" />
                </div>
                <div className="grid grid-cols-4 gap-1 items-center mb-1">
                  <Label className="text-[10px] text-right pr-2">Inventory no.</Label>
                  <Input className="col-span-2 h-6 text-[10px] rounded-none border-zinc-400" defaultValue="INV-2026-883" />
                </div>
                <div className="grid grid-cols-4 gap-1 items-center mb-1">
                  <Label className="text-[10px] text-right pr-2">Include in inv.</Label>
                  <div className="col-span-3">
                    <input type="checkbox" defaultChecked className="h-3 w-3" />
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-1 items-center mb-1">
                  <Label className="text-[10px] text-right pr-2">Last inventory</Label>
                  <Input className="col-span-2 h-6 text-[10px] rounded-none border-zinc-400" type="date" />
                </div>
              </fieldset>
            </div>
            
            <fieldset className="border border-zinc-300 p-2 flex-1 mt-2">
              <legend className="text-[10px] font-bold text-zinc-600 px-1">Reference</legend>
              <div className="grid grid-cols-4 gap-2">
                 <div className="grid grid-cols-3 gap-1 items-center mb-1">
                  <Label className="text-[10px] text-right pr-2">Capitalized on</Label>
                  <Input className="col-span-2 h-6 text-[10px] rounded-none border-zinc-400" type="date" defaultValue="2026-07-22" />
                </div>
                <div className="grid grid-cols-3 gap-1 items-center mb-1">
                  <Label className="text-[10px] text-right pr-2">First acquisit.</Label>
                  <Input className="col-span-2 h-6 text-[10px] rounded-none border-zinc-400" type="date" defaultValue="2026-07-22" />
                </div>
                <div className="grid grid-cols-3 gap-1 items-center mb-1">
                  <Label className="text-[10px] text-right pr-2">Acquisition yr.</Label>
                  <Input className="col-span-2 h-6 text-[10px] rounded-none border-zinc-400" defaultValue="2026" />
                </div>
                <div className="grid grid-cols-3 gap-1 items-center mb-1">
                  <Label className="text-[10px] text-right pr-2">Acquisition per.</Label>
                  <Input className="col-span-2 h-6 text-[10px] rounded-none border-zinc-400" defaultValue="07" />
                </div>
              </div>
            </fieldset>
          </TabsContent>

          <TabsContent value="depreciation" className="m-0 h-full flex flex-col gap-2">
            <div className="border border-zinc-300 h-full flex flex-col">
              <div className="bg-zinc-200 border-b border-zinc-300 p-1 flex gap-2">
                 <Button variant="outline" className="border-slate-200 hover:bg-slate-50 transition-colors">Copy from Class</Button>
                 <Button variant="outline" className="border-slate-200 hover:bg-slate-50 transition-colors">Recalculate</Button>
              </div>
              <div className="overflow-auto flex-1 p-1">
                <Table className="w-full text-[9px] border-collapse">
                  <TableHeader className="bg-emerald-50/50">
                    <TableRow className="even:bg-slate-50/50 hover:bg-slate-50 hover:-translate-y-[1px] transition-all cursor-pointer">
                      <TableHead className="bg-slate-100/50 font-semibold text-slate-700">Ar</TableHead>
                      <TableHead className="bg-slate-100/50 font-semibold text-slate-700">Depreciation Area</TableHead>
                      <TableHead className="bg-slate-100/50 font-semibold text-slate-700">DKey</TableHead>
                      <TableHead className="bg-slate-100/50 font-semibold text-slate-700">UseLife</TableHead>
                      <TableHead className="bg-slate-100/50 font-semibold text-slate-700">Prd</TableHead>
                      <TableHead className="bg-slate-100/50 font-semibold text-slate-700">Ord.Dep.Start</TableHead>
                      <TableHead className="bg-slate-100/50 font-semibold text-slate-700">Index</TableHead>
                      <TableHead className="bg-slate-100/50 font-semibold text-slate-700">Var.Dep.Por</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { area: '01', desc: 'Book deprecat. in local crcy', key: 'LINR', life: '10', prd: '0', start: '2026-07-22' },
                      { area: '10', desc: 'State investment support', key: '0000', life: '0', prd: '0', start: '' },
                      { area: '15', desc: 'Tax balance sheet - local crcy', key: 'DECL', life: '10', prd: '0', start: '2026-07-22' },
                      { area: '20', desc: 'Cost-accounting depreciation', key: 'LINR', life: '12', prd: '0', start: '2026-07-22' },
                      { area: '30', desc: 'Consolidated balance sheet in loc.', key: 'LINR', life: '10', prd: '0', start: '2026-07-22' },
                      { area: '31', desc: 'Consolidated balance sheet in grp.', key: 'LINR', life: '10', prd: '0', start: '2026-07-22' },
                      { area: '32', desc: 'Book deprec. in group currency', key: 'LINR', life: '10', prd: '0', start: '2026-07-22' },
                      { area: '90', desc: 'Derived area (Book - Cost)', key: '0000', life: '0', prd: '0', start: '' },
                    ].map((row, i) => (
                      <TableRow key={i} className="even:bg-slate-50/50 hover:bg-slate-50 hover:-translate-y-[1px] transition-all cursor-pointer">
                        <TableCell className="border border-zinc-300 p-0 text-center bg-zinc-100">{row.area}</TableCell>
                        <TableCell className="border border-zinc-300 p-1 truncate">{row.desc}</TableCell>
                        <TableCell className="border border-zinc-300 p-0">
                          <Input className="h-5 text-[9px] border-0 rounded-none w-full bg-yellow-50" defaultValue={row.key} />
                        </TableCell>
                        <TableCell className="border border-zinc-300 p-0">
                          <Input className="h-5 text-[9px] border-0 rounded-none w-full bg-yellow-50 text-right" defaultValue={row.life} />
                        </TableCell>
                        <TableCell className="border border-zinc-300 p-0">
                          <Input className="h-5 text-[9px] border-0 rounded-none w-full bg-yellow-50 text-right" defaultValue={row.prd} />
                        </TableCell>
                        <TableCell className="border border-zinc-300 p-0">
                          <Input className="h-5 text-[9px] border-0 rounded-none w-full bg-yellow-50" type="date" defaultValue={row.start} />
                        </TableCell>
                        <TableCell className="border border-zinc-300 p-0">
                          <Input className="h-5 text-[9px] border-0 rounded-none w-full bg-white" />
                        </TableCell>
                        <TableCell className="border border-zinc-300 p-0">
                          <Input className="h-5 text-[9px] border-0 rounded-none w-full bg-white" />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}