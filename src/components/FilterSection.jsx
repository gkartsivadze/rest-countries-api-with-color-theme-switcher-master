import { useEffect, useState } from "react";
import Search from "./Search";

export default function FilterSection({ data }) {
    const [regionData, setRegionData] = useState([]);

    useEffect(() => {
        const tempArr = [];

        data.forEach(item => {
            if(!tempArr.includes(item.region)) {
                tempArr.push(item.region);
            }
        })

        setRegionData(tempArr);
    }, [])

    return (
        <section>
            <Search />
            <select className="outline-none">
                <option key={2}>Filter by Region</option>
                {
                    regionData.map(region => <option key={region} value={region}>{region}</option>)
                }
            </select>
        </section>
    )
};
