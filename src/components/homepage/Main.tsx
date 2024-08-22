import * as React from "react";
import { useLocation, useNavigate, Link as RouterLink } from "react-router-dom";

import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  Home,
  LineChart,
  ListFilter,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Truck,
  Users2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import RightBar from "../layouts/RightBar";
import PostList from "../posts/PostList";

export default function Main() {
  // can do background here ?
  return (
    <main className="bg-green-900 grid flex-1 items-start gap-4 p-4 sm:px-6  md:gap-8 lg:grid-cols-3 xl:grid-cols-3 ">
      {/* TABS FOR TWITTER, farcaster, lens */}
      <div className=" grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2 md:px-10 xl:px-20">
        {/* posts here */}
        {/* scroll content here */}

        {/* category quests or etc */}
        <PostList />
      </div>
      <div className="">
        <RightBar />
      </div>
    </main>
  );
}
