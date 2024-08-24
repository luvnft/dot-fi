import React from "react";
import {
  Box,
  Flex,
  Theme,
  Text,
  Button,
  Section,
  Link,
  Badge,
} from "@radix-ui/themes";
import * as Dialog from "@radix-ui/react-dialog";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import PostCard from "./PostCard";
import CardSubmission from "./CardSubmission";
import HiveCreate from "./HiveCreate";

// export function AlertDialogDemo() {
//   return (
//     <AlertDialog>
//       <AlertDialogTrigger asChild>
//         {/* <Button variant="outline">Show Dialog</Button> */}
//         <Button
//           asChild
//           size={{ initial: "3", xs: "4" }}
//           variant="surface"
//           // highContrast
//           style={{ flexGrow: 1 }}
//         >
//           <a>Playground</a>
//         </Button>
//       </AlertDialogTrigger>
//       <AlertDialogContent>
//         <AlertDialogHeader>
//           <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
//           <AlertDialogDescription>
//             This action cannot be undone. This will permanently delete your
//             account and remove your data from our servers.
//           </AlertDialogDescription>
//         </AlertDialogHeader>
//         <AlertDialogFooter>
//           <AlertDialogCancel>Cancel</AlertDialogCancel>
//           <AlertDialogAction>Continue</AlertDialogAction>
//         </AlertDialogFooter>
//       </AlertDialogContent>
//     </AlertDialog>
//   );
// }

// Format
// divider
// add imgs? location?
// deadline
// choose network
export function DialogCreatePost() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {/* <button className="Button violet">BUZZ-dialog</button> */}
        <Button
          asChild
          size={{ initial: "3", xs: "4" }}
          variant="surface"
          highContrast
          style={{ flexGrow: 1 }}
          className="w-full cursor-pointer"
        >
          <a>BUZZ</a>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-full">
        {/* <CardSubmission /> */}
        <HiveCreate />
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

// Dialog
export default function CreatePost() {
  return (
    <div className="">
      <DialogCreatePost />
      {/* <ButtonCreate /> */}
    </div>
  );
}

// create options
export function DialogCreate() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="Button violet">BUZZ-dialog</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Make changes to your profile here. Click save when you're done.
          </Dialog.Description>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="name">
              Name
            </label>
            <input className="Input" id="name" defaultValue="Pedro Duarte" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="username">
              Username
            </label>
            <input className="Input" id="username" defaultValue="@peduarte" />
          </fieldset>
          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild>
              <button className="Button green">Save changes</button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              {/* <Cross2Icon /> */}
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function ButtonCreate() {
  // open dialog
  return <Button>BUZZ</Button>;
}
