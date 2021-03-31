import React, { useEffect } from "react"
import { useQuery, gql } from "@apollo/client"
import { LOAD_COUNTRIES } from "../GraphQL/Queries"


const GetCountries = () =>{
    const {error, loading, data} = useQuery(LOAD_COUNTRIES)
    useEffect(()=>{
        console.log(data)
    }, [data])

    return(
        <div>

        </div>
    )
}

export default GetCountries