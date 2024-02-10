 
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"; 
import { useState } from 'react';


export default function SearchBox({updateInfo}) {

    let [city,setCity] = useState("");
    let [error,setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "7e09aec98bccc2766b976adaf4ac50b9";

    let getWeatherInfo = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);

            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMax: jsonResponse.main.temp_max,
                tempMin: jsonResponse.main.temp_min,
                pressure: jsonResponse.main.pressure,
                humidity: jsonResponse.main.humidity,
                feels_like: jsonResponse.main.feels_like,
                Weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch(err){
            throw err;
        }
     
    }
     
    

    let handeChange = (evt) => {
        setCity(evt.target.value);
    };


    let handleSubmit = async (evt) => {
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo)
        }catch(err){
            setError(true);
        }
        
    }
    return(
        <div className='SearchBox'> 
            <form  action='' onSubmit={handleSubmit} >               
               <TextField id="city" label="enter city name to check weather" variant="outlined" required value={city} onChange={handeChange} />&nbsp;&nbsp;
                
               <Button style={{margin:"8px"}} variant="contained" type='submit'>Search</Button>
               {error && <p style={{color:"red" }}>No such place exits in our APIs.!</p> }
            </form>
        </div>
    )
}