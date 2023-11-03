import axios from "axios";
import React, { useState } from "react";
import 'regenerator-runtime/runtime';



const Search=()=>{

    const [searchItem,setSearchItem]=useState("");
    const [city,setCity]=useState("");
    const APIKey = `f782af47b7a22dfdd692d43b5a6a5453`;

    async function fetchData() {
        if(!city)
        return;
        await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`
          ).then(response=>{
            
            setSearchItem(response.data)
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
            <input className="search" placeholder="search city" onKeyDown={handleKey} onChange={(e)=>{
                setCity(e.target.value)
            }} />
            <button onClick={fetchData}>add</button>

            </div>
            <div className="weather">
                <h1>{city}</h1>
                <h1>{searchItem&&`${(searchItem.main.temp-273).toFixed(2)} °C`}</h1>
                <p>{searchItem&&`${searchItem.weather[0].description}`}</p>
               {searchItem&& <img src={`https://openweathermap.org/img/wn/${searchItem.weather[0].icon}@2x.png`}/>}

            </div>
        </div>
    )
}
export default Search;