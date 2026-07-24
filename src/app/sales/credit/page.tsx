import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ShieldAlert } from "lucide-react"

const creditManagement = [
  { customer: "Acme Corp", limit: "$50,000", exposure: "$42,000", utilization: "84%", status: "Good" },
  { customer: "Global Tech", limit: "$10,000", exposure: "$9,800", utilization: "98%", status: "Warning" },
  { customer: "Stark Industries", limit: "$100,000", exposure: "$110,000", utilization: "110%", status: "Blocked" },
]

export default function Page() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] mb-6">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Credit Management</h1>
      </div>
      <Card className="shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md border-slate-200/60">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-destructive" /> Customer Credit Exposure</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Credit Limit</TableHead>
                <TableHead>Current Exposure</TableHead>
                <TableHead>Utilization</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {creditManagement.map((c, i) => (
                <TableRow key={i} className="hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 even:bg-slate-50/50">
                  <TableCell className="font-medium">{c.customer}</TableCell>
                  <TableCell>{c.limit}</TableCell>
                  <TableCell>{c.exposure}</TableCell>
                  <TableCell>{c.utilization}</TableCell>
                  <TableCell>
                    <Badge variant={c.status === 'Blocked' ? 'destructive' : c.status === 'Warning' ? 'outline' : 'secondary'}>
                      {c.status}
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
