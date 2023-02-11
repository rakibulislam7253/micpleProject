import React, { useEffect, useState } from "react";
import demo1 from '../demo/15800017.jpg'
import { BsCamera } from "react-icons/bs";
import { FiMoreVertical } from "react-icons/fi";
const SolveReport = () => {


  return (
    <div>


{/* <table
            style={{
              height: "20px",
            }}
          >
            <tbody>
              <tr>
                <th>PostId</th>
                <th>Date & Time</th>
                <th>Name</th>
              </tr>
              {singleData.map((items) => (
                <tr
                  onClick={() => handleClickCategoriesDetails(items)}
                  style={{

                    // fontWeight: colorSelect === items ? "normal" : "bold",
                    // color: colorSelect === items ? "gray" : "black",
                  }}
                  className={styles.dataStyle}
                >
                  <td style={{
                    cursor: "pointer",
                    backgroundColor:
                      selectedButton5 === items ? "#0048ba" : "white",
                    color: selectedButton5 === items ? "white" : "black",
                  }}>{items.unique_audio_id}</td>
                  <td>
                    {items.date} ({items.sending_time})
                  </td>

                  <td>{items.user_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table
            style={{
              height: "20px",
            }}
          >
            <tbody>
              <tr>
                <th>Review</th>
              </tr>
              {details?.map((items) => (
                <Modal items={items} />
              ))}
            </tbody>
          </table> */}

    </div>
  );
};

export default SolveReport;
