import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import CalendarPage from '.';


describe("Calendar component", () => {

    beforeEach(() => {
        render(<CalenderPage />);
    });

    it("Displays a heading", () => {

        const elem = screen.getByRole("heading");
        expect(elem).toBeInTheDocument();
        expect(elem.textContent).toBe("/Calendar/i");
    })

    


    afterEach(() => {
        cleanup();
    })

});