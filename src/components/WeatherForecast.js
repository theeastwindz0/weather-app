import React from 'react'
import styles from './Weather.module.css'
const WeatherForecast = (props) => {
  return (
    <div className={styles.weather_forecast}>
        
        <div className={styles.weather_forecast_box}>
        <img src={`http:${props.current.condition.icon}`} />
        <p>{props.current.condition.text}</p>
        <p>
          {props.current.temp_c} C / {props.current.temp_f} F
        </p>
        </div>

    </div>
  )
}

export default WeatherForecast