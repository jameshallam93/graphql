import React, { useEffect, useState } from "react"
import { useQuery } from "@apollo/client"

import { LOAD_COUNTRIES } from "../GraphQL/Queries"
import ContinentFilter from "./ContinentFilter"


const GetCountries = () => {
    const { error, loading, data } = useQuery(LOAD_COUNTRIES)
    const [countries, setCountries] = useState([])
    const [continentFilter, setContinentFilter] = useState("")
    const [filteredCountries, setFilteredCountries] = useState([])
    const [languageFilter, setLanguageFilter] = useState("")

    useEffect(() => {
        if (data) {
            setCountries(data.countries)
        }
    }, [data])

    useEffect(() => {
        setFilteredCountries(countries)
    }, [countries])

    const handleContinentChange = (event) => {
        setContinentFilter(event.target.value)
    }

    const handleLanguageChange = (event) =>{
        setLanguageFilter(event.target.value)
    }

    const applyAllFilters = () =>{
        const continentFiltered = applyContinentFilter(countries)
        const languageFiltered = applyLanguageFilter(continentFiltered)

        setFilteredCountries(languageFiltered)
    }

    const applyContinentFilter = (countries) => {

        console.log(continentFilter);
        if (continentFilter){
            const filtered = countries.filter(country =>
                country.continent.name === continentFilter
            )
            return filtered
        }
        return countries
    }
    
    const applyLanguageFilter = (countries) =>{

        if (languageFilter){
            //messy way of checking first two languages to see if they match with the language filter
            const filtered = countries.filter(country =>{
                if (country.languages[1]){
                    if (country.languages[1].name === languageFilter){
                        return true
                }}
                if (country.languages[0]){
                    if (country.languages[0].name === languageFilter){
                        return true
                    }
                }
                return false
            })
                return filtered
        }
        return countries        
    }

    return (
        <div>
            <ContinentFilter handleChange = {handleContinentChange} />
            <form>
                <input type = "radio" value = "English" onChange = {handleLanguageChange} name = "language"/>
                <label htmlFor = {"English"}>English</label>
                <input type = "radio" value = "French" onChange = {handleLanguageChange} name = "language"/>
                <label htmlFor = {"French"}>French</label>

            </form>
            <button onClick={applyAllFilters}> Apply Filter(s)</button>
            <ul>
                {filteredCountries.map(country => {
                    return (
                        <li key={country.code}>
                            {country.name}
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}

export default GetCountries