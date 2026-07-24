const fs = require('fs');

const ordersData = `"use client";

import React, { useState } from 'react';
import { FileText, Clock, AlertCircle, Truck } from 'lucide-react';
import { SmartTable, Column, FormField } from '@/components/SmartTable';

const initialOrders = [
  { id: '10005432', date: '2026-07-24', soldTo: 'Karachi Traders', material: 'M-1004 (Polypropylene)', netValue: 4500000.00, currency: 'PKR', status: 'Completed', block: 'None', location: 'Karachi' },
  { id: '10005433', date: '2026-07-24', soldTo: 'Lahore Autos', material: 'M-2011 (ABS Plastic)', netValue: 8500000.00, currency: 'PKR', status: 'In Process', block: 'None', location: 'Lahore' },
  { id: '10005434', date: '2026-07-23', soldTo: 'Islamabad Construction', material: 'M-3005 (PVC Pipes)', netValue: 12000000.00, currency: 'PKR', status: 'On Hold', block: 'Credit Limit', location: 'Islamabad' },
  { id: '10005435', date: '2026-07-23', soldTo: 'Pak Suzuki', material: 'M-1004 (Polypropylene)', netValue: 6200000.00, currency: 'PKR', status: 'Completed', block: 'None', location: 'Karachi' },
  { id: '10005436', date: '2026-07-22', soldTo: 'Multan Paints', material: 'M-4022 (Solvents)', netValue: 3400000.00, currency: 'PKR', status: 'In Process', block: 'None', location: 'Multan' },
];

export default function SalesOrdersPage() {
  const [items, setItems] = useState(initialOrders);

  const columns = [
    { key: 'id', title: 'Order Number', render: (item) => <span className="font-mono font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-100">{item.id}</span> },
    { key: 'date', title: 'Date' },
    { key: 'soldTo', title: 'Sold-To Party', render: (item) => <span className="font-medium text-slate-800">{item.soldTo}</span> },
    { key: 'location', title: 'Location' },
    { key: 'material', title: 'Material' },
    { key: 'netValue', title: 'Net Value', render: (item) => <span className="font-semibold text-slate-800 text-right">PKR {Number(item.netValue).toLocaleString()}</span> },
    { key: 'status', title: 'Overall Status', render: (item) => {
      const getStatusColor = (status) => {
        switch (status) {
          case 'Completed': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
          case 'In Process': return 'bg-blue-100 text-blue-700 border-blue-200';
          case 'On Hold': return 'bg-amber-100 text-amber-700 border-amber-200';
          default: return 'bg-slate-100 text-slate-700 border-slate-200';
        }
      };
      return <span className={\`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border \${getStatusColor(item.status)}\`}>{item.status}</span>;
    }},
    { key: 'block', title: 'Delivery Block' }
  ];

  const formFields = [
    { key: 'id', label: 'Order ID', type: 'text' },
    { key: 'date', label: 'Date', type: 'date' },
    { key: 'soldTo', label: 'Sold-To Party', type: 'text' },
    { key: 'location', label: 'Location', type: 'select', options: ['Karachi', 'Lahore', 'Islamabad', 'Multan', 'Peshawar'] },
    { key: 'material', label: 'Material', type: 'text' },
    { key: 'netValue', label: 'Net Value', type: 'number' },
    { key: 'status', label: 'Status', type: 'select', options: ['Completed', 'In Process', 'On Hold'] },
    { key: 'block', label: 'Block', type: 'select', options: ['None', 'Credit Limit', 'Quality Check'] }
  ];

  const getIconColor = (color) => {
    switch (color) {
      case 'emerald': return 'bg-emerald-50 text-emerald-600';
      case 'blue': return 'bg-blue-50 text-blue-600';
      case 'amber': return 'bg-amber-50 text-amber-600';
      case 'teal': return 'bg-teal-50 text-teal-600';
      default: return 'bg-slate-50 text-slate-600';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-100/50 rounded-lg">
            <FileText className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Sales Orders (VA03)
            </h1>
            <p className="text-sm text-slate-500 font-medium">Manage and track customer orders</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Orders (MTD)', value: '1,248', change: '+12.5%', icon: FileText, color: 'emerald' },
          { label: 'Open Value (PKR)', value: 'Rs 48.5M', change: '-2.4%', icon: Clock, color: 'blue' },
          { label: 'Blocked Orders', value: '14', change: '+3', icon: AlertCircle, color: 'amber' },
          { label: 'Deliveries Today', value: '156', change: '+18.2%', icon: Truck, color: 'teal' },
        ].map((kpi, index) => (
          <div key={index} className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
            <div className="flex items-center justify-between group h-full">
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">{kpi.label}</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-bold text-slate-800">{kpi.value}</h3>
                  <span className={\`text-xs font-semibold \${kpi.change.startsWith('+') ? 'text-emerald-500' : 'text-red-500'}\`}>
                    {kpi.change}
                  </span>
                </div>
              </div>
              <div className={\`p-3 rounded-lg group-hover:scale-110 transition-transform \${getIconColor(kpi.color)}\`}>
                <kpi.icon className="w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <SmartTable 
        data={items} 
        columns={columns} 
        formFields={formFields} 
        onAdd={(newItem) => setItems([newItem, ...items])} 
      />
    </div>
  );
}
// orders-end
`;

const invoicesData = `"use client";

import React, { useState } from 'react';
import { SmartTable, Column, FormField } from '@/components/SmartTable';
import { FileText, CheckCircle2, Clock, XCircle } from 'lucide-react';

const initialInvoices = [
  { id: '90038100', date: '2026-07-20', payer: 'Karachi Traders', netValue: 1250000.00, tax: 225000.00, currency: 'PKR', status: 'Cleared', region: 'South' },
  { id: '90038101', date: '2026-07-21', payer: 'Lahore Autos', netValue: 850000.00, tax: 153000.00, currency: 'PKR', status: 'Pending', region: 'Central' },
  { id: '90038102', date: '2026-07-21', payer: 'Islamabad Construction', netValue: 420000.50, tax: 75600.09, currency: 'PKR', status: 'Cleared', region: 'North' },
  { id: '90038103', date: '2026-07-22', payer: 'Pak Suzuki', netValue: 2100000.00, tax: 378000.00, currency: 'PKR', status: 'Overdue', region: 'South' },
];

export default function InvoicesPage() {
  const [items, setItems] = useState(initialInvoices);

  const columns = [
    { key: 'id', title: 'Invoice Number', render: (item) => (
      <div className="flex items-center gap-2">
        <FileText className="w-4 h-4 text-slate-400" />
        <span className="font-medium text-emerald-600">{item.id}</span>
      </div>
    )},
    { key: 'date', title: 'Date' },
    { key: 'payer', title: 'Payer', render: (item) => <span className="font-medium text-slate-800">{item.payer}</span> },
    { key: 'region', title: 'Region' },
    { key: 'netValue', title: 'Net Value', render: (item) => <span className="font-semibold text-slate-800 text-right">PKR {Number(item.netValue).toLocaleString()}</span> },
    { key: 'tax', title: 'Tax Amount', render: (item) => <span className="text-slate-500 text-right">PKR {Number(item.tax).toLocaleString()}</span> },
    { key: 'status', title: 'Status', render: (item) => {
      const getStatusStyle = (status) => {
        switch (status) {
          case 'Cleared': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
          case 'Pending': return 'bg-amber-100 text-amber-700 border-amber-200';
          case 'Overdue': return 'bg-rose-100 text-rose-700 border-rose-200';
          default: return 'bg-slate-100 text-slate-700 border-slate-200';
        }
      };
      return <span className={\`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border \${getStatusStyle(item.status)}\`}>{item.status}</span>;
    }}
  ];

  const formFields = [
    { key: 'id', label: 'Invoice ID', type: 'text' },
    { key: 'date', label: 'Date', type: 'date' },
    { key: 'payer', label: 'Payer Name', type: 'text' },
    { key: 'region', label: 'Region', type: 'select', options: ['North', 'Central', 'South'] },
    { key: 'netValue', label: 'Net Value', type: 'number' },
    { key: 'tax', label: 'Tax Amount', type: 'number' },
    { key: 'status', label: 'Status', type: 'select', options: ['Cleared', 'Pending', 'Overdue'] }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Billing Documents
          </h1>
          <p className="text-sm text-slate-500 mt-1">Manage and track customer invoices</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: 'Total Revenue YTD', value: 'PKR 2.45B', change: '+12.5%', type: 'positive' },
          { title: 'Invoices Issued (MTD)', value: '1,432', change: '+5.2%', type: 'positive' },
          { title: 'Pending Clearing', value: 'PKR 185M', change: '-2.1%', type: 'positive' },
          { title: 'Overdue Amount', value: 'PKR 42M', change: '+8.4%', type: 'negative' },
        ].map((kpi, idx) => (
          <div key={idx} className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
            <h3 className="text-sm font-medium text-slate-500">{kpi.title}</h3>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-800">{kpi.value}</span>
              <span className={\`text-xs font-medium px-2 py-0.5 rounded-full \${kpi.type === 'positive' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}\`}>
                {kpi.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <SmartTable 
        data={items} 
        columns={columns} 
        formFields={formFields} 
        onAdd={(newItem) => setItems([newItem, ...items])} 
      />
    </div>
  );
}
// invoices-end
`;

const customersData = `"use client";

import React, { useState } from "react";
import { SmartTable, Column, FormField } from '@/components/SmartTable';
import { Users, Building, DollarSign, AlertTriangle, ShieldCheck, ShieldAlert } from "lucide-react";

const initialCustomers = [
  { id: "100001", name: "Karachi Traders", salesOrg: "1000", distChannel: "10", division: "00", creditLimit: "PKR 50,000,000", blockStatus: "Active", type: 'Retail' },
  { id: "100002", name: "Lahore Autos", salesOrg: "1000", distChannel: "10", division: "00", creditLimit: "PKR 25,000,000", blockStatus: "Active", type: 'Corporate' },
  { id: "100003", name: "Islamabad Construction", salesOrg: "2000", distChannel: "20", division: "01", creditLimit: "PKR 10,000,000", blockStatus: "Active", type: 'Corporate' },
  { id: "100004", name: "Pak Suzuki", salesOrg: "1000", distChannel: "10", division: "00", creditLimit: "PKR 15,000,000", blockStatus: "Blocked", type: 'Retail' },
];

export default function CustomersPage() {
  const [items, setItems] = useState(initialCustomers);

  const columns = [
    { key: 'id', title: 'Customer ID', render: (item) => <span className="font-mono text-xs font-medium text-slate-700 bg-slate-100 px-2 py-1 rounded">{item.id}</span> },
    { key: 'name', title: 'Customer Name', render: (item) => <span className="font-medium text-sm text-slate-800">{item.name}</span> },
    { key: 'type', title: 'Type' },
    { key: 'salesOrg', title: 'Sales Org' },
    { key: 'distChannel', title: 'Dist. Channel' },
    { key: 'division', title: 'Division' },
    { key: 'creditLimit', title: 'Credit Limit', render: (item) => <span className="text-sm font-medium text-slate-700 text-right">{item.creditLimit}</span> },
    { key: 'blockStatus', title: 'Block Status', render: (item) => {
      if (item.blockStatus === 'Active') return <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/50">Active</span>;
      if (item.blockStatus === 'Blocked') return <span className="text-xs font-medium text-red-700 bg-red-50 px-2 py-0.5 rounded-full border border-red-200/50">Blocked</span>;
      return <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/50">Credit Hold</span>;
    }}
  ];

  const formFields = [
    { key: 'id', label: 'Customer ID', type: 'text' },
    { key: 'name', label: 'Name', type: 'text' },
    { key: 'type', label: 'Type', type: 'select', options: ['Retail', 'Corporate', 'Government'] },
    { key: 'salesOrg', label: 'Sales Org', type: 'select', options: ['1000', '2000', '3000', '4000'] },
    { key: 'distChannel', label: 'Dist. Channel', type: 'select', options: ['10', '20', '30', '40'] },
    { key: 'division', label: 'Division', type: 'select', options: ['00', '01', '02', '03'] },
    { key: 'creditLimit', label: 'Credit Limit (PKR)', type: 'text' },
    { key: 'blockStatus', label: 'Status', type: 'select', options: ['Active', 'Blocked', 'Credit Hold'] }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Customer Master Data (VD03/XD03)
          </h1>
          <p className="text-sm text-slate-500 mt-1">Manage central customer records and credit lines across sales organizations.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 shrink-0">
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-slate-500">Total Customers</h3>
            <div className="p-2 bg-emerald-100/50 rounded-lg">
              <Users className="h-4 w-4 text-emerald-600" />
            </div>
          </div>
          <p className="text-2xl font-semibold text-slate-800">1,248</p>
        </div>
      </div>

      <SmartTable 
        data={items} 
        columns={columns} 
        formFields={formFields} 
        onAdd={(newItem) => setItems([newItem, ...items])} 
      />
    </div>
  );
}
// customers-end
`;

const returnsData = `"use client";

import React, { useState } from 'react';
import { SmartTable, Column, FormField } from '@/components/SmartTable';
import { ArrowLeft, CheckCircle, AlertCircle, Clock } from 'lucide-react';

const initialReturns = [
  { id: "RE-1004523", date: "2026-07-24", invRef: "INV-990123", customer: "Karachi Traders", material: "Steel Coil 500mm", qty: 2, status: "Pending Inspection", rmaType: 'Defect' },
  { id: "RE-1004524", date: "2026-07-24", invRef: "INV-990111", customer: "Lahore Autos", material: "Aluminum Sheets", qty: 15, status: "Approved", rmaType: 'Damage' },
  { id: "RE-1004525", date: "2026-07-23", invRef: "INV-990098", customer: "Islamabad Construction", material: "Titanium Rods", qty: 5, status: "Rejected", rmaType: 'Wrong Item' },
];

export default function SalesReturnsPage() {
  const [items, setItems] = useState(initialReturns);

  const columns = [
    { key: 'id', title: 'Return Document', render: (item) => <span className="font-medium text-emerald-700">{item.id}</span> },
    { key: 'date', title: 'Date' },
    { key: 'invRef', title: 'Original Invoice Ref' },
    { key: 'customer', title: 'Customer', render: (item) => <span className="font-medium text-slate-800">{item.customer}</span> },
    { key: 'rmaType', title: 'Reason' },
    { key: 'material', title: 'Material' },
    { key: 'qty', title: 'Return Qty', render: (item) => <span className="font-medium text-slate-800 text-right">{item.qty}</span> },
    { key: 'status', title: 'Inspection Status', render: (item) => {
      const getStatusBadgeClass = (status) => {
        switch(status) {
          case 'Approved': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
          case 'Rejected': return 'bg-red-100 text-red-700 border-red-200';
          default: return 'bg-amber-100 text-amber-700 border-amber-200';
        }
      };
      return <span className={\`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border \${getStatusBadgeClass(item.status)}\`}>{item.status}</span>;
    }}
  ];

  const formFields = [
    { key: 'id', label: 'Return ID', type: 'text' },
    { key: 'date', label: 'Date', type: 'date' },
    { key: 'invRef', label: 'Invoice Ref', type: 'text' },
    { key: 'customer', label: 'Customer', type: 'text' },
    { key: 'rmaType', label: 'Reason', type: 'select', options: ['Defect', 'Damage', 'Wrong Item', 'Other'] },
    { key: 'material', label: 'Material', type: 'text' },
    { key: 'qty', label: 'Quantity', type: 'number' },
    { key: 'status', label: 'Status', type: 'select', options: ['Approved', 'Rejected', 'Pending Inspection'] }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-500">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              SAP SD Returns
            </h1>
            <p className="text-sm text-slate-500 mt-1">Returns Order Processing Ledger (VA03)</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 shrink-0">
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
          <p className="text-sm font-medium text-slate-500 mb-1">Total Returns (MTD)</p>
          <div className="flex items-end gap-2">
            <h3 className="text-2xl font-bold text-slate-800">4,281</h3>
          </div>
        </div>
      </div>

      <SmartTable 
        data={items} 
        columns={columns} 
        formFields={formFields} 
        onAdd={(newItem) => setItems([newItem, ...items])} 
      />
    </div>
  );
}
// returns-end
`;

fs.writeFileSync('f:/C-SAP/src/app/sales/orders/page.tsx', ordersData);
fs.writeFileSync('f:/C-SAP/src/app/sales/invoices/page.tsx', invoicesData);
fs.writeFileSync('f:/C-SAP/src/app/sales/customers/page.tsx', customersData);
fs.writeFileSync('f:/C-SAP/src/app/sales/returns/page.tsx', returnsData);

console.log("Migration complete!");
