import {render, screen} from "@testing-library/react";
import Users from "./Users";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import {MemoryRouter, Route, Routes} from "react-router-dom";
import UserDetailPage from "../pages/UserDetailPage";
import React from "react";
import AppRouter from "../ routers/AppRouter";
import {renderWithRouter} from "../tests/helpers/renderWithRouter";

jest.mock('axios')
describe('USERS TEST', () => {
    let response
    beforeEach(() => {
        response = {
            data: [
                {
                    "id": 2,
                    "name": "Ervin Howell",
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",
                }
            ]
        }
    })
    afterEach(() => {
        jest.clearAllMocks()
    })
    test('render learn react link', async () => {
        axios.get.mockReturnValue(response)
        render(<Users/>)
        const users = await screen.findAllByTestId('user-item')
        expect(users.length).toBe(2)
        expect(axios.get).toBeCalledTimes(1)
        // screen.debug()
    })
    test('render redirect to details page', async () => {
        axios.get.mockReturnValue(response)
        render(renderWithRouter(<Users/>))
        const users = await screen.findAllByRole('link')
        expect(users.length).toBe(2)
        // userEvent.click(users[0])
        await userEvent.click(screen.getByTestId('user-item-2'));
        expect(await screen.findByTestId('user-page')).toBeInTheDocument()
        screen.debug()
    })
})