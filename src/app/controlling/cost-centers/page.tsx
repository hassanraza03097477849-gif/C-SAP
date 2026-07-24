import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const costCenters = [
  { id: "CC-1000", name: "Executive Board", manager: "John Doe", department: "Management", status: "Active" },
  { id: "CC-2000", name: "Human Resources", manager: "Jane Smith", department: "HR", status: "Active" },
  { id: "CC-3000", name: "Information Technology", manager: "Alan Turing", department: "IT", status: "Active" },
  { id: "CC-4000", name: "Marketing", manager: "Don Draper", department: "Marketing", status: "Active" },
];

export default function CostCentersPage() {
  return (
    <div className="p-6 space-y-6 bg-white/5">
      <div className="flex justify-between items-center bg-white/80 backdrop-blur-md p-4 rounded-lg shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] mb-4">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Cost Centers</h1>
        <Link href="/controlling/cost-centers/new">
          <Button><PlusCircle className="mr-2 h-4 w-4" /> New Cost Center</Button>
        </Link>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search cost centers..." className="pl-8" />
        </div>
      </div>

      <div className="border rounded-lg shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Manager</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {costCenters.map((cc) => (
              <TableRow key={cc.id} className="hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 even:bg-slate-50/50">
                <TableCell className="font-medium">{cc.id}</TableCell>
                <TableCell>{cc.name}</TableCell>
                <TableCell>{cc.manager}</TableCell>
                <TableCell>{cc.department}</TableCell>
                <TableCell>{cc.status}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
