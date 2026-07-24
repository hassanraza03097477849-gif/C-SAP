import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const budgets = [
  { id: "B-2026-IT", costCenter: "CC-3000 (IT)", year: "2026", allocated: "$1,200,000", consumed: "$450,000", remaining: "$750,000" },
  { id: "B-2026-MKT", costCenter: "CC-4000 (Marketing)", year: "2026", allocated: "$800,000", consumed: "$600,000", remaining: "$200,000" },
  { id: "B-2026-HR", costCenter: "CC-2000 (HR)", year: "2026", allocated: "$300,000", consumed: "$100,000", remaining: "$200,000" },
];

export default function BudgetsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center bg-white/80 backdrop-blur-md p-4 rounded-lg shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] mb-4">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Budgets</h1>
        <Link href="/controlling/budgets/new">
          <Button><PlusCircle className="mr-2 h-4 w-4" /> New Budget</Button>
        </Link>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search budgets..." className="pl-8" />
        </div>
      </div>

      <div className="border rounded-lg shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Budget ID</TableHead>
              <TableHead>Cost Center</TableHead>
              <TableHead>Fiscal Year</TableHead>
              <TableHead className="text-right">Allocated</TableHead>
              <TableHead className="text-right">Consumed</TableHead>
              <TableHead className="text-right">Remaining</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {budgets.map((budget) => (
              <TableRow key={budget.id} className="hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 even:bg-slate-50/50">
                <TableCell className="font-medium">{budget.id}</TableCell>
                <TableCell>{budget.costCenter}</TableCell>
                <TableCell>{budget.year}</TableCell>
                <TableCell className="text-right">{budget.allocated}</TableCell>
                <TableCell className="text-right">{budget.consumed}</TableCell>
                <TableCell className="text-right font-semibold text-green-600">{budget.remaining}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">Details</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
