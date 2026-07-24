"use client";

import React, { useState } from 'react';

const initialData = Array.from({ length: 40 }).map((_, i) => ({
  id: `INV-100${41 + i}`,
  customer: ['Acme Corp', 'Global Tech', 'Widget Inc', 'Stark Industries', 'Wayne Enterprises', 'Umbrella Corp', 'LexCorp', 'Oscorp'][i % 8],
  amount: (Math.random() * 100000 + 1000).toFixed(2),
  dueDate: new Date(Date.now() - (Math.random() * 60 - 20) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  daysOverdue: Math.floor(Math.random() * 60) - 20,
  dunningLevel: Math.floor(Math.random() * 4),
  status: 'Open'
}));

export default function AccountsReceivableLedger() {
  const [items, setItems] = useState(initialData);

  const handleClear = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Accounts Receivable Clearing</h1>
      </header>

      <div className="flex gap-4 mb-4 shrink-0">
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex flex-col">
          <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-semibold">Total Outstanding</div>
          <div className="text-2xl font-bold text-slate-800">$2,450,890.00</div>
        </div>
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex flex-col">
          <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-semibold">Overdue (30+ Days)</div>
          <div className="text-2xl font-bold text-red-600">$345,100.50</div>
        </div>
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex flex-col">
          <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-semibold">DSO (Days)</div>
          <div className="text-2xl font-bold text-slate-800">42</div>
        </div>
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex flex-col">
          <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-semibold">Dunning Level 3+</div>
          <div className="text-2xl font-bold text-amber-600">14 Accounts</div>
        </div>
      </div>

      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <table className="w-full border-collapse text-[13px] text-left">
          <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Customer</th>
              <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Invoice #</th>
              <th className="px-6 py-4 font-semibold text-slate-600 text-sm"><div className="text-right">Amount</div></th>
              <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Due Date</th>
              <th className="px-6 py-4 font-semibold text-slate-600 text-sm"><div className="text-center">Days Overdue</div></th>
              <th className="px-6 py-4 font-semibold text-slate-600 text-sm"><div className="text-center">Dunning Level</div></th>
              <th className="px-6 py-4 font-semibold text-slate-600 text-sm"><div className="text-center">Action</div></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr key={item.id} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer">
                <td className="px-6 py-4">{item.customer}</td>
                <td className="px-6 py-4"><span className="bg-slate-50 px-1.5 py-0.5 rounded font-mono text-sky-600 text-xs">{item.id}</span></td>
                <td className="px-6 py-4">
                  <div className="text-right font-semibold">
                    ${Number(item.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </div>
                </td>
                <td className="px-6 py-4">{item.dueDate}</td>
                <td className="px-6 py-4">
                  <div className="flex justify-center">
                    <span className={`px-2 py-0.5 rounded-full text-[11px] font-semibold inline-block ${item.daysOverdue > 30 ? 'bg-red-100 text-red-700' : item.daysOverdue > 0 ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'}`}>
                      {item.daysOverdue > 0 ? `${item.daysOverdue} Days` : 'Current'}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-[3px] justify-center items-center">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className={`w-2 h-2 rounded-full ${i < item.dunningLevel ? 'bg-red-500' : 'bg-slate-200'}`} />
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-center">
                    <button 
                      onClick={() => handleClear(item.id)} 
                      className="bg-emerald-600 text-white border-none px-3 py-1.5 rounded text-xs font-semibold cursor-pointer hover:bg-emerald-700 transition-colors"
                    >
                      Clear
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
