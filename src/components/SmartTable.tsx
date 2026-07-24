"use client";

import React, { useState } from "react";
import { Search, Plus, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export interface Column<T> {
  key: keyof T | string;
  title: string;
  render?: (item: T) => React.ReactNode;
}

export interface FormField {
  key: string;
  label: string;
  type: "text" | "number" | "date" | "select";
  options?: string[];
}

interface SmartTableProps<T> {
  title?: string;
  data: T[];
  columns: Column<T>[];
  formFields?: FormField[];
  onAdd?: (item: Omit<T, 'id'>) => void;
  searchPlaceholder?: string;
}

export function SmartTable<T extends { id?: string | number }>({
  title,
  data: initialData,
  columns,
  formFields,
  onAdd,
  searchPlaceholder = "Search...",
}: SmartTableProps<T>) {
  const [data, setData] = useState<T[]>(initialData);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<Record<string, any>>({});

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredData = data.filter((item) => {
    return Object.values(item).some(
      (val) => val && String(val).toLowerCase().includes(searchTerm)
    );
  });

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem = { ...formData, id: `NEW-${Math.floor(Math.random() * 10000)}` } as unknown as T;
    setData([newItem, ...data]);
    if (onAdd) {
      onAdd(formData as any);
    }
    setIsModalOpen(false);
    setFormData({});
  };

  const handleFormChange = (key: string, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] relative">
      {/* Toolbar */}
      <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-50/50">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input
            type="text"
            placeholder={searchPlaceholder}
            value={searchTerm}
            onChange={handleSearch}
            className="pl-9 bg-white border-slate-200"
          />
        </div>
        {formFields && formFields.length > 0 && (
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold w-full sm:w-auto shadow-sm"
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Button>
        )}
      </div>

      {/* Table Area */}
      <div className="overflow-x-auto flex-1">
        <table className="w-full border-collapse text-[13px] text-left">
          <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200">
            <tr>
              {columns.map((col, idx) => (
                <th key={String(col.key) + idx} className="px-6 py-4 font-semibold text-slate-600 text-sm whitespace-nowrap">
                  {col.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, idx) => (
              <tr key={item.id || idx} className="hover:bg-slate-50 border-b border-slate-100 transition-colors">
                {columns.map((col, cIdx) => (
                  <td key={String(col.key) + cIdx} className="px-6 py-4">
                    {col.render ? col.render(item) : String(item[col.key as keyof T] || "")}
                  </td>
                ))}
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={columns.length} className="px-6 py-8 text-center text-slate-500">
                  No records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Modal */}
      {isModalOpen && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h3 className="font-bold text-lg text-slate-800">Add New Entry</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleAddSubmit} className="p-6 flex flex-col gap-4 overflow-y-auto max-h-[60vh]">
              {formFields?.map((field) => (
                <div key={field.key} className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-slate-700">{field.label}</label>
                  {field.type === 'select' && field.options ? (
                    <select
                      required
                      className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={formData[field.key] || ""}
                      onChange={(e) => handleFormChange(field.key, e.target.value)}
                    >
                      <option value="" disabled>Select {field.label}</option>
                      {field.options.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  ) : (
                    <Input
                      type={field.type}
                      required
                      placeholder={`Enter ${field.label.toLowerCase()}`}
                      value={formData[field.key] || ""}
                      onChange={(e) => handleFormChange(field.key, e.target.value)}
                      className="border-slate-200 focus-visible:ring-emerald-500"
                    />
                  )}
                </div>
              ))}
              <div className="pt-4 flex gap-3 justify-end border-t border-slate-100 mt-2">
                <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold">
                  Save Entry
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
