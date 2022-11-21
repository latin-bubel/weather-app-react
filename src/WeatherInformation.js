import React from "react";
import DateBase from "./DateBase";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInformation.css";

export default function WeatherInformation(props) {
  return (
    <div className="WeatherInformation">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <DateBase date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <div class="row">
        <div class="col-6">
          <div className="weather-icon d-inline-flex p-2">
            <img src={props.data.icon} alt="Cloud" size={30} />
          </div>
          <div className="weather-temperature col-4 float-start inline ">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
        <div className="weather-description col-6">
          <ul>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
