import React from 'react';

// Mock data (15+ rows)
const conditionData = [
  { id: 1, type: 'PR00', material: 'MAT-1001', customer: 'CUST-001', amount: 1500.00, currency: 'USD', validFrom: '2026-01-01', validTo: '2026-12-31' },
  { id: 2, type: 'K004', material: 'MAT-1001', customer: 'CUST-001', amount: 50.00, currency: 'USD', validFrom: '2026-01-01', validTo: '2026-12-31' },
  { id: 3, type: 'KF00', material: 'MAT-1002', customer: 'CUST-002', amount: 200.00, currency: 'EUR', validFrom: '2026-02-01', validTo: '2026-11-30' },
  { id: 4, type: 'PR00', material: 'MAT-2005', customer: 'CUST-003', amount: 850.50, currency: 'USD', validFrom: '2026-01-15', validTo: '2026-12-31' },
  { id: 5, type: 'MWST', material: 'MAT-2005', customer: 'CUST-003', amount: 10.00, currency: '%', validFrom: '2026-01-01', validTo: '9999-12-31' },
  { id: 6, type: 'PR00', material: 'MAT-3001', customer: 'CUST-004', amount: 1200.00, currency: 'USD', validFrom: '2026-03-01', validTo: '2026-12-31' },
  { id: 7, type: 'K005', material: 'MAT-3001', customer: 'CUST-004', amount: 100.00, currency: 'USD', validFrom: '2026-03-01', validTo: '2026-06-30' },
  { id: 8, type: 'PR00', material: 'MAT-4022', customer: 'CUST-005', amount: 45.00, currency: 'GBP', validFrom: '2026-01-01', validTo: '2026-12-31' },
  { id: 9, type: 'KF00', material: 'MAT-4022', customer: 'CUST-005', amount: 5.00, currency: 'GBP', validFrom: '2026-01-01', validTo: '2026-12-31' },
  { id: 10, type: 'PR00', material: 'MAT-5000', customer: 'CUST-006', amount: 3000.00, currency: 'USD', validFrom: '2026-04-01', validTo: '2026-12-31' },
  { id: 11, type: 'K007', material: 'MAT-5000', customer: 'CUST-006', amount: 15.00, currency: '%', validFrom: '2026-04-01', validTo: '2026-12-31' },
  { id: 12, type: 'PR00', material: 'MAT-6010', customer: 'CUST-007', amount: 250.00, currency: 'USD', validFrom: '2026-01-01', validTo: '2026-12-31' },
  { id: 13, type: 'MWST', material: 'MAT-6010', customer: 'CUST-007', amount: 20.00, currency: '%', validFrom: '2026-01-01', validTo: '9999-12-31' },
  { id: 14, type: 'PR00', material: 'MAT-7020', customer: 'CUST-008', amount: 550.00, currency: 'EUR', validFrom: '2026-05-01', validTo: '2026-12-31' },
  { id: 15, type: 'KF00', material: 'MAT-7020', customer: 'CUST-008', amount: 25.00, currency: 'EUR', validFrom: '2026-05-01', validTo: '2026-12-31' },
  { id: 16, type: 'PR00', material: 'MAT-8001', customer: 'CUST-009', amount: 920.00, currency: 'USD', validFrom: '2026-01-01', validTo: '2026-12-31' }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            SD Pricing (VK13)
          </h1>
          <p className="text-slate-500 mt-1">Condition Records Overview</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium transition-colors">
            Filter
          </button>
          <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-colors">
            Create Condition
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Total Conditions", value: "12,450", trend: "+5% vs last month" },
          { title: "Active PR00", value: "8,230", trend: "+2% vs last month" },
          { title: "Expiring Soon", value: "450", trend: "Within 30 days" },
          { title: "Pending Approval", value: "24", trend: "Requires action" }
        ].map((kpi, idx) => (
          <div key={idx} className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
            <h3 className="text-slate-500 text-sm font-medium">{kpi.title}</h3>
            <p className="text-2xl font-bold text-slate-800 mt-1">{kpi.value}</p>
            <p className="text-xs text-emerald-600 mt-1 font-medium">{kpi.trend}</p>
          </div>
        ))}
      </div>

      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="flex-1 overflow-auto">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Condition Type</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Material</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Customer</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Amount</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Currency</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Validity Start</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Validity End</th>
              </tr>
            </thead>
            <tbody>
              {conditionData.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer">
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                      {row.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-700">{row.material}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{row.customer}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-800">{row.amount.toFixed(2)}</td>
                  <td className="px-6 py-4 text-sm text-slate-500">{row.currency}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{row.validFrom}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{row.validTo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
