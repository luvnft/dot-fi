import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsSocial() {
  return (
    <Tabs defaultValue="buzzup" className="w-full">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="buzzup">Buzzup</TabsTrigger>
        <TabsTrigger value="twitter">Twitter</TabsTrigger>
        <TabsTrigger value="farcaster">Farcaster</TabsTrigger>
        <TabsTrigger value="lens">Lens</TabsTrigger>
        <TabsTrigger value="nfts">NFTs</TabsTrigger>
      </TabsList>
      {/* <TabsContent value="account">
        <Card></Card>
      </TabsContent>
      <TabsContent value="password">
        <Card></Card>
      </TabsContent> */}
    </Tabs>
  );
}
