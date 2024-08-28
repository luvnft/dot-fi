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
  LightningBoltIcon,
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
  PaperPlaneIcon,
  CheckCircledIcon,
} from "@radix-ui/react-icons";
import { Label } from "@radix-ui/react-label";
import * as React from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AspectRatio } from "../ui/aspect-ratio";
import { useNavigate } from "react-router-dom";
import { MdHive } from "react-icons/md";

// import { ShareIcon } from "lucide-react";

// options:
// - image / video
// - text
// - claim / do something button

const ICON_LEFT = [
  <ChatBubbleIcon />,
  <LayersIcon />,
  <PaperPlaneIcon className="-rotate-45" />,
  <HeartIcon />,
];

const ICON_RIGHT = [<Share1Icon />, <BookmarkIcon />];

// options to post simple one, or QUESTS
export default function PostCard({
  focusable = true,
  isDetail = false,
  post,
  ...props
}) {
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

  const navigate = useNavigate();

  return (
    <Card
      onClick={() => {
        navigate("/post/" + post?.id);
      }}
      variant="surface"
      size="4"
      className="mb-2 pb-4"
    >
      <div className="flex justify-between ">
        <div
          className="mb-0 flex items-start gap-2 cursor-pointer "
          onClick={(e) => {
            e.stopPropagation();
            // redirect to profile
            alert("profile on construction");
          }}
        >
          {/* <Avatar /> */}
          <Avatar>
            <AvatarImage src={post?.profile?.img_url} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Heading as="h3" size="3">
            {post?.profile?.name}
          </Heading>
          <Text as="p" size="2" color="gray">
            {post?.profile?.handler}
          </Text>
          {/*  */}
        </div>
        <div className="flex gap-2">
          {post?.hive && (
            <Badge color="orange" size={"3"}>
              <MdHive />
              HIVE
            </Badge>
          )}
          {post?.boosted && (
            <Badge color="yellow" size={"3"}>
              <LightningBoltIcon />
              BOOSTED
            </Badge>
          )}
          {!!post?.rewards?.fiat && (
            <Badge color="iris" size={"3"}>
              FIAT
            </Badge>
          )}
          {!!post?.rewards?.crypto && (
            <Badge color="iris" size={"3"}>
              CRYPTO
            </Badge>
          )}
          {!!post?.rewards?.nft && (
            <Badge color="iris" size={"3"}>
              NFT
            </Badge>
          )}
          {!!post?.proof && (
            <Badge color="cyan" size={"3"}>
              PROOF
            </Badge>
          )}
          {!!post?.rewarded && (
            <Badge color="green" size={"3"}>
              <CheckCircledIcon />
              REWARDED
            </Badge>
          )}
          {!!post?.rewards?.automated && (
            <Badge color="orange" size={"3"}>
              AUTOMATED
            </Badge>
          )}
          <div
            onClick={(e) => {
              e.stopPropagation();
              // redirect to profile
              alert("open popover");
            }}
            className="cursor-disabled  p-2"
          >
            <DotsVerticalIcon />
          </div>
        </div>
      </div>

      <div className="mb-2 flex items-center gap-2 ">
        {/* <Avatar /> */}
        <Avatar className="invisible">
          <AvatarImage src={post?.profile?.img_url} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="whole content">
          <div>
            {/* content */}
            <Text as="p" size="3" mb="4">
              <div dangerouslySetInnerHTML={{ __html: post?.desc }} />
            </Text>
            {/* content, can be video or image too */}
            {post?.image && (
              <AspectRatio ratio={3 / 2} className="my-2">
                <img
                  className="w-full h-full  my-2"
                  src={post?.image}
                  style={{
                    borderRadius: "var(--radius-1)",
                    objectFit: "cover",
                  }}
                />
              </AspectRatio>
            )}
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

            {!props?.asComment && (
              <>
                <div className="left flex gap-1 cursor-pointer">
                  {ICON_LEFT?.map((icon, i) => (
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        //if love and share
                        if (i === 3) {
                          alert("love");
                        } else if (i === 2) {
                          alert("share click");
                        }
                      }}
                      className=" flex items-center cursor-pointer  scale-125 justify-center gap-2"
                    >
                      {/* <IconButton className=""> */}
                      {icon}
                      {/* </IconButton> */}
                      &nbsp;
                      {/* <Text as="p" size="2">
                    12.k
                  </Text> */}
                      &nbsp; &nbsp;
                    </div>
                  ))}
                </div>
                <div className="right flex gap-1">
                  {ICON_RIGHT?.map((icon, i) => (
                    <IconButton className="">{icon}</IconButton>
                  ))}
                </div>
              </>
            )}
            {/* asComment and asOwner */}

            {/*  show  rewarded status */}
          </div>
        </div>
      </div>
    </Card>
  );
}
