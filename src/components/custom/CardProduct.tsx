import React from "react";
import {
  AspectRatio,
  Avatar,
  Blockquote,
  Box,
  Button,
  Card,
  Checkbox,
  Flex,
  Grid,
  Heading,
  HoverCard,
  IconButton,
  Inset,
  Link,
  Separator,
  Slider,
  Switch,
  Text,
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

export default function CardProduct() {
  return (
    <Card size="1">
      <Flex mb="2" position="relative">
        <img
          width="280"
          height="270"
          src="https://images.unsplash.com/photo-1577210897949-1f56f943bf82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=560&h=540&q=80&crop=bottom"
          style={{ borderRadius: "var(--radius-1)" }}
        />

        <Theme appearance="light" asChild>
          <Flex
            align="center"
            justify="center"
            position="absolute"
            bottom="0"
            right="0"
            width="32px"
            height="32px"
            style={{ borderRadius: "var(--radius-3)" }}
            m="2">
            <IconButton
              size="2"
              tabIndex={0}
              color="gray"
              variant="ghost"
              // highContrast={state.jeansBookmarked}
              // highContrast={state.jeansBookmarked}
              onClick={
                () => {}
                //   setState((currentState) => ({
                //     ...currentState,
                //     jeansBookmarked: !currentState.jeansBookmarked,
                //   }))
              }>
              {false ? <BookmarkFilledIcon /> : <BookmarkIcon />}
            </IconButton>
          </Flex>
        </Theme>
      </Flex>

      <Flex align="end" justify="between" mb="2">
        <Box>
          <Flex mb="1">
            <Link
              href="#"
              underline="hover"
              tabIndex={0}
              highContrast
              size="2"
              color="gray"
              onClick={(e) => e.preventDefault()}>
              Pants and jeans
            </Link>
          </Flex>

          <Heading as="h3" size="3">
            Jeans #7
          </Heading>
        </Box>

        <Text as="div" size="6" weight="bold">
          $149
        </Text>
      </Flex>

      <Text as="p" size="2" color="gray" mb="4">
        Jeans with a sense of nostalgia, as if they carry whispered tales of
        past adventures.
      </Text>

      <Box>
        <Separator size="4" my="4" />
      </Box>

      <Flex gap="2" align="end">
        {/* <Flex direction="column" flexGrow="1">
        <Label asChild>
          <Text size="1" color="gray" mb="1">
            Color
          </Text>
        </Label>

        <Select.Root defaultValue="Lighter" size="2">
          <Select.Trigger tabIndex={tabIndex} variant="soft" />
          <Select.Content
            variant="soft"
            container={portalContainer}
            position="popper">
            <Select.Item value="Lighter">Lighter</Select.Item>
            <Select.Item value="Darker">Darker</Select.Item>
          </Select.Content>
        </Select.Root>
      </Flex> */}

        {/* <Flex direction="column">
        <Label asChild>
          <Text size="1" color="gray" mb="1">
            Size
          </Text>
        </Label>

        <Select.Root defaultValue="30" size="2">
          <Select.Trigger tabIndex={tabIndex} variant="soft" />
          <Select.Content
            variant="soft"
            container={portalContainer}
            position="popper">
            {Array.from({ length: 17 }, (_, i) => (
              <Select.Item key={i} value={String(i + 24)}>
                {i + 24}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </Flex> */}

        <Button tabIndex={0} size="2" variant="solid" color="gray" highContrast>
          Add to cart
        </Button>
      </Flex>
    </Card>
  );
}
