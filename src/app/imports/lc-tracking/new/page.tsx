import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function Page() {
  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Apply for New LC</h1>
        <Link href="/imports/lc-tracking">
          <Button variant="outline">Cancel</Button>
        </Link>
      </div>
      <Card className="shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300">
        <CardHeader className="bg-white/80 backdrop-blur-md">
          <CardTitle>LC Application Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="bank">Issuing Bank</Label>
              <Input id="bank" placeholder="Enter bank name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount">Amount (PKR)</Label>
              <Input id="amount" type="number" placeholder="0.00" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="expiry">Expiry Date</Label>
              <Input id="expiry" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="orderId">Associated Order ID</Label>
              <Input id="orderId" placeholder="e.g. IMP-ORD-001" />
            </div>
          </div>
          <Button className="w-full">Submit Application</Button>
        </CardContent>
      </Card>
    </div>
  )
}