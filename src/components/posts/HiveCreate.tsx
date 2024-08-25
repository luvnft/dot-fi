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
} from "@radix-ui/react-icons";
import { Label } from "@radix-ui/react-label";
import * as React from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { TooltipWrapper } from "../create-form/Tooltips";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PostCard from "./PostCard";
import Automation from "../create-form/Automation";
import { SelectTags } from "../create-form/SelectTags";
import { DatePickerWithRange } from "../create-form/Deadline";
import CryptoForm from "../create-form/CryptoForm";

type ExampleLayoutProps = React.ComponentPropsWithoutRef<typeof Flex> & {
  focusable?: boolean;
};

export default function HiveCreate({ focusable = true, ...props }) {
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
    // crypto submission

    rewards_type: [],
    category: [],
  });

  return (
    <Card size="2" className="pb-20">
      <Heading as="h3" size="4" mb="4">
        CREATE HIVE POST
      </Heading>

      <Grid columns="2" gap="2" mb="4">
        <Box gridColumn="">
          <Label>
            <Text size="2" weight="bold" mb="2" asChild>
              <Box display="inline-block">Title</Box>
            </Text>

            <TextField.Root
              tabIndex={tabIndex}
              variant="soft"
              placeholder="Enter hive title"
              defaultValue="Skirt #16"
            />
          </Label>
        </Box>

        <Box>
          <Label>
            <Text size="2" weight="bold" mb="2" asChild>
              <Box display="inline-block">Deadline</Box>
            </Text>

            <DatePickerWithRange />
          </Label>
        </Box>
      </Grid>

      <Box mb="4">
        <Text size="2" weight="bold" mb="2" asChild>
          <Box display="inline-block">Media</Box>
        </Text>

        <Grid columns="3" gap="2">
          {/* <Flex>
              <img
                src="https://images.unsplash.com/photo-1551163943-3f6a855d1153?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80&crop=bottom"
                width="200"
                height="200"
                style={{
                  borderRadius: "var(--radius-2)",
                  objectFit: "cover",
                  width: "100%",
                  height: 121,
                  cursor: "zoom-in",
                }}
              />
            </Flex> */}
          <Flex>
            <img
              src="https://workos.imgix.net/images/c773ee38-9136-49d1-804c-6d166dad9c65.png?auto=format&fit=clip&q=80w=400&h=400"
              width="200"
              height="200"
              className="invisible"
              style={{
                borderRadius: "var(--radius-2)",
                objectFit: "cover",
                width: "100%",
                height: 121,
                cursor: "zoom-in",
              }}
            />
          </Flex>
          <Flex
            align="center"
            justify="center"
            style={{
              border: "1px solid var(--gray-11)",
              borderRadius: "var(--radius-2)",
            }}
          >
            <Grid columns="2" gap="2">
              <IconButton
                tabIndex={tabIndex}
                highContrast
                variant="soft"
                size="2"
              >
                <ImageIcon />
              </IconButton>
              <IconButton
                tabIndex={tabIndex}
                highContrast
                variant="soft"
                size="2"
              >
                <VideoIcon />
              </IconButton>
              <IconButton
                tabIndex={tabIndex}
                highContrast
                variant="soft"
                size="2"
              >
                <InstagramLogoIcon />
              </IconButton>
              <IconButton
                tabIndex={tabIndex}
                highContrast
                variant="soft"
                size="2"
              >
                <RulerHorizontalIcon />
              </IconButton>
            </Grid>
          </Flex>
        </Grid>
      </Box>

      <Box mb="4">
        <Label htmlFor="skirt-description">
          <Text size="2" weight="bold" mb="2" asChild>
            <Box display="inline-block">Description</Box>
          </Text>
        </Label>
        <Box position="relative">
          <TextArea
            tabIndex={tabIndex}
            spellCheck={false}
            id="skirt-description"
            variant="soft"
            rows={10}
            defaultValue="Amidst the soft hues and delicate silence, one's gaze is always drawn towards this skirt. The fabric seems to possess a story of its own, woven with threads of history and whispered secrets. Its savory color, reminiscent of lush meadows in spring, holds the promise of new beginnings. Delicate ruffles cascade elegantly, like gentle waves lapping against an untouched shore."
            style={{ paddingTop: 48 }}
          />
          <Box position="absolute" m="2" top="0" left="0" right="0">
            <Flex gap="4">
              <Flex gap="1">
                <IconButton tabIndex={tabIndex} variant="soft" highContrast>
                  <FontItalicIcon />
                </IconButton>

                <IconButton tabIndex={tabIndex} variant="soft" highContrast>
                  <FontBoldIcon />
                </IconButton>

                <IconButton tabIndex={tabIndex} variant="soft" highContrast>
                  <StrikethroughIcon />
                </IconButton>
              </Flex>

              <Flex gap="1">
                <IconButton tabIndex={tabIndex} variant="soft" highContrast>
                  <TextAlignLeftIcon />
                </IconButton>

                <IconButton tabIndex={tabIndex} variant="soft" highContrast>
                  <TextAlignCenterIcon />
                </IconButton>

                <IconButton tabIndex={tabIndex} variant="soft" highContrast>
                  <TextAlignRightIcon />
                </IconButton>
              </Flex>

              <Flex gap="1">
                <IconButton tabIndex={tabIndex} variant="soft" highContrast>
                  <MagicWandIcon />
                </IconButton>

                <IconButton tabIndex={tabIndex} variant="soft" highContrast>
                  <ImageIcon />
                </IconButton>

                <IconButton tabIndex={tabIndex} variant="soft" highContrast>
                  <CrumpledPaperIcon />
                </IconButton>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Box>

      <Box mb="4">
        <Text size="2" weight="bold" mb="2" asChild>
          <Box display="inline-block" className="flex items-center gap-1">
            Rewards
            <TooltipWrapper>
              {" "}
              Rewards for your bees
              {/*  */}
              declaring and submit reward earlier build trust on hive and
              quality bees
            </TooltipWrapper>
          </Box>
          {/*  */}
        </Text>

        <Grid asChild columns="3" gap="1">
          <ToggleButtons
            type="multiple"
            tabIndex={tabIndex}
            value={state.rewards_type}
            onValueChange={(value) =>
              setState({ ...state, rewards_type: value })
            }
            values={["USD", "Crypto", "NFT"]}
          />
        </Grid>
      </Box>

      {/* accordion */}
      {/* check border */}
      <Card className="my-4">
        <Accordion type="multiple">
          {/* <AccordionItem value="item-1" className="border-gray-400">
            <AccordionTrigger>USD</AccordionTrigger>
            <AccordionContent>Currently not available</AccordionContent>
          </AccordionItem> */}
          <AccordionItem value="crypto" className="border-0">
            {/* <AccordionItem value="crypto" className="border-gray-400"> */}
            <AccordionTrigger>Crypto</AccordionTrigger>
            <AccordionContent>
              {/* <PostCard /> */}

              <CryptoForm {...{ state, setState }} />
            </AccordionContent>
          </AccordionItem>
          {/* <AccordionItem value="nft" className="border-0">
            <AccordionTrigger>NFT</AccordionTrigger>
            <AccordionContent>
              <AccordionContent>Currently not available</AccordionContent>
            </AccordionContent>
          </AccordionItem> */}
        </Accordion>
      </Card>

      {/* Abstract account native */}
      <Card className="my-4 p-6">
        <Automation />
      </Card>

      {/* <Grid columns="2" gap="8" mb="4">
        <Box gridColumn="">
          <Label>
            <Text size="2" weight="bold" mb="2" asChild>
              <Box display="inline-block">Deadline</Box>
            </Text>

            <DatePickerWithRange />
          </Label>
        </Box>

        <Box>
          <Label>
            <Text size="2" weight="bold" mb="2" asChild>
              <Box display="inline-block">Tags</Box>
            </Text>
            <SelectTags />
          </Label>
        </Box>
      </Grid> */}
      <Box>
        <Text size="2" weight="bold" mb="2" asChild>
          <Box display="inline-block">Sizes</Box>
        </Text>

        <Grid asChild columns="3" gap="1">
          <ToggleButtons
            type="multiple"
            tabIndex={tabIndex}
            values={[
              "Giveaway",
              "Shill",
              "Video Request",
              "Engagement",
              "Post",
              "Video Request",
              "Engagement",
              "Post",
              "Video Request",
              "Engagement",
              "Post",
              "Post",
              //  "M", "L", "XL"
            ]}
            value={state.category}
            onValueChange={(value) => setState({ ...state, category: value })}
          />
        </Grid>
      </Box>
      <br />

      <Button
        asChild
        size={{ initial: "3", xs: "4" }}
        variant="surface"
        highContrast
        style={{ flexGrow: 1 }}
        className="w-full cursor-pointer"
      >
        <a>CREATE</a>
      </Button>

      {/* MAYBE ADD GAS FEE - PAY ? */}
      {/* Using weight profile? */}

      {/* <Box mb="4">
        <Text size="2" weight="bold" mb="2" asChild>
          <Box display="inline-block">Main color</Box>
        </Text>

        <Grid asChild gap="1" columns="3">
          <ToggleButtons
            type="single"
            tabIndex={tabIndex}
            values={[
              "White",
              "Gray",
              // "Black",
              // "Red",
              // "Pink",
              // "Violet",
              // "Blue",
              // "Green",
              // "Beige",
            ]}
            value={state.productColor}
            onValueChange={(value) =>
              setState({ ...state, productColor: value })
            }
          >
            {(value) => (
              <React.Fragment>
                <Box
                  flexShrink="0"
                  width="16px"
                  height="16px"
                  style={{
                    background: {
                      White: "white",
                      Gray: "var(--gray-9)",
                      Black: "#1B1B18",
                      Red: "var(--red-9)",
                      Pink: "var(--pink-8)",
                      Violet: "var(--violet-9)",
                      Blue: "var(--blue-9)",
                      Green: "var(--teal-9)",
                      Beige: "#E5DFCF",
                    }[value],
                    borderRadius: "var(--radius-1)",
                    boxShadow: "inset 0 0 0 1px rgba(160, 160, 160, 0.4)",
                  }}
                />
                {value}
              </React.Fragment>
            )}
          </ToggleButtons>
        </Grid>
      </Box>

      */}

      {/*  */}
    </Card>
  );
}

interface ToggleButtonsSingleProps {
  type: "single";
  value: string;
  onValueChange: (value: string) => void;
}

interface ToggleButtonsMultipleProps {
  type: "multiple";
  value: string[];
  onValueChange: (value: string[]) => void;
}

interface ToggleButtonsCommonProps {
  tabIndex?: number;
  values: string[];
  children?: (value: string) => React.ReactNode;
}

type ToggleGroupRootElement = React.ElementRef<typeof ToggleGroup.Root>;

type ToggleButtonsProps = (
  | ToggleButtonsSingleProps
  | ToggleButtonsMultipleProps
) &
  ToggleButtonsCommonProps;

export const ToggleButtons = React.forwardRef<
  ToggleGroupRootElement,
  ToggleButtonsProps
>(({ children, tabIndex, values, ...props }, forwardedRef) => {
  const isActive = (value: string) =>
    props.type === "single"
      ? props.value === value
      : props.value.includes(value);

  return (
    <ToggleGroup.Root
      ref={forwardedRef}
      {...props}
      {...(tabIndex !== undefined && { tabIndex })}
      onValueChange={(value) => {
        if (value) {
          props.onValueChange(value);
        }
      }}
    >
      {values.map((value) => (
        <ToggleGroup.Item asChild key={value} value={value}>
          <Button
            highContrast
            variant={isActive(value) ? "solid" : "soft"}
            style={{ fontWeight: 400 }}
            {...(tabIndex !== undefined && { tabIndex })}
          >
            {children ? children(value) : value}
          </Button>
        </ToggleGroup.Item>
      ))}
    </ToggleGroup.Root>
  );
});
