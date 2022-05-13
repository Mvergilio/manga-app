import styles from '../styles/navBar.module.css'
export const NavBar = () => {
    return (
        <div className={styles.topnav}>
            <a className="active" href="#home">
                Home
            </a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
    )
}
