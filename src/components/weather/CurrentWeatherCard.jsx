/**
 * Displays current weather info.
 *
 * @param {object} props
 * @param {{ temperature: number, windspeed: number, weathercode?: number } | null} props.current
 * @param {{ name: string, country: string } | null} props.location
 * @param {"metric" | "imperial"} props.units
 */
function CurrentWeatherCard({ current, location, units }) {
  if (!current || !location) {
    return (
      <div className="card" style={{ marginTop: "1rem" }}>
        <p>No weather data yet. Try searching for a city.</p>
      </div>
    );
  }

  const temperatureUnit = units === "metric" ? "°C" : "°F";
  const windUnit = units === "metric" ? "km/h" : "mph";

  return (
    <div className="card" style={{ marginTop: "1rem" }}>
      <h2>
        {location.name}, {location.country}
      </h2>
      <p style={{ fontSize: "2.5rem", margin: "0.5rem 0" }}>
        {Math.round(current.temperature)} {temperatureUnit}
      </p>
      <p>Wind: {Math.round(current.windspeed)} {windUnit}</p>
      <p>Weather code: {current.weathercode}</p>
    </div>
  );
}

export default CurrentWeatherCard;
