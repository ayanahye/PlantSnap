import React from 'react';


const Pagination = ({ page, lastPage, onPageClick }) => {
    let l = page - 2, m = page + 2;
    if (l < 1) {
        m += 1 - l;
        l = 1;
    }
    if (m > lastPage) {
        l -= m - lastPage;
        m = lastPage;
    }
    l = l < 1 ? 1 : l;
    
    let pagetab = [];
    for (let i = l; i <= m; i++) {
        pagetab.push(
            <li key={i} data-testid={i} className={`page-item ${i === page && "active"}`} aria-current="page">
                <span className="page-link" onClick={() => onPageClick(i)}>{i}</span>
            </li>
        );
    }

    return (
        <nav aria-label="...">
            <ul className="pagination">
                <li className="page-item">
                    <span className="page-link" onClick={() => onPageClick(page - 1)}>Previous</span>
                </li>
                {pagetab.map(t => t)}
                <li className="page-item">
                    <span className="page-link" onClick={() => onPageClick(page + 1)}>Next</span>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;