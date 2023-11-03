
import React from "react";
import './../styles/App.css';
import Search from "./Search";

const App = () => {
  return (
    <div>
        <Search/>
    </div>
  )
}

export default App


// const APIKey = `f782af47b7a22dfdd692d43b5a6a5453`;

// const baseUrl = `https://api.openweathermap.org/data/2.5/weather?`;
// https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}