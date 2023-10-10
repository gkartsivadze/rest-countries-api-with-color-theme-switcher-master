import { useState } from "react";

import FilterSection from "./FilterSection";
import CountryCard from "./CountryCard";

export default function Main({ data }) {
    const [filter, setFilter] = useState({
        name: '',
        region: ''
    })
    
    const [filteredData, setFilteredData] = useState(data);

    function filterItems() {
        setFilteredData(data.filter(item => {
            if(filter.region != '' && filter.name != '') return (item.name.includes(filter.name) && item.region == filter.region)
            if(filter.region == '') return item.name.includes(filter.name)
            if(filter.name == '') return item.region == filter.region
        }))
    }

    return (
        <>
            <FilterSection data={data} filter={filter} setFilter={setFilter} onSubmit={filterItems} />
            <section className="flex flex-wrap justify-evenly gap-6 [&>*]:w-80">
                {filteredData.map(item => <CountryCard key={item.name} country={item} />)}
            </section>
        </>
    )
};
