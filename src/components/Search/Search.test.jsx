import React from "react";
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import Search from '.';

describe ('Search component', () => {
    beforeEach(() => {
        render (
            <Search />
        )
    })

    afterEach(() => {
        cleanup()
    })

    it('displays a search input', () => {
        const search = screen.getByRole('textbox')

        expect(search).toBeInTheDocument()
    })

    it('displays a submit button', () => {
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })
})
