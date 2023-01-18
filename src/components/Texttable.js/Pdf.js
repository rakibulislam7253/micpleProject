import React from 'react';
import { useLocation } from 'react-router-dom';
import test_table from './testTable.module.css';
const Pdf = () => {
    const location = useLocation()
    const item = location.state
    console.log(item);

    const handeklPdf = () => {
        document.getElementById("pdfbtn").style.display = 'none'
        window.print()
        document.getElementById("pdfbtn").style.display = 'block'

    }

    return (
        <>
            <table>
                <div style={{ marginLeft: "250px" }}>
                    <tr>
                        <td style={{ height: "920px" }}>
                            <div className={test_table.reportpartpdf} >
                                <div style={{ backgroundColor: "#e4e4e4", }}>
                                    <p
                                        style={{
                                            width: '100%', padding: "8px",
                                            marginTop: "-20px",
                                            fontWeight: "bold",
                                            fontSize: "15px"
                                        }}>
                                        {item.user_name}<span style={{ fontSize: "11px" }}> (Repoter) </span>
                                    </p>

                                </div>

                                <p style={{ fontSize: "13px" }} >{item.reportr_Issue}</p>
                                {/* <hr></hr> */}
                                <div style={{ marginLeft: "15px", display: "flex", marginTop: "260px" }} >
                                    <div style={{ paddingTop: "56px" }}>
                                        <input className={test_table.inputboxpdf} ></input>
                                    </div>
                                    <div>
                                        <button className={test_table.repltbtnpdf} style={{ marginTop: "50px" }} > <img src='https://cdn-icons-png.flaticon.com/512/4712/4712663.png' /> </button>
                                    </div>
                                </div>
                            </div>


                            <div className={test_table.reportpart1} >

                                <div style={{ backgroundColor: "#e4e4e4" }}>
                                    <p
                                        style={{
                                            width: '100%', padding: "8px",
                                            marginTop: "10PX",
                                            fontWeight: "bold",
                                            fontSize: "15px",

                                        }}>

                                        {item.claim_name}<span style={{ fontSize: "11px" }}> (Claimer)</span>
                                    </p>
                                </div>
                                <p style={{ fontSize: "13px", padding: "0px 5px" }} >{item.claim_issue}</p>

                                


                                <div style={{ marginLeft: "25px", display: "flex", marginTop: "360px" }}>
                                    <div>
                                        <input className={test_table.inputboxpdf} style={{ marginTop: "30px" }}></input>
                                    </div>
                                    <div>
                                        <button className={test_table.repltbtnpdf} style={{ marginTop: "25px" }} ><img src='https://cdn-icons-png.flaticon.com/512/4712/4712663.png' /></button>
                                    </div>
                                </div>
                            </div>


                        </td>

                    </tr>
                    <button style={{ padding: "5px 15px", marginTop: "10px", marginLeft: "-890px" }} onClick={handeklPdf} id={'pdfbtn'} >  Download PDF</button>
                </div>
            </table>

        </>)
};

export default Pdf;






