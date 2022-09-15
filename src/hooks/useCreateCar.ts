import { useEffect, useState } from "react"
import { Car, CreateCarPayload } from "../lib/types"
import { createOrUpdateCar } from "../lib/util"
import { useNavigate } from 'react-router-dom'

const useCreateCar = () => {
    const nav = useNavigate()
    const [error, setError] = useState<string|null>(null)
    const [resolved, setResolved] = useState(false)

    const createCar = async( body: CreateCarPayload) => {
        setResolved(false)
        try {
            await createOrUpdateCar(body)
            nav(`/profile/${body.id}`)
        } catch (e:any) {
            setError(e.message)
        } finally {
            setResolved(true)
        }
    }

    return {createCar}
}

export default useCreateCar