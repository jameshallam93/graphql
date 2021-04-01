import React from "react"

const ContinentFilter = ({handleChange}) =>{
    return(
        <form>
            <input type="radio" value="Europe" id="europe" onChange={handleChange} name="continent" />
            <label htmlFor={"Europe"}>Europe</label>
            <input type="radio" value="Africa" id="africa" onChange={handleChange} name="continent" />
            <label htmlFor={"Africa"}>Africa</label>
            <input type="radio" value="South America" id="south america" onChange={handleChange} name="continent" />
            <label htmlFor={"South America"}>South America</label>
            <input type="radio" value="North America" id="north america" onChange={handleChange} name="continent" />
            <label htmlFor={"North America"}>North America</label>
            <input type="radio" value="Asia" id="asia" onChange={handleChange} name="continent" />
            <label htmlFor={"Asia"}>Asia</label>
            <input type="radio" value="Oceania" id="oceania" onChange={handleChange} name="continent" />
            <label htmlFor={"Oceania"}>Oceania</label>
            <input type="radio" value="Antarctica" id="antartcica" onChange={handleChange} name="continent" />
            <label htmlFor={"Antarctica"}>Antarctica</label>
        </form>
    )
}

export default  ContinentFilter
