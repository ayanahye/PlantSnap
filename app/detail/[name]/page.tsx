'use server'
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import Carousel from "@/app/components/carousel";
import React from "react";
import "./detail.css"
import defaultImg from "./no-image.jpg";
import PlantIcons from '../../components/plantIcons';
import PlantDesc from '../../components/plantDescandDets';

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
                                    <PlantIcons plantDetail={plantDetail} />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-7 plantdetail">
                            <PlantDesc plantDetail={plantDetail} />
                        </div>
                    </div>
                </main>
            );
        }
    }

    notFound();
}
