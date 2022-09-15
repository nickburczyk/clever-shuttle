import { Car, CarStatus, StatusDisplayData } from '../../lib/types'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import styles from './table.module.css'


export const Row = ({ car }: {car: Car}) => {
    const { 
        id, brand, licensePlate, 
        operationCity, status, 
        createdAt, lastUpdatedAt,
        manufacturer
    } = car

    // debug later. "invalid time format" error
    const formatDate = (date: Date) => {
        return Intl.DateTimeFormat('en-DE').format(date)
    }

    return (
        <tr>
            <td>{id && <IdLink id={id}/>}</td>
            <td>{brand && brand}</td>
            <td>{manufacturer && manufacturer}</td>
            <td>{licensePlate && licensePlate}</td>
            <td>{operationCity && operationCity}</td>
            <td>{status && <Status status={status}/>}</td>
            <td>{createdAt && createdAt.toString()}</td>
            <td>{lastUpdatedAt && lastUpdatedAt.toString()}</td>
        </tr>
    )
}


export const IdLink = ({id}: {id: number}) => (
    <Link to={`/profile/${id}`}>{id}</Link>
)


export const Status = ({status}: {status: CarStatus}) => {
    const displayData: {[key in CarStatus]:StatusDisplayData} = {
        "available": { className: 'success', display: "Available" },
        "in-maintenance": { className: 'warning', display: "In Maintenance" },
        "out-of-service":{ className: 'danger', display: "Out Of Service" }
    }
    
    const { className, display } = displayData[status]
    
    return (
        <div className={styles.statusWrapper}>
            <div className={cn(styles.indicator, styles[className])}/>
            <span>{display}</span>
        </div>
    )
}

