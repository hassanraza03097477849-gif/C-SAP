import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DollarSign } from 'lucide-react';

const commissions = [
  { id: 'COM-001', agent: 'Agent Smith', product: 'PMS', rate: '2%', volume: 100000, total: 2000, status: 'Calculated' },
  { id: 'COM-002', agent: 'Agent Doe', product: 'AGO', rate: '1.5%', volume: 80000, total: 1200, status: 'Paid' },
];

export default function Page() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
          <DollarSign className="h-8 w-8" />
          Commissions
        </h1>
      </div>

      <Card className="bg-white/80 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[1px] transition-all duration-300">
        <CardHeader>
          <CardTitle>Commission Records</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Agent</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Rate</TableHead>
                <TableHead>Volume</TableHead>
                <TableHead>Total ($)</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {commissions.map((commission) => (
                <TableRow key={commission.id} className="even:bg-slate-50/50 hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300">
                  <TableCell className="font-medium">{commission.id}</TableCell>
                  <TableCell>{commission.agent}</TableCell>
                  <TableCell>{commission.product}</TableCell>
                  <TableCell>{commission.rate}</TableCell>
                  <TableCell>{commission.volume.toLocaleString()}</TableCell>
                  <TableCell>{commission.total.toLocaleString()}</TableCell>
                  <TableCell>{commission.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
