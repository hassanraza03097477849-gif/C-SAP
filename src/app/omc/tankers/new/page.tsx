import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Truck, ArrowLeft } from 'lucide-react';

export default function Page() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href="/omc/tankers">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            <Truck className="h-8 w-8" />
            New Tanker
          </h1>
        </div>
      </div>

      <Card className="max-w-2xl bg-white/80 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[1px] transition-all duration-300">
        <CardHeader>
          <CardTitle>Tanker Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="licensePlate">License Plate</Label>
                <Input id="licensePlate" placeholder="e.g. KAA 123A" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="capacity">Capacity (L)</Label>
                <Input id="capacity" type="number" placeholder="e.g. 30000" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="driver">Assigned Driver</Label>
              <Input id="driver" placeholder="Driver Name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <select id="status" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                <option>Active</option>
                <option>Maintenance</option>
                <option>Inactive</option>
              </select>
            </div>
            <div className="pt-4 flex justify-end gap-2">
              <Link href="/omc/tankers">
                <Button variant="outline" type="button">Cancel</Button>
              </Link>
              <Button type="submit">Save Tanker</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}