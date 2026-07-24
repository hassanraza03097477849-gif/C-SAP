import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const MOCK_CUSTOMS = [
  { boeNumber: "BOE-993821", shipmentId: "SHP-001", dutyAmount: "₹1,200,000", status: "Assessment", paymentStatus: "Pending" },
  { boeNumber: "BOE-993822", shipmentId: "SHP-002", dutyAmount: "₹850,000", status: "Out of Charge", paymentStatus: "Paid" },
]

export default function Page() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Customs & Duty</h1>
      </div>
      <Card className="shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300">
        <CardHeader className="bg-white/80 backdrop-blur-md">
          <CardTitle>Bill of Entry (BOE) Records</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>BOE Number</TableHead>
                <TableHead>Shipment ID</TableHead>
                <TableHead>Duty Amount</TableHead>
                <TableHead>Customs Status</TableHead>
                <TableHead>Payment Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MOCK_CUSTOMS.map((record) => (
                <TableRow key={record.boeNumber} className="even:bg-slate-50/50 hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300">
                  <TableCell className="font-medium">{record.boeNumber}</TableCell>
                  <TableCell>{record.shipmentId}</TableCell>
                  <TableCell>{record.dutyAmount}</TableCell>
                  <TableCell>{record.status}</TableCell>
                  <TableCell>{record.paymentStatus}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
