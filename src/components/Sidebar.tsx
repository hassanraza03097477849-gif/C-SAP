"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Wallet,
  PieChart,
  Package,
  ShoppingCart,
  Ship,
  Fuel,
  LogOut,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Sparkles
} from "lucide-react";
import { Button } from "./ui/button";
import { companyData } from "@/lib/mockData";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { 
    name: "Finance (FI)", 
    icon: Wallet, 
    subLinks: [
      { name: "Overview", href: "/finance" },
      { name: "Process Flow", href: "/finance/flow" },
      { name: "General Ledger", href: "/finance/general-ledger" },
      { name: "Chart of Accounts", href: "/finance/chart-of-accounts" },
      { name: "Receivables", href: "/finance/receivables" },
      { name: "Payables", href: "/finance/payables" },
      { name: "Bank & Cash", href: "/finance/bank-cash" },
      { name: "Statements", href: "/finance/statements" },
    ]
  },
  { 
    name: "Controlling (CO)", 
    icon: PieChart,
    subLinks: [
      { name: "Overview", href: "/controlling" },
      { name: "Profitability", href: "/controlling/profitability" },
    ]
  },
  { 
    name: "Materials (MM)", 
    icon: Package,
    subLinks: [
      { name: "Overview", href: "/materials" },
      { name: "Tank Inventory", href: "/materials/inventory" },
      { name: "Requisitions", href: "/materials/requisitions" },
    ]
  },
  { 
    name: "Sales (SD)", 
    icon: ShoppingCart,
    subLinks: [
      { name: "Overview", href: "/sales" },
      { name: "Sales Orders", href: "/sales/orders" },
    ]
  },
  { 
    name: "Imports", 
    icon: Ship,
    subLinks: [
      { name: "Overview", href: "/imports" },
      { name: "Shipments", href: "/imports/shipments" },
    ]
  },
  { 
    name: "OMC Operations", 
    icon: Fuel,
    subLinks: [
      { name: "Overview", href: "/omc" },
      { name: "Wet-Stock", href: "/omc/wet-stock" },
      { name: "Settlements", href: "/omc/settlements" },
    ]
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  if (pathname === "/login") return null;

  const toggleMenu = (name: string) => {
    setOpenMenus(prev => 
      prev.includes(name) ? prev.filter(item => item !== name) : [...prev, name]
    );
  };

  return (
    <div 
      className={cn(
        "flex h-screen flex-col bg-slate-950/80 backdrop-blur-2xl text-slate-300 shadow-2xl transition-all duration-300 ease-in-out border-r border-white/10 relative z-50",
        isCollapsed ? "w-20" : "w-72"
      )}
    >
      {/* Decorative Glow */}
      <div className="absolute top-0 left-0 w-full h-32 bg-emerald-500/10 blur-3xl rounded-full -z-10" />

      <div className="flex h-16 shrink-0 items-center justify-between px-4 bg-transparent border-b border-white/5">
        <div className="flex items-center overflow-hidden">
          <div className="relative">
             <Fuel className="h-8 w-8 text-emerald-400 shrink-0 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
             <Sparkles className="h-3 w-3 text-emerald-300 absolute -top-1 -right-1 animate-pulse" />
          </div>
          {!isCollapsed && (
            <span className="ml-3 text-xl font-extrabold bg-gradient-to-r from-white via-emerald-100 to-emerald-400 bg-clip-text text-transparent tracking-tight whitespace-nowrap">
              {companyData.name}
            </span>
          )}
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-slate-400 hover:text-white hover:bg-white/10 shrink-0 ml-2 rounded-full transition-all"
        >
          {isCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </Button>
      </div>
      
      <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden pt-6 custom-scrollbar px-3 space-y-2">
        <nav className="flex-1 space-y-1.5">
          {navigation.map((item) => {
            const hasSubLinks = !!item.subLinks;
            const isOpen = openMenus.includes(item.name);
            const isActive = !hasSubLinks 
              ? pathname === item.href 
              : item.subLinks!.some(sub => pathname === sub.href);

            return (
              <div key={item.name} className="space-y-1">
                {hasSubLinks ? (
                  <button
                    onClick={() => !isCollapsed && toggleMenu(item.name)}
                    className={cn(
                      isActive ? "bg-gradient-to-r from-emerald-500/20 to-transparent text-white border-l-2 border-emerald-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]" : "hover:bg-white/5 hover:text-white border-l-2 border-transparent",
                      "group flex w-full items-center justify-between rounded-r-xl px-3 py-3 text-sm font-semibold transition-all duration-200"
                    )}
                    title={isCollapsed ? item.name : undefined}
                  >
                    <div className="flex items-center">
                      <item.icon
                        className={cn(
                          isActive ? "text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" : "text-slate-400 group-hover:text-emerald-400",
                          "h-5 w-5 shrink-0 transition-all duration-300 group-hover:scale-110"
                        )}
                        aria-hidden="true"
                      />
                      {!isCollapsed && <span className="ml-3 tracking-wide">{item.name}</span>}
                    </div>
                    {!isCollapsed && (
                      <div className="text-slate-500 group-hover:text-slate-300 transition-transform duration-200">
                        {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </div>
                    )}
                  </button>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className={cn(
                      isActive ? "bg-gradient-to-r from-emerald-500/20 to-transparent text-white border-l-2 border-emerald-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]" : "hover:bg-white/5 hover:text-white border-l-2 border-transparent",
                      "group flex items-center rounded-r-xl px-3 py-3 text-sm font-semibold transition-all duration-200"
                    )}
                    title={isCollapsed ? item.name : undefined}
                  >
                    <item.icon
                      className={cn(
                        isActive ? "text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" : "text-slate-400 group-hover:text-emerald-400",
                        "h-5 w-5 shrink-0 transition-all duration-300 group-hover:scale-110"
                      )}
                      aria-hidden="true"
                    />
                    {!isCollapsed && <span className="ml-3 tracking-wide">{item.name}</span>}
                  </Link>
                )}

                {/* Sub-links with smooth animation */}
                <div className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  (!isCollapsed && hasSubLinks && isOpen) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}>
                  <div className="ml-9 mt-1 mb-2 space-y-1 border-l border-white/10 pl-2">
                    {item.subLinks?.map((sub) => {
                      const isSubActive = pathname === sub.href;
                      return (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className={cn(
                            isSubActive ? "text-emerald-400 font-semibold bg-white/5" : "text-slate-400 hover:text-white hover:bg-white/5",
                            "block rounded-md px-3 py-2 text-[13px] transition-colors relative"
                          )}
                        >
                          {isSubActive && <div className="absolute left-[-9px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-emerald-400 rounded-full drop-shadow-[0_0_4px_rgba(52,211,153,0.8)]" />}
                          {sub.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>
      </div>

      <div className="flex shrink-0 border-t border-white/10 p-4 bg-slate-900/50">
        <Link href="/login" className="w-full">
          <Button variant="ghost" className={cn("w-full text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all", isCollapsed ? "justify-center px-0" : "justify-start")}>
            <LogOut className={cn("h-5 w-5 shrink-0 transition-transform group-hover:-translate-x-1", !isCollapsed && "mr-3")} />
            {!isCollapsed && <span className="font-semibold">Sign out</span>}
          </Button>
        </Link>
      </div>
    </div>
  );
}
