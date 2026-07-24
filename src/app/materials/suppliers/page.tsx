import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Plus, Building2 } from 'lucide-react';

const DUMMY_SUPPLIERS = [
  { id: 'V-5001', name: 'Global Metals Inc.', category: 'Raw Materials', contact: 'Alice Brown', rating: 'A', status: 'Active' },
  { id: 'V-5002', name: 'TechEquip Corp', category: 'Machinery', contact: 'Tom Wilson', rating: 'B', status: 'Active' },
  { id: 'V-5003', name: 'ChemSupply Ltd.', category: 'Chemicals', contact: 'Sarah Connor', rating: 'C', status: 'Inactive' },
];

export default function SuppliersPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Suppliers</h1>
          <p className="text-muted-foreground mt-1">Vendor Master Data (SAP MM-PUR).</p>
        </div>
        <Link href="/materials/suppliers/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Supplier
          </Button>
        </Link>
      </div>

      <Card className="hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <CardHeader className="bg-white/80 backdrop-blur-md">
          <CardTitle>Supplier Directory</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader className="bg-white/80 backdrop-blur-md">
              <TableRow className="hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 even:bg-slate-50/50">
                <TableHead>Vendor ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {DUMMY_SUPPLIERS.map((sup) => (
                <TableRow key={sup.id} className="hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 even:bg-slate-50/50">
                  <TableCell className="font-medium">{sup.id}</TableCell>
                  <TableCell>{sup.name}</TableCell>
                  <TableCell>{sup.category}</TableCell>
                  <TableCell>{sup.contact}</TableCell>
                  <TableCell>{sup.rating}</TableCell>
                  <TableCell>
                    <Badge variant={sup.status === 'Active' ? 'default' : 'secondary'}>
                      {sup.status}
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
