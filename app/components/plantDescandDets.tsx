import React from 'react';

type plantDetail = {
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
};


export default function PlantDetails(ctx: { d: plantDetail }) {
    let plantDetail = ctx.d
    return <>
        <div className="row align-items-end">
            <h3 className="col-auto">{plantDetail ? plantDetail.common_name : ""}</h3>
            <h6 className="col-auto">{plantDetail.scientific_name ? plantDetail.scientific_name[0] : ""}</h6>
        </div>
        <div className="row">
            <h5 className="col text-success">Description</h5>
        </div>
        <div className="row">
            <div className="col">
                <p className="border-success border border-2 p-1" style={{backgroundColor: "#E4FDE1"}}>
                    {plantDetail && plantDetail.description}
                </p>
            </div>
        </div>
        <div className="row">
            <h6 className="col text-success">Details</h6>
        </div>
        <div className="row">
            <div className="col">
                <div className="border-success border border-2 p-1" style={{backgroundColor: "#E4FDE1"}}>
                    <div>family: {plantDetail ? plantDetail.family : ""}</div>
                    <div>type: {plantDetail && plantDetail.type}</div>
                    <div>dimension: {plantDetail && plantDetail.dimension}</div>
                    <div>cycle: {plantDetail && plantDetail.cycle}</div>
                    <div>watering: {plantDetail && plantDetail.watering}</div>
                    <div>sunlight: {plantDetail && plantDetail.sunlight.map((s: string) => s + " ")}</div>
                </div>
            </div>
        </div>
    </>
}
