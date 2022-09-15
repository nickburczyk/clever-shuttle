import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom'

interface Props {
    title: string;
}

const PageHeader = ({title}:Props) => {
    const nav = useNavigate()

    return(
        <div className={styles.heading}>
            <button className='btn secondary' onClick={()=>nav(-1)}>{" < "}</button>
            <h1>{title}</h1>
        </div>
    )
}

export default PageHeader