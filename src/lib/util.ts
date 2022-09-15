import { Car, CreateCarPayload } from "./types"

export const API_ADDRESS: string = "https://nckbku0m91.execute-api.eu-central-1.amazonaws.com/cars"

export const fetchCarsList = async():Promise<Car[]> => {
    const url = API_ADDRESS 
    const res = await fetch(url, {
        method: "GET",
        mode: 'cors'
    })
    return await res.json()
}

export const fetchCar = async(id: string|number):Promise<Car> => {
    const url = API_ADDRESS + "/" + id
    const res = await fetch(url, {
        method: "GET",
        mode: 'cors'
    })

    if (res.status === 400) throw new Error("Bad Request")
    if (res.status === 404) throw new Error("Not Found. Go Fish!")

    return await res.json()
}

export const createOrUpdateCar = async(body: CreateCarPayload):Promise<Car> => {
    const url = API_ADDRESS + "/" + body.id
    const existsRes = await fetch(url)
    
    if (existsRes.status === 400 || existsRes.status === 404) {
        const res = await fetch(url, {
            method: "PUT",
            mode: 'cors',
            body: JSON.stringify(body)
        })

        if (res.status === 400) throw new Error("Bad Request")
    
        return await res.json()
    } 

    const exists = await existsRes.json()
    const { createdAt } = exists
    
    const res = await fetch(url, {
        method: "PUT",
        mode: 'cors',
        body: JSON.stringify({
            ...body,
            createdAt,
            lastUpdatedAt: new Date(),
        })
    })

    if (res.status === 400) throw new Error("Bad Request: No Status Given")

    return await res.json()

}