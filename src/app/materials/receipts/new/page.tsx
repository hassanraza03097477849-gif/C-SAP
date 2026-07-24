import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export default function NewReceiptPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/materials/receipts">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Post Goods Receipt</h1>
          <p className="text-muted-foreground mt-1">Record received materials against a PO.</p>
        </div>
      </div>

      <Card className="max-w-2xl hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <CardHeader className="bg-white/80 backdrop-blur-md">
          <CardTitle>Receipt Information</CardTitle>
          <CardDescription>Enter details of the received goods.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="poNumber">Purchase Order Number</Label>
            <Input id="poNumber" placeholder="PO-XXXXX" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="deliveryNote">Delivery Note</Label>
            <Input id="deliveryNote" placeholder="Delivery Note ID" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="location">Storage Location</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wh-a">Warehouse A</SelectItem>
                  <SelectItem value="wh-b">Warehouse B</SelectItem>
                  <SelectItem value="dock-1">Dock 1</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Posting Date</Label>
              <Input id="date" type="date" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="condition">Material Condition</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select condition" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="good">Good / Accepted</SelectItem>
                <SelectItem value="damaged">Damaged</SelectItem>
                <SelectItem value="inspection">Needs Inspection</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <Link href="/materials/receipts">
              <Button variant="outline">Cancel</Button>
            </Link>
            <Button>
              <CheckCircle className="mr-2 h-4 w-4" />
              Post Receipt
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
