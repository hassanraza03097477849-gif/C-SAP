import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { PackageOpen } from "lucide-react"

const dispatches = [
  { dispatchId: "DSP-5001", deliveryRef: "DEL-8001", carrier: "FedEx", vehicleNo: "FX-102", status: "Dispatched" },
  { dispatchId: "DSP-5002", deliveryRef: "DEL-8002", carrier: "UPS", vehicleNo: "UP-404", status: "Loading" },
]

export default function Page() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] mb-6">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Dispatches (Goods Issue)</h1>
      </div>
      <Card className="shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md border-slate-200/60">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><PackageOpen className="w-5 h-5" /> Post Goods Issue (PGI) Log</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Dispatch ID</TableHead>
                <TableHead>Delivery Ref</TableHead>
                <TableHead>Carrier / Forwarder</TableHead>
                <TableHead>Vehicle No.</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dispatches.map((d) => (
                <TableRow key={d.dispatchId} className="hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 even:bg-slate-50/50">
                  <TableCell className="font-medium">{d.dispatchId}</TableCell>
                  <TableCell>{d.deliveryRef}</TableCell>
                  <TableCell>{d.carrier}</TableCell>
                  <TableCell>{d.vehicleNo}</TableCell>
                  <TableCell>
                    <Badge variant={d.status === 'Dispatched' ? 'secondary' : 'default'}>{d.status}</Badge>
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
