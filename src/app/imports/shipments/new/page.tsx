import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function Page() {
  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Add New Shipment</h1>
        <Link href="/imports/shipments">
          <Button variant="outline">Cancel</Button>
        </Link>
      </div>
      <Card className="shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300">
        <CardHeader className="bg-white/80 backdrop-blur-md">
          <CardTitle>Shipment Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="vessel">Vessel Name</Label>
              <Input id="vessel" placeholder="Enter vessel name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="origin">Port of Origin</Label>
              <Input id="origin" placeholder="e.g. Islamabad" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="destination">Port of Destination</Label>
              <Input id="destination" placeholder="e.g. Mumbai" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="eta">ETA</Label>
              <Input id="eta" type="date" />
            </div>
          </div>
          <Button className="w-full">Track Shipment</Button>
        </CardContent>
      </Card>
    </div>
  )
}