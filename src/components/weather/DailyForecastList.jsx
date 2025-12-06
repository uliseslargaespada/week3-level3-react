/**
 * Renders a list of day cards from daily forecast data.
 *
 * @param {object} props
 * @param {{
 *   time?: string[],
 *   temperature_2m_max?: number[],
 *   temperature_2m_min?: number[],
 *   weathercode?: number[]
 * }} props.daily
 * @param {"metric" | "imperial"} props.units
 * @param {(index: number) => void} props.onSelectDay - Called when a day is clicked.
 * @param {number} props.selectedIndex
 */
export default function DailyForecastList({ daily, units, onSelectDay, selectedIndex }) {
  if (!daily || !daily.time || daily.time.length === 0) {
    return (
      <div className="card">
        <p>No weekly data yet.</p>
      </div>
    );
  }

  const temperatureUnit = units === "metric" ? "°C" : "°F";

  // We can move the daily time mapping here.
  const dailyRender = daily.time.map((dateString, index) => {
    const max = daily.temperature_2m_max?.[index];
    const min = daily.temperature_2m_min?.[index];
    
    const isSelected = index === selectedIndex;

    return (
      <button
        key={dateString}
        type="button"
        className={isSelected ? "daily-card daily-card--selected" : "daily-card"}
        onClick={() => onSelectDay(index)}
      >
        <p className="daily-card__date">{dateString}</p>
        <p className="daily-card__temps">
          {Math.round(max)}{temperatureUnit} / {Math.round(min)}{temperatureUnit}
        </p>
      </button>
    );
  });

  return (
    <div className="card" style={{ marginBottom: "1rem" }}>
      <h2>7-Day forecast</h2>

      <div className="daily-grid">
        {dailyRender}
      </div>
    </div>
  );
}
