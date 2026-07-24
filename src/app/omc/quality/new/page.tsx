import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { CheckCircle, ArrowLeft } from 'lucide-react';

export default function Page() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href="/omc/quality">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            <CheckCircle className="h-8 w-8" />
            New Quality Test
          </h1>
        </div>
      </div>

      <Card className="max-w-2xl bg-white/80 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[1px] transition-all duration-300">
        <CardHeader>
          <CardTitle>Test Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="batchNo">Batch No</Label>
                <Input id="batchNo" placeholder="e.g. B-001" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="product">Product</Label>
                <select id="product" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option>PMS</option>
                  <option>AGO</option>
                  <option>DPK</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="inspector">Inspector Name</Label>
              <Input id="inspector" placeholder="e.g. Dr. John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="result">Result</Label>
              <select id="result" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                <option>Pass</option>
                <option>Fail</option>
              </select>
            </div>
            <div className="pt-4 flex justify-end gap-2">
              <Link href="/omc/quality">
                <Button variant="outline" type="button">Cancel</Button>
              </Link>
              <Button type="submit">Log Test</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}