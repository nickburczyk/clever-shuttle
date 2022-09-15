import { useParams, useNavigate } from 'react-router-dom'
import Details from "../components/Details/Details"
import PageHeader from '../components/PageHeader/PageHeader'
import SearchBox from '../components/SearchBox/SearchBox'
import useCar from "../hooks/useCar"

const Profile = () => {
    const { id } = useParams()
    const nav = useNavigate()
    const { car, error, resolved } = useCar(id)
    console.log(car, error, resolved)

    const renderChildren = () => {
        if (!id) return <p>No ID Provided.</p>
        if (!resolved) return <p>Loading...</p>
        if (error) return <p>{error}</p>
        return <Details car={car}/>
    }

    return (
        <>
            <PageHeader title="Vehicle Details"/>
            {renderChildren()}
            <button 
                className="btn primary" 
                onClick={() => nav(-1)}
            > 
                {"< Back"}
            </button>
        </>
    )
}

export default Profile