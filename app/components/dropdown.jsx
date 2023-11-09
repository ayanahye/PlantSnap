import React from 'react';
import "../styles/Filter.css";

export default function Dropdown(props) {

    const handleCheckboxChange = (event) => {
        const id = event.target.id;
        const option = event.target.name;
        const isChecked = event.target.checked;
        props.onOptionChange(id, option, isChecked); 
      };


    return (
        <div className="dropdown">
                <button id="full-width" className="btn btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {props.name}
                </button>
                <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="visually-hidden"></span>
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <div className="dropdown-item-custom">
                            <input 
                                type="checkbox" 
                                id={`checkbox-${props.id}-${props.data[0]}`}
                                name={props.data[0]}
                                value={props.data[0]}
                                onChange={handleCheckboxChange}
                            >
                                
                            </input>
                            <label htmlFor="option1">{props.data[0]}</label>
                        </div>
           
                    </li>
                    <li>
                        <div className="dropdown-item-custom">
                            <input 
                                type="checkbox" 
                                id={`checkbox-${props.id}-${props.data[1]}`}
                                name={props.data[1]} 
                                value={props.data[1]}
                                onChange={handleCheckboxChange}
                            >
                            </input>
                            <label htmlFor="option1">{props.data[1]}</label>
                        </div>
           
                    </li>
                    <li>
                        <div className="dropdown-item-custom">
                            <input 
                            type="checkbox" 
                            id={`checkbox-${props.id}-${props.data[2]}`}
                            name={props.data[2]}
                            value={props.data[2]}
                            onChange={handleCheckboxChange}
                            >
                            </input>
                            <label htmlFor="option1">{props.data[2]}</label>
                        </div>
                    </li>
                    <li>
                        <div className="dropdown-item-custom">
                            <input 
                            type="checkbox" 
                            id={`checkbox-${props.id}-${props.data[3]}`}
                            name={props.data[3]}
                            value={props.data[3]}
                            onChange={handleCheckboxChange}
                            >
                            </input>
                            <label htmlFor="option1">{props.data[3]}</label>
                        </div>
                    </li>
                </ul>
            </div>
    )
}