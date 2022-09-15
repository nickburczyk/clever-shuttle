import { useEffect } from "react"
import PageHeader from "../components/PageHeader/PageHeader"
import Table from "../components/Table/Table"
import useAllCars from "../hooks/useAllCars"

const AllCars = () => {
    const {cars, updateCars} = useAllCars()

    useEffect(()=>{
        updateCars()
    }, [])
    
    if (!cars) return <>Loading...</>

    return(
        <>
            <PageHeader title="All Cars"/>
            <Table cars={cars}/>
        </>
    )
}

export default AllCars