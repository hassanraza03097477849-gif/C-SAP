import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus, Search } from "lucide-react"
import Link from "next/link"

const customers = [
  { id: "CUST-001", name: "Acme Corp", type: "Enterprise", status: "Active", creditLimit: "$50,000" },
  { id: "CUST-002", name: "Global Tech", type: "SMB", status: "Active", creditLimit: "$10,000" },
  { id: "CUST-003", name: "Stark Industries", type: "Enterprise", status: "On Hold", creditLimit: "$100,000" },
]

export default function Page() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] mb-6">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Customers</h1>
        <Link href="/sales/customers/new">
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_4px_20px_-4px_rgba(52,211,153,0.3)] hover:shadow-[0_4px_20px_-4px_rgba(52,211,153,0.5)] transition-all"><Plus className="mr-2 h-4 w-4" /> New Customer</Button>
        </Link>
      </div>
      <Card className="shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md border-slate-200/60">
        <CardHeader>
          <CardTitle>Customer Directory</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Credit Limit</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((c) => (
                <TableRow key={c.id} className="hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 even:bg-slate-50/50">
                  <TableCell className="font-medium">{c.id}</TableCell>
                  <TableCell>{c.name}</TableCell>
                  <TableCell>{c.type}</TableCell>
                  <TableCell>{c.creditLimit}</TableCell>
                  <TableCell>
                    <Badge variant={c.status === 'Active' ? 'default' : 'secondary'}>{c.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
