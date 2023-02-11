import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from "./post.module.css";

const PostNavbar = () => {
    const [active, setActive] = useState(1);

    const handleClick = (index) => {
      setActive(index);
    };
  
    return (
      <div className={styles.menu}>
        <ul className={styles.nav}>
          <li
            onClick={() => handleClick(1)}
            style={{
              backgroundColor: active === 1 ? "#0048ba" : "white",
              width: "130px",
              borderRadius: "3px",
              fontWeight: "normal",
            }}
          >
            <Link
              style={{
                color: active === 1 ? "white" : "black",
                fontWeight: active === 1 ? "bold" : "normal",
                textDecoration: "none",
              }}
              to={"/post"}
            >
              Post
            </Link>
          </li>
    
        </ul>
      </div>
    );
};

export default PostNavbar;