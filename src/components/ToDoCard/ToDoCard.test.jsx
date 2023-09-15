import React from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import ToDoCard from ".";

describe ('ToDoCard component', () => {
    beforeEach(() => {
        render(
            <ToDoCard/>
        )
    })

    afterEach(() => {
        cleanup()
    })

    it('displays a list', () => {
        const list = screen.getByRole('list')

        expect(list).toBeInTheDocument()
    })

    it('displays a paragraph Date:', () => {
        const para = screen.getByText('Date')

        expect(para).toBeInTheDocument()
    }) // not passing 
})
