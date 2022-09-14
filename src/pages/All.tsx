import Table from "../components/Table/Table"
import useAllCars from "../hooks/useAllCars"

const AllCars = () => {
    const {cars, updateCars} = useAllCars()
    
    if (!cars) return <>Loading...</>

    return(
        <>
            <h1>All Cars</h1>
            <Table cars={cars}/>
        </>
    )
}

export default AllCars