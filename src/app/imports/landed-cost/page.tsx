import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const MOCK_COSTS = [
  { orderId: "IMP-ORD-001", fobValue: "$150,000", freight: "$5,000", insurance: "$1,500", customsDuty: "$14,000", clearing: "$500", total: "$171,000" },
  { orderId: "IMP-ORD-002", fobValue: "$75,000", freight: "$2,500", insurance: "$800", customsDuty: "$7,000", clearing: "$400", total: "$85,700" },
]

export default function Page() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Landed Cost Computation</h1>
      </div>
      <Card className="shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300">
        <CardHeader className="bg-white/80 backdrop-blur-md">
          <CardTitle>Cost Breakdown per Order</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>FOB Value</TableHead>
                <TableHead>Freight</TableHead>
                <TableHead>Insurance</TableHead>
                <TableHead>Customs Duty</TableHead>
                <TableHead>Clearing & Misc</TableHead>
                <TableHead className="text-right">Total Landed Cost</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MOCK_COSTS.map((cost) => (
                <TableRow key={cost.orderId} className="even:bg-slate-50/50 hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300">
                  <TableCell className="font-medium">{cost.orderId}</TableCell>
                  <TableCell>{cost.fobValue}</TableCell>
                  <TableCell>{cost.freight}</TableCell>
                  <TableCell>{cost.insurance}</TableCell>
                  <TableCell>{cost.customsDuty}</TableCell>
                  <TableCell>{cost.clearing}</TableCell>
                  <TableCell className="text-right font-bold">{cost.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
