import React from 'react';
import styles from "./component.module.css";

export default function Dropdown(props) {

    const handleCheckboxChange = (event) => {
        const id = event.target.id;
        const option = event.target.name;
        const isChecked = event.target.checked;
        props.onOptionChange(id, option, isChecked);
    };


    return (
        <div className=''>
            <details>
                <summary>
                    <span className="icon">▶</span>
                    {props.name}
                </summary>
                <ul className="">
                    {props.data.map((item, index) => (
                        <li key={index}>
                            <div className={styles.dropdownItemCustom}>
                                <input
                                    type="checkbox"
                                    id={`checkbox-${props.id}-${item}`}
                                    name={item}
                                    value={item}
                                    onChange={handleCheckboxChange}
                                    data-testid={`checkbox-${props.id}-${item}`}
                                />
                                <label htmlFor={`checkbox-${props.id}-${item}`}>{item}</label>
                            </div>
                        </li>
                    ))}
                </ul>
            </details>
        </div>
    );
    
}

// checkbox-option1-1