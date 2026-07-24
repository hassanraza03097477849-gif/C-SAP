"use client";

import { useState } from "react";
import { generalLedger } from "@/lib/mockData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Download, MoreHorizontal } from "lucide-react";
import { toast } from "sonner";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function GeneralLedgerPage() {
  const [entries, setEntries] = useState(generalLedger);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateVoucher = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    
    const newEntry = {
      id: `GL-${100 + entries.length + 1}`,
      date: new Date().toISOString().split('T')[0],
      account: formData.get("account") as string || "Miscellaneous",
      description: formData.get("description") as string,
      debit: Number(formData.get("type") === "debit" ? formData.get("amount") : 0),
      credit: Number(formData.get("type") === "credit" ? formData.get("amount") : 0),
    };

    setEntries([newEntry, ...entries]);
    setIsModalOpen(false);
    toast.success("Voucher posted successfully", {
      description: `Voucher ${newEntry.id} has been added to the general ledger.`
    });
  };

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">General Ledger</h1>
          <p className="text-slate-500 mt-1">Manage journal entries and vouchers.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline"><Download className="mr-2 h-4 w-4" /> Export</Button>
          
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-slate-800">
                <Plus className="mr-2 h-4 w-4" /> New Voucher
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create Journal Voucher</DialogTitle>
                <DialogDescription>
                  Enter the details for the new GL entry.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleCreateVoucher} className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="account">Account</Label>
                  <Select name="account" defaultValue="Cash - Karachi">
                    <SelectTrigger>
                      <SelectValue placeholder="Select account" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Cash - Karachi">Cash - Karachi</SelectItem>
                      <SelectItem value="Cash - Hattar">Cash - Hattar</SelectItem>
                      <SelectItem value="Accounts Receivable">Accounts Receivable</SelectItem>
                      <SelectItem value="Accounts Payable">Accounts Payable</SelectItem>
                      <SelectItem value="Inventory - Lubes">Inventory - Lubes</SelectItem>
                      <SelectItem value="Inventory - Oil">Inventory - Oil</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Input id="description" name="description" required placeholder="e.g. Office Supplies" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="type">Entry Type</Label>
                    <Select name="type" defaultValue="debit">
                      <SelectTrigger>
                        <SelectValue placeholder="Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="debit">Debit</SelectItem>
                        <SelectItem value="credit">Credit</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="amount">Amount (Rs)</Label>
                    <Input id="amount" name="amount" type="number" required min="1" placeholder="0.00" />
                  </div>
                </div>
                <DialogFooter className="pt-4">
                  <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                  <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-slate-800">Post Voucher</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Card className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <CardHeader>
          <CardTitle>Recent Entries</CardTitle>
          <CardDescription>A list of recent general ledger postings across all branches.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
                <TableRow>
                  <TableHead className="px-6 py-4 font-semibold text-slate-600 text-sm">Voucher ID</TableHead>
                  <TableHead className="px-6 py-4 font-semibold text-slate-600 text-sm">Date</TableHead>
                  <TableHead className="px-6 py-4 font-semibold text-slate-600 text-sm">Account</TableHead>
                  <TableHead className="px-6 py-4 font-semibold text-slate-600 text-sm">Description</TableHead>
                  <TableHead className="text-right px-6 py-4 font-semibold text-slate-600 text-sm">Debit</TableHead>
                  <TableHead className="text-right px-6 py-4 font-semibold text-slate-600 text-sm">Credit</TableHead>
                  <TableHead className="w-[50px] px-6 py-4 font-semibold text-slate-600 text-sm"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {entries.map((entry) => (
                  <TableRow key={entry.id} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer">
                    <TableCell className="font-medium">{entry.id}</TableCell>
                    <TableCell>{entry.date}</TableCell>
                    <TableCell>{entry.account}</TableCell>
                    <TableCell>{entry.description}</TableCell>
                    <TableCell className="text-right">{entry.debit > 0 ? entry.debit.toLocaleString() : "-"}</TableCell>
                    <TableCell className="text-right">{entry.credit > 0 ? entry.credit.toLocaleString() : "-"}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Print Voucher</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Reverse Entry</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-end space-x-2 py-4">
            <Button variant="outline" size="sm" disabled>Previous</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}