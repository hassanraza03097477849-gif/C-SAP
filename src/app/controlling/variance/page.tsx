import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const varianceData = [
  { costCenter: "CC-3000 (IT)", budget: "$1,200,000", actual: "$1,350,000", variance: "-$150,000", variancePct: "-12.5%", status: "over" },
  { costCenter: "CC-4000 (Marketing)", budget: "$800,000", actual: "$780,000", variance: "+$20,000", variancePct: "+2.5%", status: "under" },
  { costCenter: "CC-2000 (HR)", budget: "$300,000", actual: "$310,000", variance: "-$10,000", variancePct: "-3.3%", status: "over" },
  { costCenter: "CC-1000 (Mgmt)", budget: "$1,500,000", actual: "$1,450,000", variance: "+$50,000", variancePct: "+3.3%", status: "under" },
];

export default function VarianceAnalysisPage() {
  return (
    <div className="p-6 space-y-6 bg-white/5">
      <div className="bg-white/80 backdrop-blur-md p-4 rounded-lg shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] mb-4">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Variance Analysis</h1>
        <p className="text-muted-foreground mt-2">Compare actual costs against planned budgets across cost centers.</p>
      </div>

      <Card className="shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md">
        <CardHeader>
          <CardTitle>Budget vs. Actual by Cost Center</CardTitle>
          <CardDescription>Fiscal Year 2026 - Q2</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Cost Center</TableHead>
                <TableHead className="text-right">Planned Budget</TableHead>
                <TableHead className="text-right">Actual Cost</TableHead>
                <TableHead className="text-right">Variance Amount</TableHead>
                <TableHead className="text-right">Variance %</TableHead>
                <TableHead className="text-center">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {varianceData.map((item) => (
                <TableRow key={item.costCenter} className="hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 even:bg-slate-50/50">
                  <TableCell className="font-medium">{item.costCenter}</TableCell>
                  <TableCell className="text-right">{item.budget}</TableCell>
                  <TableCell className="text-right">{item.actual}</TableCell>
                  <TableCell className={`text-right font-semibold ${item.status === 'over' ? 'text-red-600' : 'text-green-600'}`}>
                    {item.variance}
                  </TableCell>
                  <TableCell className={`text-right ${item.status === 'over' ? 'text-red-600' : 'text-green-600'}`}>
                    {item.variancePct}
                  </TableCell>
                  <TableCell className="flex justify-center">
                    {item.status === 'over' ? (
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    ) : (
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    )}
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
