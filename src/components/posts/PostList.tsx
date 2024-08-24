import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import PostCard from "./PostCard";
import { CarouselBanner } from "../blocks/CarouselBanner";
import UserWallet from "@/config/web3/wallet";
import CreatePost from "./CreatePost";
import CardSubmission from "./CardSubmission";
import HiveCreate from "./HiveCreate";

// header with horizontal scroll
export default function PostList() {
  return (
    <div className="">
      {/* Post List */}
      <ScrollArea className="h-screen rounded-md pb-20 ">
        {/* <CardSubmission /> */}
        <HiveCreate />
        {/* {[1, 1, 1, 1].map((item, i) => (
          <PostCard />
        ))} */}
      </ScrollArea>
    </div>
  );
}
