/**
 * UnitsToggle switches between metric and imperial units.
 *
 * @param {object} props - Component props.
 * @param {"metric" | "imperial"} props.units - Current units.
 * @param {(units: "metric" | "imperial") => void} props.onChange - Callback when units change.
 */
const UnitsToggle = ({ units, onChange }) => {
  const handleChange = (event) => { 
    const value = event.target.value === "metric" ? "metric" : "imperial";
    onChange(value);
  };

  return (
    <div className="units-toggle">
      <label htmlFor="units-select">Units:</label>
      <select id="units-select" value={units} onChange={handleChange}>
        <option value="metric">Metric (°C, km/h)</option>
        <option value="imperial">Imperial (°F, mph)</option>
      </select>
    </div>
  );
};

export default UnitsToggle;
