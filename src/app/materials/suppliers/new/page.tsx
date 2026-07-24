import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Save } from 'lucide-react';

export default function NewSupplierPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/materials/suppliers">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">New Supplier</h1>
          <p className="text-muted-foreground mt-1">Create vendor master record.</p>
        </div>
      </div>

      <Card className="max-w-2xl hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <CardHeader className="bg-white/80 backdrop-blur-md">
          <CardTitle>General Data</CardTitle>
          <CardDescription>Enter supplier basic information and contact details.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Supplier Name</Label>
            <Input id="name" placeholder="Company Name" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category">Material Category</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="raw">Raw Materials</SelectItem>
                  <SelectItem value="machinery">Machinery</SelectItem>
                  <SelectItem value="chemicals">Chemicals</SelectItem>
                  <SelectItem value="services">Services</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="currency">Default Currency</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usd">PKR</SelectItem>
                  <SelectItem value="eur">PKR</SelectItem>
                  <SelectItem value="inr">INR</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact">Primary Contact Name</Label>
            <Input id="contact" placeholder="John Doe" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="contact@company.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" placeholder="+1..." />
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <Link href="/materials/suppliers">
              <Button variant="outline">Cancel</Button>
            </Link>
            <Button>
              <Save className="mr-2 h-4 w-4" />
              Save Supplier
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}