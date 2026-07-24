import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Truck, Plus } from 'lucide-react';

const tankers = [
  { id: 'TNK-001', licensePlate: 'KAA 123A', capacity: 30000, driver: 'John Doe', status: 'Active' },
  { id: 'TNK-002', licensePlate: 'KBB 456B', capacity: 40000, driver: 'Jane Smith', status: 'Maintenance' },
];

export default function Page() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
          <Truck className="h-8 w-8" />
          Tankers
        </h1>
        <Link href="/omc/tankers/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Tanker
          </Button>
        </Link>
      </div>

      <Card className="bg-white/80 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[1px] transition-all duration-300">
        <CardHeader>
          <CardTitle>Tanker Fleet</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>License Plate</TableHead>
                <TableHead>Capacity (L)</TableHead>
                <TableHead>Driver</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tankers.map((tanker) => (
                <TableRow key={tanker.id} className="even:bg-slate-50/50 hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300">
                  <TableCell className="font-medium">{tanker.id}</TableCell>
                  <TableCell>{tanker.licensePlate}</TableCell>
                  <TableCell>{tanker.capacity.toLocaleString()}</TableCell>
                  <TableCell>{tanker.driver}</TableCell>
                  <TableCell>{tanker.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
