import { useState } from "react";
import { useWeather } from "../hooks/useWeather.js";
import CurrentWeatherCard from "../components/weather/CurrentWeatherCard.jsx";
import SearchBar from "../components/weather/SearchBar.jsx";
import UnitsToggle from "../components/weather/UnitsToggle.jsx";

// Bootstrap imports
import Spinner from 'react-bootstrap/Spinner';

/**
 * Initial Today page.
 * Static content just to validate layout, JSX and styling.
 */

function TodayPage() {
  // Object deconstruction to get state and updater function
  const [city, setCity] = useState("London");
  const [units, setUnits] = useState("metric");

  // Call the hook similar to how we call the react hooks
  const weatherState = useWeather(city, units);

  const handleSearch = (newCity) => {
    setCity(newCity);
  };

  const handleUnitsChange = (newUnits) => {
    setUnits(newUnits);
  };

  return (
    <section>
      <div className="card" style={{ marginBottom: "1rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
          <SearchBar onSearch={handleSearch} />
          <UnitsToggle units={units} onChange={handleUnitsChange} />
        </div>

        <p style={{ marginTop: "0.75rem", fontSize: "0.9rem" }}>
          Showing weather for <strong>{city}</strong> ({units} units).
        </p>

        {weatherState.error && <p style={{ color: "#f97373" }}>{weatherState.error}</p>}
      </div>

      {weatherState.loading ? (
        <Spinner animation="border" />
      ) : (
        <CurrentWeatherCard
          current={weatherState.current}
          location={weatherState.location}
          units={units}
        />
      )}
    </section>
  );
}

export default TodayPage;
