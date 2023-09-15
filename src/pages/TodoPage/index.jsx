import React, { useState } from 'react';
import { Search, ToDoCard } from '../../components';
import './style.css';
import axios from 'axios';

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
        <h1>TO DO</h1>
      </div>

      <div id='search'>
        <div id='date-cont'>
          <h3> View all your tasks </h3>
        </div>
        <Search onShowToDoCard={handleShowToDoCard} onHideToDoCard={handleHideToDoCard} onSearchResults={handleSearchResults} resetSearching={resetSearching} />
      </div>

      <div id='card'>
        {showToDoCard && !searching ? <ToDoCard /> : null}

        {(searching || finalResults.length > 0) && (
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
        {!searching && finalResults.length === 0 && !showToDoCard && (
          <h3>Nothing to show!</h3>
        )}
      </div>
      <img id='bg-image-small' src="bg-image.png" alt="logo" />
    </div>
  );
}


