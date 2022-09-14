import { useNavigate } from 'react-router-dom'
import SearchBox from "../components/SearchBox/SearchBox"

const Home = () => {
    const nav = useNavigate()
    return(
        <>
            <h1>Welcome to Fleet Manager</h1>
            <button className={'btn primary'} onClick={()=>nav('/all')}>Lookup All Cars</button>
            <SearchBox/>
        </>
    )
}

export default Home