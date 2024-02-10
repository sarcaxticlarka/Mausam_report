import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp() {
      const [WeatherInfo, setWeatherInfo] = useState({
          city: "Delhi",
            temp:  24.4,
            tempMax:  25.05,
            tempMin:  20,
            pressure:  800,
            humidity: 10,
            feels_like:  20,
            Weather: "clear Sky", 
        
      });

      let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
      }

    return(
        <div style={{textAlign: "center", marginTop:"-35px", paddingTop:"30px"}}>
            <h1>Mausam Report</h1>
            <SearchBox updateInfo= {updateInfo}/>
            <InfoBox info={WeatherInfo}/>

        </div>
    )

}