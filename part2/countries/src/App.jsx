import Filter from './components/Filter'
import Result from './components/Result'
import countryService from './services/countries'

import { useState, useEffect } from 'react'

const App = () => {
  const [countries, setCountries] = useState(null)
  const[countryText, setCountryText] = useState('')

  useEffect(() => {
    if (countryText) {
      countryService
        .getAll()
        .then(foundCountries => {
          const arrayCountries = foundCountries.filter(foundCountry =>
            foundCountry.name.common.toLowerCase()
            .includes(countryText.toLowerCase())
          )
          setCountries(arrayCountries.length ? arrayCountries : null)
        })
    }
  }, [countryText])

  const handleFindChange = (event) => {
    const text = event.target.value.trim()
    setCountryText(event.target.value.trim())
    if (!text) setCountries(null)
  }

  const selectCountry = (id) => {
    setCountryText(countries.find(country =>
      country.cca3 === id
    ).name.common)
  }

  return (
    <div>
      <Filter onChange={handleFindChange}/>
      <Result countries={countries} onChange={selectCountry}/>
    </div>
  )
}

export default App