import styles from "./component.module.css"
import React from "react";
import {taxonomy} from "@/app/taxonomy";

export default function Taxonomy_list(ctx: {
    family: string,
}) {
    let bread: string[] = []
    let lst: React.JSX.Element[][] = []
    let tax = taxonomy[ctx.family];
    let n: string = ctx.family
    let r = tax["r"]
    bread.push(n)
    while (true) {
        let nn = tax["p"];
        tax = taxonomy[nn];
        if (tax == null) break;
        let b = tax["c"]
        let tmp: React.JSX.Element[] = []
        tmp.push(<div key="rank" className={styles.rank}>
            {r}
        </div>)
        for (let t of b) {
            tmp.push(<div key={n} className={`${t == n && styles.highlight}`}>
                {t}
            </div>)
        }
        n = nn
        r = tax["r"]
        lst.push(tmp)
        if (r != "CLADE")
            bread.push(n)

    }
    lst.push([<div key={n} className={styles.highlight}>{n}</div>])
    bread.reverse()
    return <div className={styles.atxlst}>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {bread.map((b, i) => {
                    return <li className="breadcrumb-item" key={i}>{b}</li>
                })}
            </ol>
        </nav>
        <div className='row flex-nowrap overflow-x-auto flex-row-reverse'>
            {lst.map((t, i) => <div key={i} className="col">{t.map((item) => item)}</div>)}
        </div>
    </div>
}