import { render, screen } from '@testing-library/react';
import { Footer, Header } from './HeaderAndFooter'

describe('Header and Footer',() => {
    it('Displays the Header', () => {
        render(<Header/>)
        const title = screen.getByText(/CleverShuttle/);
        expect(title).toBeInTheDocument()
    })

    it('Displays the footer', () => {
        render(<Footer/>)
        const title = screen.getByText(/Nick Burczyk/);
        expect(title).toBeInTheDocument()
    }) 
}) 