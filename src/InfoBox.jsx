import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'; 
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Start } from '@mui/icons-material';


export default function InfoBox({info}){
    const INIT_URL = "https://images.unsplash.com/photo-1545193544-312983719627?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    let COLD_URL = "./cold.avif";

    let HOT_URL = "/hot.avif";

    let RAIN_URL = "/rain.avif";
     
    return(
        
        <div className="InfoBox">
            
            <div className='CardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humadity > 80? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL }
        title="green iguana"
      />
      <CardContent style={{textAlign:"start"}}>
        <Typography gutterBottom variant="h5" component="div">
        <h4>Weather Info of {info.city} {info.humadity > 80? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/> } </h4>
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
           <div><h4>Temperature = {info.temp}&deg;C</h4></div>
           <div><h4>Max Temp = {info.tempMin}&deg;C</h4></div>
           <div> <h4>Min temp = {info.tempMin}&deg;C</h4></div>
           <div> <h4>Pressure = {info.pressure}</h4></div>
           <div> <h4>Humidity = {info.humidity}</h4></div> 
           <div><h3>The weather can be described as <i>{info.Weather}</i> and feels like {info.feels_like}&deg;C </h3></div>
        </Typography>
      </CardContent>
       
    </Card>
    </div>
        </div>
    )
}