"use client";

import { useState } from "react";
import { wetStockReconciliation } from "@/lib/mockData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, RefreshCw, AlertCircle } from "lucide-react";
import { toast } from "sonner";

export default function WetStockPage() {
  const [data, setData] = useState(wetStockReconciliation);
  const [isReconciling, setIsReconciling] = useState(false);

  const handleReconcile = () => {
    setIsReconciling(true);
    setTimeout(() => {
      setIsReconciling(false);
      toast.success("Wet-stock reconciliation completed", {
        description: "All physical vs book stocks have been synchronized.",
      });
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Wet-Stock Reconciliation</h1>
          <p className="text-slate-500 mt-1">Monitor fuel gains and losses across all depots.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline"><Download className="mr-2 h-4 w-4" /> Export Report</Button>
          <Button 
            className="bg-emerald-600 hover:bg-emerald-700 text-white" 
            onClick={handleReconcile}
            disabled={isReconciling}
          >
            <RefreshCw className={`mr-2 h-4 w-4 ${isReconciling ? 'animate-spin' : ''}`} /> 
            {isReconciling ? 'Reconciling...' : 'Run Reconciliation'}
          </Button>
        </div>
      </div>

      <Card className="bg-white/80 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] hover:-translate-y-[1px] transition-all duration-300">
        <CardHeader>
          <CardTitle>Daily Reconciliation Log</CardTitle>
          <CardDescription>Comparison of ERP Book Stock against Physical Tank Dips.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border border-slate-200">
            <Table>
              <TableHeader className="bg-slate-50">
                <TableRow>
                  <TableHead>Recon ID</TableHead>
                  <TableHead>Depot</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead className="text-right">Book Stock (L)</TableHead>
                  <TableHead className="text-right">Physical Stock (L)</TableHead>
                  <TableHead className="text-right">Variance</TableHead>
                  <TableHead className="w-[120px] text-center">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.id} className="even:bg-slate-50/50 hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300">
                    <TableCell className="font-medium text-slate-900">{row.id}</TableCell>
                    <TableCell>{row.depot}</TableCell>
                    <TableCell>{row.product}</TableCell>
                    <TableCell className="text-right font-mono">{row.bookStock.toLocaleString()}</TableCell>
                    <TableCell className="text-right font-mono">{row.physicalStock.toLocaleString()}</TableCell>
                    <TableCell className={`text-right font-mono font-bold ${row.variance < 0 ? 'text-red-600' : row.variance > 0 ? 'text-emerald-600' : 'text-slate-600'}`}>
                      {row.variance > 0 ? '+' : ''}{row.variance.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-center">
                      {row.status === "Loss" ? (
                        <Badge variant="destructive" className="flex items-center gap-1 justify-center">
                          <AlertCircle className="w-3 h-3" /> Loss
                        </Badge>
                      ) : row.status === "Gain" ? (
                        <Badge className="bg-emerald-500 hover:bg-emerald-600">Gain</Badge>
                      ) : (
                        <Badge variant="secondary">Exact</Badge>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
