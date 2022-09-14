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

export const fetchCar = async(id: string|number):Promise<Car> => {
    const url = API_ADDRESS + "/" + id
    const res = await fetch(url, {
        method: "GET",
    })

    if (res.status === 400) throw new Error("Bad Request")
    if (res.status === 404) throw new Error("Not Found. Go Fish!")

    return await res.json()
}