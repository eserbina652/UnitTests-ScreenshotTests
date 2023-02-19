import {renderWithRouter} from "../../tests/helpers/renderWithRouter";
import Navbar from "./Navbar";
import {screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('USERS TEST', () => {
    test('mainLink', async () => {
        renderWithRouter(<Navbar/>)
        const mainLink = screen.getByTestId('main-link')
       userEvent.click(mainLink)
        expect(screen.getByTestId('main-link')).toBeInTheDocument()
        })
    test('aboutLink', async () => {
        renderWithRouter(<Navbar/>)
        const aboutLink = screen.getByTestId('about-link')
        userEvent.click(aboutLink)
        expect(screen.getByTestId('about-link')).toBeInTheDocument()

    })
    test('usersLink', async () => {
        renderWithRouter(<Navbar/>)
        const usersLink = screen.getByTestId('users-link')
        userEvent.click(usersLink)
        expect(screen.getByTestId('users-link')).toBeInTheDocument()
    })
})