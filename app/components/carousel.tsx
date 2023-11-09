import React from "react";

export default function Carousel(ctx: {
    id: string,
    elements: React.JSX.Element[]
}) {
    let i = 0
    let buttons: React.JSX.Element[] = []
    let items: React.JSX.Element[] = []
    for (let ele of ctx.elements) {
        buttons.push(
            <button key={i} type="button" data-bs-target={`#${ctx.id}`} data-bs-slide-to={i}
                    className={i == 0 ? "active" : ""}
                    aria-current="true" aria-label={`Slide ${ctx.id}`}></button>
        )
        items.push(
            <div key={i} className={"carousel-item" + (i == 0 ? " active" : "")}>
                {ele}
            </div>
        )
        i++;
    }
    return <div id={ctx.id} className="carousel slide">
        <div className="carousel-indicators">
            {buttons.map(e => e)}
        </div>
        <div className="carousel-inner">
            {items.map(e => e)}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target={`#${ctx.id}`}
                data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={`#${ctx.id}`}
                data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
}