import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";

export default function CalendarDayButton({id, day, selectedDate}) {
    let navigate = useNavigate(); 

    return (
        <Link className="day-button-link" to={`/todo/${day}-${selectedDate.getMonth()}-${selectedDate.getFullYear()}`}>
            <button id={id} className="calendar-day-button">
                {day}
            </button>
        </Link>
    
  )
}