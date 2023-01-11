import React from "react";
import { Link, useLoaderData } from "react-router-dom";

import {
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  Line,
} from "recharts";
const Test = () => {
  const load = useLoaderData();
  const { title } = load;
  console.log(load);
  const data = [
    {
      day: "1",
      uv: 4000,
      Day:198,
    },
    {
      day: "2",
      uv: 3000,
      Day: 198,
    },
    {
      day: "3",
      uv: 2000,
      Day: 460,
    },
    {
      day: "4",
      uv: 2780,
      Day: 308,
    },
    {
      day: "5",
      uv: 1890,
      Day: 400,
      amt: 1581,
    },
    {
      day: "6",
      uv: 2390,
      Day: 800,
      amt: 2500,
    },
    {
      day: "7",
      uv: 3490,
      Day: 400,
      amt: 2900,
    },
    {
      day: "8",
      uv: 3490,
      Day: 430,
      amt: 2100,
    },
    {
      day: "9",
      uv: 3490,
      Day: 780,
      amt: 2100,
    },
    {
      day: "10",
      uv: 3490,
      Day: 490,
      amt: 2100,
    },
    {
      day: "11",
      uv: 3490,
      Day: 390,
      amt: 2100,
    },
    {
      day: "12",
      uv: 3490,
      Day: 180,
      amt: 2100,
    },
    {
      day: "13",
      uv: 3490,
      Day: 800,
      amt: 2100,
    },
    {
      day: "14",
      uv: 3490,
      Day: 630,
      amt: 2100,
    },
    {
      day: "15",
      uv: 3490,
      Day: 720,
      amt: 2100,
    },
    {
      day: "16",
      uv: 3490,
      Day: 180,
      amt: 2100,
    },
    {
      day: "17",
      uv: 3490,
      Day: 460,
      amt: 3200,
    },

    {
      day: "18",
      uv: 3490,
      Day: 380,
      amt: 2100,
    },
    {
      day: "19",
      uv: 3490,
      Day: 195,
      amt: 2100,
    },
    {
      day: "20",
      uv: 3490,
      Day: 690,
      amt: 2100,
    },
    {
      day: "21",
      uv: 3490,
      Day: 450,
      amt: 2100,
    },
    {
      day: "22",
      uv: 3490,
      Day: 240,
      amt: 2900,
    },
    {
      day: "23",
      uv: 3490,
      Day: 200,
      amt: 2100,
    },
    {
      day: "24",
      uv: 3490,
      Day: 300,
      amt: 2100,
    },
    {
      day: "25",
      uv: 3490,
      Day: 500,
      amt: 2100,
    },
    {
      day: "26",
      uv: 3490,
      Day: 700,
      amt: 2500,
    },
    {
      day: "27",
      uv: 3490,
      Day: 400,
      amt: 2600,
    },
    {
      day: "28",
      uv: 3490,
      Day: 600,
      amt: 2100,
    },
    {
      day: "29",
      uv: 3490,
      Day: 700,
      amt: 2100,
    },
    {
      day: "30",
      uv: 3490,
      Day: 300,
      amt: 2200,
    },
  ];
  return (
    <div>
      <h1>Title:{title}</h1>

      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <div className="graph">
        <ComposedChart
          width={1500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="day" scale="band" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="Day" fill="#8884d8" />

          <Line type="monotone" dataKey="Day" stroke="#ff7300" />
        </ComposedChart>
      </div>
    </div>
  );
};

export default Test;
