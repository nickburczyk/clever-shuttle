import { Car } from "../../lib/types"
import styles from "./details.module.css"

interface Props { car: Car }

const Details = ({
    car: {
        id, brand, licensePlate,
        operationCity, status,
        createdAt, lastUpdatedAt,
        manufacturer
    }
}: Props) => (
    <div className={styles.detailsWrapper}>
        <Row label="ID" val={id.toString()} />
        <Row label="Brand" val={brand} />
        <Row label="Manufacturer" val={manufacturer} />
        <Row label="License Plate" val={licensePlate} />
        <Row label="Operation City" val={operationCity} />
        <Row label="Status" val={status?.toString() || ""} />
        <Row label="CreatedAt" val={createdAt.toString()} />
        <Row label="LastUpdatedAt" val={lastUpdatedAt.toString()} />
    </div>
)

export default Details


// DO NOT EXPORT
// Row helper for the above Details Component. 
interface RowProps {
    label: string;
    val?: string;
}

const Row = ({label, val}: RowProps) => (
    <div className={styles.row}>
        <div data-testid={`detail-label`} className={styles.rowLabel}>{label}: </div>
        {!!val && <div data-testid={`detail-value`} className={styles.rowValue}>{val}</div>}
    </div>
)