import React from "react";
// import NextLink from 'next/link';
import {
  Box,
  Grid,
  Text,
  Flex,
  Link,
  Heading,
  AccessibleIcon,
} from "@radix-ui/themes";
// import { RadixLogo } from './RadixLogo';
// import { useRouter } from 'next/router';
import { BoxLink } from "./BoxLink";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import styles from "./Footer.module.css";
import { useLocation, useNavigate, Link as RouterLink } from "react-router-dom";

export const Footer = () => {
  // const router = useRoutes();

  const router = useLocation();
  const isColors = router?.pathname?.includes("/colors");

  return (
    <Grid asChild pb="9" gapX="7" gapY="3" className={styles.Footer}>
      <footer>
        <Flex
          align="start"
          direction="column"
          className={styles.RadixLogo}
          mb="5">
          <RouterLink to="/">
            {/* <BoxLink>
              <AccessibleIcon label="Radix Homepage">
                <RadixLogo />
              </AccessibleIcon>
            </BoxLink> */}
          </RouterLink>
          <Box pr="8" mt="5">
            <Heading
              as="h6"
              size="2"
              style={{
                lineHeight: "20px",
                color: "var(--gray-10)",
                fontWeight: "inherit",
              }}>
              Powered by{" "}
              <Link color="gray" href="https://THERAS.XYZ">
                THERAS Labs
              </Link>
              .
            </Heading>
          </Box>
        </Flex>
        <Box>
          <Heading as="h6" size="3">
            Products
          </Heading>
          <ul>
            <li>
              <Text as="p" size="2" mt="3">
                <RouterLink to="/">
                  <Link color="gray">Themes</Link>
                </RouterLink>
              </Text>
            </li>
            <li>
              <Text as="p" size="2" mt="3">
                <RouterLink to="/primitives">
                  <Link color="gray">Primitives</Link>
                </RouterLink>
              </Text>
            </li>
            <li>
              <Text as="p" size="2" mt="3">
                <RouterLink to="/colors">
                  <Link color="gray">Colors</Link>
                </RouterLink>
              </Text>
            </li>
            <li>
              <Text as="p" size="2" mt="3">
                <RouterLink to="/icons">
                  <Link color="gray">Icons</Link>
                </RouterLink>
              </Text>
            </li>
          </ul>
        </Box>
        {isColors === false && (
          <Box>
            <Heading as="h6" size="3">
              Docs
            </Heading>
            <ul>
              <li>
                <Text as="p" size="2" mt="3">
                  <RouterLink to="/primitives/docs/overview/introduction">
                    <Link color="gray">Introduction</Link>
                  </RouterLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="2" mt="3">
                  <RouterLink to="/primitives/docs/guides/styling">
                    <Link color="gray">Styling</Link>
                  </RouterLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="2" mt="3">
                  <RouterLink to="/primitives/docs/overview/accessibility">
                    <Link color="gray">Accessibility</Link>
                  </RouterLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="2" mt="3">
                  <RouterLink to="/primitives/docs/overview/releases">
                    <Link color="gray">Releases</Link>
                  </RouterLink>
                </Text>
              </li>
            </ul>
          </Box>
        )}
        {isColors && (
          <Box>
            <Heading as="h6" size="3">
              Docs
            </Heading>
            <ul>
              <li>
                <Text as="p" size="2" mt="3">
                  <RouterLink to="/colors/docs/overview/installation">
                    <Link color="gray">Installation</Link>
                  </RouterLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="2" mt="3">
                  <RouterLink to="/colors/docs/palette-composition/scales">
                    <Link color="gray">Scales</Link>
                  </RouterLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="2" mt="3">
                  <RouterLink to="/colors/docs/palette-composition/composing-a-palette">
                    <Link color="gray">Palette composition</Link>
                  </RouterLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="2" mt="3">
                  <RouterLink to="/colors/docs/palette-composition/understanding-the-scale">
                    <Link color="gray">Understanding the scale</Link>
                  </RouterLink>
                </Text>
              </li>
            </ul>
          </Box>
        )}
        <Box>
          <Heading as="h6" size="3">
            Community
          </Heading>
          <ul>
            <li>
              <Text as="p" size="2" mt="3">
                <Link
                  href="https://github.com/radix-ui"
                  color="gray"
                  target="_blank"
                  style={{ display: "inline-flex", alignItems: "center" }}>
                  GitHub
                  <Flex asChild ml="2" style={{ color: "var(--gray-8)" }}>
                    <ArrowTopRightIcon />
                  </Flex>
                </Link>
              </Text>
            </li>
            <li>
              <Text as="p" size="2" mt="3">
                <Link
                  href="https://twitter.com/radix_ui"
                  color="gray"
                  target="_blank"
                  style={{ display: "inline-flex", alignItems: "center" }}>
                  Twitter
                  <Flex asChild ml="2" style={{ color: "var(--gray-8)" }}>
                    <ArrowTopRightIcon />
                  </Flex>
                </Link>
              </Text>
            </li>
            <li>
              <Text as="p" size="2" mt="3">
                <Link
                  href="https://discord.com/invite/7Xb99uG"
                  color="gray"
                  target="_blank"
                  style={{ display: "inline-flex", alignItems: "center" }}>
                  Discord
                  <Flex asChild ml="2" style={{ color: "var(--gray-8)" }}>
                    <ArrowTopRightIcon />
                  </Flex>
                </Link>
              </Text>
            </li>
          </ul>
        </Box>
      </footer>
    </Grid>
  );
};
