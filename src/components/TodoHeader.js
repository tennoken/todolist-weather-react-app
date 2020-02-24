import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";
import axios from "axios";
import {
  WiDaySunny,
  WiRain,
  WiSnow,
  WiDayHaze,
  WiCloudy
} from "react-icons/wi";

const Header = styled.div`
  border-bottom: 1px solid #a5d8ff;
  height: 120px;
  padding: 40px 40px 10px 40px;

  & h1 {
    margin: 0;
    color: #0b7285;
  }

  & h3 {
    margin: 0;
    color: #ffa8a8;
  }

  & p {
    margin-bottom: 0;
    color: #ced4da;
    font-weight: bold;
  }
`;

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
  }
};

console.log(weatherCases);

function TodoHeader() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const nowDate = new Date(Date.now());
  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const date = nowDate.toLocaleDateString("ko-KR", dateOptions);
  const week = nowDate.toLocaleDateString("ko-KR", { weekday: "long" });

  const tasks = useTodoState();
  const unDoneTasks = tasks.filter(todo => todo.check !== true);

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
      }
    };
  }, []);

  if (error) return <div>에러가 발생했습니다.{error}</div>;
  if (!weather) return null;

  console.log(weather);

  return (
    <Header>
      <Weather>
        <div>
          {weatherCases[weather.weather[0].main].icon}
          <span>{Math.ceil(weather.main.temp - 273.15)}º</span>
        </div>
        <h3>{weather.name}</h3>
      </Weather>
      <h1>{date}</h1>
      <h3>{week}</h3>
      <p>할 일 {unDoneTasks.length} 남음</p>
    </Header>
  );
}

export default TodoHeader;
