import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectTags() {
  return (
    <Select>
      <SelectTrigger className="w-[260px] border-gray-400 border-0">
        <SelectValue placeholder="Select category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Giveaway</SelectLabel>
          <SelectItem value="giveaway">Discord Giveaway</SelectItem>
          <SelectItem value="cst">Twitter Shill</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Share to earn</SelectLabel>
          <SelectItem value="est">Giveaway</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Network</SelectLabel>
          <SelectItem value="est">Binance</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Network</SelectLabel>
          <SelectItem value="est">Binance</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
