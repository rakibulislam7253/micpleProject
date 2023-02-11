import React from "react";
import { Outlet } from "react-router-dom";
import PostNavbar from "./PostNavbar";

const PostMain = () => {
  return (
    <div
      style={{
        // backgroundColor:"red",
        height: "100vh",
        overflowX: "auto",
      }}
      className="px-10"
    >
      <PostNavbar />
      <Outlet />
    </div>
  );
};

export default PostMain;
