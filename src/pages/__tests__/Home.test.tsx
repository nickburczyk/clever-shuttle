import { Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import Home from '../Home'

describe('Home Screen',() => {
    const history = createMemoryHistory({ initialEntries: ['/'] });
    render(
        <Router navigator={history} location={history.location}>
            <Home/>
        </Router>
    )

    const buttons = screen.getAllByRole("button")
    
    describe("Elements on the page", () => {
        const all = buttons[0].innerHTML
        it('should have a button to list all cars', () => {
            expect(all).toBe("Lookup All Cars")
        })
        
        it('should have a button to create a new car', () => {
            const create = buttons[1].innerHTML
            expect(create).toBe("Create/Update Existing")
        }) 
        
        it('should have a button to lookup a car', () => {
            const go = buttons[2].innerHTML
            expect(go).toBe("GO")
        }) 
    })



    // describe("Home Navigation Routes", () => {
    //     it("should go to /all when 'Lookup all' is clicked",  async ()=>{
    //         const all = document.getElementById('btn-nav-all')

    //          using screen.getBy... errors and does not find components.
    //         // const allBtn = screen.getByTestId('btn-nav-all')

    //         console.log(all)
    //             expect(buttons[0]).toHaveTextContent("Lookup All Cars")

    //         expect(allBtn).toBeInTheDocument()
    //         expect(allBtn).toHaveTextContent("Lookup All Cars")

    
    //         THIS SECTION ALLOWS CLICK EVENT  BUT DOES NOT NAVIGATE.
    //         expect(history.location.pathname).toBe("/")
    //         await fireEvent.click(buttons[0]) // clicking "lookup all cars"
    //         console.log(history.location)
    //         expect(history.location.pathname).toContain("all")
    //         test
    //     })

    //     it("should go to /create when 'Create/Update' is clicked",  ()=>{
    //         // test
    //     })

    //     it("should go to /profile when search is clicked",  ()=>{
    //         // test
    //     })
    // })
}) 