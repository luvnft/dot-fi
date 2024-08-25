import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import PostCard from "./PostCard";

// header with horizontal scroll
export default function PostList() {
  return (
    <div className="py-10">
      {/* Post List */}
      {/* <ScrollArea className="h-screen rounded-md pb-20 "> */}
      {/* <CardSubmission /> */}
      {/* <HiveCreate /> */}
      {[1, 1, 1, 1].map((item, i) => (
        <PostCard />
      ))}
      {/* </ScrollArea> */}
    </div>
  );
}
