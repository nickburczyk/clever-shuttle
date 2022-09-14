import { useEffect, useState } from "react"
import { Car } from "../lib/types"
import { fetchCar } from "../lib/util"

const useCar = (id:string|number|undefined) => {
    const [car, setCar] = useState<Car>({} as Car)
    const [error, setError] = useState('')
    const [resolved, setResolved] = useState(false)

    useEffect(()=>{
        updateCar()
    }, [])

    const updateCar = async() => {
        if (!id) return

        setResolved(false)
        try {
            const asset = await fetchCar(id)
            setCar(asset)
        } catch (e:any) {
            setError(e.message)
        } finally {
            setResolved(true)
        }
    }

    return {car, error, resolved, updateCar}
}

export default useCar