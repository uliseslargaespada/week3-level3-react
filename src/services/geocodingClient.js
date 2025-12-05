import axios from "axios";

/**
 * Calls the Open-Meteo Geocoding API to get the first match for a city name.
 * @param {string} cityName - City name to search.
 * @returns {Promise<{ latitude: number, longitude: number, name: string, country: string } | null>}
 */
export async function geocodeCity(cityName) {
  const url = "https://geocoding-api.open-meteo.com/v1/search";
  const params = {
    name: cityName,
    count: 1,
    language: "en"
  };

  const response = await axios.get(url, { params });
  const data = await response.data;

  if (!data.results || data.results.length === 0) {
    return null;
  }

  const first = data.results[0];

  return {
    latitude: first.latitude,
    longitude: first.longitude,
    name: first.name,
    country: first.country
  };
}
