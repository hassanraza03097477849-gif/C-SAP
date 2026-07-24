import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Page() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/finance/chart-of-accounts">
          <Button variant="outline" size="icon"><ArrowLeft className="h-4 w-4" /></Button>
        </Link>
        <h1 className="text-3xl font-bold">New G/L Account</h1>
      </div>
      <div className="space-y-6">
        <div className="grid gap-2">
          <Label htmlFor="acc-no">Account Number</Label>
          <Input id="acc-no" placeholder="e.g. 1001" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="acc-name">Account Name</Label>
          <Input id="acc-name" placeholder="e.g. Petty Cash" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="acc-type">Account Type</Label>
          <select id="acc-type" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
            <option>Asset</option>
            <option>Liability</option>
            <option>Equity</option>
            <option>Revenue</option>
            <option>Expense</option>
          </select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="currency">Account Currency</Label>
          <Input id="currency" defaultValue="PKR" />
        </div>
        <div className="flex justify-end gap-4">
          <Link href="/finance/chart-of-accounts">
            <Button variant="outline">Cancel</Button>
          </Link>
          <Button>Save Account</Button>
        </div>
      </div>
    </div>
  );
}