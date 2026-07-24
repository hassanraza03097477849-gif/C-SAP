import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Activity } from 'lucide-react';

const fuelMovements = [
  { id: 'FM001', date: '2026-07-22', product: 'PMS', quantity: 50000, source: 'Depot A', destination: 'Station 1', status: 'In Transit' },
  { id: 'FM002', date: '2026-07-22', product: 'AGO', quantity: 30000, source: 'Depot B', destination: 'Station 2', status: 'Completed' },
];

export default function Page() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
          <Activity className="h-8 w-8" />
          Fuel Movement
        </h1>
      </div>

      <Card className="bg-white/80 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[1px] transition-all duration-300">
        <CardHeader>
          <CardTitle>Recent Movements</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Quantity (L)</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Destination</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fuelMovements.map((movement) => (
                <TableRow key={movement.id} className="even:bg-slate-50/50 hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300">
                  <TableCell className="font-medium">{movement.id}</TableCell>
                  <TableCell>{movement.date}</TableCell>
                  <TableCell>{movement.product}</TableCell>
                  <TableCell>{movement.quantity.toLocaleString()}</TableCell>
                  <TableCell>{movement.source}</TableCell>
                  <TableCell>{movement.destination}</TableCell>
                  <TableCell>{movement.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
