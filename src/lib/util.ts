import { Car } from "./types"

export const API_ADDRESS: string = "https://nckbku0m91.execute-api.eu-central-1.amazonaws.com/cars"

export const fetchCarsList = async():Promise<Car[]> => {
    const url = API_ADDRESS 
    const res = await fetch(url, {
        method: "GET",
    })
    const data = await res.json()
    return data
}