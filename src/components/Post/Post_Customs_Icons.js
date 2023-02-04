import React from 'react';
import post from './PostShow.module.css'


const Post_Customs_Icons = ({ title }) => {
    console.log(title)
    return (

        <div className={post.pinset}>
          
         
                <button style={{margin:"10px",border:"none",backgroundColor:"white"}}> {title}</button>

        </div>
    );
};

export default Post_Customs_Icons;