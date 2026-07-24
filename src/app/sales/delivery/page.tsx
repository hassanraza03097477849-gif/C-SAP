import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Truck } from "lucide-react"

const deliveries = [
  { id: "DEL-8001", order: "ORD-991", customer: "Acme Corp", date: "2026-07-22", status: "In Transit" },
  { id: "DEL-8002", order: "ORD-992", customer: "Global Tech", date: "2026-07-23", status: "Processing" },
  { id: "DEL-8003", order: "ORD-993", customer: "Stark Industries", date: "2026-07-20", status: "Delivered" },
]

export default function Page() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] mb-6">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Deliveries</h1>
      </div>
      <Card className="shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md border-slate-200/60">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Truck className="w-5 h-5" /> Delivery Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Delivery ID</TableHead>
                <TableHead>Sales Order</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Planned Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {deliveries.map((d) => (
                <TableRow key={d.id} className="hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 even:bg-slate-50/50">
                  <TableCell className="font-medium">{d.id}</TableCell>
                  <TableCell>{d.order}</TableCell>
                  <TableCell>{d.customer}</TableCell>
                  <TableCell>{d.date}</TableCell>
                  <TableCell>
                    <Badge variant={d.status === 'Delivered' ? 'outline' : 'default'}>{d.status}</Badge>
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
