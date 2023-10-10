import { Link, useParams } from "react-router-dom";

export default function CountryPage({ data }) {
    const { countryName } = useParams();
    const country = data.find(item => item.name == countryName);
    
    console.log(country);
    return (
        <>
        <Link to="/">Back</Link>
        <section>
            <img src={country.flags.png} alt="" />
            <div>
                <b>{country.name}</b>
                <div className="grid">
                    <b>Native Name:</b> {country.nativeName}
                    <b>Population:</b> {country.nativeName}
                    <b>Region:</b> {country.nativeName}
                    <b>Sub Region:</b> {country.nativeName}
                    <b>Capital:</b> {country.nativeName}
                    <b>Top Level Domain:</b> {country.nativeName}
                    <b>Currencies:</b> {country.nativeName}
                    <b>Languages:</b> {country.nativeName}
                </div>
            </div>
        </section>
        </>
    )
};
