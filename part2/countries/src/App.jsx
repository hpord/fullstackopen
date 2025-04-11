import Filter from './components/Filter'
import Result from './components/Result'
import countryService from './services/countries'

import { useState, useEffect } from 'react'

const App = () => {
  const [countries, setCountries] = useState(null)
  const[country, setCountry] = useState('')

  useEffect(() => {
    console.log('effect run, country is now', country)
    if (country) {
      console.log('fetching exchange rates...')
      countryService
        .getAll()
        .then(foundCountries => {
          const arrayCountries = foundCountries.filter(foundCountry =>
            foundCountry.name.common.toLowerCase()
            .includes(country.toLowerCase())
          )
          setCountries(arrayCountries.length ? arrayCountries : null)
        })
    }
    //else setCountries({})
  }, [country])

  const handleFindChange = (event) => {
    const text = event.target.value.trim()
    setCountry(event.target.value.trim())
    if (!text) setCountries(null)
  }

  return (
    <div>
      <Filter onChange={handleFindChange}/>
      <Result countries={countries}/>
    </div>
  )
}

export default App