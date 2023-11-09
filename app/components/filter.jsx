
import React, {useState} from 'react';
import "../styles/Filter.css";

import Dropdown from './dropdown';

const values = 
{
    "id": 5257,
    "common_name": "Swiss cheese plant",
    "scientific_name": ["Monstera deliciosa"],
    "other_name": [],

    "cycle": "Upgrade Plans To Premium/Supreme - https://perenual.com/subscription-api-pricing. I'm sorry",
    "watering": "Upgrade Plans To Premium/Supreme - https://perenual.com/subscription-api-pricing. I'm sorry",
    "sunlight": "Upgrade Plans To Premium/Supreme - https://perenual.com/subscription-api-pricing. I'm sorry",
   
    "default_image": "https://perenual.com/storage/image/upgrade_access.jpg"
}


export default function Filter(props) {
    const dataOption1 = ["id", "common_name", "scientific_name", "other_name"]
    const dataOption2 = ["cycle", "watering", "sunlight"];
    const dataOption3 = ["default_image"];
    
    
    const [selectedOptionNames, setSelectedOptionNames] = useState({});
    
    const handleOptionChange = (id, option, isChecked) => {
        setSelectedOptionNames(prevOptionNames => {
            if (isChecked) {

                return {
                    ...prevOptionNames, 
                    [id]: option,
                };

            } else {
                const updatedOptions = { ...prevOptionNames };
                delete updatedOptions[id];
                return updatedOptions;
            }
        })
    }
    
    
    const optionsArray = Object.keys(selectedOptionNames).map(id => (
        <div key={id}>
          <p><strong>{selectedOptionNames[id]}:</strong> {values[selectedOptionNames[id]]}</p>
        </div>
      ));

    /*
    for (value in values) {
        if (key === selectedOptionNames[id]) {
            // then map the key to the value?
        }
    }
    */
    
    return (
        <main>
            <div className="filterPart">
                <div className="images">
                    <h2 className="right-align">Images here</h2>
                </div>
                    <div class="filterFullArea">
                        <div className="filterBlock">
                            <h2 className="right-align">Filters:</h2>
                            <div className="dropdowns">
                                <Dropdown data={dataOption1} name="Names" onOptionChange={handleOptionChange} id="option1"/>
                                <Dropdown data={dataOption2} name="Care Reqs" onOptionChange={handleOptionChange} id="option2"/>
                                <Dropdown data={dataOption3} name="Images" onOptionChange={handleOptionChange} id="option3"/>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="information">
                <p>{optionsArray.length > 0 ? optionsArray : <strong>Please use the filters to select the data you want.</strong>} </p>
            </div>
        </main>
    );
}