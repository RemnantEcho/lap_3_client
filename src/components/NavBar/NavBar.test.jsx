import React from "react";
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import { MemoryRouter } from 'react-router-dom'

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import NavBar from ".";

describe('NavBar component', () => {
    beforeEach(() => {
        render (
            <MemoryRouter>
                <NavBar/>
            </MemoryRouter>
        )
    })

    afterEach(() => {
        cleanup()
    })

    it('displays a navbar with 3 child container', () => {
        const nav = screen.getByRole('navigation')
        
        expect(nav).toBeInTheDocument()
        expect(nav.childNodes.length).toBe(3)
    })
    
    it('should display the logo image', () => {
        const logo = screen.getByRole('img')

        expect(logo).toBeInTheDocument()
    })

    it('should navigate to the home page when the Home link is clicked', () => {
        const homeLink = screen.getByText('Home');
      
        userEvent.click(homeLink);
      
        const currentUrl = window.location.pathname;
        expect(currentUrl).toBe('/'); 
      });
})
