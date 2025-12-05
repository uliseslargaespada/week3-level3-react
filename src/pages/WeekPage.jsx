import { useState } from "react";
import SearchBar from "../components/weather/SearchBar.jsx";
import UnitsToggle from "../components/weather/UnitsToggle.jsx";
import DailyForecastList from "../components/weather/DailyForecastList.jsx";
import { useWeather } from "../hooks/useWeather.js";

// Bootstrap imports
import Spinner from 'react-bootstrap/Spinner';

/**
 * WeekPage:
 *  - Manages city, units, and selected day index.
 *  - Uses useWeather to load daily forecast.
 *  - Maps over daily data to render a 7-day forecast grid.
 */
export default function WeekPage() {
  const [city, setCity] = useState("London");
  const [units, setUnits] = useState("metric");
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  const weatherState = useWeather(city, units);

  const handleSearch = (newCity) => {
    setCity(newCity);
    setSelectedDayIndex(0);
  };

  const handleUnitsChange = (newUnits) => {
    setUnits(newUnits);
    setSelectedDayIndex(0);
  };

  const handleSelectDay = (index) => {
    setSelectedDayIndex(index);
  };

  return (
    <section>
      <div className="card" style={{ marginBottom: "1rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
          <SearchBar onSearch={handleSearch} />
          <UnitsToggle units={units} onChange={handleUnitsChange} />
        </div>

        <p style={{ marginTop: "0.75rem", fontSize: "0.9rem" }}>
          7-day forecast for <strong>{city}</strong> ({units} units).
        </p>

        {weatherState.error && <p style={{ color: "#f97373" }}>{weatherState.error}</p>}
      </div>

      {weatherState.loading ? (
        <Spinner animation="border" />
      ) : (
        <DailyForecastList
          daily={weatherState.daily}
          units={units}
          onSelectDay={handleSelectDay}
          selectedIndex={selectedDayIndex}
        />
      )}

      {/* HomeWork: Implement the HourlyForecastList */}
      {/* e.g. <HourlyForecastList dailyIndex={selectedDayIndex} hourly={weatherState.hourly} /> */}
    </section>
  );
}
