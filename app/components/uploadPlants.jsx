import React from 'react';
import styles from "./identify.module.css"

const UploadInput = ({ onFileChange }) => {
    return (
        <div id="input_holder" className="d-none">
            {[1, 2, 3, 4, 5].map((index) => (
                <input
                key={index}
                data-testid={`img${index}`}
                className="upImg"
                name={`upImg${index}`}
                type="file"
                accept="image/jpeg,image/png"
                id={`img${index}`}
                onChange={onFileChange}
            />
            ))}
        </div>
    );
}


export default UploadInput;

