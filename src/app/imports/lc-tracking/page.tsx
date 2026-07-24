import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus } from "lucide-react"
import Link from "next/link"

const MOCK_LCS = [
  { id: "LC-2026-001", bank: "Standard Chartered", amount: "$500,000", expiry: "2026-10-20", status: "Active" },
  { id: "LC-2026-002", bank: "HSBC", amount: "$250,000", expiry: "2026-11-15", status: "Pending Approval" },
]

export default function Page() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">LC Tracking</h1>
        <Link href="/imports/lc-tracking/new">
          <Button><Plus className="mr-2 h-4 w-4" /> New LC</Button>
        </Link>
      </div>
      <Card className="shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300">
        <CardHeader className="bg-white/80 backdrop-blur-md">
          <CardTitle>Letters of Credit</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>LC Number</TableHead>
                <TableHead>Issuing Bank</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Expiry Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MOCK_LCS.map((lc) => (
                <TableRow key={lc.id} className="even:bg-slate-50/50 hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300">
                  <TableCell className="font-medium">{lc.id}</TableCell>
                  <TableCell>{lc.bank}</TableCell>
                  <TableCell>{lc.amount}</TableCell>
                  <TableCell>{lc.expiry}</TableCell>
                  <TableCell>{lc.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
