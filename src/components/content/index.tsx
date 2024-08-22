import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import ContentCard from "./ContentCard";

// header with horizontal scroll
export default function Content() {
  return (
    <div>
      {/* Content List */}

      <ScrollArea className="h-screen rounded-md border px-10 pb-20 ">
        {[1, 1, 1, 1].map((item, i) => (
          <ContentCard />
        ))}
      </ScrollArea>
    </div>
  );
}
