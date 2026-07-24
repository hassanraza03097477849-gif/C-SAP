import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const segments = [
  { id: "SEG-NA", name: "North America", manager: "Sarah Connor", revenue: "$15.2M", expenses: "$10.5M", profit: "$4.7M" },
  { id: "SEG-EU", name: "Europe", manager: "Jean-Luc Picard", revenue: "$12.8M", expenses: "$9.2M", profit: "$3.6M" },
  { id: "SEG-APAC", name: "Asia Pacific", manager: "Takeshi Kovacs", revenue: "$9.5M", expenses: "$7.1M", profit: "$2.4M" },
];

export default function SegmentsPage() {
  return (
    <div className="p-6 space-y-6 bg-white/5">
      <div className="flex justify-between items-center bg-white/80 backdrop-blur-md p-4 rounded-lg shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] mb-4">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Segment Reporting</h1>
        <Button><PlusCircle className="mr-2 h-4 w-4" /> New Segment</Button>
      </div>

      <Card className="shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md">
        <CardHeader>
          <CardTitle>Business Segments</CardTitle>
          <CardDescription>Financial performance breakdown by geographic or business segments.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Segment ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Manager</TableHead>
                <TableHead className="text-right">Revenue</TableHead>
                <TableHead className="text-right">Expenses</TableHead>
                <TableHead className="text-right">Operating Profit</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {segments.map((seg) => (
                <TableRow key={seg.id} className="hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 even:bg-slate-50/50">
                  <TableCell className="font-medium">{seg.id}</TableCell>
                  <TableCell>{seg.name}</TableCell>
                  <TableCell>{seg.manager}</TableCell>
                  <TableCell className="text-right">{seg.revenue}</TableCell>
                  <TableCell className="text-right">{seg.expenses}</TableCell>
                  <TableCell className="text-right font-semibold text-green-600">{seg.profit}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
