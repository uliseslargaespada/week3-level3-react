import { useState } from "react";

import SearchBar from "../components/weather/SearchBar.jsx";
import UnitsToggle from "../components/weather/UnitsToggle.jsx";

/**
 * Initial Today page.
 * Static content just to validate layout, JSX and styling.
 */

function TodayPage() {
  const [city, setCity] = useState("London");
  const [units, setUnits] = useState("metric");

  const handleSearch = (newCity) => {
    setCity(newCity);
    // Day 3: trigger API request here
  };

  const handleUnitsChange = (newUnits) => {
    setUnits(newUnits);
    // Day 3+: re-fetch or convert data here
  };

  return (
    <section className="card">
      <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
        <SearchBar onSearch={handleSearch} />
        <UnitsToggle units={units} onChange={handleUnitsChange} />
      </div>
      
      <div style={{ marginTop: "1rem" }}>
        <h2>
          Today&apos;s weather for <span>{city}</span>
        </h2>
        <p>
          Units: <strong>{units === "metric" ? "Metric (°C, km/h)" : "Imperial (°F, mph)"}</strong>
        </p>
        <p>
          For now this is just mock text controlled by state. Tomorrow we will
          connect it to the Open-Meteo API.
        </p>
      </div>
    </section>
  );
}

export default TodayPage;
