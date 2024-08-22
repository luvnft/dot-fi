import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
("use client");

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  LabelList,
  Line,
  LineChart,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  Rectangle,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components//ui/chart";
import { Separator } from "@/components/ui/separator";
const products = [
  {
    id: 1,
    imageSrc: "/placeholder.svg",
    name: "Laser Lemonade Machine",
    status: "Draft",
    price: "$499.99",
    quantity: 25,
    date: "2023-07-12 10:42 AM",
  },
  {
    id: 2,
    imageSrc: "/placeholder.svg",
    name: "Hypernova Headphones",
    status: "Active",
    price: "$129.99",
    quantity: 100,
    date: "2023-10-18 03:21 PM",
  },
  {
    id: 2,
    imageSrc: "/placeholder.svg",
    name: "Hypernova Headphones",
    status: "Active",
    price: "$129.99",
    quantity: 100,
    date: "2023-10-18 03:21 PM",
  },
  {
    id: 2,
    imageSrc: "/placeholder.svg",
    name: "Hypernova Headphones",
    status: "Active",
    price: "$129.99",
    quantity: 100,
    date: "2023-10-18 03:21 PM",
  },
  {
    id: 2,
    imageSrc: "/placeholder.svg",
    name: "Hypernova Headphones",
    status: "Active",
    price: "$129.99",
    quantity: 100,
    date: "2023-10-18 03:21 PM",
  },
  // Add more products as needed
];

const ProjectList = () => {
  return (
    <TableBody>
      {products.map((product) => (
        <ProjectRow key={product.id} product={product} />
      ))}
    </TableBody>
  );
};

const ProjectRow = ({ product }) => {
  return (
    <TableRow>
      <TableCell className="hidden sm:table-cell">
        <img
          alt="Product image"
          className="aspect-square rounded-md object-cover w-[64px] h-[64px] bg-white"
          height="64"
          src={product.imageSrc}
          width="64"
        />
      </TableCell>
      <TableCell className="font-medium">{product.name}</TableCell>
      <TableCell>
        <Badge variant={product.status === "Draft" ? "outline" : "secondary"}>
          {product.status}
        </Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">{product.price}</TableCell>
      <TableCell className="hidden md:table-cell">{product.quantity}</TableCell>
      <TableCell className="hidden md:table-cell">{product.date}</TableCell>
      <TableCell>
        <Card className="max-w-xs h-24" x-chunk="charts-01-chunk-7">
          <ChartContainer
            className="h-24 w-full"
            config={{
              time: {
                label: "Time",
                color: "hsl(var(--chart-2))",
              },
            }}>
            <AreaChart
              accessibilityLayer
              data={[
                {
                  date: "2024-01-01",
                  time: 8.5,
                },
                {
                  date: "2024-01-02",
                  time: 7.2,
                },
                {
                  date: "2024-01-03",
                  time: 8.1,
                },
                {
                  date: "2024-01-04",
                  time: 6.2,
                },
                {
                  date: "2024-01-05",
                  time: 5.2,
                },
                {
                  date: "2024-01-06",
                  time: 8.1,
                },
                {
                  date: "2024-01-07",
                  time: 7.0,
                },
              ]}
              margin={{
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              }}>
              <XAxis dataKey="date" hide />
              <YAxis domain={["dataMin - 5", "dataMax + 2"]} hide />
              <defs>
                <linearGradient id="fillTime" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-time)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-time)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <Area
                dataKey="time"
                type="natural"
                fill="url(#fillTime)"
                fillOpacity={0.4}
                stroke="var(--color-time)"
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
                formatter={(value) => (
                  <div className="flex min-w-[120px] items-center text-xs text-muted-foreground">
                    +X%
                  </div>
                )}
              />
            </AreaChart>
          </ChartContainer>
        </Card>
        {/* 
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      */}
      </TableCell>
    </TableRow>
  );
};

export default ProjectList;
