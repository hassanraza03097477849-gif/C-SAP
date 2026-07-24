"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Bell, Search, UserCircle, Settings, LogOut, Shield } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const { isCollapsed, toggleSidebar } = useSidebar();
  const [showProfile, setShowProfile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  if (pathname === "/login") return null;

  const pathParts = pathname.split('/').filter(Boolean);
  const breadcrumbs = pathParts.length ? ['home', ...pathParts] : ['home'];

  return (
    <header className="h-16 shrink-0 border-b border-slate-200 bg-white/80 backdrop-blur-md flex items-center justify-between px-6 shadow-sm relative z-40">
      
      <div className="flex items-center space-x-2 text-sm text-slate-600">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleSidebar}
          className="text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-all rounded-full h-8 w-8 mr-2"
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
        {breadcrumbs.map((crumb, idx) => {
          const isHome = crumb.toLowerCase() === 'home';
          const href = isHome ? '/' : '/' + breadcrumbs.slice(0, idx + 1).filter(c => c !== 'home').join('/');
          return (
            <span key={idx} className="flex items-center">
              {idx > 0 && <span className="mx-1">/</span>}
              <Link href={href} className="hover:underline capitalize">
                {crumb}
              </Link>
            </span>
          );
        })}
      </div>

      {/* Modern Interactive Actions */}
      <div className="flex items-center gap-4">
        <div className="relative group hidden md:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
          <Input
            type="search"
            placeholder="Search SAP T-Codes..."
            className="w-64 pl-9 bg-slate-100/50 border-slate-200 focus:bg-white focus:border-emerald-500 focus:ring-emerald-500/20 transition-all rounded-full h-9 text-sm"
          />
        </div>

        {/* Notifications */}
        <div className="relative">
          <Button 
            variant="ghost" 
            size="icon" 
            className={cn("relative rounded-full hover:bg-slate-100 transition-colors", showNotifications && "bg-slate-100")}
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <Bell className="h-5 w-5 text-slate-600" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white animate-pulse" />
          </Button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-slate-100 py-2 animate-in fade-in slide-in-from-top-2 z-50">
              <div className="px-4 py-2 border-b border-slate-100 flex justify-between items-center">
                <span className="font-bold text-slate-800">Notifications</span>
                <span className="text-xs text-emerald-600 cursor-pointer hover:underline">Mark all read</span>
              </div>
              <div className="max-h-64 overflow-y-auto">
                <div className="px-4 py-3 hover:bg-slate-50 cursor-pointer border-b border-slate-50 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="bg-red-100 p-1.5 rounded-full mt-0.5"><Shield className="h-4 w-4 text-red-600"/></div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">Payment Rejected</p>
                      <p className="text-xs text-slate-500 mt-0.5">Vendor INV-2091 requires secondary approval.</p>
                      <p className="text-[10px] text-slate-400 mt-1">2 mins ago</p>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 hover:bg-slate-50 cursor-pointer transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-100 p-1.5 rounded-full mt-0.5"><Bell className="h-4 w-4 text-emerald-600"/></div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">Batch Job Completed</p>
                      <p className="text-xs text-slate-500 mt-0.5">Depot P&L consolidation finished successfully.</p>
                      <p className="text-[10px] text-slate-400 mt-1">1 hour ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* User Profile */}
        <div className="relative">
          <Button 
            variant="ghost" 
            className="pl-2 pr-3 rounded-full hover:bg-slate-100 transition-colors flex items-center gap-2"
            onClick={() => setShowProfile(!showProfile)}
          >
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-inner">
              <UserCircle className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col items-start hidden sm:flex">
              <span className="text-sm font-bold text-slate-700 leading-none">Admin User</span>
              <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mt-1">Super User</span>
            </div>
          </Button>

          {showProfile && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-1 animate-in fade-in slide-in-from-top-2 z-50">
              <div className="px-4 py-3 border-b border-slate-100">
                <p className="text-sm font-bold text-slate-800">Admin User</p>
                <p className="text-xs text-slate-500">admin@reliancepetrochem.com</p>
              </div>
              <div className="p-1">
                <Link href="/finance/audit" className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors">
                  <Shield className="h-4 w-4" /> Security Logs
                </Link>
                <Link href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors">
                  <Settings className="h-4 w-4" /> Settings
                </Link>
              </div>
              <div className="p-1 border-t border-slate-100">
                <Link href="/login" className="flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <LogOut className="h-4 w-4" /> Sign out
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
