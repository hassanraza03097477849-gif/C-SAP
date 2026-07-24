import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function Page() {
  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Create Import Order</h1>
        <Link href="/imports/orders">
          <Button variant="outline">Cancel</Button>
        </Link>
      </div>
      <Card className="shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300">
        <CardHeader className="bg-white/80 backdrop-blur-md">
          <CardTitle>Order Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="supplier">Supplier</Label>
              <Input id="supplier" placeholder="Enter supplier name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="item">Item</Label>
              <Input id="item" placeholder="Enter item name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity (MT)</Label>
              <Input id="quantity" type="number" placeholder="0" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Expected Date</Label>
              <Input id="date" type="date" />
            </div>
          </div>
          <Button className="w-full">Submit Order</Button>
        </CardContent>
      </Card>
    </div>
  )
}
