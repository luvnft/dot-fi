import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import RightBar from "../layouts/RightBar";
import PostList from "../posts/PostList";
import Sale from "../radix-website/marketing/Sale";
import SaleCarousel from "../radix-website/marketing/SaleCarousel";
import { CarouselBanner } from "../blocks/CarouselBanner";
import { TabsSocial } from "./TabsSocial";

export default function Main() {
  // can do background here ?
  return (
    <main className=" grid flex-1 items-start gap-4  py-4 mb-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-3 px-4">
      {/* TABS FOR TWITTER, farcaster, lens */}
      <div className=" grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2 md:px-10  2xl:px-20  border-red-500">
        {/* posts here */}
        {/* <div className="hidden md:block">
          <CarouselBanner />
        </div> */}

        <TabsSocial />
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
