import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import test_table from './testTable.module.css';
const Pdf1 = () => {
    const location = useLocation()
    const item = location.state

    const handeklPdf = () => {
        document.getElementById("pdfbtn").style.display = 'none'
        window.print()
        document.getElementById("pdfbtn").style.display = 'block'

    }
    return (
        <div>
            <div style={{ marginTop: "20px", padding: "0px 30px" }} >
                <table className={test_table.table}>
                    <tr>
                        <th style={{ padding: '10px' }}>Country</th>
                        <th style={{ padding: '10px' }}>Division</th>
                        <th style={{ padding: '10px' }}>Distric</th>
                        <th style={{ padding: '10px' }}>User ID</th>
                        <th style={{ padding: '10px' }}>Subject</th>
                        <th style={{ padding: '10px' }}>Repoter</th>
                        <th style={{ padding: '10px' }}>Claimer</th>
                        <th style={{ padding: '10px' }}>Post ID</th>
                        <th style={{ padding: '10px' }}> Comment</th>
                        <th style={{ padding: '5px 18px' }}> Status</th>
                    </tr>

                    {
                        item.reports.map((item) => {

                            return <>
                                <tr >
                                    <td style={{padding:"10px"}}> {item.country_name}</td>
                                    <td style={{padding:"10px"}}>{item.State_name}</td>
                                    <td style={{padding:"10px"}}>{item.city_name}</td>
                                    <td style={{padding:"10px"}}>{item.user_id}</td>
                                    <td style={{padding:"10px"}}>{item.report_sub}</td>
                                    <td style={{padding:"10px"}}>{item.user_name} ({item.user_id})</td>
                                    <td style={{padding:"10px"}}> {item.claim_id} ({item.claim_name})</td>
                                    <td style={{padding:"10px"}}> {item.post_id}</td>
                                    <td style={{padding:"10px"}}> {item.comment}</td>
                                    <td style={{padding:"10px"}}> {item.status}</td>
                                </tr>
                            </>
                        })
                    }

                </table>
                    <div>
                        <button style={{ padding: "5px 15px", marginTop: "10px"}} onClick={handeklPdf} id={'pdfbtn'} >  Download PDF</button>
                    </div>


            </div>
        </div>
    );
};

export default Pdf1;