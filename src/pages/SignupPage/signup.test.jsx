
import React from "react"
//using react components so we need to import react
import {describe, it, expect, beforeEach, afterEach} from 'vitest'
//Vitest provides the testing tools like jest.
import {screen, render} from '@testing-library/react'
//Screen and Render allows us to render components on a virtual document, so we can test how they would behave in a realistic situation
import * as matchers from '@testing-library/jest-dom/matchers'
import RegistrationForm from "../../components/RegistrationForm"
expect.extend(matchers)

describe("Registration component", () => {

    beforeEach(() => {
        render(<RegistrationForm />)
    })

    it("Displays a heading with appropiate text", () => {
        const elem = screen.getByRole("heading")
    
		expect(elem).toBeInTheDocument();
    expect(elem.textContent).toBe("Registration");
})

it('renders the input fields for entering the user details', () => {
    const inputs = screen.getAllByRole('textbox');
    expect(inputs.length).toBeGreaterThanOrEqual(2);
})
})
