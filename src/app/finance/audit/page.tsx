"use client";

import React, { useState } from "react";

const auditLogs = [
  { id: "LOG-001", timestamp: "2026-07-23 11:45:02", userId: "K.KANSAL", tCode: "SE16N", action: "Table Display: BSEG", ip: "192.168.1.45", status: "Warning" },
  { id: "LOG-002", timestamp: "2026-07-23 11:42:15", userId: "J.DOE", tCode: "FB01", action: "Post Financial Document", ip: "10.0.4.12", status: "Success" },
  { id: "LOG-003", timestamp: "2026-07-23 11:38:55", userId: "A.SMITH", tCode: "PFCG", action: "Role Modification", ip: "192.168.1.112", status: "Failed" },
  { id: "LOG-004", timestamp: "2026-07-23 11:30:10", userId: "M.JOHNSON", tCode: "FBL3N", action: "G/L Account Line Items", ip: "10.0.5.99", status: "Success" },
  { id: "LOG-005", timestamp: "2026-07-23 11:25:40", userId: "K.KANSAL", tCode: "SU01", action: "User Maintenance", ip: "192.168.1.45", status: "Warning" },
  { id: "LOG-006", timestamp: "2026-07-23 11:15:22", userId: "SYSTEM", tCode: "SM37", action: "Background Job Execution", ip: "127.0.0.1", status: "Success" },
  { id: "LOG-007", timestamp: "2026-07-23 11:05:11", userId: "R.ROE", tCode: "OB52", action: "Open/Close Posting Periods", ip: "192.168.2.14", status: "Failed" },
  { id: "LOG-008", timestamp: "2026-07-23 10:55:09", userId: "J.DOE", tCode: "FB60", action: "Enter Incoming Invoice", ip: "10.0.4.12", status: "Success" },
  { id: "LOG-009", timestamp: "2026-07-23 10:40:33", userId: "A.SMITH", tCode: "SE38", action: "ABAP Editor", ip: "192.168.1.112", status: "Warning" },
  { id: "LOG-010", timestamp: "2026-07-23 10:20:15", userId: "K.KANSAL", tCode: "F110", action: "Automatic Payment Parameters", ip: "192.168.1.45", status: "Success" },
  { id: "LOG-011", timestamp: "2026-07-23 10:15:02", userId: "T.STARK", tCode: "FB50", action: "G/L Account Document", ip: "10.1.2.33", status: "Success" },
  { id: "LOG-012", timestamp: "2026-07-23 10:05:22", userId: "B.WAYNE", tCode: "OB08", action: "Currency Exchange Rates", ip: "192.168.5.55", status: "Warning" },
  { id: "LOG-013", timestamp: "2026-07-23 09:55:10", userId: "P.PARKER", tCode: "FBL1N", action: "Vendor Line Items", ip: "10.2.3.44", status: "Success" },
  { id: "LOG-014", timestamp: "2026-07-23 09:42:05", userId: "C.KENT", tCode: "SCC4", action: "Client Administration", ip: "172.16.0.5", status: "Failed" },
  { id: "LOG-015", timestamp: "2026-07-23 09:30:45", userId: "SYSTEM", tCode: "SM21", action: "System Log Analysis", ip: "127.0.0.1", status: "Success" },
  { id: "LOG-016", timestamp: "2026-07-23 09:12:33", userId: "K.KANSAL", tCode: "SU53", action: "Evaluate Authorization Check", ip: "192.168.1.45", status: "Success" },
  { id: "LOG-017", timestamp: "2026-07-23 09:05:11", userId: "M.JOHNSON", tCode: "FAGLB03", action: "G/L Account Balance", ip: "10.0.5.99", status: "Success" },
  { id: "LOG-018", timestamp: "2026-07-23 08:50:04", userId: "UNKNOWN", tCode: "RFC", action: "Remote Function Call Login", ip: "203.0.113.42", status: "Failed" }
];

export default function AuditLogPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLogs = auditLogs.filter(log => 
    log.userId.toLowerCase().includes(searchTerm.toLowerCase()) || 
    log.tCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.action.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 flex flex-col gap-6 font-sans text-slate-800 h-screen overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --bg-dark: #090a0f;
          --bg-panel: #11131a;
          --bg-panel-hover: #171a23;
          --text-main: #f1f5f9;
          --text-muted: #8b98a5;
          --border-color: #212631;
          --accent-blue: #3b82f6;
          --accent-blue-transparent: rgba(59, 130, 246, 0.15);
          --success: #10b981;
          --success-bg: rgba(16, 185, 129, 0.1);
          --warning: #f59e0b;
          --warning-bg: rgba(245, 158, 11, 0.1);
          --danger: #ef4444;
          --danger-bg: rgba(239, 68, 68, 0.1);
        }
        
        .audit-dashboard {
          background-color: var(--bg-dark);
          color: var(--text-main);
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          min-height: 100vh;
          padding: 1.5rem;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .header-ribbon {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }

        .kpi-card {
          background-color: var(--bg-panel);
          border: 1px solid var(--border-color);
          border-radius: 0.75rem;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .kpi-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
          border-color: #2d3545;
        }

        .kpi-title {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--text-muted);
          letter-spacing: 0.05em;
        }

        .kpi-value {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1;
        }

        .kpi-trend {
          font-size: 0.8125rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        
        .kpi-trend.positive { color: var(--success); }
        .kpi-trend.negative { color: var(--danger); }

        .main-content {
          background-color: var(--bg-panel);
          border: 1px solid var(--border-color);
          border-radius: 0.75rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .table-toolbar {
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid var(--border-color);
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: rgba(17, 19, 26, 0.5);
          backdrop-filter: blur(8px);
        }

        .table-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .search-input {
          background-color: var(--bg-dark);
          border: 1px solid var(--border-color);
          color: var(--text-main);
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          width: 300px;
          outline: none;
          transition: all 0.2s;
        }

        .search-input:focus {
          border-color: var(--accent-blue);
          box-shadow: 0 0 0 2px var(--accent-blue-transparent);
        }

        .search-input::placeholder {
          color: var(--text-muted);
        }

        .table-container {
          overflow-x: auto;
          flex-grow: 1;
        }

        .audit-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.875rem;
        }

        .audit-table th {
          background-color: rgba(23, 26, 35, 0.6);
          color: var(--text-muted);
          font-weight: 600;
          padding: 0.875rem 1.5rem;
          border-bottom: 1px solid var(--border-color);
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.05em;
          white-space: nowrap;
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .audit-table td {
          padding: 1rem 1.5rem;
          border-bottom: 1px solid var(--border-color);
          white-space: nowrap;
          transition: background-color 0.15s;
        }

        .audit-table tr:hover td {
          background-color: var(--bg-panel-hover);
        }

        .audit-table tr:last-child td {
          border-bottom: none;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.025em;
        }

        .badge.success {
          background-color: var(--success-bg);
          color: var(--success);
          border: 1px solid rgba(16, 185, 129, 0.2);
        }

        .badge.warning {
          background-color: var(--warning-bg);
          color: var(--warning);
          border: 1px solid rgba(245, 158, 11, 0.2);
        }

        .badge.failed {
          background-color: var(--danger-bg);
          color: var(--danger);
          border: 1px solid rgba(239, 68, 68, 0.2);
        }

        .mono {
          font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
          font-size: 0.8125rem;
        }
      `}} />

      <div className="header-ribbon">
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex flex-col">
          <span className="kpi-title">Total Security Events (24h)</span>
          <span className="kpi-value">124,592</span>
          <span className="kpi-trend positive">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
            12% vs yesterday
          </span>
        </div>
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex flex-col">
          <span className="kpi-title">Failed Login Attempts</span>
          <span className="kpi-value">43</span>
          <span className="kpi-trend negative">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>
            5% vs yesterday
          </span>
        </div>
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex flex-col">
          <span className="kpi-title">Critical T-Codes Accessed</span>
          <span className="kpi-value">18</span>
          <span className="kpi-trend positive">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>
            2% vs yesterday
          </span>
        </div>
        <div className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 rounded-xl p-4 flex flex-col">
          <span className="kpi-title">Active FI Users</span>
          <span className="kpi-value">892</span>
          <span className="kpi-trend positive">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
            1% vs yesterday
          </span>
        </div>
      </div>

      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)]">
          <div className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            System Security Activity Feed
          </div>
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search by User, T-Code, Action..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="table-container">
          <table className="audit-table">
            <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Timestamp</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">User ID</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">T-Code</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Action Performed</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">IP Address</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredLogs.map(log => (
                <tr key={log.id} className="hover:bg-slate-50 border-b border-slate-100 transition-colors cursor-pointer">
                  <td className="mono" style={{ color: 'var(--text-muted)' }}>{log.timestamp}</td>
                  <td className="mono" style={{ color: 'var(--accent-blue)', fontWeight: 500 }}>{log.userId}</td>
                  <td className="mono" style={{ fontWeight: 500 }}>{log.tCode}</td>
                  <td>{log.action}</td>
                  <td className="mono" style={{ color: 'var(--text-muted)' }}>{log.ip}</td>
                  <td>
                    <span className={`badge ${log.status.toLowerCase()}`}>
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
              {filteredLogs.length === 0 && (
                <tr>
                  <td colSpan={6} style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
                    No security events found matching your search criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
