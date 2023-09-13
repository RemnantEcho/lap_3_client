import React, { useState } from 'react';
import { Search, ToDoCard } from '../../components';
import './style.css';

export default function TodoPage() {
  const [showToDoCard, setShowToDoCard] = useState(true);
  const [finalResults, setFinalResults] = useState([]);
  const [searching, setSearching] = useState(false);

  const handleShowToDoCard = () => {
    setShowToDoCard(true);
    setFinalResults([]);
    setSearching(false)
  };

  const handleHideToDoCard = () => {
    setShowToDoCard(false);
    setFinalResults([]); 
    setSearching(true)
  };

  const handleSearchResults = (results) => {
    console.log('line 23 page', results)
    setFinalResults(results);
    if (searching === false) {
      setShowToDoCard(false); 
    } else {
      setShowToDoCard(true)
    }
    
  };

  const resetSearching = () => {
    setSearching(false);
  };

  return (
    <div id='todo-page'>
      <div id='todo-title'>
        <h1>To Do</h1>
      </div>
      
      <div id='search'>
        <div id='date-cont'>
          <h2>Date</h2>
          <h2>Month</h2>
        </div>
        <Search onShowToDoCard={handleShowToDoCard} onHideToDoCard={handleHideToDoCard} onSearchResults={handleSearchResults} resetSearching={resetSearching}/>
      </div>

      <div id='card'>
        {showToDoCard && !searching ? <ToDoCard /> : null}

        {finalResults.length === 0 && !searching ? (<h3>Nothing to show!</h3>) : (
          <ul>
            {finalResults.map((result, index) => (
              <li id='output' key={index}>
                <div>
                  <h3> {result.goal} </h3> 
                  <p>Date: {result.date}</p> 
                  <p>Category: {result.category}</p>
                  <p>Progress: {result.progressValue}</p> 
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}


