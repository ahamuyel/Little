import Link  from "next/link"
import styles from "../styles/Home.module.css"

export default function Home() {
    return (
        <div className={styles.container}>
            <h1>Bem-vindo à minha primeira página next.js!</h1>
            <p>Go ahead!..</p>
            <Link href="about">Visitar a página About.</Link>
        </div>
    )
}