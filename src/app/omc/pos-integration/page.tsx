import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Terminal } from 'lucide-react';

const posTransactions = [
  { id: 'TXN-901', station: 'Station A', timestamp: '2026-07-22 10:15:00', amount: 50.00, method: 'Credit Card', status: 'Success' },
  { id: 'TXN-902', station: 'Station B', timestamp: '2026-07-22 10:18:22', amount: 20.00, method: 'Mobile Money', status: 'Success' },
  { id: 'TXN-903', station: 'Station A', timestamp: '2026-07-22 10:25:11', amount: 100.00, method: 'Cash', status: 'Failed' },
];

export default function Page() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
          <Terminal className="h-8 w-8" />
          POS Integration
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white/80 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[1px] transition-all duration-300">
          <CardHeader>
            <CardTitle>Active Terminals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">45 / 50</div>
          </CardContent>
        </Card>
        <Card className="bg-white/80 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[1px] transition-all duration-300">
          <CardHeader>
            <CardTitle>Daily Transaction Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$12,450.00</div>
          </CardContent>
        </Card>
        <Card className="bg-white/80 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[1px] transition-all duration-300">
          <CardHeader>
            <CardTitle>Failed Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600">1</div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white/80 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[1px] transition-all duration-300">
        <CardHeader>
          <CardTitle>Live Transactions Stream</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>TXN ID</TableHead>
                <TableHead>Station</TableHead>
                <TableHead>Timestamp</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {posTransactions.map((txn) => (
                <TableRow key={txn.id} className="even:bg-slate-50/50 hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300">
                  <TableCell className="font-medium">{txn.id}</TableCell>
                  <TableCell>{txn.station}</TableCell>
                  <TableCell>{txn.timestamp}</TableCell>
                  <TableCell>${txn.amount.toFixed(2)}</TableCell>
                  <TableCell>{txn.method}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${txn.status === 'Success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {txn.status}
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
