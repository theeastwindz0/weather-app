import React from 'react'
import styles from './Weather.module.css'
const WeatherForecast = (props) => {
   
  
  return (
    <div className={styles.weather_forecast}>
        {
            props.hourlyData.map((data,key)=>
            (
                <div className={styles.weather_forecast_box} key={key}>
                    <p>{data.time.substring(data.time.length-5,data.time.length)}</p>
                <img src={`http:${data.condition.icon}`} alt='weather '/>
                <p>{data.condition.text}</p>
                <p>
                  {data.temp_c} C / {data.temp_f} F
                </p>
                </div>  
            ))
        }
        

    </div>
  )
}

export default WeatherForecast