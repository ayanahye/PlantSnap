'use client'
import React, {useState} from 'react';
import "./Filter.css";

import Dropdown from '../components/dropdown';


export default function Filter(props) {
    //console.log(props.speciesList);
    const [selectedOptionNames, setSelectedOptionNames] = useState({});

    if (!props.speciesList) {
        return (
            <main className="main-filter">
                <h3 style={{paddingBottom: '15px'}}>Current plant = No name yet</h3>
            </main>
        );
    }



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
        'dimensions',
        'seeds'
    ];

    const dataCareReqs = [ 
        'cycle',
        'watering',
        'watering_period',
        'sunlight',
        'care-guides',
        'depth_water_requirement',
        'volume_water_requirement',
        'watering_general_benchmark',
        'volume_water_requirement',
        'indoor'
    ];

    const dataMaintenance = [
        'propagation',
        'hardiness',
        'hardiness_location',
        'soil',
        'pruning_month',
        'pruning_count',
        'seeds',
        'maintenance',
        'growth_rate',
        'drought_tolerant',
        'salt_tolerant',
        'invasive',
        'tropical',
        'harvest_season'
    ]

    const dataEdible = [
        'fruits',
        'edible_fruit',
        'edible_fruit_taste_profile',
        'fruit_nutritional_value',
        'fruit_color',
    ]

    const dataFlowerandLeafInfo = [
        'flowers',
        'flowering_season',
        'flower_color',
        'cones',
        'thorny',
        'leaf',
        'leaf_color',
        'edible_leaf',
        'cuisine'
    ]

    const dataPoisonous = [
        'medicinal',
        'poisonous_to_humans',
        'poisonous_to_pets',
        'thorny',
        'pest_susceptibility'
    ]
    
    
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

          <p className="p-border"><strong>{valueOption}:</strong> {props.speciesList.valueOption}</p>
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
        <main className="main-filter">
            <h3 style={{paddingBottom: '15px'}}>Current plant = {props.speciesList.common_name || "No name yet"}</h3>
            <div className="filterPart">
                <div className="images">
                    <h2 className="right-align">Images here</h2>
                    
                
                    {/* <div class = "slideshow-container">

                        <div class = "mySlides fade">
                            <div class = "numbertext">1 / 3</div>
                            <img src = "Blacktriangle.png" style = "width = 100%"></img>
                            <div class = "test">Caption text</div>
    
                        </div>

                        <a class="prev" onclick="plusSlides(-1)">❮</a>
                        <a class="next" onclick="plusSlides(1)">❯</a>
                    </div> */}

            
                </div>

                
                    <div className="filterFullArea">
                        <div className="filterBlock">
                            <h2 className="right-align">Filters:</h2>
                            <div className="dropdowns">

                            <div class = "navigationfilterbox"> 

                            {/* filter options */}
                            <details>
                            <summary>
                            <span class="icon">▶</span>
                            data={dataNames} name="Names"                           
                            </summary>
                            <p>option1</p>
                            </details>

                            <details>
                            <summary>
                            <span class="icon">▶</span>
                            data={dataNames} name="Sizes
                            </summary>
                            <p>option2</p>
                            </details>

                            <details>
                            <summary>
                            <span class="icon">▶</span>
                            data={dataNames} name="Edible"
                            </summary>
                            <p>option3</p>
                            </details>

                            <details>
                            <summary>
                            <span class="icon">▶</span>
                            data={dataNames} name="Maintenance"
                            </summary>
                            <p>option4</p>
                            </details>

                            <details>
                            <summary>
                            <span class="icon">▶</span>
                            data={dataNames} name="Care Reqs"
                            </summary>
                            <p>option5</p>
                            </details>


                            <details>
                            <summary>
                            <span class="icon">▶</span>
                            Poisonous
                            </summary>

                            <label className="container">One
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                            </label>

                            <label class="container">Two
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                            </label>
                            </details>

                        </div>

                                {/*<<Dropdown data={dataNames} name="Names" onOptionChange={handleOptionChange} id="option1"/>
                                <Dropdown data={dataSizes} name="Sizes" onOptionChange={handleOptionChange} id="option2"/>
                                <Dropdown data={dataEdible} name="Edible" onOptionChange={handleOptionChange} id="option3"/>
                                <Dropdown data={dataMaintenance} name="Maintenance" onOptionChange={handleOptionChange} id="option4"/>
                                <Dropdown data={dataCareReqs} name="Care Reqs" onOptionChange={handleOptionChange} id="option5"/>
    // <Dropdown data={dataPoisonous} name="Poisonous" onOptionChange={handleOptionChange} id="option6"/> */}
    



                            </div>
                        </div>
                    </div>
            </div>
            
            <div className="information">
                <div class = "scroll-object1">


                {optionValues.length > 0 ? (
                    optionValues.map((valueOption, index) => (
                        <div key={index}>
                           
                                <strong>{valueOption}:</strong>{" "}
                                {props.speciesList[valueOption] !== undefined && props.speciesList[valueOption] !== null ? (
                                    typeof props.speciesList[valueOption] === "object"
                                        ? Object.values(props.speciesList[valueOption]).join(", ")
                                        : props.speciesList[valueOption]
                                ) : (
                                    "No data yet"
                                )}
                               
                           
                        </div>
            
                    ))
                ) : (
                    <strong>Please use the filters to select the data you want.</strong>
                )}
            </div>
            </div>

        </main>
        
    );
   
}

