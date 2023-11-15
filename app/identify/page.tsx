'use client'
import styles from "./identify.module.css"
import React, {useOptimistic, useState} from "react";
import Image from "next/image";
import {postData} from "@/app/identify/connection";
import ListResult, {result} from "@/app/components/listResult";

type preview = {
    id: string
    image: any
    type: typeimg
}
type typeimg = { img: string, name: string }

//TODO: ico for type
//icon on top of preview image
const typeImage = {
    leaf: {img: "/images/leaf.svg", name: "leaf"},
    flower: {img: "/images/leaf.svg", name: "flower"},
    fruit: {img: "/images/leaf.svg", name: "fruit"},
    bark: {img: "/images/leaf.svg", name: "bark"},
    auto: {img: "/images/leaf.svg", name: "auto"}
}

export default function Page() {
    let a: preview[] = [], b: string[] = [], c: result[] = []
    const [pvList, setpvList] = useState(a)

    const [typeValue, set_typeValue] = useState(b)
    const [resultlst, set_resultlst] = useState(c)

    const [d_input, set_d_input] = useState(true)
    const [showinput, set_showinput] = useState(true)
    const [showinputo, set_showinputo] = useOptimistic(true)
    const [showload, set_showload] = useOptimistic(false)
    const [showresult, set_showresult] = useState(false)

    let lastInput: HTMLInputElement | null = null;

    function removeImage(id: string) {
        let tmp: preview[] = []
        for (let preview of pvList) {
            if (preview.id != id) {
                tmp.push(preview)
            }
        }
        setpvList(tmp)
        if (tmp.length < 5) set_d_input(true)
        updatetv(tmp)
    }

    function updatetv(pvl: preview[]) {
        let tv: string[] = []
        for (let i = 0; i < 5; i++) {
            for (let preview of pvl) {
                if (preview.id == "img" + i)
                    tv.push(preview.type.name)
            }
        }
        set_typeValue(tv)
    }

    //call on submit button click
    function formSubmit(form: FormData) {
        if (pvList.length == 0) return//no image selected
        set_showinput(false)
        //same as search page
        set_showload(true)
        set_showinputo(false)
        postData(form).then(data => {
            let tmp: result[] = []
            for (let r of data.results) {
                tmp.push({
                    name: r.species.commonNames.length > 0 ? r.species.commonNames.join(", ") : r.species.scientificNameWithoutAuthor,
                    image: {url: r.images[0].url.m, alt: r.species.commonNames.join(", ")},
                    score: r.score,
                    sciName: r.species.scientificNameWithoutAuthor
                })
            }
            set_resultlst(tmp)
            set_showresult(true)
        })
    }

    function onUpClick() {
        for (let element of document.querySelectorAll(".upImg")) {
            let ele: HTMLInputElement = element as HTMLInputElement
            if (!ele.files || !ele.files[0]) {
                ele.click()
                break
            }
        }
    }

    function onFileChange(input: React.ChangeEvent<HTMLInputElement>) {
        if (input.target.files) {
            let selector = document.querySelector("#showSelect");
            if (selector) {
                let tmp: HTMLButtonElement = selector as HTMLButtonElement
                tmp.click()
                lastInput = input.target
            }
        } else {
            removeImage(input.target.id)
        }
    }

    //call when click on preview image
    function pvClick(id: string) {
        let input = document.querySelector("#" + id)
        let selector = document.querySelector("#showSelect");
        if (selector && input) {
            lastInput = input as HTMLInputElement;
            let tmp: HTMLButtonElement = selector as HTMLButtonElement
            tmp.click()
        }
    }

    //call when click buttons in modal
    function setType(type: typeimg | null) {
        if (lastInput && lastInput.files) {
            //delete button
            if (type == null) {
                lastInput.value = "";
                removeImage(lastInput.id)
                return
            }
            let tmp = pvList.slice()

            //just change if not new image
            for (let preview of tmp) {
                if (preview.id == lastInput.id) {
                    preview.type = type
                    setpvList(tmp);
                    updatetv(tmp)
                    return
                }
            }

            let reader = new FileReader();
            reader.onload = e => {
                if (lastInput && lastInput.files) {
                    tmp.push({id: lastInput.id, image: e.target?.result, type: type})
                    setpvList(tmp);
                    updatetv(tmp)
                    if (tmp.length == 5) set_d_input(false)
                }
            };
            reader.readAsDataURL(lastInput.files[0]);
        }
    }

    return <main>
        <div className={`${styles.imageIn} ${(showinput && showinputo) && styles.show} p-5`}>
            <form action={formSubmit} className="row row-cols-2 row-cols-md-3 row-cols-lg-6 justify-content-end"
                  id="form">
                {pvList.map((pv, i) => {
                    return <div className="col p-3" key={i} onClick={() => pvClick(pv.id)}>
                        <div className={styles.preview}>
                            <Image src={pv.image} alt="preview image" className={styles.imgpv} width={500}
                                   height={500}/>
                            <Image src={pv.type.img} alt="preview type" className={styles.imgtype} width={500}
                                   height={500}/>
                        </div>
                    </div>
                })}
                <div className={d_input ? "col p-3" : "d-none"}>
                    <div className={styles.preview}>
                        <div className={styles.addbtn} onClick={onUpClick}>+</div>
                    </div>
                </div>
                <div className="col p-3">
                    <div className={styles.preview}>
                        <button type="submit" className="btn btn-secondary">&gt;</button>
                    </div>
                </div>
                <div id="input_holder" className="d-none">
                    <input className="upImg" name="upImg1" type="file" accept="image/jpeg,image/png" id="img1"
                           onChange={onFileChange}/>
                    <input className="upImg" name="upImg2" type="file" accept="image/jpeg,image/png" id="img2"
                           onChange={onFileChange}/>
                    <input className="upImg" name="upImg3" type="file" accept="image/jpeg,image/png" id="img3"
                           onChange={onFileChange}/>
                    <input className="upImg" name="upImg4" type="file" accept="image/jpeg,image/png" id="img4"
                           onChange={onFileChange}/>
                    <input className="upImg" name="upImg5" type="file" accept="image/jpeg,image/png" id="img5"
                           onChange={onFileChange}/>
                    <input type="text" name="organs" value={typeValue} readOnly={true}/>
                </div>
            </form>
            <div className="btn btn-secondary" onClick={() => set_showinput(!showinput)}>v
            </div>
        </div>
        <button type="button" className="d-none" data-bs-toggle="modal" data-bs-target="#select_type" id="showSelect"/>
        <div className="modal" data-bs-backdrop="static" id="select_type">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Part?</h5>
                    </div>
                    <div className="modal-body">
                        <div className="row row-cols-1 row-cols-sm-6 justify-content-center">
                            <div className="col p-1 col-sm-auto">
                                <button type="button" className="w-100 btn btn-primary"
                                        onClick={() => setType(typeImage.leaf)} data-bs-dismiss="modal">leaf
                                </button>
                            </div>
                            <div className="col p-1 col-sm-auto">
                                <button type="button" className="w-100 btn btn-primary"
                                        onClick={() => setType(typeImage.flower)} data-bs-dismiss="modal">flower
                                </button>
                            </div>
                            <div className="col p-1 col-sm-auto">
                                <button type="button" className="w-100 btn btn-primary"
                                        onClick={() => setType(typeImage.fruit)} data-bs-dismiss="modal">fruit
                                </button>
                            </div>
                            <div className="col p-1 col-sm-auto">
                                <button type="button" className="w-100 btn btn-primary"
                                        onClick={() => setType(typeImage.bark)} data-bs-dismiss="modal">bark
                                </button>
                            </div>
                            <div className="col p-1 col-sm-auto">
                                <button type="button" className="w-100 btn btn-primary"
                                        onClick={() => setType(typeImage.auto)} data-bs-dismiss="modal">auto
                                </button>
                            </div>
                            <div className="col p-1 col-sm-auto">
                                <button type="button" className="w-100 btn btn-secondary"
                                        onClick={() => setType(null)} data-bs-dismiss="modal">Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${styles.load} ${showload && styles.show}`}>
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
            <ListResult data={resultlst}/>
        </div>
    </main>
}