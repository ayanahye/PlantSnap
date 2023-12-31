import Image from "next/image";
import React from "react";
import styles from "./component.module.css"
import Link from "next/link";
import NotFound from "../not-found";

export type result = {
    image?: { url: string, alt: string }
    name: string
    score?: number
    anchor: string|number
}
export default function ListResult(ctx: { data: result[] }) {
    return (
        <div>
          {ctx.data.length === 0 ? (
            NotFound()
          ) : (
            <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3">
              {ctx.data.map((result, index) => (
                <Link
                  data-testid="example-plant"
                  href={`/detail/${result.anchor}`}
                  className="col mb-4"
                  key={index}
                  target="_blank"
                >
                  <div className="card h-100 card-hover">
                    <div>
                      {result.image && (
                        <div className={styles.container}>
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
                      {result.score && <p>Confidence: {result.score}</p>}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }