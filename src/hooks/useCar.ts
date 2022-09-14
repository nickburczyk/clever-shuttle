import { useEffect, useState } from "react"
import { Car } from "../lib/types"
import { fetchCar } from "../lib/util"

const useCar = (id:string|number) => {
    const [car, setCar] = useState<Car|null>(null)

    useEffect(()=>{
        updateCar()
    }, [])

    const updateCar = async() => {
        const asset = await fetchCar(id)
        setCar(asset)
    }

    return {car, updateCar}
}

export default useCar