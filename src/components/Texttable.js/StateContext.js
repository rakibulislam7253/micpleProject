import { useEffect, useState } from "react";

export const UnderReview = () => {
    const [status, setStatus] = useState([]);


    useEffect(() => {
        fetch("maildata1.json")
            .then((response) => response.json())
            .then((json) => {

                json.map((status) => {
                 const inti=   status.statushistory.filter((state) => 
                        state.status === "panding"
                    )
                        // console.log(inti)
                        if(inti)
                        {

                            setStatus(inti);
                        }
                    
                    


                    //         state.city.map((city) => {   
                    //             city.user_report.map(report => {    
                    //                 const inti = report.reports.filter((reportData) =>
                    //                     reportData.status === "solve"
                    //                 );
                    //                  console.log(inti)
                    //                  if(inti)
                    //                  {
                    //                      setStatus(inti);
                    //                  }
                    //             })
                    //         })
                    //     });
                });

            });
    }, []);

    return status;
};





