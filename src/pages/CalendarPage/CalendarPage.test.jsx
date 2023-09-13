import React from 'react';
import BrowserRouter from 'react-router-dom';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import CalendarPage from '.';


describe("Calendar component", () => {

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

    it("Displays a heading", async () => {
        // const linkElement = await screen.findByText(/Kaliteye hoşgeldiniz/i);
        // const elem = screen.getByRole("heading");
        const elem = document.getElementById('calendar-title');
        expect(elem).toBeInTheDocument();
        expect(elem.textContent).toBe(/Calendar/i);
    })
    

});