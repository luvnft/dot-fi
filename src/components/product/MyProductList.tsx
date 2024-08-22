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

const MyProductList = () => {
  return (
    <TableBody>
      {products.map((product) => (
        <ProductRow key={product.id} product={product} />
      ))}
    </TableBody>
  );
};

const ProductRow = ({ product }) => {
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
      </TableCell>
    </TableRow>
  );
};

export default MyProductList;
