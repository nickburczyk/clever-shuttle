export type Car = {
    id: number
    brand?: string
    licensePlate?: string
    manufacturer?: string
    operationCity?: string
    status?: CarStatus
    createdAt: Date
    lastUpdatedAt: Date
}

export enum CarStatus {
    'available',
    'in-maintenance',
    'out-of-service',
}

export type CreateCarPayload = Pick<Car, 
    "id" | "brand" | "licensePlate" | "manufacturer" | "operationCity" | "status"
>

export type StatusDisplayData = {
    className: string; 
    display: String
}