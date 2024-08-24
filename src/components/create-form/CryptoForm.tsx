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
import { Label } from "@radix-ui/react-label";
import * as React from "react";
import { ToggleButtons } from "../ui/toggle-button";

// using greenfield
export default function CryptoForm({
  focusable = true,
  state,
  setState,
  ...props
}) {
  const tabIndex = focusable ? undefined : -1;

  return (
    <div>
      {/* Network choice */}
      <Box mb="4">
        <Text size="2" weight="bold" mb="2" asChild>
          <Box display="inline-block">Network</Box>
        </Text>

        <Grid asChild gap="1" columns="3">
          <ToggleButtons
            type="single"
            tabIndex={tabIndex}
            values={[
              "Binance",
              "Polkadot",
              "Ethereum",
              // "Gray",
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

      {/* Crypto detail: choice -> select with input */}

      <Box>
        <Text size="2" weight="bold" mb="2" asChild>
          <Box display="inline-block">Select Token</Box>
        </Text>

        <Grid asChild columns="3" gap="1">
          <ToggleButtons
            type="single"
            tabIndex={tabIndex}
            values={[
              "USDT",
              "BNB",
              "Other",
              //  "M", "L", "XL"
            ]}
            value={state.productSizes}
            onValueChange={(value) =>
              setState({ ...state, productSizes: value })
            }
          />
        </Grid>
      </Box>

      {/* form : name, tickeet, info url, decimal */}
      {/* when others need to select */}
      <br />
      <Grid className="my-2 gap-2" columns={"3"}>
        {/* give detail this other token */}
        <Box>
          <Label>
            <Text size="2" weight="bold" mb="2" asChild>
              <Box display="inline-block">ERC20 Address</Box>
            </Text>

            <TextField.Root
              tabIndex={tabIndex}
              variant="soft"
              placeholder="Enter Token Address"
              defaultValue="0x"
            />
          </Label>
        </Box>
        <Box>
          <Label>
            <Text size="2" weight="bold" mb="2" asChild>
              <Box display="inline-block">Token Name</Box>
            </Text>

            <TextField.Root
              tabIndex={tabIndex}
              variant="soft"
              placeholder="Enter price"
              defaultValue="$99"
            />
          </Label>
        </Box>

        <Box>
          <Label>
            <Text size="2" weight="bold" mb="2" asChild>
              <Box display="inline-block">Token Symbol/Ticker</Box>
            </Text>

            <TextField.Root
              tabIndex={tabIndex}
              variant="soft"
              placeholder="Enter price"
              defaultValue="$99"
            />
          </Label>
        </Box>
        <Box>
          <Label>
            <Text size="2" weight="bold" mb="2" asChild>
              <Box display="inline-block">Token Official Link</Box>
            </Text>

            <TextField.Root
              tabIndex={tabIndex}
              variant="soft"
              placeholder="Enter price"
              defaultValue="$99"
            />
          </Label>
        </Box>
        <Box>
          <Label>
            <Text size="2" weight="bold" mb="2" asChild>
              <Box display="inline-block">Decimals</Box>
            </Text>

            <TextField.Root
              tabIndex={tabIndex}
              variant="soft"
              placeholder="Enter price"
              defaultValue="$99"
            />
          </Label>
        </Box>
      </Grid>
      <Grid columns="3">
        <Box>
          <Label>
            <Text size="2" weight="bold" mb="2" asChild>
              <Box display="inline-block">Amount</Box>
            </Text>

            <TextField.Root
              tabIndex={tabIndex}
              variant="soft"
              placeholder="Enter price"
              defaultValue="99"
            />
          </Label>
        </Box>
      </Grid>
    </div>
  );
}
