import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemButton,
  AccordionItemHeading,
} from "react-accessible-accordion";
import "./forecast.css";
import { ThemeContext } from "../../App";
import { useContext } from "react";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  const theme = useContext(ThemeContext);

  const titleStyle = {
    color: theme ? "#fff" : "#000",
  };

  const dailyItemStyle = {
    color: theme ? "#000" : "#000",
    backgroundColor: theme ? "grey" : "#fff",
  };

  const minMaxStyle = {
    color: theme ? "#fff" : "#757575",
  };

  const dailyDetailsCalc = {
    color: theme ? "#fff" : "#212121",
  };

  return (
    <>
      <label className="title" style={titleStyle}>
        Daily
      </label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item" style={dailyItemStyle}>
                  <img
                    alt="weather"
                    className="icon-small"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max" style={minMaxStyle}>
                    {Math.round(item.main.temp_min)}°C /{" "}
                    {Math.round(item.main.temp_max)}°C{" "}
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Pressure</label>
                  <label style={dailyDetailsCalc}>
                    {item.main.pressure} hPa
                  </label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Humidity</label>
                  <label style={dailyDetailsCalc}>{item.main.humidity}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Clouds</label>
                  <label style={dailyDetailsCalc}>{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Wind speed:</label>
                  <label style={dailyDetailsCalc}>{item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Sea level:</label>
                  <label style={dailyDetailsCalc}>{item.main.sea_level}m</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Feels like:</label>
                  <label style={dailyDetailsCalc}>
                    {Math.round(item.main.feels_like)}°C
                  </label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
