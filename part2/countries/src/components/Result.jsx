import InfoCountry from "./InfoCountry"

const Result = ({ countries, onChange }) => {
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
                <dt key={country.cca3}>
                    {country.name.common + ' '}
                    <button onClick={() => onChange(country.cca3)}> Show </button>
                </dt>
                )}
            </dl>
        )
    }
    return (
        <InfoCountry country={countries[0]}/>
        
    )
}
  
export default Result