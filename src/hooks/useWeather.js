import { useState, useEffect } from 'react';
import { fetchCurrentWeather, fetchForecast } from '../services/weatherApi';

export function useWeather(city) {
    const [current, setCurrent] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!city) return;

        async function loadWeather() {
            setLoading(true);
            setError(null);
            setCurrent(null);
            setForecast(null);

            try {
                const currentData = await fetchCurrentWeather(city);
                const forecastData = await fetchForecast(city);
                setCurrent(currentData);
                setForecast(forecastData);
            } catch (err) {
                console.log(err.message);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        loadWeather();
    }, [city]);

    return {current, forecast, loading, error};
}