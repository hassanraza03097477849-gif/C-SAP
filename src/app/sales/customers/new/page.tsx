import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function Page() {
  return (
    <div className="p-6 space-y-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Create Customer</h1>
        <Link href="/sales/customers">
          <Button variant="outline">Cancel</Button>
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Customer Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Customer Name</Label>
              <Input id="name" placeholder="Enter name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type">Customer Type</Label>
              <Input id="type" placeholder="e.g. Enterprise, SMB" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" placeholder="123 Main St" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="credit">Credit Limit</Label>
              <Input id="credit" type="number" placeholder="0.00" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="taxId">Tax ID</Label>
              <Input id="taxId" placeholder="TAX-XXXXXX" />
            </div>
          </div>
          <Button className="w-full mt-4">Save Customer</Button>
        </CardContent>
      </Card>
    </div>
  )
}
