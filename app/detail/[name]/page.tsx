'use server'
import Link from "next/link";
import {notFound} from "next/navigation";
import {perenual_detail, perenual_search, trefle_detail, trefle_search} from "@/app/globalTypes";
import Image from "next/image";
import Carousel from "@/app/components/carousel";
import React from "react";
import "./detail.css"

export default async function Page({params}: {
    params: {
        name: string
    }
}) {
    let name = decodeURIComponent(params.name);
    let P_KEY = process.env.PERENUAL_KEY
    let T_KEY = process.env.TREFLE_KEY
    let res = await fetch(`https://perenual.com/api/species-list?key=${P_KEY}&q=${name}`)
    if (!res.ok) {
        notFound()
    }
    let p_list: perenual_search = await res.json()
    let id = p_list.data[0].id
    res = await fetch(`https://perenual.com/api/species/details/${id}?key=${P_KEY}`)
    if (!res.ok) {
        notFound()
    }
    let p_detail:perenual_detail = await res.json()

    res = await fetch(`http://trefle.io/api/v1/plants/search?token=${T_KEY}&q=${name}`)
    if (!res.ok) {
        notFound()
    }
    let t_list: trefle_search = await res.json()
    id = t_list.data[0].id
    res = await fetch(`http://trefle.io/api/v1/plants/${id}?token=${T_KEY}`)
    if (!res.ok) {
        notFound()
    }
    let t_detail: trefle_detail = await res.json()

    let carouselImg: React.JSX.Element[] = []
    carouselImg.push(
        <Image src={p_detail.default_image.regular_url} width={983} height={983} alt="plant"/>
    )
    for (let trefleImg of t_detail.data.main_species.images.leaf) {
        carouselImg.push(<Image src={trefleImg.image_url} width={983} height={983} alt="plant"/>)
    }
    for (let trefleImg of t_detail.data.main_species.images.flower) {
        carouselImg.push(<Image src={trefleImg.image_url} width={983} height={983} alt="plant"/>)
    }
    for (let trefleImg of t_detail.data.main_species.images.fruit) {
        carouselImg.push(<Image src={trefleImg.image_url} width={983} height={983} alt="plant"/>)
    }
    for (let trefleImg of t_detail.data.main_species.images.bark) {
        carouselImg.push(<Image src={trefleImg.image_url} width={983} height={983} alt="plant"/>)
    }
    for (let trefleImg of t_detail.data.main_species.images.habit) {
        carouselImg.push(<Image src={trefleImg.image_url} width={983} height={983} alt="plant"/>)
    }
    for (let trefleImg of t_detail.data.main_species.images.other) {
        carouselImg.push(<Image src={trefleImg.image_url} width={983} height={983} alt="plant"/>)
    }


    return <main className="container py-5">
        <div className="row">
            <div className="col-12 col-md-5 ">
                <div className="card">
                    <div className="card-img-top overflow-hidden">
                        <Carousel id="plantimgs" elements={carouselImg}/>
                    </div>
                    <div className="card-body">
                        <div className="card-text plantIco">
                            {p_detail.drought_tolerant &&
                                <Image src="/images/desert.svg" alt="drought_tolerant" width={55} height={55}/>}
                            {p_detail.indoor &&
                                <Image src="/images/indoor.svg" alt="drought_tolerant" width={50} height={50}/>}
                            {p_detail.flowers &&
                                <Image src="/images/flower.svg" alt="drought_tolerant" width={50} height={50}/>}
                            {p_detail.leaf &&
                                <Image src="/images/leaf.svg" alt="drought_tolerant" width={50} height={50}/>}
                            {(p_detail.edible_fruit || p_detail.edible_leaf) &&
                                <Image src="/images/apple.svg" alt="drought_tolerant" width={50} height={50}/>}
                            {p_detail.medicinal &&
                                <Image src="/images/medicinal.svg" alt="drought_tolerant" width={50} height={50}/>}
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-7 plantdetail">
                <div className="row align-items-end">
                    <h3 className="col-auto">{p_detail.common_name}</h3>
                    <h6 className="col-auto">{p_detail.scientific_name[0]}</h6>
                </div>
                <div className="row">
                    <h5 className="col text-success">Description</h5>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="border-success border border-2 p-1"
                           style={{backgroundColor: "#E4FDE1"}}>{p_detail.description}</p>
                    </div>
                </div>
                <div className="row">
                    <h6 className="col text-success">Topics</h6>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="border-success border border-2 p-1"
                             style={{backgroundColor: "#E4FDE1"}}>
                            <div>family: {p_detail.family}</div>
                            <div>genus: {t_detail.data.genus.name}</div>
                            <div>type: {p_detail.type}</div>
                            <div>dimension: {p_detail.dimension}</div>
                            <div>cycle: {p_detail.cycle}</div>
                            <div>watering: {p_detail.watering}</div>
                            <div>sunlight: {p_detail.sunlight.map(s => s + " ")}</div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center py-3">
                    <div className="col col-auto">
                        <Link className="btn btn-light border border-secondary" href={`/detail/${name}/filter`}>View
                            More&gt;&gt;&gt;</Link>
                    </div>
                </div>
            </div>
        </div>
    </main>
}