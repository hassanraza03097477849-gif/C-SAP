"use client";

import { tankInventory } from "@/lib/mockData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplet, AlertTriangle } from "lucide-react";

export default function InventoryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Depot Tank Inventory</h1>
        <p className="text-slate-500 mt-1">Real-time visual monitoring of wet-stock levels.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {tankInventory.map((tank) => {
          const fillPercentage = (tank.currentLevel / tank.capacity) * 100;
          let statusColor = "bg-emerald-500";
          let badgeVariant: "default" | "destructive" | "secondary" = "default";
          
          if (fillPercentage < 25) {
            statusColor = "bg-red-500";
            badgeVariant = "destructive";
          } else if (fillPercentage > 90) {
            statusColor = "bg-amber-500";
            badgeVariant = "secondary";
          }

          return (
            <Card key={tank.id} className="overflow-hidden border-slate-200 shadow-sm hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
              <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4 bg-white/80 backdrop-blur-md">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{tank.id}</CardTitle>
                    <CardDescription>{tank.depot}</CardDescription>
                  </div>
                  <Badge variant={badgeVariant} className="capitalize">
                    {tank.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2 text-slate-700 font-medium">
                    <Droplet className="h-5 w-5 text-slate-400" />
                    {tank.product}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{tank.currentLevel.toLocaleString()}</div>
                    <div className="text-xs text-slate-500">/ {tank.capacity.toLocaleString()} {tank.unit}</div>
                  </div>
                </div>

                {/* Visual Tank Cylinder */}
                <div className="relative h-48 w-full bg-slate-100 rounded-lg border-2 border-slate-200 overflow-hidden flex items-end">
                  <div 
                    className={`w-full transition-all duration-1000 ease-in-out opacity-80 ${statusColor}`} 
                    style={{ height: `${fillPercentage}%` }}
                  />
                  {/* Glass reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-black/5 pointer-events-none" />
                  
                  {fillPercentage < 25 && (
                    <div className="absolute top-4 left-0 right-0 flex justify-center text-red-500 animate-pulse">
                      <AlertTriangle className="h-6 w-6" />
                    </div>
                  )}
                  
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-xl font-bold text-slate-900 drop-shadow-md bg-white/70 px-2 py-1 rounded">
                      {Math.round(fillPercentage)}%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
