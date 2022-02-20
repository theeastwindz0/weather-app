import React from "react";
import styles from "./Weather.module.css";
const WeatherCurrent = (props) => {
  const current_day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  console.log(props.current);
  return (
    <div className={styles.weather_current}>
      <div className={styles.weather_current_box_2}>
        
      </div>
      <div className={styles.weather_current_box_2}>
        <p>Last Updated : {props.current.last_updated}</p>
        <p>Current Time : </p>
        <p>Current Day : {current_day[props.current.is_day - 1]}</p>
      </div>
      <div className={styles.weather_current_box_1}>
        <img src={`http:${props.current.condition.icon}`} />
        <p>{props.current.condition.text}</p>
        <p>
          {props.current.temp_c} C / {props.current.temp_f} F
        </p>
      </div>

      <div className={styles.weather_current_box_2}>
        <p>Wind Degree : {props.current.wind_degree}</p>
        <p>Wind Direction : {props.current.wind_dir}</p>
        <p>Wind (kph) : {props.current.wind_kph}</p>
        <p>Wind (mph) : {props.current.wind_mph}</p>
      </div>
      <div className={styles.weather_current_box_1}>
        <p>Cloud : {props.current.cloud}</p>
        <p>Gust (kph) : {props.current.gust_kph}</p>
        <p>Gust (mph) : {props.current.gust_mph}</p>
        <p>Humidity : {props.current.humidity}</p>
      </div>
      <div className={styles.weather_current_box_2}>
        <p>Precipitation (in) : {props.current.precip_in}</p>
        <p>Precipitation (mm) : {props.current.precip_mm}</p>
        <p>Pressure (in) : {props.current.pressure_in}</p>
        <p>Pressure (mb) : {props.current.pressure_mb}</p>
      </div>
    </div>
  );
};

export default WeatherCurrent;
