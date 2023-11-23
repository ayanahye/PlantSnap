'use client'
import Link from "next/link";
import {notFound} from "next/navigation";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import styles from "./detail.module.css"
import PlantIcons from '../../components/plantIcons';
import PlantDesc from '../../components/plantDescandDets';
import {perenual_detail} from "@/app/globalTypes";

export type detailType = {
    common_name: string | null;
    scientific_name: string[];
    description: string | null;
    family: string | null;
    type: string | null;
    dimension: string | null;
    cycle: string | null;
    watering: string | null;
    sunlight: string[];
    id: number;
    image: string;
    drought_tolerant: boolean;
    indoor: boolean;
    flowers: boolean;
    leaf: boolean;
    edible_fruit: boolean;
    edible_leaf: boolean;
    medicinal: boolean;
    poisonous_to_humans: number;
    tropical: boolean;
};

let empDetail: detailType = {
    drought_tolerant: false,
    edible_fruit: false,
    edible_leaf: false,
    flowers: false,
    indoor: false,
    leaf: false,
    medicinal: false,
    poisonous_to_humans: 0,
    tropical: false,
    common_name: "loading...",
    cycle: "loading...",
    description: "loading...",
    dimension: "loading...",
    family: "loading...",
    id: 0,
    image: "/images/no-image.jpg",
    scientific_name: ["loading..."],
    sunlight: ["loading..."],
    type: "loading...",
    watering: "loading..."
}
export default function Page({params}: {
    params: {
        name: string
    }
}) {
    if (!params) {
        notFound();
    }
    let [plantDetail, setPlantDetail] = useState(empDetail);
    let name = decodeURIComponent(params.name);
    useEffect(() => {
        let tmp: detailType
        fetch(`/.netlify/functions/filtering?q=${name}`)
            .then(res => res.json())
            .then(data => {
                let tdata: perenual_detail = data
                if (tdata.id) {
                    tmp = {
                        common_name: tdata.common_name,
                        cycle: tdata.cycle,
                        description: tdata.description,
                        dimension: tdata.description,
                        family: tdata.description,
                        id: tdata.id,
                        image: tdata.default_image ? tdata.default_image.regular_url : "/images/no_image.jpg",
                        scientific_name: tdata.scientific_name,
                        sunlight: tdata.sunlight,
                        type: tdata.description,
                        watering: tdata.description,
                        drought_tolerant: tdata.drought_tolerant,
                        edible_fruit: tdata.edible_fruit,
                        edible_leaf: tdata.edible_leaf,
                        flowers: tdata.flowers,
                        indoor: tdata.indoor,
                        leaf: tdata.leaf,
                        medicinal: tdata.medicinal,
                        poisonous_to_humans: tdata.poisonous_to_humans,
                        tropical: tdata.tropical,
                    }
                }
            })
            .catch((error) => {
                console.error("Error:", error)
                if (localStorage.getItem(name) != null) {
                    let loc: {
                        image: string[],
                        family: string | null,
                        commons: string[]
                    } = JSON.parse(localStorage.getItem(name) as string)
                    tmp = {
                        common_name: loc.commons.join(),
                        cycle: "",
                        description: "",
                        dimension: "",
                        family: "",
                        id: 0,
                        image: loc.image[0],
                        scientific_name: [name],
                        sunlight: [],
                        type: "",
                        watering: "",
                        drought_tolerant: false,
                        edible_fruit: false,
                        edible_leaf: false,
                        flowers: false,
                        indoor: false,
                        leaf: false,
                        medicinal: false,
                        poisonous_to_humans: 0,
                        tropical: false,
                    }
                }
            })
            .finally(() => {
                if (tmp)
                    setPlantDetail(tmp)
                else notFound()
            })
    }, [name]);

    return (
        <main className="container py-5">
            <div className="row">
                <div className="col-12 col-md-5">
                    <div className="card">
                        <div className="card-img-top overflow-hidden">
                            <Image src={plantDetail.image} width={983} height={983} alt="plant" className={styles.img}/>
                        </div>
                        <div className="card-body">
                            <PlantIcons plantDetail={plantDetail}/>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-7 plantdetail">
                    <PlantDesc d={plantDetail}/>
                    <div className="row justify-content-center py-3">
                        <div className="col col-auto">
                            <Link className="btn btn-light border border-secondary"
                                  href={`/detail/${plantDetail.id}/filter`}>
                                View More&gt;&gt;&gt;
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
