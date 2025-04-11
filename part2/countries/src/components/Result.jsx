import InfoCountry from "./InfoCountry"

const Result = ({ countries }) => {
    if (!countries) return null
    if (countries.length > 10) {
        return (
            <dl>
                To many matches, specify another filters
            </dl>
        )
    }
    if (countries.length > 1) {
        return (
            <dl>
                {countries.map(country => 
                <dt key={country.tld}>{country.name.common}</dt>
                )}
            </dl>
        )
    }
    return (
        <InfoCountry country={countries[0]}/>
        
    )
}
  
export default Result