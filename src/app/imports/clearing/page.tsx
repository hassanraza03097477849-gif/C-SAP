import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const MOCK_CLEARING = [
  { id: "CLR-001", shipmentId: "SHP-001", agent: "FastTrack Logistics", status: "Documentation", date: "2026-08-06" },
  { id: "CLR-002", shipmentId: "SHP-002", agent: "SafeWay Forwarders", status: "Cleared", date: "2026-08-14" },
]

export default function Page() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Clearing Agents</h1>
      </div>
      <Card className="shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300">
        <CardHeader className="bg-white/80 backdrop-blur-md">
          <CardTitle>Clearing Jobs</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Clearing ID</TableHead>
                <TableHead>Shipment ID</TableHead>
                <TableHead>Agent</TableHead>
                <TableHead>Expected Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MOCK_CLEARING.map((job) => (
                <TableRow key={job.id} className="even:bg-slate-50/50 hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300">
                  <TableCell className="font-medium">{job.id}</TableCell>
                  <TableCell>{job.shipmentId}</TableCell>
                  <TableCell>{job.agent}</TableCell>
                  <TableCell>{job.date}</TableCell>
                  <TableCell>{job.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
