import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingUp, TrendingDown } from "lucide-react";

const profitabilityData = [
  { productGroup: "Electronics", revenue: "$1,200,000", cogs: "$800,000", grossProfit: "$400,000", margin: "33.3%", trend: "up" },
  { productGroup: "Home Appliances", revenue: "$850,000", cogs: "$600,000", grossProfit: "$250,000", margin: "29.4%", trend: "down" },
  { productGroup: "Accessories", revenue: "$300,000", cogs: "$120,000", grossProfit: "$180,000", margin: "60.0%", trend: "up" },
];

export default function ProfitabilityPage() {
  return (
    <div className="p-6 space-y-6 bg-white/5">
      <div className="bg-white/80 backdrop-blur-md p-4 rounded-lg shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] mb-4">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Profitability Analysis (CO-PA)</h1>
        <p className="text-muted-foreground mt-2">Analyze profit margins by product group and market segment.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,350,000</div>
            <p className="text-xs text-muted-foreground mt-1">+12.5% from last quarter</p>
          </CardContent>
        </Card>
        <Card className="shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Gross Profit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$830,000</div>
            <p className="text-xs text-muted-foreground mt-1">+8.2% from last quarter</p>
          </CardContent>
        </Card>
        <Card className="shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Average Margin</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">35.3%</div>
            <p className="text-xs text-muted-foreground mt-1">+2.1% from last quarter</p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md">
        <CardHeader>
          <CardTitle>Profitability by Product Group</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product Group</TableHead>
                <TableHead className="text-right">Revenue</TableHead>
                <TableHead className="text-right">COGS</TableHead>
                <TableHead className="text-right">Gross Profit</TableHead>
                <TableHead className="text-right">Margin</TableHead>
                <TableHead className="text-center">Trend</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {profitabilityData.map((item) => (
                <TableRow key={item.productGroup} className="hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 even:bg-slate-50/50">
                  <TableCell className="font-medium">{item.productGroup}</TableCell>
                  <TableCell className="text-right">{item.revenue}</TableCell>
                  <TableCell className="text-right">{item.cogs}</TableCell>
                  <TableCell className="text-right font-semibold">{item.grossProfit}</TableCell>
                  <TableCell className="text-right">{item.margin}</TableCell>
                  <TableCell className="flex justify-center">
                    {item.trend === 'up' ? (
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500" />
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
