import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Send } from 'lucide-react';

export default function NewTransferPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/materials/transfers">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Create Transfer</h1>
          <p className="text-muted-foreground mt-1">Initiate a stock transfer between locations.</p>
        </div>
      </div>

      <Card className="max-w-2xl hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <CardHeader className="bg-white/80 backdrop-blur-md">
          <CardTitle>Transfer Details</CardTitle>
          <CardDescription>Specify material and source/destination locations.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="material">Material Code</Label>
              <Input id="material" placeholder="e.g. MAT-2001" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity</Label>
              <Input id="quantity" type="number" placeholder="0" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="source">Source Location</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="From..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wh-a">Warehouse A</SelectItem>
                  <SelectItem value="wh-b">Warehouse B</SelectItem>
                  <SelectItem value="dock-1">Dock 1</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="destination">Destination Location</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="To..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="plant-1">Plant 1</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                  <SelectItem value="wh-a">Warehouse A</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="reason">Reason for Transfer</Label>
            <Input id="reason" placeholder="e.g. Production Order 10442" />
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <Link href="/materials/transfers">
              <Button variant="outline">Cancel</Button>
            </Link>
            <Button>
              <Send className="mr-2 h-4 w-4" />
              Initiate Transfer
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}