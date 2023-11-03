import axios from "axios";
import React, { useState } from "react";
import 'regenerator-runtime/runtime';



const Search=()=>{

    const [search,setSearch]=useState("")
    const [data,setData]=useState("");
    const [city,setCity]=useState("");
    const APIKey = `f782af47b7a22dfdd692d43b5a6a5453`;

    async function fetchData() {
        if(!search)
        return;
        await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${APIKey}`
          ).then(response=>{
            setCity(search)
            setData(response.data)
            setSearch("")
          })
          .catch(error=>console.log(error))
      }
      function handleKey(e)
      {
        if(e.key==="Enter")
        fetchData();
      }

    

    return (
        <div>
            <div className="search-container">
            <input className="search" value={search} placeholder="search city" onKeyDown={handleKey} onChange={(e)=>{
                setSearch(e.target.value)
            }} />
           

            </div>
            {data &&
                 <div className="weather">
                 <h1>{city}</h1>
                 <h1>{(data.main.temp-273).toFixed(2)} °C</h1>
                 <p>{data.weather[0].description}</p>
                <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}/>
 
             </div>
            }
           
        </div>
    )
}
export default Search;