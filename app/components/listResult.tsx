import Image from "next/image";
import React from "react";
import styles from "./component.module.css"

export type result = {
    image?: { url: string, alt: string }
    name: string
    score: number
}
export default function ListResult(ctx: { data: result[] }) {
    return <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3">
        {ctx.data.map((result, index) => (
            <div className="col mb-4" key={index}>
                <div className="card h-100 card-hover">
                    <div>
                        {result.image && (
                            <div>
                                <Image
                                    src={result.image.url}
                                    width={500}
                                    height={200}
                                    className={`${styles.img} card-img-top`}
                                    alt={result.image.alt}
                                />
                            </div>
                        )}
                    </div>
                    <div className="card-body">
                        <h5>{result.name}</h5>
                        <p>Confidence: {result.score}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>

}