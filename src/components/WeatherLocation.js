import React from 'react'
import styles from './Weather.module.css'
const WeatherLocation = (props) => {
  return (
    <div className={styles.weather_location}>
    <p>Name : {props.location.name}</p>
    <p>Latitude : {props.location.lat}</p>
    <p>Longitude : {props.location.lon}</p>
    <p>Country : {props.location.country}</p>
    <p>Region : {props.location.region}</p>
    
  </div>
  )
}

export default WeatherLocation