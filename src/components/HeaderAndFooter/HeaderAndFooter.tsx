import styles from './headerFooter.module.css'

const { header, footer } = styles

const Header = () => (
    <header className={header}>
        CleverShuttle
    </header>
)


const Footer = () => (
    <footer className={footer}>
        Created by Nick Burczyk
    </footer>
)

export { Header, Footer}
