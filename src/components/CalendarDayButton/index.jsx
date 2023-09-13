import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function CalendarDayButton({id, day, selectedDate}) {
    let navigate = useNavigate(); 

    function navigateToDo(e) {
        e.preventDefault();

        let stringPath = `${day}-${selectedDate.getMonth()}-${selectedDate.getFullYear()}`
        navigate('/todo/' + stringPath);
        console.log(stringPath);
    }

    return (

        <button id={id} className="calendar-day-button" onClick={navigateToDo}>
            {day}
        </button>
    
  )
}