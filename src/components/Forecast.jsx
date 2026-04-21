import '../css/Forecast.css';

export default function Forecast({ data, wholeData }) {
    if (!data) return null;

    console.log(data);

    const icon = new URL(`../../assets/${data.weather[0].icon}.svg`, import.meta.url).href;
    const day = new Date(data.dt * 1000).toLocaleDateString("en-US", { weekday: "short" })

    const dayNumbers = {
        "Sun": 0, 
        "Mon": 1, 
        "Tue": 2, 
        "Wed": 3, 
        "Thu": 4, 
        "Fri": 5, 
        "Sat": 6
    }

    const dayEntries = wholeData.filter(entry => {
        const date = new Date(entry.dt * 1000);
        return date.getDay() === dayNumbers[day];
    });

    const dayTemps = dayEntries.map(entry => entry.main.temp);

    const max = Math.round(Math.max(...dayTemps));
    const min = Math.round(Math.min(...dayTemps));

    return (
        <div className="forecast-card">
            <p className="week-day">{day}</p>
            <img className="icon" src={icon} alt="weather icon" />
            <p className="temp-max">{max}°C</p>
            <p className="temp-min">{min}°C</p>
        </div>
    );
}