import { Link } from "react-router-dom";

export default function CountryCard({ country }) {
    return (
        <Link to={"/country-page/" + country.name} className=" w-80 hover:bg-black/20">
            <img
                className="w-full h-56 object-cover"
                src={country.flags.png} />
            <div className="px-5">
                <h1
                    title={country.name}
                    className="font-bold text-2xl my-4 whitespace-nowrap overflow-ellipsis overflow-hidden"
                >{ country.name }</h1>
                <ul>
                    <li><b>Population:</b> { country.population }</li>
                    <li><b>Region:</b> { country.region }</li>
                    <li><b>Capital:</b> { country.capital }</li>
                </ul>
            </div>
        </Link>
    )
};
