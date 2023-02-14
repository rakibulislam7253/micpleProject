import React, { useState } from 'react';
import chatstyle from './chat.module.css';
import btnstyle from './button.module.css';

import { SlUser } from "react-icons/sl";
import { BiSend } from "react-icons/bi";

const Chat = () => {
    const [btn, setbtn] = useState(false)
    const handelclick = () => {
        setbtn(true)
    }
    return (
        <div style={{ display: "flex", justifyContent: "end" }}>
            <div className={chatstyle.fullBody}>
                <div className={chatstyle.part1}>
                    <p className={chatstyle.online}>Online(80)</p>
                    <div className={chatstyle.chatlist1} >

                        <div className={chatstyle.chatlist}>

                            <SlUser className={chatstyle.icon} />
                            <p className={chatstyle.peragraph}>Rakibul Islam</p>
                        </div>
                        <div className={chatstyle.chatlist}>
                            <SlUser className={chatstyle.icon} />
                            <p className={chatstyle.peragraph}>Tipu Shultan</p>
                        </div>
                        <div className={chatstyle.chatlist}>
                            <SlUser className={chatstyle.icon} />
                            <p className={chatstyle.peragraph}>Asif Alam</p>
                        </div>
                        <div className={chatstyle.chatlist}>
                            <SlUser className={chatstyle.icon} />
                            <p className={chatstyle.peragraph}>Rokonuzzaman Rokon</p>
                        </div>
                        <div className={chatstyle.chatlist}>
                            <SlUser className={chatstyle.icon} />
                            <p className={chatstyle.peragraph}>Ahsan Islam</p>
                        </div>

                    </div>
                </div>



                <div className={chatstyle.part2}>
                    {
                        btn ?
                            <div>
                                <p className={chatstyle.online}>Global Online(102)</p>
                                <div className={chatstyle.chatlist1} >

                                    <div className={chatstyle.chatlist}>

                                        <SlUser className={chatstyle.icon} />
                                        <p className={chatstyle.peragraph}>Rakibul Islam</p>

                                    </div>
                                    <div className={chatstyle.chatlist}>
                                        <SlUser className={chatstyle.icon} />
                                        <p className={chatstyle.peragraph}>Tipu Shultan</p>
                                    </div>
                                    <div className={chatstyle.chatlist}>
                                        <SlUser className={chatstyle.icon} />
                                        <p className={chatstyle.peragraph}>Asif Alam</p>
                                    </div>
                                    <div className={chatstyle.chatlist}>
                                        <SlUser className={chatstyle.icon} />
                                        <p className={chatstyle.peragraph}>Rokonuzzaman Rokon</p>
                                    </div>
                                    <div className={chatstyle.chatlist}>
                                        <SlUser className={chatstyle.icon} />
                                        <p className={chatstyle.peragraph}>Ahsan Islam</p>
                                    </div>

                                    {/* chat input */}
                                    <div className={chatstyle.input1}>

                                    <div
                                        style={{
                                            marginLeft: "10px",
                                            display: "flex",
                                            marginTop: "10px",
                                        }}
                                    >
                                        <div>
                                            <input
                                                className={chatstyle.inputbox}
                                                placeholder="Type messege"
                                            ></input>
                                        </div>
                                        <div>
                                            <BiSend
                                                style={{
                                                    // padding: "0px 10px",
                                                    width: "30px",
                                                    height: "30px",
                                                    marginTop:"-1px",
                                                    marginLeft:"3px"
                                                }}
                                            />
                                        </div>
                                    </div>
                                    </div>

                                </div>
                            </div>


                            :
                            <div>
                                <p className={chatstyle.online}>Global Online(102)</p>
                                <div className={chatstyle.part3}>
                                    <div className={chatstyle.chatlist1} >

                                        <div className={chatstyle.chatlist}>
                                            <SlUser className={chatstyle.icon} />
                                            <p className={chatstyle.peragraph}>Rakibul Islam</p>
                                        </div>
                                        <div className={chatstyle.chatlist}>
                                            <SlUser className={chatstyle.icon} />
                                            <p className={chatstyle.peragraph}>Tipu Shultan</p>
                                        </div>
                                        <div className={chatstyle.chatlist}>
                                            <SlUser className={chatstyle.icon} />
                                            <p className={chatstyle.peragraph}>Asif Alam</p>
                                        </div>
                                        <div className={chatstyle.chatlist}>
                                            <SlUser className={chatstyle.icon} />
                                            <p className={chatstyle.peragraph}>Rokonuzzaman Rokon</p>
                                        </div>
                                        <div className={chatstyle.chatlist}>
                                            <SlUser className={chatstyle.icon} />
                                            <p className={chatstyle.peragraph}>Ahsan Islam</p>
                                        </div>

                                    </div>
                                </div>
                                {/* <div className={btnstyle.wrap}>
                                    <button onClick={handelclick} className={btnstyle.button} >Turn On</button>
                                </div> */}
                                {/* <button onClick={handelclick} className={btnstyle.btn}>Turn on</button> */}

                                <button onClick={handelclick} className={btnstyle.animated_button1}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    turn on
                                </button>
                            </div>
                    }
                    {/* chat list */}


                </div>
            </div>
        </div>
    );
};

export default Chat;