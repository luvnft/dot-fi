import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  IconButton,
  Inset,
  Link,
  Select,
  Separator,
  Strong,
  Text,
  TextArea,
  TextField,
  Theme,
} from "@radix-ui/themes";
import {
  BookmarkFilledIcon,
  BookmarkIcon,
  CalendarIcon,
  CrumpledPaperIcon,
  FontBoldIcon,
  FontItalicIcon,
  ImageIcon,
  InstagramLogoIcon,
  MagicWandIcon,
  MagnifyingGlassIcon,
  RulerHorizontalIcon,
  StrikethroughIcon,
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  VideoIcon,
  Share1Icon,
  HeartIcon,
  ChatBubbleIcon,
  Link2Icon,
  CubeIcon,
  LoopIcon,
  LayersIcon,
  DotsVerticalIcon,
} from "@radix-ui/react-icons";
import { Label } from "@radix-ui/react-label";
import * as React from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { ShareIcon } from "lucide-react";

// options:
// - image / video
// - text
// - claim / do something button

const ICON_LEFT = [
  <ChatBubbleIcon />,
  <LayersIcon />,
  <LoopIcon />,
  <HeartIcon />,
];

const ICON_RIGHT = [<Share1Icon />, <BookmarkIcon />];

// options to post simple one, or QUESTS
export default function PostCard({ focusable = true, ...props }) {
  // We’ll use a different portal container for homepage demo purposes; this is usually not needed.
  const [portalContainer, setPortalContainer] =
    React.useState<HTMLDivElement>(null);

  // Interactive elements may be not focusable for homepage demo purposes
  const tabIndex = focusable ? undefined : -1;

  // Simple state to make the example functional
  const [state, setState] = React.useState({
    sneakersBookmarked: false,
    jeansBookmarked: false,
    delivery: "",
    size: "9",
    material: "",
    color: "",
    productMaterial: "",
    productColor: "",
    productSizes: [],
  });

  return (
    <Card
      //
      variant="surface"
      size="4"
      className="mb-2 pb-4"
    >
      <div className="flex justify-between">
        <div className="mb-2 flex items-center gap-2">
          {/* <Avatar /> */}
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Heading as="h3" size="3">
            TItle name
          </Heading>
          <Text as="p" size="2" color="gray">
            0x123.. or email
          </Text>
        </div>
        <div className="cursor-disabled">
          <DotsVerticalIcon />
        </div>
      </div>

      <div className="mb-2 flex items-center gap-2 ">
        {/* <Avatar /> */}
        <Avatar className="invisible">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="whole content">
          <div>
            {/* content */}
            <Text as="p" size="3" mb="4">
              if you're based, quote cast this with a pic of your basename. not
              fully based yet? register yours at base.org/names 🔵
            </Text>
            {/* content, can be video or image too */}
            <img
              className="w-full h-full xl:max-h-[500px] my-2"
              src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=560&h=540&q=80"
              style={{ borderRadius: "var(--radius-1)", objectFit: "cover" }}
            />
          </div>
          <div className="flex justify-between my-2">
            {/* self-actions */}
            {/* <IconButton
                size="4"
                tabIndex={tabIndex}
                color="gray"
                variant="ghost"
                highContrast={state.sneakersBookmarked}
                onClick={() =>
                  setState((currentState) => ({
                    ...currentState,
                    sneakersBookmarked: !currentState.sneakersBookmarked,
                  }))
                }
              >
                {state.sneakersBookmarked ? (
                  <BookmarkFilledIcon />
                ) : (
                  <BookmarkIcon />
                )}
              </IconButton> */}

            <div className="left flex gap-1 ">
              {ICON_LEFT?.map((icon, i) => (
                <div className=" flex items-center">
                  <IconButton className="">{icon}</IconButton>
                  &nbsp; 99
                </div>
              ))}
            </div>
            <div className="right flex gap-1">
              {ICON_RIGHT?.map((icon, i) => (
                <IconButton className="">{icon}</IconButton>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
