import { Car } from '../../lib/types'
import { Row } from './TableFormatters'
const shortId = require('shortid')

interface Props {
    cars: Car[]
}

const Table = ({cars}: Props) => {
    return (
        <table style={{width: '100%'}}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Brand</th>
                    <th>Manufacturer</th>
                    <th>License Plate</th>
                    <th>City</th>
                    <th>Status</th>
                    <th>Created At</th>
                    <th>Last Updated</th>
                </tr>
            </thead>
            <tbody>
                {cars.map( car => (
                    <Row car={car} key={shortId.generate()}/>
                ))}
            </tbody>
        </table>
    )
}

export default Table
