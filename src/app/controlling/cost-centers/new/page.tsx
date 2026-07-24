import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

export default function NewCostCenterPage() {
  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6 bg-white/5">
      <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-md p-4 rounded-lg shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] mb-4">
        <Link href="/controlling/cost-centers">
          <Button variant="ghost" size="icon"><ArrowLeft className="h-4 w-4" /></Button>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Create Cost Center</h1>
      </div>

      <Card className="shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300">
        <CardHeader>
          <CardTitle>Cost Center Details</CardTitle>
          <CardDescription>Enter the basic information for the new cost center.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="id">Cost Center ID</Label>
            <Input id="id" placeholder="e.g. CC-5000" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="e.g. Research & Development" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="manager">Manager</Label>
            <Input id="manager" placeholder="e.g. Marie Curie" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="department">Department</Label>
            <Input id="department" placeholder="e.g. R&D" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/controlling/cost-centers">
            <Button variant="outline">Cancel</Button>
          </Link>
          <Button>Create Cost Center</Button>
        </CardFooter>
      </Card>
    </div>
  );
}