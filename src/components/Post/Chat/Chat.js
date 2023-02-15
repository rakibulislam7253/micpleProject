import React, { useState } from 'react';
import chatstyle from './chat.module.css';
import btnstyle from './button.module.css';

import { SlUser } from "react-icons/sl";
import { BiSend } from "react-icons/bi";
import ChatOption from './ChatOption';

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







                {/* global */}
                <div className={chatstyle.part2}>
                    {
                        btn ?
                            <div>
                                <p className={chatstyle.online}>Global Online(102)</p>
                                <div className={chatstyle.Gchatlist1} >

                                    <div className={chatstyle.Gchatlist}>
                                        <div style={{ width: "30px" }}>

                                            <SlUser title="Rakibul (Bangladesh)" className={chatstyle.Gicon} />
                                        </div>

                                        <div className={chatstyle.Gbody}>
                                            <p className={chatstyle.Gperagraph} >
                                                Facebook
                                            </p>
                                            <p style={{marginTop:"-10px",fontSize:"10px",textAlign:"left"}}>05/01/2022, 17:31</p>
                                        </div>
                                        <div style={{ marginTop: "15px", marginLeft: "-10px" }}>
                                            <ChatOption></ChatOption>
                                        </div>

                                    </div>
                                    <div className={chatstyle.Gchatlist}>

                                        <SlUser title="Anisul (Canada)" className={chatstyle.Gicon} />

                                        <div className={chatstyle.Gbody}>
                                            <p className={chatstyle.Gperagraph} >
                                                Facebook is an online social media and
                                            </p>
                                            <p style={{marginTop:"-10px",fontSize:"10px",textAlign:"left"}}>05/01/2022, 17:31</p>
                                        </div>


                                    </div>
                                    {/* admin */}

                                    <div className={chatstyle.GchatlistAdmin}>

                                        <div className={chatstyle.GbodyAdmin}>

                                            <p className={chatstyle.GperagraphAdmin} >
                                                Facebook is an online social media and social networking service owned by American company Meta Platforms. Founded in 2004 by Mark Zuckerberg with fellow
                                            </p>
                                            <p style={{marginTop:"-10px",fontSize:"10px",textAlign:"right"}}>05/01/2022, 17:31</p>
                                        </div>
                                        <div style={{ width: "30px", marginRight: "10px" }}>

                                            <SlUser title="Admin" className={chatstyle.GiconAdmin} />
                                        </div>

                                    </div>

                                    {/* user */}

                                    <div className={chatstyle.Gchatlist}>

                                        <SlUser title="Anisul (Canada)" className={chatstyle.Gicon} />

                                        <div className={chatstyle.Gbody}>
                                            <p className={chatstyle.Gperagraph} >
                                                is an online social and media?
                                            </p>
                                            <p style={{marginTop:"-10px",fontSize:"10px",textAlign:"left"}}>05/01/2022, 17:31</p>
                                        </div>



                                    </div>

                                    {/* admin */}
                                    <div className={chatstyle.GchatlistAdmin}>

                                        <div className={chatstyle.GbodyAdmin}>

                                            <p className={chatstyle.GperagraphAdmin} >
                                                Facebook is an online social media and social . Founded in 2004 by Mark Zuckerberg with fellow
                                            </p>
                                            <p style={{marginTop:"-10px",fontSize:"10px",textAlign:"right"}}>05/01/2022, 17:31</p>
                                        </div>
                                        <div style={{ width: "30px", marginRight: "10px" }}>

                                            <SlUser title="Admin" className={chatstyle.GiconAdmin} />
                                        </div>

                                    </div>
                                    {/* user */}
                                    <div className={chatstyle.Gchatlist}>

                                        <SlUser title="Anisul (Canada)" className={chatstyle.Gicon} />

                                        <div className={chatstyle.Gbody}>
                                            <p className={chatstyle.Gperagraph} >
                                                is an online social and media?
                                            </p>
                                            <p style={{marginTop:"-10px",fontSize:"10px",textAlign:"left"}}>05/01/2022, 17:31</p>
                                        </div>



                                    </div>
                                    {/* user */}
                                    <div className={chatstyle.Gchatlist}>

                                        <SlUser title="Anisul (Canada)" className={chatstyle.Gicon} />

                                        <div className={chatstyle.Gbody}>
                                            <p className={chatstyle.Gperagraph} >
                                                is an online social and media?
                                            </p>
                                            <p style={{marginTop:"-10px",fontSize:"10px",textAlign:"left"}}>05/01/2022, 17:31</p>
                                        </div>



                                    </div>

                                    {/* admin */}

                                    <div className={chatstyle.GchatlistAdmin}>

                                        <div className={chatstyle.GbodyAdmin}>

                                            <p className={chatstyle.GperagraphAdmin} >
                                                Facebook is an online social media and social networking service owned by American company Meta Platforms. Founded in 2004 by Mark Zuckerberg with fellow
                                            </p>
                                            <p style={{marginTop:"-10px",fontSize:"10px",textAlign:"right"}}>05/01/2022, 17:31</p>
                                        </div>
                                        <div style={{ width: "30px", marginRight: "10px" }}>

                                            <SlUser title="Admin" className={chatstyle.GiconAdmin} />
                                        </div>
                                        

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
                                                        marginTop: "-1px",
                                                        marginLeft: "3px"
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            :
                            <div>
                                <div>

                                    <p className={chatstyle.online}>Global Online(102)</p>
                                    <div className={chatstyle.part3}>
                                        <div className={chatstyle.chatlist1} >

                                            <div className={chatstyle.Gchatlist}>
                                                <div style={{ width: "30px" }}>

                                                    <SlUser className={chatstyle.Gicon} />
                                                </div>

                                                <div className={chatstyle.Gbody}>
                                                    <p className={chatstyle.Gperagraph} >
                                                        Facebook
                                                    </p>
                                                </div>

                                            </div>
                                            <div className={chatstyle.Gchatlist}>

                                                <SlUser className={chatstyle.Gicon} />

                                                <div className={chatstyle.Gbody}>
                                                    <p className={chatstyle.Gperagraph} >
                                                        Facebook is an online social media and
                                                    </p>
                                                </div>


                                                {/* admin */}
                                            </div>

                                            <div className={chatstyle.GchatlistAdmin}>

                                                <div className={chatstyle.GbodyAdmin}>

                                                    <p className={chatstyle.GperagraphAdmin} >
                                                        Facebook is an online social media and social networking service owned by American company Meta Platforms. Founded in 2004 by Mark Zuckerberg with fellow Harvard College students and roommates Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes, its name comes from the face book directories often given to American university students. Membership was initially limited to Harvard
                                                    </p>
                                                </div>
                                                <div style={{ width: "30px", marginRight: "10px" }}>

                                                    <SlUser className={chatstyle.GiconAdmin} />
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginTop: "-250px" }}>

                                    <button onClick={handelclick} className={btnstyle.animated_button1}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        Turn On
                                    </button>
                                </div>
                            </div>
                    }



                </div>
            </div>
        </div>
    );
};

export default Chat;