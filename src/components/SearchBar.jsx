import { useState } from "react";
import '../css/SearchBar.css';
import searchIcon from '../../assets/search.svg';

export default function SearchBar({ onSearch }) {
    const [input, setInput] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (input.trim()) onSearch(input.trim());
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="search"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a city..."
            />
            <button className="search-btn" type="submit">
                <img className="search-icon" src={searchIcon} alt="search icon" />
            </button>
        </form>
    )
}