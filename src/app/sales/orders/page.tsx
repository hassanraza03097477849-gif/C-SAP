"use client";

import { useState } from "react";
import { salesOrders } from "@/lib/mockData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Clock, Truck, FileText, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const steps = [
  { id: 1, name: "Order Placed", icon: FileText },
  { id: 2, name: "Approval", icon: Check },
  { id: 3, name: "Dispatch", icon: Truck },
  { id: 4, name: "Delivered", icon: CheckCircle2 },
];

export default function SalesOrdersPage() {
  const [orders, setOrders] = useState(salesOrders);

  const getStepForStatus = (status: string) => {
    switch (status) {
      case "Pending Approval": return 1;
      case "Processing": return 2;
      case "In Transit": return 3;
      case "Delivered": return 4;
      default: return 1;
    }
  };

  const handleApprove = (orderId: string) => {
    setOrders(orders.map(o => o.orderId === orderId ? { ...o, status: "Processing" } : o));
    toast.success(`Order ${orderId} approved successfully.`);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] mb-6">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Sales Orders</h1>
        <p className="text-slate-500 mt-1">Order-to-cash process tracker.</p>
      </div>

      <div className="space-y-4">
        {orders.map((order) => {
          const currentStep = getStepForStatus(order.status);
          
          return (
            <Card key={order.orderId} className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[1px] hover:shadow-md transition-all duration-300 overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center justify-between p-6 border-b border-slate-100 bg-slate-50">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-bold text-slate-900">{order.orderId}</h3>
                    <Badge variant={order.status === "Delivered" ? "default" : "secondary"}>
                      {order.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-500 mt-1">{order.customer} • {order.product} ({order.quantity.toLocaleString()} L)</p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <p className="text-xl font-bold text-slate-900">Rs. {order.amount.toLocaleString()}</p>
                  <p className="text-sm text-slate-500">{order.date}</p>
                </div>
              </div>
              
              <CardContent className="p-6">
                <nav aria-label="Progress">
                  <ol role="list" className="flex items-center">
                    {steps.map((step, stepIdx) => (
                      <li key={step.name} className={`relative pr-8 sm:pr-20 ${stepIdx !== steps.length - 1 ? 'w-full' : ''}`}>
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                          <div className={`h-1 w-full ${currentStep > step.id ? 'bg-emerald-600' : 'bg-slate-200'}`} />
                        </div>
                        <div
                          className={`relative flex h-8 w-8 items-center justify-center rounded-full ${
                            currentStep > step.id 
                              ? 'bg-emerald-600 hover:bg-emerald-900' 
                              : currentStep === step.id 
                                ? 'border-2 border-emerald-600 bg-white' 
                                : 'border-2 border-slate-300 bg-white'
                          }`}
                        >
                          <step.icon 
                            className={`h-4 w-4 ${
                              currentStep > step.id 
                                ? 'text-white' 
                                : currentStep === step.id 
                                  ? 'text-emerald-600' 
                                  : 'text-slate-300'
                            }`} 
                            aria-hidden="true" 
                          />
                        </div>
                        <span className="absolute -bottom-6 left-0 text-xs font-medium text-slate-500 w-max">
                          {step.name}
                        </span>
                      </li>
                    ))}
                  </ol>
                </nav>

                <div className="mt-10 flex justify-end gap-2">
                  {order.status === "Pending Approval" && (
                    <Button onClick={() => handleApprove(order.orderId)} className="bg-emerald-600 hover:bg-emerald-700 text-white">
                      Approve Order
                    </Button>
                  )}
                  {order.status === "Processing" && (
                    <Button variant="outline" className="text-slate-700">
                      Generate Delivery Challan
                    </Button>
                  )}
                  <Button variant="ghost">View Details</Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
