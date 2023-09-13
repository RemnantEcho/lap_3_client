import React from 'react';
import { Search, ToDoCard } from '../../components'
import './style.css'

export default function TodoPage() {
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
        <Search />
      </div>

      <div id='card'>
        <ToDoCard />
      </div>
    </div>
  )
}
