import React from "react";
import { useEffect, useState } from "react";
import styles from "./Weather.module.css";
import WeatherCurrent from "./WeatherCurrent";
import WeatherForecast from "./WeatherForecast";
import WeatherLocation from "./WeatherLocation";
const Weather = () => {
  const [search, setSearch] = useState("dehradun");
  const [location, setLocation] = useState({
    country: "",
    lat: "",
    localtime: "",
    localtime_epoch: "",
    lon: "",
    name: "",
    region: "",
    tz_id: "",
  });

  const [current, setCurrent] = useState({
    cloud: "",
    condition: {
      text: "",
      icon: "",
      code: "",
    },
    feelslike_c: "",
    feelslike_f: "",
    gust_kph: "",
    gust_mph: "",
    humidity: "",
    is_day: "",
    last_updated: "",
    last_updated_epoch: "",
    precip_in: "",
    precip_mm: "",
    pressure_in: "",
    pressure_mb: "",
    temp_c: "",
    temp_f: "",
    uv: "",
    vis_km: "",
    vis_miles: "",
    wind_degree: "",
    wind_dir: "",
    wind_kph: "",
    wind_mph: "",
  });

  const [astro, setAstro] = useState({
    moon_illumination: "",
    moon_phase: "",
    moonrise: "",
    moonset: "",
    sunrise: "",
    sunset: "",
  });

  const [hourlyData,setHourlyData]=useState([]);
  useEffect(() => {
    const fetchWeatherData = async () => {
      const API_KEY = "5f19af61525c4e52a31114915221802";
      const API_CALL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${search}&days=7`;

      const response = await fetch(API_CALL);
      const data = await response.json();

      let hourlyDataFunc=[];
      for(let key in data.forecast.forecastday[0].hour)
      {
        hourlyDataFunc.push(data.forecast.forecastday[0].hour[key])
      }
      
      setHourlyData(hourlyDataFunc);
      
      setLocation({
        country: data.location.country,
        lat: data.location.lat,
        localtime: data.location.localtime,
        localtime_epoch: data.location.localtime_epoch,
        lon: data.location.lon,
        name: data.location.name,
        region: data.location.region,
        tz_id: data.location.tz_id,
      });
      setCurrent({
        cloud: data.current.cloud,
        condition: {
          text: data.current.condition.text,
          icon: data.current.condition.icon,
          code: data.current.condition.code,
        },
        feelslike_c: data.current.feelslike_c,
        feelslike_f: data.current.feelslike_f,
        gust_kph: data.current.gust_kph,
        gust_mph: data.current.gust_mph,
        humidity: data.current.humidity,
        is_day: data.current.is_day,
        last_updated: data.current.last_updated,
        last_updated_epoch: data.current.last_updated_epoch,
        precip_in: data.current.precip_in,
        precip_mm: data.current.precip_mm,
        pressure_in: data.current.pressure_in,
        pressure_mb: data.current.pressure_mb,
        temp_c: data.current.temp_c,
        temp_f: data.current.temp_f,
        uv: data.current.uv,
        vis_km: data.current.vis_km,
        vis_miles: data.current.vis_miles,
        wind_degree: data.current.wind_degree,
        wind_dir: data.current.wind_dir,
        wind_kph: data.current.wind_kph,
        wind_mph: data.current.wind_mph,
      });

      setAstro({
        moon_illumination: data.forecast.forecastday[0].astro.moon_illumination,
        moon_phase: data.forecast.forecastday[0].astro.moon_phase,
        moonrise: data.forecast.forecastday[0].astro.moonrise,
        moonset: data.forecast.forecastday[0].astro.moonset,
        sunrise: data.forecast.forecastday[0].astro.sunrise,
        sunset: data.forecast.forecastday[0].astro.sunset,
      });
    };

    fetchWeatherData();
  }, [search]);

  const searchData = (searchText) => {
    setSearch(searchText);
  };

  return (
    <div className={styles.Weather}>
      <div className={styles.weather_bg_image} />
      <div className={styles.weather_text}>
        <WeatherLocation location={location} searchData={searchData} />
        <WeatherCurrent current={current} astro={astro} />
        <WeatherForecast current={current} hourlyData={hourlyData}/>
      </div>
    </div>
  );
};

export default Weather;
