import React from "react";
import DateBase from "./DateBase";

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
        <div className="weather-climate col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
