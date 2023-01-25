import React from "react";
import Home from "../Home";
import Main from "../Layout/Main";
import Reports from "../Layout/Reports";


import Test from "../Test";
import AllTesttable from "../Texttable.js/AllTesttable";
import Pdf from "../Texttable.js/Pdf";
import Pdf1 from "../Texttable.js/Pdf1";
import SearchTable from "../Texttable.js/SearchTable";
import SolveReport from "../Texttable.js/SolveReport";



const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/test/:id",
        loader: ({ params }) =>
          fetch(`https://fakestoreapi.com/products/${params.id}`),
        element: <Test></Test>,
      },
    ],
  },

  {
    path: "/country",
    element: <Reports></Reports>,

  },




  {
    path: '/alltesttable',
    element: <AllTesttable></AllTesttable>
  },
 
  {
    path: '/pdf',
    element: <Pdf></Pdf>
  },
  {
    path: '/pdf1',
    element: <Pdf1></Pdf1>
  },
  {
    path: '/solve',
    element: <SolveReport></SolveReport>
  },
  {
    path: '/searchtable',
    element:<SearchTable></SearchTable>
  }


]);
