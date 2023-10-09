import FilterSection from "./FilterSection";
import data from '../assets/data.json'
import CountryCard from "./CountryCard";

export default function Main() {
    return (
        <>
            <FilterSection data={data} />
            <section className="flex flex-wrap justify-evenly gap-6">
                { data.map(item => <CountryCard country={item} />) }
            </section>
        </>
    )
};
