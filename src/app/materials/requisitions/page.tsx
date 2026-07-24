import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Plus, Search, FileText } from 'lucide-react';

const DUMMY_REQUISITIONS = [
  { id: 'PR-1001', requestor: 'John Doe', department: 'Manufacturing', item: 'Steel Sheets', quantity: 50, date: '2026-07-20', status: 'Approved' },
  { id: 'PR-1002', requestor: 'Jane Smith', department: 'Maintenance', item: 'Lubricant Oil', quantity: 10, date: '2026-07-21', status: 'Pending' },
  { id: 'PR-1003', requestor: 'Bob Johnson', department: 'Operations', item: 'Safety Helmets', quantity: 200, date: '2026-07-22', status: 'Rejected' },
];

export default function RequisitionsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Purchase Requisitions</h1>
          <p className="text-muted-foreground mt-1">Manage internal material requests (SAP MM-PUR).</p>
        </div>
        <Link href="/materials/requisitions/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Requisition
          </Button>
        </Link>
      </div>

      <Card className="hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <CardHeader className="bg-white/80 backdrop-blur-md">
          <CardTitle>Recent Requisitions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader className="bg-white/80 backdrop-blur-md">
              <TableRow className="hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 even:bg-slate-50/50">
                <TableHead>Requisition ID</TableHead>
                <TableHead>Requestor</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Item</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {DUMMY_REQUISITIONS.map((req) => (
                <TableRow key={req.id} className="hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 even:bg-slate-50/50">
                  <TableCell className="font-medium">{req.id}</TableCell>
                  <TableCell>{req.requestor}</TableCell>
                  <TableCell>{req.department}</TableCell>
                  <TableCell>{req.item}</TableCell>
                  <TableCell>{req.quantity}</TableCell>
                  <TableCell>{req.date}</TableCell>
                  <TableCell>
                    <Badge variant={req.status === 'Approved' ? 'default' : req.status === 'Rejected' ? 'destructive' : 'secondary'}>
                      {req.status}
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
