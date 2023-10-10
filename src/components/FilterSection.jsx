import { useEffect, useState } from "react";
import Search from "./Search";

export default function FilterSection({ data, filter, setFilter, onSubmit }) {
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

    function handleChange(e) {
        setFilter(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <section onChange={handleChange} className="py-4 sm:flex sm:gap-4">
            <Search filter={filter.name} onSubmit={onSubmit} />
            <select
                name="region"
                className="outline-none"
            >
                <option key={2} value=''>Filter by Region</option>
                {
                    regionData.map(region => <option key={region} value={region}>{region}</option>)
                }
            </select>
        </section>
    )
};
