import { useEffect, useState } from "react";
import { geocodeCity } from "../services/geocodingClient.js";
import { fetchTodayWeather } from "../services/openMeteoClient.js";

const initialState = {
  loading: false,
  error: null,
  location: null,
  current: null,
  hourly: []
};

/**
 * useWeather encapsulates the logic for:
 *  - geocoding a city name to coordinates
 *  - fetching current + hourly weather
 *  - managing loading & error states
 *
 * @param {string} city - City name to search.
 * @param {"metric" | "imperial"} units - Measurement units.
 */
function useWeather(city, units) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (!city) return;

    let cancelled = false;

    async function loadWeather() {
      setState((prev) => ({ ...prev, loading: true, error: null }));

      try {
        const location = await geocodeCity(city);

        if (!location) {
          if (!cancelled) {
            setState({
              loading: false,
              error: "Location not found.",
              location: null,
              current: null,
              hourly: []
            });
          }
          return;
        }

        const raw = await fetchTodayWeather(location.latitude, location.longitude, units);

        const current = raw.current_weather || null;
        const hourly = raw.hourly || {};

        if (!cancelled) {
          setState({
            loading: false,
            error: null,
            location,
            current,
            hourly
          });
        }

      } catch {
        if (!cancelled) {
          setState({
            loading: false,
            error: "Could not load weather data. Please try again.",
            location: null,
            current: null,
            hourly: []
          });
        }
      }
    }

    loadWeather();

    return () => {
      cancelled = true;
    };
  }, [city, units]);

  return state;
}

export { useWeather };
