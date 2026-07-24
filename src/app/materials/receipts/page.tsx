import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Plus, Package } from 'lucide-react';

const DUMMY_RECEIPTS = [
  { id: 'GR-8001', poNumber: 'PO-45001', supplier: 'Global Metals Inc.', date: '2026-07-20', status: 'Completed', location: 'Warehouse A' },
  { id: 'GR-8002', poNumber: 'PO-45002', supplier: 'TechEquip Corp', date: '2026-07-21', status: 'In Inspection', location: 'Dock 1' },
  { id: 'GR-8003', poNumber: 'PO-45005', supplier: 'ChemSupply Ltd.', date: '2026-07-22', status: 'Pending', location: 'Dock 2' },
];

export default function ReceiptsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Goods Receipts</h1>
          <p className="text-muted-foreground mt-1">Manage inbound deliveries and receipts (SAP MM-IM).</p>
        </div>
        <Link href="/materials/receipts/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Receipt
          </Button>
        </Link>
      </div>

      <Card className="hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <CardHeader className="bg-white/80 backdrop-blur-md">
          <CardTitle>Recent Goods Receipts</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader className="bg-white/80 backdrop-blur-md">
              <TableRow className="hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 even:bg-slate-50/50">
                <TableHead>Receipt ID</TableHead>
                <TableHead>PO Number</TableHead>
                <TableHead>Supplier</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {DUMMY_RECEIPTS.map((rec) => (
                <TableRow key={rec.id} className="hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 even:bg-slate-50/50">
                  <TableCell className="font-medium">{rec.id}</TableCell>
                  <TableCell>{rec.poNumber}</TableCell>
                  <TableCell>{rec.supplier}</TableCell>
                  <TableCell>{rec.date}</TableCell>
                  <TableCell>{rec.location}</TableCell>
                  <TableCell>
                    <Badge variant={rec.status === 'Completed' ? 'default' : rec.status === 'In Inspection' ? 'secondary' : 'outline'}>
                      {rec.status}
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
