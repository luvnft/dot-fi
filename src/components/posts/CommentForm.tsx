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

export default function CommentForm({ focusable = true, ...props }) {
  const tabIndex = focusable ? undefined : -1;

  return (
    <Card>
      <Box position="relative">
        <TextArea
          tabIndex={tabIndex}
          spellCheck={false}
          id="skirt-description"
          variant="soft"
          rows={4}
          defaultValue="Submit your proof (screenshot or link) or just reply."
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
      <div className="flex justify-between mt-4">
        <div className=" " />
        <div className="flex  gap-2 ">
          <Button
            asChild
            size={{ initial: "3", xs: "4" }}
            variant="soft"
            highContrast
            style={{ flexGrow: 1 }}
            className=" cursor-pointer"
          >
            <a>Reply</a>
          </Button>
          <Button
            asChild
            size={{ initial: "3", xs: "4" }}
            variant="surface"
            highContrast
            style={{ flexGrow: 1 }}
            className=" cursor-pointer"
          >
            <a>Participate</a>
          </Button>
        </div>
      </div>
    </Card>
  );
}
