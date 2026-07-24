import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { CheckSquare, FileWarning } from 'lucide-react';

const DUMMY_INVOICES = [
  { id: 'INV-9001', poNumber: 'PO-45001', supplier: 'Global Metals Inc.', amount: 5400.00, date: '2026-07-21', status: 'Matched' },
  { id: 'INV-9002', poNumber: 'PO-45002', supplier: 'TechEquip Corp', amount: 1250.00, date: '2026-07-22', status: 'Discrepancy' },
  { id: 'INV-9003', poNumber: 'PO-45003', supplier: 'ChemSupply Ltd.', amount: 890.00, date: '2026-07-22', status: 'Pending Review' },
];

export default function VerificationPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Logistics Invoice Verification</h1>
          <p className="text-muted-foreground mt-1">Verify incoming invoices against POs and Goods Receipts (SAP MM-LIV).</p>
        </div>
      </div>

      <Card className="hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <CardHeader className="bg-white/80 backdrop-blur-md">
          <CardTitle>Pending Invoices</CardTitle>
          <CardDescription>Three-way matching process (PO - GR - Invoice).</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader className="bg-white/80 backdrop-blur-md">
              <TableRow className="hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 even:bg-slate-50/50">
                <TableHead>Invoice ID</TableHead>
                <TableHead>PO Number</TableHead>
                <TableHead>Supplier</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Amount ($)</TableHead>
                <TableHead>Match Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {DUMMY_INVOICES.map((inv) => (
                <TableRow key={inv.id} className="hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 even:bg-slate-50/50">
                  <TableCell className="font-medium">{inv.id}</TableCell>
                  <TableCell>{inv.poNumber}</TableCell>
                  <TableCell>{inv.supplier}</TableCell>
                  <TableCell>{inv.date}</TableCell>
                  <TableCell className="text-right">{inv.amount.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge variant={inv.status === 'Matched' ? 'default' : inv.status === 'Discrepancy' ? 'destructive' : 'secondary'}>
                      {inv.status === 'Discrepancy' && <FileWarning className="w-3 h-3 mr-1 inline" />}
                      {inv.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button size="sm" variant={inv.status === 'Matched' ? 'default' : 'outline'}>
                      {inv.status === 'Matched' ? 'Post' : 'Review'}
                    </Button>
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
