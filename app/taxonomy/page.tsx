import {taxonomy} from "@/app/taxonomy";
import styles from "./taxonomy.module.css"

export default function Page() {
    function tax(n: string, lv: number) {
        return <div className={styles.outer}>
            <input type="checkbox" id={n} defaultChecked={lv < 3}/>
            <label htmlFor={n}>{n}</label>
            <div className={styles.inner}>{taxonomy[n]["c"].map((s: string) => tax(s, lv + 1))}</div>
        </div>
    }

    return <main>
        <div className={styles.tax}>
            {tax("Viridiplantae", 0)}
        </div>
    </main>
}