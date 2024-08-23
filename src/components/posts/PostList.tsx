import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import PostCard from "./PostCard";
import { CarouselBanner } from "../blocks/CarouselBanner";

// header with horizontal scroll
export default function PostList() {
  return (
    <div className="">
      {/* Post List */}

      <ScrollArea className="h-screen rounded-md pb-20 ">
        {/* <CarouselBanner /> */}
        {[1, 1, 1, 1].map((item, i) => (
          <PostCard />
        ))}
      </ScrollArea>
    </div>
  );
}
