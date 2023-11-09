
import React, {useState} from 'react';
import "../styles/Filter.css";

import Dropdown from './dropdown';

const values = 
{

}


export default function Filter(props) {

    const dataNames = [
        'id',
        'common_name',
        'scientific_name',
        'other_name',
        'family'
    ];

    const dataSizes = [
        'origin',
        'type',
        'dimension',
        'dimensions'
    ];

    const dataCareReqs = [ 'cycle',
        'attracts',
        'propagation',
        'hardiness',
        'hardiness_location',
        'watering',
        'depth_water_requirement',
        'volume_water_requirement',
        'watering_period',
        'watering_general_benchmark',
        'sunlight',
        'care-guides',
        'soil',
        'indoor'
    ];

    const dataGeneral = [
        'pruning_month',
        'pruning_count',
        'seeds',
        'maintenance',
        'growth_rate',
        'drought_tolerant',
        'salt_tolerant',
        'thorny',
        'invasive',
        'tropical',
        'pest_susceptibility'
    ]

    const dataEdible = [
        'flowers',
        'flowering_season',
        'flower_color',
        'cones',
        'fruits',
        'edible_fruit',
        'edible_fruit_taste_profile',
        'fruit_nutritional_value',
        'fruit_color',
        'harvest_season',
        'leaf',
        'leaf_color',
        'edible_leaf',
        'cuisine'
    ]

    const dataPoisonous = [
        'medicinal',
        'poisonous_to_humans',
        'poisonous_to_pets'
    ]
    
    
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
    
    const optionValues = Object.values(selectedOptionNames);

    const optionsArray = optionValues.map(valueOption => (
        
        <div key={valueOption}>

          <p><strong>{valueOption}:</strong> {props.speciesList.valueOption}</p>
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
                    <div className="filterFullArea">
                        <div className="filterBlock">
                            <h2 className="right-align">Filters:</h2>
                            <div className="dropdowns">
                                <Dropdown data={dataNames} name="Names" onOptionChange={handleOptionChange} id="option1"/>
                                <Dropdown data={dataSizes} name="Care Reqs" onOptionChange={handleOptionChange} id="option2"/>
                                <Dropdown data={dataGeneral} name="General" onOptionChange={handleOptionChange} id="option3"/>
                                <Dropdown data={dataEdible} name="Edible" onOptionChange={handleOptionChange} id="option3"/>
                                <Dropdown data={dataPoisonous} name="Poisonous" onOptionChange={handleOptionChange} id="option3"/>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="information">
                <p>
                {optionValues.length > 0 ? (
                    optionValues.map((value, index) => (
                    <ul key={index}>
                        <p>
                        <strong>{value}:</strong> {props.speciesList[value]}
                        </p>
                    </ul>
                    ))
                ) : (
                    <strong>Please use the filters to select the data you want.</strong>
                )}{" "}
                </p>
            </div>

        </main>
    );
}