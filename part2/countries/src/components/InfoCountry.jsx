const InfoCountry = ({ country }) => {
    //console.log('Lenguas:', Object.values(country))
    return (
        <>
            <h1>
                {country.name.common}
            </h1>
            <dl>
                <dt>
                    Capital: {country.capital.join(', ')}
                </dt>
                <dt>Area: {country.area}</dt>
            </dl>
            <h2>
                Languages
            </h2>
            <ul>
                {Object.values(country.languages).map(language => 
                    <li key={language}>{language}</li>
                )}
            </ul>
            <img src={country.flags.png} alt={`${country.name.common} flag`} />
        </>
    )
}
  
export default InfoCountry