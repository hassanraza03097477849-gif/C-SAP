import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function Page() {
  return (
    <div className="p-6 space-y-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Create Pricing Condition</h1>
        <Link href="/sales/pricing">
          <Button variant="outline">Cancel</Button>
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Condition Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="type">Condition Type</Label>
              <Input id="type" placeholder="e.g. PR00 (Base Price), K004 (Material Discount)" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="material">Material</Label>
              <Input id="material" placeholder="Enter material code" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <Input id="amount" type="number" placeholder="0.00" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="currency">Currency / Unit</Label>
              <Input id="currency" placeholder="USD or %" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="validFrom">Valid From</Label>
              <Input id="validFrom" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="validTo">Valid To</Label>
              <Input id="validTo" type="date" />
            </div>
          </div>
          <Button className="w-full mt-4">Save Condition</Button>
        </CardContent>
      </Card>
    </div>
  )
}
