import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const MOCK_INVOICES = [
  { id: "INV-IMP-001", orderId: "IMP-ORD-001", amount: "$150,000", dueDate: "2026-08-20", status: "Unpaid" },
  { id: "INV-IMP-002", orderId: "IMP-ORD-002", amount: "$75,000", dueDate: "2026-08-25", status: "Paid" },
]

export default function Page() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Commercial Invoices</h1>
      </div>
      <Card className="shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300">
        <CardHeader className="bg-white/80 backdrop-blur-md">
          <CardTitle>Invoices</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice ID</TableHead>
                <TableHead>Order ID</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MOCK_INVOICES.map((inv) => (
                <TableRow key={inv.id} className="even:bg-slate-50/50 hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300">
                  <TableCell className="font-medium">{inv.id}</TableCell>
                  <TableCell>{inv.orderId}</TableCell>
                  <TableCell>{inv.amount}</TableCell>
                  <TableCell>{inv.dueDate}</TableCell>
                  <TableCell>{inv.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
