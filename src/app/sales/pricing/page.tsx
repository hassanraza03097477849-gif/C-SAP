import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus } from "lucide-react"
import Link from "next/link"

const pricingConditions = [
  { id: "PRC-100", type: "Base Price", material: "MAT-01", amount: "$120.00", currency: "USD", validTo: "2026-12-31" },
  { id: "PRC-101", type: "Discount", material: "MAT-01", amount: "10%", currency: "-", validTo: "2026-10-31" },
  { id: "PRC-102", type: "Base Price", material: "MAT-02", amount: "$450.00", currency: "USD", validTo: "2026-12-31" },
]

export default function Page() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] mb-6">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Pricing Conditions</h1>
        <Link href="/sales/pricing/new">
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_4px_20px_-4px_rgba(52,211,153,0.3)] hover:shadow-[0_4px_20px_-4px_rgba(52,211,153,0.5)] transition-all"><Plus className="mr-2 h-4 w-4" /> New Pricing Condition</Button>
        </Link>
      </div>
      <Card className="shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md border-slate-200/60">
        <CardHeader>
          <CardTitle>Active Pricing</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Condition ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Material</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Valid To</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pricingConditions.map((p) => (
                <TableRow key={p.id} className="hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 even:bg-slate-50/50">
                  <TableCell className="font-medium">{p.id}</TableCell>
                  <TableCell>{p.type}</TableCell>
                  <TableCell>{p.material}</TableCell>
                  <TableCell>{p.amount} {p.currency !== "-" ? p.currency : ""}</TableCell>
                  <TableCell>{p.validTo}</TableCell>
                  <TableCell><Badge>Active</Badge></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
