import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import CalendarPage from '.';


describe("Calendar Page", () => {

    beforeEach(() => {
        render(
            <BrowserRouter>
                <CalendarPage />
            </BrowserRouter>
        );
    });

    afterEach(() => {
        cleanup();
    })

    it("Displays a heading for the title", async () => {

        const elem = document.getElementById('calendar-title');
        expect(elem).toBeInTheDocument();
        expect(elem.textContent).toBe('CALENDAR');
    })

    it("Calendar Overlay should be hidden at load", async () => {
        const elem = document.getElementById('calendar-overlay');
        expect(elem).toBeInTheDocument();
        expect(elem).toBeVisible(false);
    });
    
    it("View All Button Exists", async () => {
        const elem = document.getElementById('calendar-view-all-button');
        expect(elem).toBeInTheDocument();
    });

    it("Show Calendar Overlay when pressing the month title", async () => {
        const calOverlay = document.getElementById('calendar-overlay');
        const calMonthMain = document.getElementById('calendar-month-main');

        await userEvent.click(calMonthMain);
        expect(calOverlay).toBeVisible(true);
    });

    it("By default, generate day buttons based on current Date", async () => {
        let currentDate = new Date();
        let daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth()+1, 0).getDate();

        const dayButtons = document.querySelectorAll('.calendar-day-button');
        expect(dayButtons.length).toBe(daysInMonth);
    });


    it("Limit the range of the year to view atmost 10 years in the future", async () => {
        const calendarYearNextButton = document.querySelector('.calendar-year-main-next');
        const yearHeading = document.getElementById('calendar-year-main');
        let currentDate = new Date();
        let limitYear = currentDate.getFullYear() + 10;

        await userEvent.click(calendarYearNextButton);
        await userEvent.click(calendarYearNextButton);
        await userEvent.click(calendarYearNextButton);
        await userEvent.click(calendarYearNextButton);
        await userEvent.click(calendarYearNextButton);
        await userEvent.click(calendarYearNextButton);
        await userEvent.click(calendarYearNextButton);
        await userEvent.click(calendarYearNextButton);
        await userEvent.click(calendarYearNextButton);
        await userEvent.click(calendarYearNextButton);
        await userEvent.click(calendarYearNextButton);
        await userEvent.click(calendarYearNextButton);

        expect(yearHeading.textContent).toBe(String(limitYear));
    });
});