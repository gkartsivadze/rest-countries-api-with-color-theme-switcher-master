import { FaArrowCircleLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

export default function CountryPage({ data }) {
    const { countryName } = useParams();
    const country = data.find(item => item.name == countryName);


    return (
        <>
            <Link className="my-10 px-4 py-1 inline-block shadow-[0_0_5px_grey]" to="/">
                <FaArrowCircleLeft className="inline me-3" />Back
            </Link>
            <section className="lg:flex flex-wrap">
                <img className="mb-8 w-full flex-1 object-fill" src={country.flags.png} />
                <div className="flex flex-col justify-evenly lg:px-10 ">
                    <b className="text-2xl my-4">{country.name}</b>
                    <div className="flex flex-wrap gap-8 lg:flex-nowrap lg:min-w-max text-gray-600 dark:text-gray-200 justify-between gap-y-8">
                        <ul>
                            <li><b>Native Name:</b> {country.nativeName}</li>
                            <li><b>Population:</b> {country.population}</li>
                            <li><b>Region:</b> {country.region}</li>
                            <li><b>Sub Region:</b> {country.subregion}</li>
                            <li><b>Capital:</b> {country.capital}</li>
                        </ul>
                        <ul>
                            <li><b>Top Level Domain:</b> {country.topLevelDomain[0]}</li>
                            <li><b>Currencies:</b> {...country.currencies.map(item => item.name)}</li>
                            <li><b>Languages:</b> {...country.languages.map(item => item.name)}</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
};
