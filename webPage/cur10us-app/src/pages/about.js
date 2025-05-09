import Link  from "next/link"
import styles from "../styles/Home.module.css"

export default function About() {
    return (
        <div className={styles.container}>
            <h1>Cur10us</h1>
            <p>Sobre nós...</p>
            <Link href="/missao">Missao.<br></br></Link>
            <Link href="/">Voltar para Home.</Link>
        </div>
    )
}