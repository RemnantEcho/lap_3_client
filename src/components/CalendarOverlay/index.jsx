import React, { useState, useEffect } from 'react';

export default function CalendarOverlay({calendarOverlayShown, setCalendarOverlayShown, selectedDate, setSelectedDate, selectedMonth, setSelectedMonth, selectedYear, setSelectedYear}) {

    function incrementYear(e) {
        e.preventDefault();
        let tempYear = selectedDate.getFullYear();
        let tempDate = new Date(selectedDate);
        if (tempYear >= new Date().getFullYear() + 10 - 1) {
        tempDate.setYear(new Date().getFullYear() + 10);

        setSelectedDate(tempDate);
        }
        else {
        tempDate.setYear(tempYear+1);
        setSelectedDate(tempDate);
        }
        setSelectedYear(tempDate.toLocaleString('default', { year: 'numeric'}));
    }

    function decrementYear(e) {
        e.preventDefault();
        let tempYear = selectedDate.getFullYear();
        let tempDate = new Date(selectedDate);
        if (tempYear <= 2001) {
        tempDate.setYear(2000);
        setSelectedDate(tempDate);
        }
        else {
        tempDate.setYear(tempYear-1);
        setSelectedDate(tempDate);
        }
        setSelectedYear(tempDate.toLocaleString('default', { year: 'numeric'}));
    }

    function onMonthButtonClick(e) {
        e.preventDefault();

        console.log(e.target.id);
        let tempDate = new Date(selectedDate);
        let tempMonth = selectedDate.getMonth();
        
        switch (e.target.id) {
            case "calendar-month-jan":
                tempDate.setMonth(0);
            break;
            case "calendar-month-feb":
                tempDate.setMonth(1);
            break;
            case "calendar-month-mar":
                tempDate.setMonth(2);
            break;
            case "calendar-month-apr":
                tempDate.setMonth(3);
            break;
            case "calendar-month-may":
                tempDate.setMonth(4);
            break;
            case "calendar-month-jun":
                tempDate.setMonth(5);
            break;
            case "calendar-month-jul":
                tempDate.setMonth(6);
            break;
            case "calendar-month-aug":
                tempDate.setMonth(7);
            break;
            case "calendar-month-sep":
                tempDate.setMonth(8);
            break;
            case "calendar-month-oct":
                tempDate.setMonth(9);
            break;
            case "calendar-month-nov":
                tempDate.setMonth(10);
            break;
            case "calendar-month-dec":
                tempDate.setMonth(11);
            break;
            
        }

        // console.log(tempDate);
        // console.log(selectedDate);
        setSelectedDate(tempDate);
        setSelectedMonth(tempDate.toLocaleString('default', { month: 'long'}));
        setCalendarOverlayShown(false);
    }

    useEffect(() => {

    }, []);

    
    return (
        <div id="calendar-overlay">
            <div id="calendar-overlay-container">
                <button id="calendar-overlay-close-button" className="hidden-style-button" onClick={(e) => {
                    e.preventDefault();
                    setCalendarOverlayShown(false)
                    }}>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.1923 29.0209L29.435 24.7783L18.9454 14.2887L28.9914 4.24264L24.7487 0L14.7027 10.046L4.68624 0.029541L0.443596 4.27218L10.4601 14.2887L0 24.7487L4.24264 28.9914L14.7027 18.5313L25.1923 29.0209Z" fill="black"/>
                        </svg>
                    </button>
                <div id="calendar-overlay-top-bar">
                    <button className="calendar-top-button calendar-prev hidden-style-button" onClick={decrementYear}>{"<"}</button>
                    <h2 id="calendar-top-bar-year">{selectedYear}</h2>
                    <button className="calendar-top-button calendar-next hidden-style-button" onClick={incrementYear}>{">"}</button>
                </div>
                <div className="calendar-overlay-main">
                    <div className="calendar-overlay-main-horizontal-wrapper">
                        <button id="calendar-month-jan" className="calendar-overlay-month-button hidden-style-button" onClick={onMonthButtonClick}>Jan</button>
                        <button id="calendar-month-feb" className="calendar-overlay-month-button hidden-style-button" onClick={onMonthButtonClick}>Feb</button>
                        <button id="calendar-month-mar" className="calendar-overlay-month-button hidden-style-button" onClick={onMonthButtonClick}>Mar</button>
                        <button id="calendar-month-apr" className="calendar-overlay-month-button hidden-style-button" onClick={onMonthButtonClick}>Apr</button>
                    </div>
                    <div className="calendar-overlay-main-horizontal-wrapper">
                        <button id="calendar-month-may" className="calendar-overlay-month-button hidden-style-button" onClick={onMonthButtonClick}>May</button>
                        <button id="calendar-month-jun" className="calendar-overlay-month-button hidden-style-button" onClick={onMonthButtonClick}>Jun</button>
                        <button id="calendar-month-jul" className="calendar-overlay-month-button hidden-style-button" onClick={onMonthButtonClick}>Jul</button>
                        <button id="calendar-month-aug" className="calendar-overlay-month-button hidden-style-button" onClick={onMonthButtonClick}>Aug</button>
                    </div>
                    <div className="calendar-overlay-main-horizontal-wrapper">
                        <button id="calendar-month-sep" className="calendar-overlay-month-button hidden-style-button" onClick={onMonthButtonClick}>Sep</button>
                        <button id="calendar-month-oct" className="calendar-overlay-month-button hidden-style-button" onClick={onMonthButtonClick}>Oct</button>
                        <button id="calendar-month-nov" className="calendar-overlay-month-button hidden-style-button" onClick={onMonthButtonClick}>Nov</button>
                        <button id="calendar-month-dec" className="calendar-overlay-month-button hidden-style-button" onClick={onMonthButtonClick}>Dec</button>
                    </div>

                    
                    
                    
                </div>
            </div>

        </div>
    
  )
}