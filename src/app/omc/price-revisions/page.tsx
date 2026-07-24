import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { TrendingUp, Plus } from 'lucide-react';

const revisions = [
  { id: 'PR-2026-07', product: 'PMS', oldPrice: 150.00, newPrice: 155.00, effectiveDate: '2026-07-01', status: 'Active' },
  { id: 'PR-2026-06', product: 'AGO', oldPrice: 145.00, newPrice: 142.00, effectiveDate: '2026-06-15', status: 'Expired' },
];

export default function Page() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
          <TrendingUp className="h-8 w-8" />
          Price Revisions
        </h1>
        <Link href="/omc/price-revisions/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Revision
          </Button>
        </Link>
      </div>

      <Card className="bg-white/80 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[1px] transition-all duration-300">
        <CardHeader>
          <CardTitle>Historical Revisions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Old Price</TableHead>
                <TableHead>New Price</TableHead>
                <TableHead>Effective Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {revisions.map((rev) => (
                <TableRow key={rev.id} className="even:bg-slate-50/50 hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300">
                  <TableCell className="font-medium">{rev.id}</TableCell>
                  <TableCell>{rev.product}</TableCell>
                  <TableCell>${rev.oldPrice.toFixed(2)}</TableCell>
                  <TableCell>${rev.newPrice.toFixed(2)}</TableCell>
                  <TableCell>{rev.effectiveDate}</TableCell>
                  <TableCell>{rev.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
