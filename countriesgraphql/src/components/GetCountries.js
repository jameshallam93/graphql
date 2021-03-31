import React, { useEffect, useState } from "react"
import { useQuery, gql } from "@apollo/client"
import { LOAD_COUNTRIES } from "../GraphQL/Queries"


const GetCountries = () =>{
    const {error, loading, data} = useQuery(LOAD_COUNTRIES)
    const [countries, setCountries] = useState([])


    useEffect(()=>{
        console.log(data);
        setCountries(data.countries)
    }, [data])

    
    return(
        <div>
            <ul>
                {countries.map(country =>{
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