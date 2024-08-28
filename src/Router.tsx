import { createBrowserRouter } from "react-router-dom";

import { Applayout } from "./components/layouts/AppLayout";

import NoMatch from "./pages/NoMatch";
import Dashboard from "./pages/Dashboard";
import Empty from "./pages/Empty";
import Sample from "./pages/Sample";
import Homepage from "./pages/Homepage";
// import { MyProduct } from "./pages/Dashboard/MyProduct";
import Sale from "./pages/Sale";
import HiveCreate from "./components/posts/HiveCreate";
import { NewLayout } from "./components/layouts/NewLayout";
import TwitterPage from "./pages/Homepage/TwitterPage";
import FarcasterPage from "./pages/Homepage/FarcasterPage";
import LensPage from "./pages/Homepage/LensPage";
import NFTpage from "./pages/Homepage/NFTPage";
import PostPage from "./pages/Post";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <NewLayout />,
      children: [
        {
          path: "",
          element: <Homepage />,
        },
        {
          path: "buzzup",
          element: <Homepage />,
        },
        {
          path: "twitter",
          element: <TwitterPage />,
        },
        {
          path: "farcaster",
          element: <FarcasterPage />,
        },
        {
          path: "lens",
          element: <LensPage />,
        },
        {
          path: "nfts",
          element: <NFTpage />,
        },
        {
          path: "create",
          element: <HiveCreate />,
        },
        {
          path: "explore",
          element: <div />,
        },
        {
          path: "discover",
          element: <div />,
        },
        {
          path: "leaderboard",
          element: <div />,
        },
        {
          path: "messages",
          element: <div />,
        },
        {
          path: "notifications",
          element: <div />,
        },
        {
          path: "bookmarks",
          element: <div />,
        },
        {
          path: "profile",
          element: <div />,
        },
        //
        {
          path: "hive",
          element: <div />,
        },
        //
        {
          path: "post/:id",
          element: <PostPage />,
        },
        {
          // submit to post
          path: "buzz",
          element: <div />,
        },
        {
          path: "settings",
          element: <div />,
        },
      ],
    },
    // {
    //   path: "/Dashboard",
    //   element: <Dashboard />,
    //   children: [
    //     {
    //       path: "my-product",
    //       element: <MyProduct />,
    //     },
    //   ],
    // },
    {
      path: "*",
      element: <NoMatch />,
    },
  ],
  {
    basename: global.basename,
  }
);
