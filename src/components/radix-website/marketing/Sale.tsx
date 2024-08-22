import React from "react";

import { Box, Text, Link, Flex, Container, Heading } from "@radix-ui/themes";
import { styled } from "../utils/stitches";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import {
  Carousel,
  CarouselSlideList,
  CarouselSlide,
  CarouselNext,
  CarouselPrevious,
} from "./Carousel";
import { PrimitivesHeroDialog } from "./PrimitivesHeroDialog";
import { PrimitivesHeroPopover } from "./PrimitivesHeroPopover";
import { PrimitivesHeroDropdownMenu } from "./PrimitivesHeroDropdownMenu";
import { PrimitivesHeroSlider } from "./PrimitivesHeroSlider";
import { PrimitivesHeroTabs } from "./PrimitivesHeroTabs";
import { PrimitivesHeroScrollArea } from "./PrimitivesHeroScrollArea";
import { PrimitivesHeroAccordion } from "./PrimitivesHeroAccordion";
import { PrimitivesHeroRadioGroup } from "./PrimitivesHeroRadioGroup";
import { PrimitivesHeroToggleGroup } from "./PrimitivesHeroToggleGroup";
import { PrimitivesHeroSwitch } from "./PrimitivesHeroSwitch";
import { useComposedRefs } from "@radix-ui/react-compose-refs";
// import { Button, Section } from '@radix-ui/themes';
// import { SerifHeading } from '@components/SerifHeading';
import { HiddenScroll } from "./HiddenScroll";

import { useLocation, useNavigate, Link as RouterLink } from "react-router-dom";

const DemoContainer = styled("div", {
  display: "flex",
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  width: 300,
  height: 400,
  borderRadius: "var(--radius-4)",
  marginBottom: "var(--space-2)",

  // Content slightly above vertical center feels perfectly centred
  paddingBottom: "var(--space-3)",

  // Can't select text because the carousel is draggable
  userSelect: "none",
  cursor: "default",

  "@media (min-width: 520px)": {
    width: 400,
  },
});

const StyledFocusArea = styled("div", {
  outline: 0,
  borderRadius: "var(--radius-4)",
  "&:focus": {
    boxShadow: "0 0 0 2px var(--blue-a8)",
  },
  "&:focus:not(:focus-visible)": {
    boxShadow: "none",
  },
});

const FocusArea = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof StyledFocusArea>
>(({ children, onKeyDown, ...props }, forwardedRef) => {
  const ownRef = React.useRef<HTMLDivElement>(null);
  const composedRef = useComposedRefs(ownRef, forwardedRef);

  return (
    <StyledFocusArea
      {...props}
      data-focus-area
      ref={composedRef}
      tabIndex={0}
      onKeyDown={(event) => {
        onKeyDown?.(event);

        // Move focus inside the FocusArea when Enter or Spacebar is pressed
        if (
          event.target === event.currentTarget &&
          (event.key === "Enter" || event.key === " ")
        ) {
          // We are looking for something obviously focusable
          const tier1 =
            '[role="menu"], [role="dialog"] input, [role="dialog"] button, [tabindex="0"]';
          const tier2 = "a, button, input, select, textarea";

          // Search for tier 1 and tier 2 elements, prioritising
          const elementToFocus = [
            event.currentTarget.querySelector<HTMLElement>(tier1),
            event.currentTarget.querySelector<HTMLElement>(tier2),
          ].filter((el) => Boolean(el))[0];

          if (elementToFocus) {
            event.preventDefault();
            elementToFocus.focus();
          }
        }

        // Move focus onto the FocusArea when Escape is pressed, unless the focus is currently inside a modal
        if (
          event.key === "Escape" &&
          event.target instanceof HTMLElement &&
          event.target !== event.currentTarget &&
          event.target.closest('[role="dialog"], [role="menu"]') === null
        ) {
          event.currentTarget.focus();
        }
      }}>
      <div data-focus-area-entry />
      {children}
      <div data-focus-area-exit />
    </StyledFocusArea>
  );
});

export default function SaleCarousel() {
  const lastUsedFocusArea = React.useRef<HTMLElement>(null);
  const isRoving = React.useRef(false);

  React.useEffect(() => {
    lastUsedFocusArea.current = document.querySelector("[data-focus-area]");
  }, []);

  const onFocusAreaFocus = React.useCallback(
    (event: React.FocusEvent<HTMLElement>) => {
      lastUsedFocusArea.current = event.currentTarget;
    },
    []
  );

  // We are implementing a simple roving tab index with some tweaks
  const onFocusAreaKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLElement>) => {
      if (event.target === event.currentTarget) {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          const allAreas = Array.from(
            document.querySelectorAll<HTMLElement>("[data-focus-area]")
          );
          const thisIndex = allAreas.findIndex(
            (el) => el === event.currentTarget
          );
          const nextIndex = Math.min(thisIndex + 1, allAreas.length - 1);
          const nextDemo = allAreas[nextIndex];
          isRoving.current = true;
          nextDemo.focus();
          (nextDemo as any).scrollIntoViewIfNeeded?.(true);
          lastUsedFocusArea.current = nextDemo;
          isRoving.current = false;
        }

        if (event.key === "ArrowLeft") {
          event.preventDefault();
          const allAreas = Array.from(
            document.querySelectorAll<HTMLElement>("[data-focus-area]")
          );
          const thisIndex = allAreas.findIndex(
            (el) => el === event.currentTarget
          );
          const prevIndex = Math.max(thisIndex - 1, 0); // thisIndex - 1 >= 0 ? thisIndex - 1 : allAreas.length - 1;
          const prevDemo = allAreas[prevIndex];
          isRoving.current = true;
          prevDemo.focus();
          (prevDemo as any).scrollIntoViewIfNeeded?.(true);
          lastUsedFocusArea.current = prevDemo;
          isRoving.current = false;
        }

        // Tab key press moves focus to the next element after the carousel
        if (event.key === "Tab" && event.shiftKey === false) {
          const selector =
            "a, button, input, select, textarea, [data-focus-area-exit]";
          const elements = Array.from(
            document.querySelectorAll<HTMLElement>(selector)
          ).filter(
            (element) =>
              element.tabIndex !== -1 ||
              element.hasAttribute("data-focus-area-exit")
          );

          // Find last exit guard
          elements.reverse();
          const lastExit = elements.find((el) =>
            el.matches("[data-focus-area-exit]")
          );
          elements.reverse();
          const lastExitIndex = elements.indexOf(lastExit);
          const nextElement = elements[lastExitIndex + 1];

          if (nextElement) {
            event.preventDefault();
            nextElement.focus();
          }
        }

        // Shift + Tab key press moves focus to the previous element before the carousel
        if (event.key === "Tab" && event.shiftKey) {
          const selector =
            "a, button, input, select, textarea, [data-focus-area-entry]";
          const elements = Array.from(
            document.querySelectorAll<HTMLElement>(selector)
          ).filter(
            (element) =>
              element.tabIndex !== -1 ||
              element.hasAttribute("data-focus-area-entry")
          );

          // Find first entry guard
          const firstEntry = elements.find((el) =>
            el.matches("[data-focus-area-entry]")
          );
          const firstEntryIndex = elements.indexOf(firstEntry);
          const prevElement = elements[firstEntryIndex - 1];

          if (prevElement) {
            event.preventDefault();
            prevElement.focus();
          }
        }
      }
    },
    []
  );

  React.useEffect(() => {
    const tabListener = (event: KeyboardEvent) => {
      // Catch that Tab that lands into carousel contents from
      // elsewhere, and redirect focus to the nearest focus area
      if (
        event.key === "Tab" &&
        event.shiftKey === false &&
        event.target instanceof HTMLElement &&
        !event.target.hasAttribute("data-focus-area")
      ) {
        const selector =
          "a, button, input, select, textarea, [data-focus-area-entry]";
        const elements = Array.from(
          document.querySelectorAll<HTMLElement>(selector)
        ).filter(
          (element) =>
            element.tabIndex !== -1 ||
            element === event.target ||
            element.hasAttribute("data-focus-area-entry")
        );

        // Find first entry guard
        const firstEntryIndex = elements.findIndex((el) =>
          el.hasAttribute("data-focus-area-entry")
        );

        if (elements.indexOf(event.target) + 1 === firstEntryIndex) {
          event.preventDefault();
          lastUsedFocusArea.current?.focus();
        }
      }

      // Catch that Shift + Tab that lands into carousel contents from
      // elsewhere, and redirect focus to the nearest focus area
      if (
        event.key === "Tab" &&
        event.shiftKey &&
        event.target instanceof HTMLElement &&
        !event.target.hasAttribute("data-focus-area")
      ) {
        const selector =
          "a, button, input, select, textarea, [data-focus-area-exit]";
        const elements = Array.from(
          document.querySelectorAll<HTMLElement>(selector)
        ).filter(
          (element) =>
            element.tabIndex !== -1 ||
            element === event.target ||
            element.hasAttribute("data-focus-area-exit")
        );

        // Find last exit guard
        elements.reverse();
        const lastExit = elements.find((el) =>
          el.hasAttribute("data-focus-area-exit")
        );
        elements.reverse();
        const lastExitIndex = elements.indexOf(lastExit);

        if (elements.indexOf(event.target) - 1 === lastExitIndex) {
          event.preventDefault();
          lastUsedFocusArea.current?.focus();
        }
      }
    };

    document.addEventListener("keydown", tabListener);
    return () => document.removeEventListener("keydown", tabListener);
  }, []);
  return (
    <Box position="relative" className="border border-red-500 w-full h-full ">
      <Carousel className="border border-green-500 h-full w-full">
        <Box
          asChild
          ml={{ initial: "5", xs: "6", sm: "7", md: "9" }}
          className="w-full h-full border border-blue-600">
          <HiddenScroll asChild className="border-2 border-pink-400">
            <CarouselSlideList
              style={{
                display: "grid",
                gridAutoFlow: "column",
                gridAutoColumns: "min-content",
                paddingTop: "var(--space-1)",
                paddingBottom: "var(--space-1)",
                WebkitOverflowScrolling: "touch",
                position: "relative",

                // Remove the actual margin
                "--margin-left-override": 0,

                // Move the responsive margin here
                paddingLeft:
                  "max(var(--margin-left), calc(10% - var(--container-4) / 2))",
              }}>
              {[1, 1, 1, 1].map(() => (
                <Box pr="5" className=" border border-red-500">
                  <CarouselSlide className=" border border-red-500">
                    <FocusArea
                      className="border border-orange-500 "
                      aria-label="Dialog component demo"
                      onKeyDown={onFocusAreaKeyDown}
                      onFocus={onFocusAreaFocus}>
                      <DemoContainer
                        className="border border-green-500 w-[3000px] h-[800px]"
                        aria-hidden
                        css={{
                          background:
                            "linear-gradient(120deg, var(--indigo-6), var(--crimson-5))",
                          ".dark &, .dark-theme &": {
                            background:
                              "linear-gradient(120deg, var(--indigo-4), var(--plum-3))",
                          },
                        }}>
                        <PrimitivesHeroDialog />
                      </DemoContainer>
                    </FocusArea>
                    <GrabBox>
                      <Heading as="h3" size="3" mb="1">
                        Dialog
                      </Heading>
                      <Text as="p" size="2" color="gray">
                        With modal and non-modal modes, fine-grained
                        focus&nbsp;control, accessible to screen readers.
                      </Text>
                    </GrabBox>
                  </CarouselSlide>
                </Box>
              ))}
            </CarouselSlideList>
          </HiddenScroll>
        </Box>

        <Box
          style={{
            position: "absolute",
            top: "calc(50% - var(--space-9))",
            left: "15px",
          }}>
          <CarouselPrevious
            aria-label="Show previous demo"
            tabIndex={-1}
            as={CarouselArrowButton}>
            <ArrowLeftIcon />
          </CarouselPrevious>
        </Box>
        <Box
          style={{
            position: "absolute",
            top: "calc(50% - var(--space-9))",
            right: "15px",
          }}>
          <CarouselNext
            aria-label="Show next demo"
            tabIndex={-1}
            as={CarouselArrowButton}>
            <ArrowRightIcon />
          </CarouselNext>
        </Box>
      </Carousel>
    </Box>
  );
}

const CarouselArrowButton = styled("button", {
  unset: "all",
  outline: 0,
  margin: 0,
  border: 0,
  padding: 0,

  display: "flex",
  position: "relative",
  zIndex: 1,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "var(--color-panel-solid)",
  borderRadius: "100%",
  width: "var(--space-8)",
  height: "var(--space-8)",
  color: "var(--gray-12)",

  boxShadow: "var(--black-a7) 0px 2px 12px -5px, var(--black-a2) 0px 1px 3px",
  willChange: "transform, box-shadow, opacity",
  transition: "all 100ms",

  "@media (hover: hover)": {
    "&:hover": {
      boxShadow:
        "var(--black-a6) 0px 3px 16px -5px, var(--black-a2) 0px 1px 3px",

      // Fix a bug when hovering at button edges would cause the button to jitter because of transform
      "&::before": {
        content: "",
        inset: -2,
        borderRadius: "100%",
        position: "absolute",
      },
    },
  },
  "&:focus-visible:not(:active)": {
    boxShadow: "var(--black-a7) 0px 2px 12px -5px, var(--black-a2) 0px 1px 3px",
    outline: "2px solid var(--accent-8)",
  },
  "&:active": {
    transform: "translateY(1px)",
    boxShadow: "var(--black-a7) 0px 2px 10px -5px, var(--black-a2) 0px 1px 3px",
    transition: "opacity 100ms",
  },
  "&:disabled": {
    opacity: 0,
  },
  "@media (hover: none) and (pointer: coarse)": {
    display: "none",
  },
});

const GrabBox = styled("div", {
  cursor: "grab",
  "&:active": { cursor: "grabbing" },

  // Fill in spaces between slides
  marginRight: "calc(-1 * var(--space-5))",
  paddingRight: "var(--space-5)",
});
