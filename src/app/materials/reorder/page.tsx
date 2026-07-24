import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { RefreshCw, AlertCircle } from 'lucide-react';

const DUMMY_REORDER = [
  { id: 'MAT-2055', name: 'Aluminium Coils', stock: 12, reorderPoint: 50, eoq: 100, status: 'Critical', supplier: 'V-5001' },
  { id: 'MAT-3091', name: 'Packaging Tape', stock: 45, reorderPoint: 50, eoq: 200, status: 'Warning', supplier: 'V-5002' },
  { id: 'MAT-4102', name: 'Safety Gloves', stock: 15, reorderPoint: 20, eoq: 50, status: 'Warning', supplier: 'V-5003' },
];

export default function ReorderPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">MRP / Reorder Planning</h1>
          <p className="text-muted-foreground mt-1">Materials planning and reorder point monitoring (SAP MM-CBP).</p>
        </div>
        <Button>
          <RefreshCw className="mr-2 h-4 w-4" />
          Run MRP
        </Button>
      </div>

      <Card className="hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <CardHeader className="bg-white/80 backdrop-blur-md">
          <CardTitle>Materials Below Reorder Point</CardTitle>
          <CardDescription>Items that require immediate procurement action.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader className="bg-white/80 backdrop-blur-md">
              <TableRow className="hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 even:bg-slate-50/50">
                <TableHead>Material ID</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Current Stock</TableHead>
                <TableHead className="text-right">Reorder Point</TableHead>
                <TableHead className="text-right">EOQ (Order Qty)</TableHead>
                <TableHead>Primary Supplier</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {DUMMY_REORDER.map((item) => (
                <TableRow key={item.id} className="hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 even:bg-slate-50/50">
                  <TableCell className="font-medium">{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell className="text-right font-bold text-red-600">{item.stock}</TableCell>
                  <TableCell className="text-right">{item.reorderPoint}</TableCell>
                  <TableCell className="text-right">{item.eoq}</TableCell>
                  <TableCell>{item.supplier}</TableCell>
                  <TableCell>
                    <Badge variant={item.status === 'Critical' ? 'destructive' : 'secondary'}>
                      {item.status === 'Critical' && <AlertCircle className="w-3 h-3 mr-1 inline" />}
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline">Create PR</Button>
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
