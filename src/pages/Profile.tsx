import { useParams, useNavigate } from 'react-router-dom'
import Details from "../components/Details/Details"
import useCar from "../hooks/useCar"

const Profile = () => {
    const { id } = useParams()
    const nav = useNavigate()
    const { car, error, resolved } = useCar(id)

    if (!id) return <>No ID provided.</>
    if (!resolved) return <>Loading...</>
    if (error) return <>{error}</>

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