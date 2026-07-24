import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { CheckCircle, Plus } from 'lucide-react';

const tests = [
  { id: 'QT-991', batchNo: 'B-001', product: 'PMS', inspector: 'Dr. John', result: 'Pass', date: '2026-07-22' },
  { id: 'QT-992', batchNo: 'B-002', product: 'AGO', inspector: 'Dr. Jane', result: 'Fail', date: '2026-07-21' },
];

export default function Page() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
          <CheckCircle className="h-8 w-8" />
          Quality Control
        </h1>
        <Link href="/omc/quality/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Test
          </Button>
        </Link>
      </div>

      <Card className="bg-white/80 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[1px] transition-all duration-300">
        <CardHeader>
          <CardTitle>Recent Tests</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Test ID</TableHead>
                <TableHead>Batch No</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Inspector</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Result</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tests.map((test) => (
                <TableRow key={test.id} className="even:bg-slate-50/50 hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300">
                  <TableCell className="font-medium">{test.id}</TableCell>
                  <TableCell>{test.batchNo}</TableCell>
                  <TableCell>{test.product}</TableCell>
                  <TableCell>{test.inspector}</TableCell>
                  <TableCell>{test.date}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${test.result === 'Pass' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {test.result}
                    </span>
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
