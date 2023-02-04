import { useEffect, useState } from "react";

export const UnderReview = () => {
    const [status, setStatus] = useState([]);


    useEffect(() => {
        fetch("maildata1.json")
            .then((response) => response.json())
            .then((json) => {

                json.map((country) => {
                    country.state.map((state) => {

                        state.city.map((city) => {
                            // console.log(city.city_name)
                            // setStatus(city.city_name)

                            city.user_report.map(report => {

                                const inti = report.reports.filter((reportData) =>
                                    reportData.status === "solve"
                                );
                                console.log(inti)

                            });
                        });
                    });
                });
            })

    }, []);

    return status;
}


