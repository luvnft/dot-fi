import { Dashboard02 } from "@/components/blocks/dasbhoard-02";
import { Dashboard05 } from "@/components/blocks/dashboard-05";
import Main from "@/components/homepage/Main";
import { NewLayout } from "@/components/layouts/NewLayout";
import { TabsSocial } from "@/components/homepage/TabsSocial";
import PostList from "@/components/posts/PostList";
import { Box, Button } from "@radix-ui/themes";

export default function NFTpage() {
  return (
    <>
      <TabsSocial defaultValue="nfts" />

      <div className="flex items-center  justify-center h-full">
        <Box>
          <Button highContrast variant="soft">
            Currently on construction
          </Button>
        </Box>
      </div>
    </>
  );
}
