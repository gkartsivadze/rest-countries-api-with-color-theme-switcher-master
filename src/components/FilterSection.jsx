import Search from "./Search";

export default function FilterSection(params) {
    return (
        <section>
            <Search />
            <select className="outline-none">
                <option selected>Filter by Region</option>
            </select>
        </section>
    )
};
