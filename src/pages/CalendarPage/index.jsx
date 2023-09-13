import React, { useState, useEffect } from 'react';
import { CalendarDayList, CalendarOverlay } from './../../components';

export default function CalendarPage() {
  const [calendarOverlayShown, setCalendarOverlayShown] = useState(false);
  const [selectedDate, setSelectedDate] = useState();
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  function showCalendar() {
    setCalendarOverlayShown(!calendarOverlayShown);
  }


  function incrementYear(e) {
    e.preventDefault();
    // e.target.closest('.calendar-main-button-wrapper').querySelector('.calendar-year-main-prev').disabled = false;
    let tempYear = selectedDate.getFullYear();
    let tempDate = new Date(selectedDate);
    if (tempYear >= new Date().getFullYear() + 10 - 1) {
      // e.target.closest('.calendar-year-main-next').disabled = true;
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
    // e.target.closest('.calendar-main-button-wrapper').querySelector('.calendar-year-main-next').disabled = false;
    let tempDate = new Date(selectedDate);
    if (tempYear === 2001) {
      // e.target.closest('.calendar-year-main-prev').disabled = true;
      tempDate.setYear(2000);
      setSelectedDate(tempDate);
    }
    else {
      tempDate.setYear(tempYear-1);
      setSelectedDate(tempDate);
    }
    setSelectedYear(tempDate.toLocaleString('default', { year: 'numeric'}));

  }

  function incrementMonth(e) {
    e.preventDefault();

    let tempMonth = selectedDate.getMonth();
    // console.log(`selected Date Before: ${selectedDate}`);
    let tempDate = new Date(selectedDate);

    if (tempMonth === 11) {
      tempDate.setMonth(0);
    }
    else {
      tempDate.setMonth(tempMonth+1);
    }
    setSelectedDate(tempDate);
    // console.log(`selected Date After: ${selectedDate}`);
    setSelectedMonth(tempDate.toLocaleString('default', { month: 'long'}));
  }

  function decrementMonth(e) {
    e.preventDefault();
    let tempMonth = selectedDate.getMonth();
    let tempDate = new Date(selectedDate);
    if (tempMonth === 0) {
      tempDate.setMonth(11);
      setSelectedDate(tempDate);
    }
    else {
      tempDate.setMonth(tempMonth-1);
      setSelectedDate(tempDate);
    }
    
    setSelectedMonth(tempDate.toLocaleString('default', { month: 'long'}));

  }

  function showMonthButtons(e) {
    e.preventDefault();
    // console.log(e.target);
    if (e.target.classList.contains('calendar-main-horizontal-wrapper')) {
      e.target.querySelector('.calendar-main-button-wrapper').classList.remove('hide');
    }
    
  }

  function hideMonthButtons(e) {
    e.preventDefault();
    if (e.target.classList.contains('calendar-main-horizontal-wrapper')) {
      e.target.querySelector('.calendar-main-button-wrapper').classList.add('hide');
    }
    
  }

  useEffect(() => {
    let currentDate = new Date();
    setSelectedDate(currentDate);
    setSelectedMonth(currentDate.toLocaleString('default', { month: 'long'}));
    setSelectedYear(currentDate.toLocaleString('default', { year: 'numeric'}));
  }, []);

  useEffect(() => {
    console.log(calendarOverlayShown);
    if (calendarOverlayShown) {
      document.getElementById('calendar-overlay').classList.remove('hide');
    }
    else {
      document.getElementById('calendar-overlay').classList.add('hide');
    }
    
  }, [calendarOverlayShown]);

  useEffect(() => {
    console.log(`Parent Selected Date: ${selectedDate}`);
  }, [selectedDate]);

  useEffect(() => {
    if (selectedDate) {
      let tempYear = selectedDate.getFullYear();
      if (tempYear >= new Date().getFullYear() + 10) {
        document.querySelector('.calendar-year-main-next').disabled = true;
      }
      else {
        document.querySelector('.calendar-year-main-next').disabled = false;
      }

      if (tempYear <= 2000) {
        document.querySelector('.calendar-year-main-prev').disabled = true;
      }
      else {
        document.querySelector('.calendar-year-main-prev').disabled = false;
      }
    }
    
  }, [selectedYear]);

  return (
    <>
    <div id="calendar-page-container">
      <div id="calendar-main-container">
      <h1 className="calendar-title page-title green-text">CALENDAR</h1>
        <div className="calendar-year-container calendar-main-horizontal-wrapper">
          
          <h2 id="calendar-year-main" className="calendar-main-heading" onClick={showCalendar}>{selectedYear}</h2>
          <div className="calendar-main-button-wrapper">
            <button className="calendar-year-main-next calendar-main-next calendar-main-button hidden-style-button" onClick={incrementYear}>
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0L15.7942 13.5H0.205771L8 0Z" fill="#D9D9D9"/>
              </svg>
            </button>
            <button className="calendar-year-main-prev calendar-main-prev calendar-main-button hidden-style-button" onClick={decrementYear}>
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 14L0.205774 0.499999L15.7942 0.5L8 14Z" fill="#D9D9D9"/>
              </svg>
            </button>
          </div>
          
        </div>
        <div className="calendar-month-container calendar-main-horizontal-wrapper" onMouseMove={showMonthButtons} onMouseLeave={hideMonthButtons}>
          <h2 id="calendar-month-main" className="calendar-main-heading" onMouseMove={(e) => {e.stopPropagation()}} onClick={showCalendar}>{selectedMonth}</h2>
          <div className="calendar-main-button-wrapper hide">
            <button className="calendar-month-main-next calendar-main-next calendar-main-button hidden-style-button" onMouseMove={(e) => {e.stopPropagation()}} onClick={incrementMonth}>
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0L15.7942 13.5H0.205771L8 0Z" fill="#D9D9D9"/>
              </svg>
            </button>
            <button className="calendar-month-main-prev calendar-main-prev calendar-main-button hidden-style-button" onMouseMove={(e) => {e.stopPropagation()}} onClick={decrementMonth}>
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 14L0.205774 0.499999L15.7942 0.5L8 14Z" fill="#D9D9D9"/>
              </svg>
            </button>
          </div>
        </div>
        <CalendarDayList selectedDate={selectedDate} />
          <div id="calendar-bottom-bar">
            <button id="calendar-view-all-button" className="button-style green-button push-right">View All</button>
          </div>
      </div>
        
        
        <CalendarOverlay 
        calendarOverlayShown={calendarOverlayShown} setCalendarOverlayShown={setCalendarOverlayShown} 
        selectedDate={selectedDate} setSelectedDate={setSelectedDate} 
        selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} 
        selectedYear={selectedYear}  setSelectedYear={setSelectedYear} />

        
    </div>
      
    </>
  )
}