'use client'
import styles from "./search.module.css"
import React, {useEffect, useOptimistic, useState} from "react";
import ListResult, {result} from "@/app/components/listResult";
import {useSearchParams} from "next/navigation";
import {perenual_search} from "@/app/globalTypes";
import Pagination from "@/app/components/pagination";

let page = 1, lastpage = 1

export default function Page() {
    let c: result[] = []
    const params = useSearchParams()
    const [adv, setadv] = useState(false)
    const [showload, set_showload] = useOptimistic(false)
    const [showresult, set_showresult] = useState(false)
    const [resultlst, set_resultlst] = useState(c)
    const [pagination, set_pagination] = useState(<></>)
    const [pagetext, set_pagetext] = useState("")


    //after page load, check if there is a q in url
    //if yes click search button
    useEffect(() => {
        if (params.has("q")) {
            let btn = document.querySelector("#submitSearch") as HTMLButtonElement
            btn.click()
        }
    }, [params]);


    //call when page bar click
    //set page and click search button
    function pageClick(i: number) {
        if (i < 1 || i > lastpage) return
        page = i
        let btn = document.querySelector("#submitSearch") as HTMLButtonElement
        btn.click()
    }

    //call when search button click
    function postForm(form: FormData) {
        //this is the loading anim
        //useOptimistic will set value immediately and clear after page refresh (after postSearch.then
        set_showload(true)
        //hide result when loading
        set_showresult(false)
        form.append("page", page.toString())
        form.append("adv", adv.toString())
        //netlify function url
        fetch("/.netlify/functions/search", {
            body: form,
            method: 'POST',
        }).then(res => {
            res.json().then(json => {
                //change var type
                let r:perenual_search = json
                lastpage = r.last_page
                //range of the page bar
                let l = page - 2, m = page + 2
                if (l < 1) {
                    m += 1 - l
                    l = 1
                }
                if (m > lastpage) {
                    l -= m - lastpage
                    m = lastpage
                }
                l = l < 1 ? 1 : l;
                //tabs in page bar
                let pagetab: React.JSX.Element[] = []
                for (let i = l; i <= m; i++) {
                    pagetab.push(
                        <li key={i} className={`page-item ${i == page && "active"}`} aria-current="page">
                            <span className="page-link" onClick={() => pageClick(i)}>{i}</span>
                        </li>
                    )
                }
                //page bar element
                set_pagination(<nav aria-label="...">
                    <ul className="pagination">
                        <li className="page-item">
                            <span className="page-link" onClick={() => pageClick(page - 1)}>Previous</span>
                        </li>
                        {pagetab.map(t => t)}
                        <li className="page-item">
                            <span className="page-link" onClick={() => pageClick(page + 1)}>Next</span>
                        </li>
                    </ul>
                </nav>)
                //text on top
                set_pagetext(`display${r.per_page}/${r.total} page#${r.current_page}/${r.last_page}`)

                let tmp: result[] = []
                if (r.data)
                    for (let plant of r.data) {
                        //skip if it is a paid data
                        if (plant.cycle == "Upgrade Plans To Premium/Supreme - https://perenual.com/subscription-api-pricing. I'm sorry") continue
                        //make sure url is not null
                        let di = plant.default_image
                        let url = di ? di.regular_url ? di.regular_url : di.original_url : ""
                        if (!url) url = "/images/phi.jpg"
                        //for <ListResult>
                        tmp.push({
                            image: {url: url, alt: plant.common_name},
                            name: plant.common_name,
                            sciName: plant.scientific_name[0]
                        })
                    }
                set_resultlst(tmp)
                set_showresult(true)
            })
        }, () => {
            set_pagetext("error on connecting api")
        })

    }

    return <main>
        <div className={`${styles.input} ${adv && styles.adv}`}>
            <form action={postForm}>
                <div>
                    <div className={styles.simple}>
                        <div className="row justify-content-end w-100 g-1 pb-1">
                            <div className="col col-auto">
                                <div className="btn btn-light form-control" onClick={() => setadv(!adv)}>v</div>
                            </div>
                            <div className="col col-md-3 ">
                                <input className="form-control" type="search" name="q"
                                       defaultValue={params.get("q") as string} placeholder="search..."/>
                            </div>
                            <div className="col col-auto">
                                <select name="order" className="form-select">
                                    <option value="asc">↓</option>
                                    <option value="desc">↑</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className={styles.advance}>
                        <div className="row g-1 pb-1 px-1 row-cols-2 row-cols-md-4">
                            <div className="col">
                                <div className="input-group">
                                    <span className="input-group-text">Edible</span>
                                    <select name="edible" className='form-select'>
                                        <option value="">any</option>
                                        <option value="true">true</option>
                                        <option value='false'>false</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col">
                                <div className="input-group">
                                    <span className="input-group-text">Poisonous</span>
                                    <select name="poisonous" className='form-select'>
                                        <option value="">any</option>
                                        <option value="true">true</option>
                                        <option value='false'>false</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col">
                                <div className="input-group">
                                    <span className="input-group-text">Indoor</span>
                                    <select name="indoor" className='form-select'>
                                        <option value="">any</option>
                                        <option value="true">true</option>
                                        <option value='false'>false</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col">
                                <div className="input-group">
                                    <span className="input-group-text">Cycle</span>
                                    <select name="cycle" className='form-select'>
                                        <option value="">any</option>
                                        <option value="perennial">perennial</option>
                                        <option value='annual'>annual</option>
                                        <option value='biennial'>biennial</option>
                                        <option value='biannual'>biannual</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row g-1 px-1 row-cols-2 row-cols-md-3">
                            <div className="col">
                                <div className="input-group">
                                    <span className="input-group-text">Watering</span>
                                    <select name="watering" className='form-select'>
                                        <option value="">any</option>
                                        <option value="frequent">frequent</option>
                                        <option value='average'>average</option>
                                        <option value='minimum'>minimum</option>
                                        <option value='none'>none</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col">
                                <div className="input-group">
                                    <span className="input-group-text">Sunlight</span>
                                    <select name="sunlight" className='form-select'>
                                        <option value="">any</option>
                                        <option value="full_shade">full_shade</option>
                                        <option value='part_shade'>part_shade</option>
                                        <option value='sun-part_shade'>sun-part_shade</option>
                                        <option value='full_sun'>full_sun</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col col-5">
                                <div className="input-group">
                                    <span className="input-group-text">Hardiness</span>
                                    <input className="form-control" type="number" min="1" max="13" defaultValue={1}
                                           name="hdmin"/>
                                    <input className="form-control" type="number" min="1" max="13" defaultValue={13}
                                           name="hdmax"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn btn-secondary form-control" id="submitSearch" type="submit">&gt;</button>
            </form>
        </div>
        <div className={`${styles.loading} ${showload && styles.show}`}>
            <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-success" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
        <div className={`${styles.result} ${showresult && styles.show}`}>
            <div className={styles.pagetext}>{pagetext}</div>
            <ListResult data={resultlst}/>
            {pagination}
        </div>
    </main>
}