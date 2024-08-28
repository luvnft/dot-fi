// import RouterLink from "next/RouterLink";
import {
  useLocation,
  useNavigate,
  Link as RouterLink,
  Outlet,
} from "react-router-dom";

import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import UserWallet from "@/config/web3/wallet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, Heading, Text } from "@radix-ui/themes";
import DialogConnect from "./DialogConnect";
import { useState } from "react";
import { useAccount } from "wagmi";

// open dialog/profile section when connected
// open dialog when disconnected
export default function DisplayCard() {
  const [isOpen, setOpen] = useState(false);
  const { address } = useAccount();
  return (
    <>
      {isOpen && <DialogConnect {...{ isOpen, setOpen }} />}
      <Card>
        <CardHeader>
          <CardTitle>Connect to your profile</CardTitle>
          <CardDescription>
            {/* Unlock all features and get unlimited access to our support team. */}
            Increase your account quality by connecting to other socials! and
            earn more rewards
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* <UserWallet /> */}
          {/*  */}
          {address && (
            <div
              onClick={() => setOpen(true)}
              className="flex items-center  gap-2 cursor-pointer "
            >
              <Avatar className="">
                <AvatarImage src="https://pbs.twimg.com/profile_images/1814205416026632192/ItJbCO8Z_400x400.jpg" />
                <AvatarFallback>XX</AvatarFallback>
              </Avatar>
              <div>
                <Heading as="h3" size="3">
                  Theras Labs
                </Heading>
                <Text as="p" size="2" color="gray">
                  @theras
                </Text>
              </div>
            </div>
          )}

          {!address && (
            <Button
              onClick={() => setOpen(true)}
              asChild
              size={{ initial: "3", xs: "4" }}
              variant="classic"
              //   highContrast
              style={{ flexGrow: 1 }}
              className="w-full cursor-pointer font-bold"
            >
              <a>LOGIN</a>
            </Button>
          )}
        </CardContent>
      </Card>
    </>
  );
}
