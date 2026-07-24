import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { FileText } from "lucide-react"

const statements = [
  { dealer: "Acme Corp", period: "June 2026", openingBal: "$10,000", closingBal: "$12,500", status: "Generated" },
  { dealer: "Global Tech", period: "June 2026", openingBal: "$2,000", closingBal: "$0", status: "Sent" },
]

export default function Page() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] mb-6">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Dealer Statements</h1>
      </div>
      <Card className="shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md border-slate-200/60">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><FileText className="w-5 h-5" /> Monthly Account Statements</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Dealer / Customer</TableHead>
                <TableHead>Period</TableHead>
                <TableHead>Opening Balance</TableHead>
                <TableHead>Closing Balance</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {statements.map((s, i) => (
                <TableRow key={i} className="hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 even:bg-slate-50/50">
                  <TableCell className="font-medium">{s.dealer}</TableCell>
                  <TableCell>{s.period}</TableCell>
                  <TableCell>{s.openingBal}</TableCell>
                  <TableCell>{s.closingBal}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{s.status}</Badge>
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
