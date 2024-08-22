import { createBrowserRouter } from "react-router-dom";

import { Applayout } from "./components/layouts/AppLayout";

import NoMatch from "./pages/NoMatch";
import Dashboard from "./pages/Dashboard";
import Empty from "./pages/Empty";
import Sample from "./pages/Sample";
import Homepage from "./pages/Homepage";
// import { MyProduct } from "./pages/Dashboard/MyProduct";
import Sale from "./pages/Sale";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Applayout />,
      children: [
        {
          path: "",
          element: <Homepage />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
          // children: [
          //   {
          //     path: "my-product",
          //     element: <MyProduct />,
          //   },
          // ],
        },
        // {
        //   path: "dashboard/my-product",
        //   element: <MyProduct />,
        // },
        {
          path: "sample",
          element: <Sample />,
        },
        {
          path: "empty",
          element: <Empty />,
        },
        {
          path: "sale",
          element: <Sale />,
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
