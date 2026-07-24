export const companyData = {
  name: "Pure Petroleum",
  acquired: "Pure Petroleum",
  depots: ["Karachi Depot", "Lahore Depot", "Islamabad Depot", "Multan Depot", "Sahiwal Depot"],
  segments: ["Oil", "Lubricants"]
};

// Generate 50 petrol pumps
export const petrolPumps = Array.from({ length: 50 }).map((_, i) => ({
  id: `PP-${(i + 1).toString().padStart(3, '0')}`,
  name: `Pure Pump ${i + 1}`,
  depot: companyData.depots[i % companyData.depots.length],
  manager: `Manager ${i + 1}`,
  status: i % 10 === 0 ? "Maintenance" : "Active"
}));

// Finance: Dual P&L Mock Data
export const profitAndLossData = [
  { month: "Jan", oilRevenue: 1200000, lubeRevenue: 400000, oilCost: 900000, lubeCost: 200000 },
  { month: "Feb", oilRevenue: 1300000, lubeRevenue: 420000, oilCost: 950000, lubeCost: 210000 },
  { month: "Mar", oilRevenue: 1100000, lubeRevenue: 380000, oilCost: 850000, lubeCost: 190000 },
  { month: "Apr", oilRevenue: 1400000, lubeRevenue: 450000, oilCost: 1000000, lubeCost: 220000 },
  { month: "May", oilRevenue: 1500000, lubeRevenue: 480000, oilCost: 1100000, lubeCost: 240000 },
  { month: "Jun", oilRevenue: 1600000, lubeRevenue: 500000, oilCost: 1150000, lubeCost: 250000 },
];

export const generalLedger = [
  { id: "GL-101", date: "2026-07-01", account: "Cash - Karachi", description: "Daily Sales Receipt", debit: 50000, credit: 0 },
  { id: "GL-102", date: "2026-07-02", account: "Accounts Payable", description: "Supplier Invoice - Oil", debit: 0, credit: 200000 },
  { id: "GL-103", date: "2026-07-03", account: "Inventory - Lubes", description: "Stock Transfer Hattar", debit: 15000, credit: 0 },
  { id: "GL-104", date: "2026-07-04", account: "Accounts Receivable", description: "Dealer PP-005 Payment", debit: 35000, credit: 0 },
  { id: "GL-105", date: "2026-07-05", account: "Cash - Sahiwal", description: "Utility Bill Payment", debit: 0, credit: 5000 },
];

// Inventory (Tank levels)
export const tankInventory = [
  { id: "TK-KHI-01", depot: "Karachi Depot", product: "Petrol", capacity: 100000, currentLevel: 75000, unit: "Liters", status: "Optimal" },
  { id: "TK-KHI-02", depot: "Karachi Depot", product: "Diesel", capacity: 150000, currentLevel: 140000, unit: "Liters", status: "High" },
  { id: "TK-HTR-01", depot: "Hattar Depot", product: "Lubricant X", capacity: 50000, currentLevel: 10000, unit: "Liters", status: "Low" },
  { id: "TK-SWL-01", depot: "Sahiwal Depot", product: "Petrol", capacity: 80000, currentLevel: 40000, unit: "Liters", status: "Optimal" },
];

// Sales Orders
export const salesOrders = [
  { orderId: "SO-1001", date: "2026-07-20", customer: "Pure Pump 1 (PP-001)", product: "Petrol", quantity: 5000, amount: 1250000, status: "Delivered" },
  { orderId: "SO-1002", date: "2026-07-21", customer: "Pure Pump 15 (PP-015)", product: "Diesel", quantity: 10000, amount: 2400000, status: "In Transit" },
  { orderId: "SO-1003", date: "2026-07-22", customer: "Pure Pump 42 (PP-042)", product: "Lubricant Y", quantity: 500, amount: 150000, status: "Processing" },
  { orderId: "SO-1004", date: "2026-07-22", customer: "Pure Pump 3 (PP-003)", product: "Petrol", quantity: 8000, amount: 2000000, status: "Pending Approval" },
];

export const importsData = [
  { lcNumber: "LC-88902", supplier: "Global Oil Corp", vessel: "MV Sea Star", port: "Karachi Port", status: "Cleared", eta: "2026-07-10" },
  { lcNumber: "LC-88903", supplier: "LubeTech Intl", vessel: "MV Ocean Breeze", port: "Qasim Port", status: "In Transit", eta: "2026-08-05" },
  { lcNumber: "LC-88904", supplier: "MiddleEast Petro", vessel: "TBA", port: "Karachi Port", status: "LC Opened", eta: "2026-08-20" },
];

// Wet-stock reconciliation (loss highlighting)
export const wetStockReconciliation = [
  { id: "WS-01", depot: "Karachi Depot", product: "Petrol", bookStock: 75200, physicalStock: 75000, variance: -200, status: "Loss" },
  { id: "WS-02", depot: "Lahore Depot", product: "Diesel", bookStock: 140000, physicalStock: 140050, variance: 50, status: "Gain" },
  { id: "WS-03", depot: "Islamabad Depot", product: "Lubricant X", bookStock: 10000, physicalStock: 10000, variance: 0, status: "Exact" },
  { id: "WS-04", depot: "Sahiwal Depot", product: "Petrol", bookStock: 40500, physicalStock: 39500, variance: -1000, status: "Loss" },
];

// --- New Massive Dashboard Data ---

export const regionalSalesData = [
  { region: 'Sahiwal', oil: 120, lubes: 45, fullMark: 150 },
  { region: 'Hattar', oil: 98, lubes: 60, fullMark: 150 },
  { region: 'Karachi', oil: 145, lubes: 80, fullMark: 150 },
  { region: 'Lahore', oil: 110, lubes: 55, fullMark: 150 },
  { region: 'Multan', oil: 85, lubes: 40, fullMark: 150 },
];

export const cashflowData = [
  { month: 'Jan', in: 4000, out: 2400 },
  { month: 'Feb', in: 3000, out: 1398 },
  { month: 'Mar', in: 2000, out: 4800 },
  { month: 'Apr', in: 2780, out: 3908 },
  { month: 'May', in: 1890, out: 4800 },
  { month: 'Jun', in: 2390, out: 3800 },
  { month: 'Jul', in: 3490, out: 4300 },
];

export const depotEfficiencyData = [
  { name: 'KHI-01', volume: 1000, cost: 200, rating: 4.5 },
  { name: 'KHI-02', volume: 1200, cost: 250, rating: 4.2 },
  { name: 'HTR-01', volume: 800, cost: 180, rating: 4.8 },
  { name: 'HTR-02', volume: 750, cost: 190, rating: 4.6 },
  { name: 'SWL-01', volume: 600, cost: 150, rating: 4.1 },
  { name: 'SWL-02', volume: 950, cost: 210, rating: 4.7 },
];

export const tankCapacityData = [
  { name: 'Karachi Depot', used: 4000, free: 2400 },
  { name: 'Lahore Depot', used: 3000, free: 1398 },
  { name: 'Islamabad Depot', used: 2000, free: 3800 },
  { name: 'Multan Depot', used: 2780, free: 3908 },
];

export const salesPipelineData = [
  { name: 'Lead', count: 1000, conversion: 100 },
  { name: 'Quote', count: 800, conversion: 80 },
  { name: 'Order', count: 600, conversion: 75 },
  { name: 'Delivered', count: 400, conversion: 66 },
  { name: 'Paid', count: 350, conversion: 87 },
];

// --- New Finance Dashboard Data ---

export const arAgingData = [
  { customer: 'Pure Pump 01', '0-30': 45000, '31-60': 12000, '61-90': 0, '90+': 0 },
  { customer: 'Pure Pump 05', '0-30': 30000, '31-60': 25000, '61-90': 5000, '90+': 0 },
  { customer: 'Global Export', '0-30': 150000, '31-60': 0, '61-90': 0, '90+': 0 },
  { customer: 'Lube Network', '0-30': 20000, '31-60': 15000, '61-90': 10000, '90+': 4500 },
];

export const liquidityData = [
  { month: 'Jan', operating: 500, investing: -120, financing: -50 },
  { month: 'Feb', operating: 600, investing: -50, financing: -50 },
  { month: 'Mar', operating: 450, investing: -400, financing: 200 },
  { month: 'Apr', operating: 700, investing: -80, financing: -50 },
  { month: 'May', operating: 850, investing: -90, financing: -50 },
  { month: 'Jun', operating: 900, investing: -150, financing: -100 },
];

export const budgetVsActualData = [
  { department: 'Production', budget: 120, actual: 110, fullMark: 150 },
  { department: 'Marketing', budget: 98, actual: 105, fullMark: 150 },
  { department: 'Logistics', budget: 86, actual: 95, fullMark: 150 },
  { department: 'HR & Admin', budget: 50, actual: 48, fullMark: 150 },
  { department: 'IT Sys', budget: 60, actual: 65, fullMark: 150 },
];

export const workingCapitalData = [
  { month: 'Jan', currentAssets: 1200, currentLiabilities: 800, ratio: 1.5 },
  { month: 'Feb', currentAssets: 1300, currentLiabilities: 850, ratio: 1.53 },
  { month: 'Mar', currentAssets: 1150, currentLiabilities: 900, ratio: 1.27 },
  { month: 'Apr', currentAssets: 1400, currentLiabilities: 880, ratio: 1.59 },
  { month: 'May', currentAssets: 1550, currentLiabilities: 950, ratio: 1.63 },
  { month: 'Jun', currentAssets: 1600, currentLiabilities: 920, ratio: 1.74 },
];

export const depreciationForecastData = [
  { year: '2026', machinery: 120, buildings: 45, vehicles: 80 },
  { year: '2027', machinery: 108, buildings: 43, vehicles: 64 },
  { year: '2028', machinery: 97, buildings: 41, vehicles: 51 },
  { year: '2029', machinery: 87, buildings: 39, vehicles: 41 },
  { year: '2030', machinery: 78, buildings: 37, vehicles: 33 },
];

export const glBalanceDistribution = [
  { name: 'Assets', value: 4500000 },
  { name: 'Liabilities', value: 1200000 },
  { name: 'Equity', value: 3300000 },
];
