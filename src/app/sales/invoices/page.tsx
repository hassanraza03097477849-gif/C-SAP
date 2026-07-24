import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus } from "lucide-react"
import Link from "next/link"

const invoices = [
  { id: "INV-2026-001", customer: "Acme Corp", amount: "$5,400.00", date: "2026-07-01", status: "Paid" },
  { id: "INV-2026-002", customer: "Global Tech", amount: "$1,250.00", date: "2026-07-15", status: "Open" },
  { id: "INV-2026-003", customer: "Stark Industries", amount: "$15,000.00", date: "2026-06-30", status: "Overdue" },
]

export default function Page() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] mb-6">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Invoices</h1>
        <Link href="/sales/invoices/new">
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_4px_20px_-4px_rgba(52,211,153,0.3)] hover:shadow-[0_4px_20px_-4px_rgba(52,211,153,0.5)] transition-all"><Plus className="mr-2 h-4 w-4" /> Create Invoice</Button>
        </Link>
      </div>
      <Card className="shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md border-slate-200/60">
        <CardHeader>
          <CardTitle>Billing Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice #</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Billing Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((inv) => (
                <TableRow key={inv.id} className="hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 even:bg-slate-50/50">
                  <TableCell className="font-medium">{inv.id}</TableCell>
                  <TableCell>{inv.customer}</TableCell>
                  <TableCell>{inv.amount}</TableCell>
                  <TableCell>{inv.date}</TableCell>
                  <TableCell>
                    <Badge variant={inv.status === 'Paid' ? 'secondary' : inv.status === 'Overdue' ? 'destructive' : 'default'}>
                      {inv.status}
                    </Badge>
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
