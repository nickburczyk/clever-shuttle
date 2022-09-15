import { render, screen } from '@testing-library/react';
import { create } from 'react-test-renderer'
import Details from './Details'
import { Car, CarStatus } from '../../lib/types';

const car: Car = {
    id: 11111,
    licensePlate: "D-HKY 630",
    manufacturer: "VW",
    brand: "ID Buzz",
    operationCity: "Hannover",
    status: "available",
    createdAt: new Date("2022-01-01"),
    lastUpdatedAt: new Date("2022-09-14"),
}

describe('Home Screen',() => {
    describe("Details Display", () => {
        it ('should match snapshot', () => {
            const tree = create(<Details car={car}/>
            )
            expect(tree.toJSON()).toMatchSnapshot()
        })

        it ('should render labels for all properties on car', () => {
            render(<Details car={car}/>)
            const idLabels = screen.getAllByTestId('detail-label');
            expect(idLabels.length).toEqual(8)
        })

        it ('should render labels for all properties on car', () => {
            render(<Details car={car}/>)
            const idValues = screen.getAllByTestId('detail-value');
            expect(idValues.length).toEqual(8)
        })

        it ('should render all labels, but only render values if val is present', () => {
            const emptyCar:Car={
                id: 123,
                createdAt: new Date("2022-01-01"),
                lastUpdatedAt: new Date("2022-09-14"),
            }
            render(<Details car={emptyCar}/>)
            const idLabels = screen.getAllByTestId('detail-label');
            const idValues = screen.getAllByTestId('detail-value');
            expect(idLabels.length).toEqual(8)
            expect(idValues.length).toEqual(Object.values(emptyCar).length)
        })
    })
})