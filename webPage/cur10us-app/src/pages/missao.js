import Link  from "next/link"
import styles from "../styles/Home.module.css"

export default function Missao() {
    return (
        <div className={styles.container}>
            <h1>Missao</h1>
            <p>Texto sobre a missao da curious...</p>
            <Link href="/">Voltar para Home.</Link>
        </div>
    )
}