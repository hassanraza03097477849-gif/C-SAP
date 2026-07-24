import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Plus, ArrowRightLeft } from 'lucide-react';

const DUMMY_TRANSFERS = [
  { id: 'TR-3001', material: 'Steel Sheets', qty: 20, from: 'Warehouse A', to: 'Plant 1', date: '2026-07-20', status: 'Completed' },
  { id: 'TR-3002', material: 'Lubricant Oil', qty: 5, from: 'Warehouse B', to: 'Maintenance', date: '2026-07-21', status: 'In Transit' },
  { id: 'TR-3003', material: 'Safety Helmets', qty: 50, from: 'Dock 1', to: 'Warehouse A', date: '2026-07-22', status: 'Pending' },
];

export default function TransfersPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Material Transfers</h1>
          <p className="text-muted-foreground mt-1">Internal stock transfers and movements.</p>
        </div>
        <Link href="/materials/transfers/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Transfer
          </Button>
        </Link>
      </div>

      <Card className="hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <CardHeader className="bg-white/80 backdrop-blur-md">
          <CardTitle>Transfer History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader className="bg-white/80 backdrop-blur-md">
              <TableRow className="hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 even:bg-slate-50/50">
                <TableHead>Transfer ID</TableHead>
                <TableHead>Material</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>From Location</TableHead>
                <TableHead>To Location</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {DUMMY_TRANSFERS.map((tr) => (
                <TableRow key={tr.id} className="hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 even:bg-slate-50/50">
                  <TableCell className="font-medium">{tr.id}</TableCell>
                  <TableCell>{tr.material}</TableCell>
                  <TableCell>{tr.qty}</TableCell>
                  <TableCell>{tr.from}</TableCell>
                  <TableCell>{tr.to}</TableCell>
                  <TableCell>{tr.date}</TableCell>
                  <TableCell>
                    <Badge variant={tr.status === 'Completed' ? 'default' : tr.status === 'In Transit' ? 'secondary' : 'outline'}>
                      {tr.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
