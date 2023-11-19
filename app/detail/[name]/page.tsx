'use server'
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import Carousel from "@/app/components/carousel";
import React from "react";
import "./detail.css"
import defaultImg from "./no-image.jpg"

export default async function Page({ params }: {
    params: {
        name: string
    }
}) {
    if (!params) {
        notFound();
        return null; 
    }

    let name = decodeURIComponent(params.name);
    let P_KEY = process.env.PERENUAL_KEY;

    let carouselImg: React.JSX.Element[] = [];
    let response = await fetch(`https://perenual.com/api/species-list?key=${P_KEY}&q=${name}`);
    if (!response.ok) {
        notFound();
    }

    const speciesList = await response.json();
    if (speciesList.data.length > 0) {
        const plantId = speciesList.data[0].id;
        response = await fetch(`https://perenual.com/api/species/details/${plantId}?key=${P_KEY}`);
        if (!response.ok) {
            notFound();
        }

        let plantDetail = await response.json();
        if (plantDetail != null) {
            const imageSrc = plantDetail.default_image ? plantDetail.default_image.regular_url : defaultImg;
            carouselImg.push(
                <Image src={imageSrc} width={983} height={983} alt="plant" />
            );

            return (
                <main className="container py-5">
                    <div className="row">
                        <div className="col-12 col-md-5">
                            <div className="card">
                                <div className="card-img-top overflow-hidden">
                                    <Carousel id="plantimgs" elements={carouselImg} />
                                </div>
                                <div className="card-body">
                                    <div className="card-text plantIco">
                                        {plantDetail.drought_tolerant && (
                                            <Image src="/images/desert.svg" alt="drought_tolerant" width={55} height={55} />
                                        )}
                                        {plantDetail.indoor && (
                                            <Image src="/images/indoor.svg" alt="drought_tolerant" width={50} height={50} />
                                        )}
                                        {plantDetail.flowers && (
                                            <Image src="/images/flower.svg" alt="drought_tolerant" width={50} height={50} />
                                        )}
                                        {plantDetail.leaf && (
                                            <Image src="/images/leaf.svg" alt="drought_tolerant" width={50} height={50} />
                                        )}
                                        {plantDetail.edible_fruit || plantDetail.edible_leaf ? (
                                            <Image src="/images/apple.svg" alt="drought_tolerant" width={50} height={50} />
                                        ) : null}
                                        {plantDetail.medicinal && (
                                            <Image src="/images/medicinal.svg" alt="drought_tolerant" width={50} height={50} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-7 plantdetail">
                            <div className="row align-items-end">
                                <h3 className="col-auto">{plantDetail ? plantDetail.common_name : ""}</h3>
                                <h6 className="col-auto">{plantDetail ? plantDetail.scientific_name[0] : ""}</h6>
                            </div>
                            <div className="row">
                                <h5 className="col text-success">Description</h5>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p className="border-success border border-2 p-1"
                                        style={{ backgroundColor: "#E4FDE1" }}>{plantDetail && plantDetail.description}</p>
                                </div>
                            </div>
                            <div className="row">
                                <h6 className="col text-success">Details</h6>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="border-success border border-2 p-1"
                                        style={{ backgroundColor: "#E4FDE1" }}>
                                        <div>family: {plantDetail ? plantDetail.family : ""}</div>
                                        <div>type: {plantDetail && plantDetail.type}</div>
                                        <div>dimension: {plantDetail && plantDetail.dimension}</div>
                                        <div>cycle: {plantDetail && plantDetail.cycle}</div>
                                        <div>watering: {plantDetail && plantDetail.watering}</div>
                                        <div>sunlight: {plantDetail && plantDetail.sunlight.map((s: string) => s + " ")}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center py-3">
                                <div className="col col-auto">
                                    <Link className="btn btn-light border border-secondary" href={`/detail/${plantDetail.id}/filter`}>View
                                        More&gt;&gt;&gt;</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            );
        }
    }

    notFound();
}
