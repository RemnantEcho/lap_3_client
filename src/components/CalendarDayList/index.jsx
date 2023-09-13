import React, { useState, useEffect } from 'react';
import CalendarDayButton from '../CalendarDayButton';

export default function CalendarDayList({ selectedDate }) {
    const [dayButtons, setDayButtons] = useState([]);

    useEffect(() => {
        if (selectedDate) {
            const days = new Date(selectedDate.getFullYear(), selectedDate.getMonth()+1, 0).getDate();
            let tempDayArray = [];

            for (let i = 0; i < days; i++) {
                tempDayArray.push({ day: i });
            }

            setDayButtons(tempDayArray);
        }
    }, [selectedDate]);

    return (
    <>

        <div id="calendar-day-list">
            {dayButtons.map((d, index) => {

                 {(index+1 % 10 === 0) ? <div className="calendar-day-list-horizontal-wrapper"></div> : null}
                
                return <CalendarDayButton id={`day-button-${d.day}`} key={`day-${d.day+1}`} day={d.day+1} selectedDate={selectedDate} />
            })}

        </div>
    </>
    
  )
}