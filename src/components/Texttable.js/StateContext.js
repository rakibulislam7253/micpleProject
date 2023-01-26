import { useEffect, useState } from "react";

export const UnderReview = () => {
    const [status, setStatus] = useState([]);
    console.log(status)
    
    useEffect(() => {
        fetch("maildata1.json")
            .then((response) => response.json())
            .then((json) => {

                json.map((country) => {
                    country.state.map((state) => {
                        // console.log(state.State_name)
                        state.city.map((city) => {
                            // console.log(city.city_name)
                            city.user_report.map(report => {
                                // console.log(report.user_id)
                                const inti = report.reports.filter((reportData) =>
                                    reportData.status === "solve"
                                );
                                 console.log(inti)
                                 if(inti)
                                 {

                                     setStatus(inti);
                               
                                 }
                            })
                        })
                    });
                });

            });
    }, []);

    return status;
};





