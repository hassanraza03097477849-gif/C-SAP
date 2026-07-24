import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { FileText, Plus } from 'lucide-react';

const settlements = [
  { id: 'STL-1001', dealer: 'Dealer A', period: 'July 2026', amount: 500000, status: 'Pending' },
  { id: 'STL-1002', dealer: 'Dealer B', period: 'July 2026', amount: 750000, status: 'Paid' },
];

export default function Page() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
          <FileText className="h-8 w-8" />
          Settlements
        </h1>
        <Link href="/omc/settlements/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Settlement
          </Button>
        </Link>
      </div>

      <Card className="bg-white/80 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[1px] transition-all duration-300">
        <CardHeader>
          <CardTitle>Recent Settlements</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Settlement ID</TableHead>
                <TableHead>Dealer</TableHead>
                <TableHead>Period</TableHead>
                <TableHead>Amount ($)</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {settlements.map((settlement) => (
                <TableRow key={settlement.id} className="even:bg-slate-50/50 hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300">
                  <TableCell className="font-medium">{settlement.id}</TableCell>
                  <TableCell>{settlement.dealer}</TableCell>
                  <TableCell>{settlement.period}</TableCell>
                  <TableCell>{settlement.amount.toLocaleString()}</TableCell>
                  <TableCell>{settlement.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
