import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'

function Search() {
    const [inputText, setInputText] = useState('');
    const [results, setResults] = useState([]);
    const [finalResults, setFinalResults] = useState([]);
    const [showOutput, setShowOutput] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/goals');
                if (response.status === 200) {
                    const responseData = response.data;
                    const data = responseData.goal;
                    if (Array.isArray(data)) {
                        setResults(data);
                        console.log('line 19', results)
                    } else {
                        console.error('Data is not an array:', data);
                    }
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleInputChange = (e) => {
        const text = e.target.value;
        setInputText(text);

        if (!text) {
            setFinalResults(['Noooooo']);
        }
    };

    const handleButtonClick = () => {
        const filteredResults = results.filter((result) =>
            result.goal.toLowerCase().includes(inputText.toLowerCase())
        );

        if (filteredResults.length > 0) {
            setFinalResults(filteredResults);
        } else {
            setFinalResults([]);
        }

        setShowOutput(true);
    };

    return (
        <div children='search-cont'>
            <label>
                <input
                    id="form"
                    type="text"
                    value={inputText}
                    onChange={handleInputChange}
                    placeholder="Search for a task..."
                />
            </label>
            <button id="submit-btn" onClick={handleButtonClick}>
                Submit
            </button>
            {showOutput && (
                <ul>
                    {finalResults.length > 0 ? (
                        finalResults.map((result, index) => (
                            <li id='output' key={index}>{result.goal}</li>
                        ))
                    ) : (
                        <li>Nothing found</li>
                    )}
                </ul>
            )}
        </div>
    );
}

export default Search;
