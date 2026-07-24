"use client";

import React, { useState } from 'react';
import { 
  Building2, 
  Users, 
  Lock, 
  CheckCircle2, 
  MoreVertical 
} from 'lucide-react';
import { SmartTable, Column, FormField } from '@/components/SmartTable';

// Mock Data
const mockCostCenters = [
  { id: '1000', name: 'Corporate Headquarters', group: 'CORP', person: 'John Smith', dept: 'Executive', companyCode: 'US01', validFrom: '2023-01-01', validTo: '9999-12-31', status: 'Active' },
  { id: '1010', name: 'Finance & Accounting', group: 'CORP', person: 'Sarah Jenkins', dept: 'Finance', companyCode: 'US01', validFrom: '2023-01-01', validTo: '9999-12-31', status: 'Active' },
  { id: '1020', name: 'Human Resources', group: 'CORP', person: 'Michael Brown', dept: 'HR', companyCode: 'US01', validFrom: '2023-01-01', validTo: '9999-12-31', status: 'Active' },
  { id: '2000', name: 'Manufacturing Plant 1', group: 'PROD', person: 'David Lee', dept: 'Production', companyCode: 'US01', validFrom: '2023-01-01', validTo: '9999-12-31', status: 'Active' },
  { id: '2010', name: 'Quality Assurance', group: 'PROD', person: 'Emily Chen', dept: 'Quality', companyCode: 'US01', validFrom: '2023-01-01', validTo: '9999-12-31', status: 'Active' },
  { id: '2020', name: 'Maintenance', group: 'PROD', person: 'Robert Wilson', dept: 'Engineering', companyCode: 'US01', validFrom: '2023-01-01', validTo: '2026-12-31', status: 'Active' },
  { id: '3000', name: 'Sales North America', group: 'SALES', person: 'Jessica Taylor', dept: 'Sales', companyCode: 'US01', validFrom: '2023-01-01', validTo: '9999-12-31', status: 'Active' },
  { id: '3010', name: 'Marketing', group: 'SALES', person: 'William Davis', dept: 'Marketing', companyCode: 'US01', validFrom: '2023-01-01', validTo: '9999-12-31', status: 'Active' },
  { id: '4000', name: 'IT Infrastructure', group: 'IT', person: 'Thomas Anderson', dept: 'IT', companyCode: 'US01', validFrom: '2023-01-01', validTo: '9999-12-31', status: 'Active' },
  { id: '4010', name: 'Software Development', group: 'IT', person: 'Lisa Wong', dept: 'IT', companyCode: 'US01', validFrom: '2023-01-01', validTo: '9999-12-31', status: 'Active' },
  { id: '5000', name: 'R&D Center', group: 'RD', person: 'Dr. James Miller', dept: 'Research', companyCode: 'US01', validFrom: '2023-01-01', validTo: '9999-12-31', status: 'Active' },
  { id: '6000', name: 'Logistics East', group: 'LOG', person: 'Amanda White', dept: 'Supply Chain', companyCode: 'US01', validFrom: '2023-01-01', validTo: '9999-12-31', status: 'Locked' },
  { id: '6010', name: 'Warehouse Central', group: 'LOG', person: 'Daniel Martin', dept: 'Supply Chain', companyCode: 'US01', validFrom: '2023-01-01', validTo: '9999-12-31', status: 'Active' },
  { id: '7000', name: 'European Operations', group: 'EU', person: 'Sophie Dubois', dept: 'Operations', companyCode: 'EU01', validFrom: '2023-01-01', validTo: '9999-12-31', status: 'Active' },
  { id: '7010', name: 'EU Sales', group: 'EU', person: 'Marco Rossi', dept: 'Sales', companyCode: 'EU01', validFrom: '2023-01-01', validTo: '9999-12-31', status: 'Active' },
];

export default function CostCentersPage() {
  const [items, setItems] = useState(mockCostCenters);

  const columns: Column<any>[] = [
    { key: 'id', title: 'Cost Center ID', render: (item) => <span className="font-mono text-sm font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded">{item.id}</span> },
    { key: 'name', title: 'Name', render: (item) => <span className="text-sm font-medium text-slate-800">{item.name}</span> },
    { key: 'group', title: 'CC Group', render: (item) => <span className="text-sm text-slate-600">{item.group}</span> },
    { key: 'person', title: 'Person Responsible', render: (item) => <span className="text-sm text-slate-600">{item.person}</span> },
    { key: 'dept', title: 'Department', render: (item) => <span className="text-sm text-slate-600">{item.dept}</span> },
    { key: 'companyCode', title: 'Company Code', render: (item) => <span className="text-sm text-slate-600">{item.companyCode}</span> },
    { key: 'validFrom', title: 'Valid From', render: (item) => <span className="text-sm text-slate-500">{item.validFrom}</span> },
    { key: 'validTo', title: 'Valid To', render: (item) => <span className="text-sm text-slate-500">{item.validTo}</span> },
    { key: 'status', title: 'Status', render: (item) => (
      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${item.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
        {item.status}
      </span>
    )},
    { key: 'actions', title: 'Actions', render: () => (
      <button className="text-slate-400 hover:text-slate-600 p-1 rounded-md hover:bg-slate-100 transition-all">
        <MoreVertical className="w-4 h-4" />
      </button>
    )}
  ];

  const formFields: FormField[] = [
    { key: 'name', label: 'Name', type: 'text' },
    { key: 'group', label: 'CC Group', type: 'text' },
    { key: 'person', label: 'Person Responsible', type: 'text' },
    { key: 'dept', label: 'Department', type: 'text' },
    { key: 'companyCode', label: 'Company Code', type: 'text' },
    { key: 'validFrom', label: 'Valid From', type: 'date' },
    { key: 'status', label: 'Status', type: 'select', options: ['Active', 'Locked'] }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      
      {/* Header Container */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Cost Centers Master Data
          </h1>
          <p className="text-sm text-slate-500 mt-1">Manage and monitor organizational cost centers (KS03)</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Total Cost Centers</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">156</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
            <Building2 className="w-5 h-5" />
          </div>
        </div>
        
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Active Centers</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">142</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>

        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Locked Centers</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">14</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-600">
            <Lock className="w-5 h-5" />
          </div>
        </div>

        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Cost Center Groups</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">8</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
            <Users className="w-5 h-5" />
          </div>
        </div>
      </div>

      <SmartTable 
        data={items} 
        columns={columns} 
        formFields={formFields} 
        onAdd={(newItem) => {
          setItems([{...newItem, id: `CC-${Math.floor(Math.random()*1000)}`, validTo: '9999-12-31'} as any, ...items]);
        }}
        searchPlaceholder="Search cost centers..." 
      />
    </div>
  );
}