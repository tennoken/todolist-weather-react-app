import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import {
  WiDaySunny,
  WiRain,
  WiSnow,
  WiDayHaze,
  WiCloudy,
  WiFog
} from "react-icons/wi";

const Weather = styled.div`
  position: absolute;
  top: 30px;
  right: 40px;
  text-align: center;
  & div {
    display: flex;
    align-items: center;
    font-size: 48px;
  }
  & h4 {
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    right: 73px;
    top: 70px;
  }
`;

const weatherCases = {
  Clear: {
    icon: <WiDaySunny />
  },
  Rain: {
    icon: <WiRain />
  },
  Haze: {
    icon: <WiDayHaze />
  },
  Snow: {
    icon: <WiSnow />
  },
  Clouds: {
    icon: <WiCloudy />
  },
  Fog: {
    icon: <WiFog />
  }
};

function WeatherTemplate() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      fetchWeather(position.coords.latitude, position.coords.longitude);
    });

    const fetchWeather = async (lat, long) => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=e5332e24c31f61a15f503bcab6b71d18`
        );
        setWeather(response.data);
      } catch (e) {
        setError(e);
        console.log(e);
      }
    };
  }, []);

  console.log(weather);
  // console.log(weatherCases[weather.weather[0].main].icon);

  if (!weather) return null;
  if (error) return <div>에러가 발생했습니다.{error}</div>;

  return (
    <>
      <Weather>
        <div>
          {weatherCases[weather.weather[0].main].icon}
          <span>{Math.ceil(weather.main.temp - 273.15)}º</span>
        </div>
        <h3>{weather.name}</h3>
      </Weather>
    </>
  );
}

export default WeatherTemplate;
