import React from 'react';
import chatstyle from './chat.module.css';
import { SlUser } from "react-icons/sl";
import Global from './Global';

const Chat = () => {
 
    return (
        <div style={{ display: "flex", justifyContent: "end" }}>
            <div className={chatstyle.fullBody}>
                <div className={chatstyle.part1}>
                    <p className={chatstyle.online}>Online(80)</p>
                    <div className={chatstyle.chatlist1} >
                        <div style={{ display: "flex", height: "30px" }}>

                            <div className={chatstyle.chatlist}>
                                <SlUser className={chatstyle.icon} />
                                <p className={chatstyle.peragraph}>Rakibul Islam</p>
                            </div>

                            <div >
                                <p style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "rgb(49, 185, 49)" }}></p>
                            </div>
                        </div>


                        <div style={{ display: "flex", height: "30px" }}>

                            <div className={chatstyle.chatlist}>
                                <SlUser className={chatstyle.icon} />
                                <p className={chatstyle.peragraph}>Tipu Shultan</p>
                            </div>

                            <div>
                                <p style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "rgb(49, 185, 49)" }}></p>
                            </div>
                        </div>




                        <div style={{ display: "flex", height: "30px" }}>
                            <div className={chatstyle.chatlist}>
                                <SlUser className={chatstyle.icon} />
                                <p className={chatstyle.peragraph}>Asif Alam</p>
                            </div>
                            <div>
                                <p style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "rgb(49, 185, 49)" }}></p>
                            </div>
                        </div>





                        <div style={{ display: "flex", height: "30px" }} >


                            <div className={chatstyle.chatlist}>
                                <SlUser className={chatstyle.icon} />
                                <p className={chatstyle.peragraph}>Rokonuzzaman Rokon</p>
                            </div>


                            <div >
                                <p style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "rgb(49, 185, 49)" }}></p>
                            </div>
                        </div>






                        <div style={{ display: "flex", height: "30px" }} >


                            <div className={chatstyle.chatlist}>
                                <SlUser className={chatstyle.icon} />
                                <p className={chatstyle.peragraph}>Ahsan Islam</p>
                            </div>

                            <div>
                                <p style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "rgb(49, 185, 49)" }}></p>
                            </div>
                        </div>

                    </div>
                </div>







                {/* global */}
               <Global></Global>

            </div>
        </div>
    );
};

export default Chat;