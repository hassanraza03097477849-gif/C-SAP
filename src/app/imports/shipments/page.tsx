import React from 'react';
import { 
  Anchor, 
  Ship, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  FileText,
  Search,
  Filter,
  Download,
  MoreVertical
} from 'lucide-react';

const mockShipments = [
  { id: 'SHP-902100', bl: 'HLCU-8921A', vessel: 'MSC Gulsun', origin: 'Islamabad (CNSHA)', dest: 'Multan (USLAX)', etd: '2026-07-20', eta: '2026-08-05', status: 'In Transit' },
  { id: 'SHP-902101', bl: 'MAEU-1123B', vessel: 'Madrid Maersk', origin: 'Ningbo (CNNGB)', dest: 'Rotterdam (NLRTM)', etd: '2026-07-18', eta: '2026-08-12', status: 'In Transit' },
  { id: 'SHP-902102', bl: 'CMAU-5542C', vessel: 'CMA CGM Jacques Saade', origin: 'Shenzhen (CNSZX)', dest: 'Faisalabad (DEHAM)', etd: '2026-07-15', eta: '2026-08-10', status: 'Delayed' },
  { id: 'SHP-902103', bl: 'EGLV-9982D', vessel: 'Ever Alot', origin: 'Singapore (SGSIN)', dest: 'Karachi (USNYC)', etd: '2026-07-22', eta: '2026-08-25', status: 'At Port' },
  { id: 'SHP-902104', bl: 'HLCU-8822E', vessel: 'HMM Algeciras', origin: 'Busan (KRPUS)', dest: 'Antwerp (BEANR)', etd: '2026-07-10', eta: '2026-08-15', status: 'In Transit' },
  { id: 'SHP-902105', bl: 'ONEY-3341F', vessel: 'OOCL Hong Kong', origin: 'Hong Kong (HKHKG)', dest: 'Long Beach (USLGB)', etd: '2026-07-25', eta: '2026-08-12', status: 'Planned' },
  { id: 'SHP-902106', bl: 'MSC-7762G', vessel: 'MSC Mina', origin: 'Qingdao (CNTAO)', dest: 'Jebel Ali (AEJEA)', etd: '2026-07-05', eta: '2026-07-25', status: 'Arrived' },
  { id: 'SHP-902107', bl: 'ZIMU-2213H', vessel: 'ZIM Sammy Ofer', origin: 'Kaohsiung (TWKHH)', dest: 'Savannah (USSAV)', etd: '2026-07-12', eta: '2026-08-18', status: 'In Transit' },
  { id: 'SHP-902108', bl: 'COSU-9981I', vessel: 'COSCO Universe', origin: 'Tianjin (CNTSN)', dest: 'Felixstowe (GBFXT)', etd: '2026-07-21', eta: '2026-08-26', status: 'In Transit' },
  { id: 'SHP-902109', bl: 'MAEU-5561J', vessel: 'Milan Maersk', origin: 'Yokohama (JPYOK)', dest: 'Seattle (USSEA)', etd: '2026-07-28', eta: '2026-08-09', status: 'Planned' },
  { id: 'SHP-902110', bl: 'CMAU-1122K', vessel: 'CMA CGM Antoine de Saint Exupery', origin: 'Guangzhou (CNCAN)', dest: 'Le Havre (FRLEH)', etd: '2026-07-19', eta: '2026-08-20', status: 'In Transit' },
  { id: 'SHP-902111', bl: 'HLCU-9944L', vessel: 'Barzan', origin: 'Port Klang (MYPKG)', dest: 'Southampton (GBSOU)', etd: '2026-07-14', eta: '2026-08-11', status: 'Delayed' },
  { id: 'SHP-902112', bl: 'EGLV-3352M', vessel: 'Ever Glory', origin: 'Colombo (LKCMB)', dest: 'Charleston (USCHS)', etd: '2026-07-16', eta: '2026-08-14', status: 'In Transit' },
  { id: 'SHP-902113', bl: 'ONEY-7788N', vessel: 'MOL Truth', origin: 'Tanjung Pelepas (MYTPP)', dest: 'Bremerhaven (DEBRV)', etd: '2026-07-08', eta: '2026-08-06', status: 'In Transit' },
  { id: 'SHP-902114', bl: 'MSC-2233P', vessel: 'MSC Isabella', origin: 'Nhava Sheva (INNSA)', dest: 'Genoa (ITGOA)', etd: '2026-07-23', eta: '2026-08-10', status: 'At Port' },
  { id: 'SHP-902115', bl: 'MAEU-8899Q', vessel: 'Munich Maersk', origin: 'Xiamen (CNXMN)', dest: 'Vancouver (CAVAN)', etd: '2026-07-01', eta: '2026-07-18', status: 'Arrived' }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'In Transit':
      return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 border border-blue-200"><Ship className="w-3.5 h-3.5" /> {status}</span>;
    case 'Delayed':
      return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700 border border-red-200"><AlertCircle className="w-3.5 h-3.5" /> {status}</span>;
    case 'At Port':
      return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700 border border-amber-200"><Anchor className="w-3.5 h-3.5" /> {status}</span>;
    case 'Planned':
      return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"><Clock className="w-3.5 h-3.5" /> {status}</span>;
    case 'Arrived':
      return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700 border border-emerald-200"><CheckCircle2 className="w-3.5 h-3.5" /> {status}</span>;
    default:
      return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">{status}</span>;
  }
};

export default function ImportsShipments() {
  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      {/* Header Container */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Import Shipments
          </h1>
          <p className="text-sm text-slate-500 mt-1 flex items-center gap-2">
            <Anchor className="w-4 h-4 text-emerald-500" /> Ocean Freight tracking and management
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search shipments..." 
              className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all w-64 text-slate-800"
            />
          </div>
          <button className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
            <Filter className="w-4 h-4" />
          </button>
          <button className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
            <Download className="w-4 h-4" />
          </button>
          <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-slate-50 rounded-lg text-sm font-medium transition-colors shadow-sm">
            New Shipment
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: 'Total Active Shipments', value: '1,248', icon: Ship, trend: '+12.5%', trendUp: true, color: 'text-blue-600', bg: 'bg-blue-100' },
          { title: 'In Transit', value: '856', icon: Anchor, trend: '+5.2%', trendUp: true, color: 'text-emerald-600', bg: 'bg-emerald-100' },
          { title: 'Delayed', value: '42', icon: AlertCircle, trend: '-2.4%', trendUp: false, color: 'text-red-600', bg: 'bg-red-100' },
          { title: 'Arriving This Week', value: '124', icon: Clock, trend: '+18.1%', trendUp: true, color: 'text-amber-600', bg: 'bg-amber-100' }
        ].map((kpi, index) => (
          <div key={index} className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4">
            <div className="flex flex-col justify-between h-full">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-2 rounded-lg ${kpi.bg}`}>
                  <kpi.icon className={`w-5 h-5 ${kpi.color}`} />
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${kpi.trendUp ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                  {kpi.trend}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">{kpi.title}</p>
                <p className="text-2xl font-bold text-slate-800">{kpi.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid Container */}
      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="flex-1 overflow-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Shipment Number</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">BL Number</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Vessel Name</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Origin Port</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Destination</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">ETD</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">ETA</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Status</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockShipments.map((shipment) => (
                <tr key={shipment.id} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer">
                  <td className="px-6 py-3.5">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-slate-400" />
                      <span className="font-medium text-slate-800">{shipment.id}</span>
                    </div>
                  </td>
                  <td className="px-6 py-3.5 text-sm font-medium text-slate-600">{shipment.bl}</td>
                  <td className="px-6 py-3.5 text-sm text-slate-600">{shipment.vessel}</td>
                  <td className="px-6 py-3.5 text-sm text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {shipment.origin}
                    </div>
                  </td>
                  <td className="px-6 py-3.5 text-sm text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {shipment.dest}
                    </div>
                  </td>
                  <td className="px-6 py-3.5 text-sm text-slate-600">{shipment.etd}</td>
                  <td className="px-6 py-3.5 text-sm text-slate-600">{shipment.eta}</td>
                  <td className="px-6 py-3.5">
                    {getStatusBadge(shipment.status)}
                  </td>
                  <td className="px-6 py-3.5 text-right">
                    <button className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50/50 flex items-center justify-between text-sm text-slate-500">
          <div>Showing 1 to 16 of {mockShipments.length} shipments</div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1.5 border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}