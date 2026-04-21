import '../css/CurrentWeather.css';

export default function CurrentWeather({ data }) {
    if (!data) return null;

    const windKmh = (data.wind.speed * 3.6).toFixed(1);

    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    });

    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    });

    function capitalize(s) {
        return s && String(s[0]).toUpperCase() + String(s).slice(1);
    }

    return (
        <div className="current-card">
            <h2 className="city-name">{data.name}</h2>
            <p className="state-country">{data.sys.country}</p>
            <p><span className="temp-num">{Math.round(data.main.temp)}</span><span className="temp-celcius">°C</span></p>
            <p>{capitalize(data.weather[0].description)} — feels like {Math.round(data.main.feels_like)} °C</p>
            <div className="more-info">
                <div className="info">
                    <p className="info-title">Humidity</p>
                    <p className="info-value">{data.main.humidity}%</p>
                </div>
                <div className="info">
                    <p className="info-title">Wind</p>
                    <p className="info-value">{windKmh}km/h</p>
                </div>
                <div className="info">
                    <p className="info-title">Sunrise</p>
                    <p className="info-value">{sunrise}</p>
                </div>
                <div className="info">
                    <p className="info-title">Sunset</p>
                    <p className="info-value">{sunset}</p>
                </div>
            </div>
        </div>
    );
}