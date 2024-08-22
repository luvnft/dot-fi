import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import PostCard from "./PostCard";

// header with horizontal scroll
export default function PostList() {
  return (
    <div>
      {/* Post List */}

      <ScrollArea className="h-screen rounded-md  px-10 pb-20 ">
        {[1, 1, 1, 1].map((item, i) => (
          <PostCard />
        ))}
      </ScrollArea>
    </div>
  );
}
