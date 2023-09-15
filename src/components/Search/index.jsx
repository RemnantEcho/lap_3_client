import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

function Search({ onShowToDoCard, onHideToDoCard, onSearchResults, resetSearching }) {
  const [inputText, setInputText] = useState('');
  const [results, setResults] = useState([]);
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
  };

  const handleButtonClick = () => {
    const filteredResults = results.filter(
      (result) =>
        result.goal &&
        result.goal.toLowerCase().includes(inputText.toLowerCase())
    );

    if (filteredResults.length > 0) {
      onHideToDoCard();
      onSearchResults(filteredResults);
    } else {
        console.log('line 47',filteredResults)
      onShowToDoCard();
      onSearchResults([]);
    }
    setShowOutput(true);
  };

  const handleClearClick = () => {
    if (inputText) {
        setInputText('');
        resetSearching();
        onShowToDoCard();
    }
  }

    return (
        <div className='search-cont'>
            <div>
              <form>

                <label id='search-form'>
                    <input
                        id='search-form-input'
                        type='text'
                        value={inputText}
                        onChange={handleInputChange}
                        placeholder='Search for a task...'
                        />
                    {inputText && (
                      <button id='clear-button' onClick={handleClearClick}>
            X
          </button>
        )}
                </label>
                <button id='submit-btn' onClick={handleButtonClick}>Submit</button>
        </form>
            </div>
        </div>
    );
}

export default Search;


