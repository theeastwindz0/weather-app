import React, { useState } from "react";
import styles from "./Weather.module.css";
const WeatherLocation = (props) => {
  const [search, setSearch] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.searchData(search);
    setSearch("");
  };
  return (
    <div className={styles.weather_location}>
      <div className={styles.searching_box}>
        <input
          onChange={(event) => setSearch(event.target.value)}
          type="text"
        />
        <button onClick={onSubmitHandler}>Submit</button>
      </div>
      <p>Name : {props.location.name}</p>
      <p>Latitude : {props.location.lat}</p>
      <p>Longitude : {props.location.lon}</p>
      <p>Country : {props.location.country}</p>
      <p>Region : {props.location.region}</p>
    </div>
  );
};

export default WeatherLocation;
