import { useEffect, useState } from "react"
import { Car } from "../lib/types"
import { fetchCarsList } from "../lib/util"


const useAllCars = () => {
    const [cars, setCars] = useState<Car[]>([])

    useEffect(()=>{
        updateCars()
    }, [])

    const updateCars = async() => {
        const result = await fetchCarsList()
        setCars(result)
    }

    return {
        cars, updateCars
    }
}

export default useAllCars