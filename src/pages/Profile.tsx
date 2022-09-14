import { useParams, useNavigate } from 'react-router-dom'
import Details from "../components/Details/Details"
import useCar from "../hooks/useCar"

const Profile = () => {
    const { id } = useParams()
    const nav = useNavigate()
    const { car } = useCar(id || "")

    if (!id) return <>Please provide an ID</>

    if (!car) return <>Loading...</>

    return (
        <>
            <h1>Car Details</h1>
            <Details car={car}/>
            <button 
                className="btn primary" 
                onClick={() => nav("/")}
            > 
                {"< Back Home"}
            </button>
        </>
    )
}

export default Profile