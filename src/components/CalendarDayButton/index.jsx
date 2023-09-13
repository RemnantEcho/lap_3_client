import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function CalendarDayButton({id, day, selectedDate}) {
    const [weekDayText, setWeekDayText] = useState('');

    useEffect(() => {
        let tempDate = new Date(selectedDate);
        tempDate.setDate(day);

        setWeekDayText(tempDate.toLocaleDateString('default', { weekday: "short"})); 

    }, []);

    useEffect(() => {
        let tempDate = new Date(selectedDate);
        tempDate.setDate(day);

        setWeekDayText(tempDate.toLocaleDateString('default', { weekday: "short"})); 

    }, [selectedDate]);

    return (
        <Link className="day-button-link" to={`/todo/${day}-${selectedDate.getMonth()}-${selectedDate.getFullYear()}`}>
            <button id={id} className="calendar-day-button">
                <span className="day-button-day-text">{weekDayText}</span>

                <span className="day-button-day-number">{day}</span>
            </button>
        </Link>
  )
}