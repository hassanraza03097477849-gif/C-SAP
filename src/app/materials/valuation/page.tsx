import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, DollarSign } from 'lucide-react';

const DUMMY_VALUATIONS = [
  { id: 'MAT-1001', name: 'Steel Sheets', class: 'Raw Material', stock: 500, price: 45.00, total: 22500.00, method: 'Moving Average' },
  { id: 'MAT-1002', name: 'Lubricant Oil', class: 'Consumable', stock: 150, price: 12.50, total: 1875.00, method: 'Standard' },
  { id: 'MAT-1003', name: 'Engine Block', class: 'Semi-Finished', stock: 20, price: 850.00, total: 17000.00, method: 'Standard' },
];

export default function ValuationPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Material Valuation</h1>
        <p className="text-muted-foreground mt-1">Inventory valuation and price control (SAP MM-IV).</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-white/80 backdrop-blur-md">
            <CardTitle className="text-sm font-medium">Total Inventory Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$41,375.00</div>
            <p className="text-xs text-muted-foreground">+2.5% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Card className="hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <CardHeader className="bg-white/80 backdrop-blur-md">
          <CardTitle>Current Valuations</CardTitle>
          <CardDescription>Stock values based on current price control settings.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader className="bg-white/80 backdrop-blur-md">
              <TableRow className="hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 even:bg-slate-50/50">
                <TableHead>Material ID</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Valuation Class</TableHead>
                <TableHead className="text-right">Stock Qty</TableHead>
                <TableHead className="text-right">Unit Price ($)</TableHead>
                <TableHead className="text-right">Total Value ($)</TableHead>
                <TableHead>Price Control</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {DUMMY_VALUATIONS.map((val) => (
                <TableRow key={val.id} className="hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 even:bg-slate-50/50">
                  <TableCell className="font-medium">{val.id}</TableCell>
                  <TableCell>{val.name}</TableCell>
                  <TableCell>{val.class}</TableCell>
                  <TableCell className="text-right">{val.stock}</TableCell>
                  <TableCell className="text-right">{val.price.toFixed(2)}</TableCell>
                  <TableCell className="text-right">{val.total.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{val.method}</Badge>
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
