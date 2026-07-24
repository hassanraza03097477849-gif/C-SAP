import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Undo2 } from "lucide-react"

const returns = [
  { id: "RET-001", customer: "Acme Corp", orderRef: "ORD-901", reason: "Damaged in transit", status: "Approved" },
  { id: "RET-002", customer: "Global Tech", orderRef: "ORD-945", reason: "Wrong item shipped", status: "Pending Inspection" },
]

export default function Page() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] mb-6">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Sales Returns</h1>
      </div>
      <Card className="shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md border-slate-200/60">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Undo2 className="w-5 h-5" /> Return Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Return ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Original Order</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {returns.map((r) => (
                <TableRow key={r.id} className="hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 even:bg-slate-50/50">
                  <TableCell className="font-medium">{r.id}</TableCell>
                  <TableCell>{r.customer}</TableCell>
                  <TableCell>{r.orderRef}</TableCell>
                  <TableCell>{r.reason}</TableCell>
                  <TableCell>
                    <Badge variant={r.status === 'Approved' ? 'secondary' : 'default'}>{r.status}</Badge>
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
