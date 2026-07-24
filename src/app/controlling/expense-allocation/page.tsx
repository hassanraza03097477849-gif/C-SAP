import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowRightLeft } from "lucide-react";

const allocations = [
  { id: "EA-101", fromCC: "CC-3000 (IT)", toCC: "CC-4000 (Marketing)", amount: "$5,000", date: "2026-07-01", status: "Posted" },
  { id: "EA-102", fromCC: "CC-3000 (IT)", toCC: "CC-2000 (HR)", amount: "$3,500", date: "2026-07-02", status: "Posted" },
  { id: "EA-103", fromCC: "CC-1000 (Mgmt)", toCC: "CC-3000 (IT)", amount: "$15,000", date: "2026-07-15", status: "Pending" },
];

export default function ExpenseAllocationPage() {
  return (
    <div className="p-6 space-y-6 bg-white/5">
      <div className="flex justify-between items-center bg-white/80 backdrop-blur-md p-4 rounded-lg shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] mb-4">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Expense Allocation</h1>
        <Button><ArrowRightLeft className="mr-2 h-4 w-4" /> New Allocation cycle</Button>
      </div>

      <Card className="shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md">
        <CardHeader>
          <CardTitle>Recent Allocations</CardTitle>
          <CardDescription>Overview of cost center expense distribution cycles.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Allocation ID</TableHead>
                <TableHead>Sender Cost Center</TableHead>
                <TableHead>Receiver Cost Center</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allocations.map((alloc) => (
                <TableRow key={alloc.id} className="hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 even:bg-slate-50/50">
                  <TableCell className="font-medium">{alloc.id}</TableCell>
                  <TableCell>{alloc.fromCC}</TableCell>
                  <TableCell>{alloc.toCC}</TableCell>
                  <TableCell>{alloc.date}</TableCell>
                  <TableCell className="text-right font-semibold">{alloc.amount}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${alloc.status === 'Posted' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {alloc.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
