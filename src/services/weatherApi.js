const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export async function fetchCurrentWeather(city) {
    const response = await fetch(
        `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) throw new Error("City not found!");
    return response.json();
}

export async function fetchForecast(city) {
    const response = await fetch(
        `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) throw new Error("City not found!");
    return response.json();
}