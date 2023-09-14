import React from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import axios from "axios";

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

    // it('displays tasks when the api is called', async() => {
    //     vi.spyOn(axios, 'get').mockResolvedValueOnce({
    //         data: [
    //             {
    //                 "goal": "finish painting",
    //                 "date": "2023-09-12",
    //                 "category": "homework",
    //                 "status": 1,
    //                 "progressValue": "Incomplete"
    //             }
    //         ]
    //     })

    //     render(<Search/>)

    //     const task = await waitFor(() => screen.getByText(/finish painting/i));

    //     expect(task).toBeInTheDocument()
    // })
})

