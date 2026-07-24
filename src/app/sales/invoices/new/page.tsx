import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function Page() {
  return (
    <div className="p-6 space-y-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Create Invoice</h1>
        <Link href="/sales/invoices">
          <Button variant="outline">Cancel</Button>
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Invoice Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="customer">Customer ID / Name</Label>
              <Input id="customer" placeholder="Search customer..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="reference">Reference Order</Label>
              <Input id="reference" placeholder="e.g. ORD-991" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Total Amount</Label>
              <Input id="amount" type="number" placeholder="0.00" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Billing Date</Label>
              <Input id="date" type="date" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Input id="notes" placeholder="Payment terms, special instructions..." />
          </div>
          <Button className="w-full mt-4">Generate Invoice</Button>
        </CardContent>
      </Card>
    </div>
  )
}