import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Save } from 'lucide-react';

export default function NewRequisitionPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/materials/requisitions">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Create Requisition</h1>
          <p className="text-muted-foreground mt-1">Submit a new material purchase requisition.</p>
        </div>
      </div>

      <Card className="max-w-2xl hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <CardHeader className="bg-white/80 backdrop-blur-md">
          <CardTitle>Requisition Details</CardTitle>
          <CardDescription>Fill in the required material information.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="department">Department</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="manufacturing">Manufacturing</SelectItem>
                <SelectItem value="operations">Operations</SelectItem>
                <SelectItem value="maintenance">Maintenance</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="material">Material Code / Description</Label>
              <Input id="material" placeholder="e.g. MAT-1052" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity</Label>
              <Input id="quantity" type="number" placeholder="0" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Required Date</Label>
            <Input id="date" type="date" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes</Label>
            <Input id="notes" placeholder="Any specific requirements..." />
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <Link href="/materials/requisitions">
              <Button variant="outline">Cancel</Button>
            </Link>
            <Button>
              <Save className="mr-2 h-4 w-4" />
              Submit Requisition
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
