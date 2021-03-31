import React, { useEffect, useState } from "react"
import { useQuery, gql } from "@apollo/client"
import { LOAD_COUNTRIES } from "../GraphQL/Queries"


const GetCountries = () =>{
    const {error, loading, data} = useQuery(LOAD_COUNTRIES)
    const [countries, setCountries] = useState([])
    const [countryFilter, setCountryFilter] = useState(false)
    const [filteredCountries, setFilteredCountries] = useState([])


    useEffect(()=>{
        console.log(data);
        if(loading){
            setTimeout(5000)
        }
        setCountries(data.countries)

    }, [data])
    useEffect(()=>{
        setFilteredCountries(countries)
    },[countries])
    const handleChange = (event) =>{
        setCountryFilter(event.target.value)
    }  
    const applyFilter = () =>{
        
        console.log(countryFilter);

        const filtered = countries.filter(country =>
            country.continent.name === countryFilter    
        )
        setFilteredCountries(filtered)
        
    }
    
    return(
        <div>
            <form>
                <input type = "radio" value = "Europe" id = "europe" onChange = {handleChange} name = "continent" />
                <label htmlFor = {"Europe"}>Europe</label>
                <input type = "radio" value = "Africa" id = "africa" onChange = {handleChange} name = "continent" />
                <label htmlFor = {"Africa"}>Africa</label>
                <input type = "radio" value = "South America" id = "south america" onChange = {handleChange} name = "continent" />
                <label htmlFor = {"South America"}>South America</label>
                <input type = "radio" value = "Asia" id = "asia" onChange = {handleChange} name = "continent" />
                <label htmlFor = {"Asia"}>Asia</label>
                <input type = "radio" value = "Oceania" id = "oceania" onChange = {handleChange} name = "continent" />
                <label htmlFor = {"Oceania"}>Oceana</label>
                <input type = "radio" value = "Antarctica" id = "antartcica" onChange = {handleChange} name = "continent" />
                <label htmlFor = {"Antarctica"}>Antarctica</label>
            </form>
            <button onClick = {applyFilter}> check</button>
            <ul>
                {filteredCountries.map(country =>{
                    return (
                        <li key = {country.code}>
                            {country.name}
                        </li>
                    )
                })}
                
            </ul>
        </div>
    )
}

export default GetCountries