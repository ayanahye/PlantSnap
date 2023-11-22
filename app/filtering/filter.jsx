'use client'
import React, {useState} from 'react';
import "./Filter.css";

import Dropdown from '../components/dropdown';
import Image from 'next/image';


export default function Filter(props) {
    //console.log(props.speciesList);
    const [selectedOptionNames, setSelectedOptionNames] = useState({});

    if (!props.speciesList) {
        return (
            <main className="main-filter">
                {/* <h3 style={{paddingBottom: '15px'}}>Current plant = No name yet</h3> */}
            </main>
        );
    }


    const careGuides = [
        'Care Guide',
    ];

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

    console.log(selectedOptionNames);

    const optionValues = Object.values(selectedOptionNames);

    /*
    const optionsArray = optionValues.map(valueOption => (
        
        <div key={valueOption}>

          <p className="p-border"><strong>{valueOption}:</strong> {props.speciesList.valueOption}</p>
        </div>
      ));

    */


    
    // for (value in values) {
    //     if (key === selectedOptionNames[id]) {
    //         // then map the key to the value?
    //     }
    // }
    

    
    
    return (
        <main className="main-filter">
            {/* <h3 style={{paddingBottom: '15px'}}>Current plant = {props.speciesList.common_name || "No name yet"}</h3> */}

                <div class = "container">
                <div className="photo">
                        <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="true">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <Image src={props.speciesList.default_image.regular_url} class="d-block w-1000 l-1000" height={400} width={600} style={{ border: '5px solid #000' , borderRadius: '15px' }}/>
 
                                </div>
                                <div class="carousel-item">
                                <Image src={props.speciesList.default_image.regular_url} class="d-block w-1000 l-1000" height={400} width={600} style={{ border: '5px solid #000' , borderRadius: '15px' }}/>
                                </div>
                                <div class="carousel-item">
                                <Image src={props.speciesList.default_image.regular_url} class="d-block w-1000 l-1000" height={400} width={600} style={{ border: '5px solid #000' , borderRadius: '15px' }}/>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                            </div>
                </div>
                

                

                <div className="filterPart">
                        <div className="filterBlock">
                            <h2 className="right-align">Filters:</h2>
                            <div className="dropdowns">
                                <div class = "navigationfilterbox"> 
                                <Dropdown data={careGuides} name="Care Guides" onOptionChange={handleOptionChange} id="option0"/>
                                <Dropdown data={dataNames} name="Names" onOptionChange={handleOptionChange} id="option1"/>
                                <Dropdown data={dataSizes} name="Sizes" onOptionChange={handleOptionChange} id="option2"/>
                                <Dropdown data={dataEdible} name="Edible" onOptionChange={handleOptionChange} id="option3"/>
                                <Dropdown data={dataMaintenance} name="Maintenance" onOptionChange={handleOptionChange} id="option4"/>
                                <Dropdown data={dataPoisonous} name="Poisonous" onOptionChange={handleOptionChange} id="option6"/> 
    
                                </div>
                        </div>
                    </div>
                </div>
                </div>
                
            
                <div className="information">
                    <div data-testid="scroll-object1" className="scroll-object1">
                        {optionValues.length > 0 ? (
                        <>
                            {optionValues.includes("Care Guide") && (
                            <div data-testid="care-guides-section"> {/*removed green box */}
                                <strong style={{ display: 'block' }}>Care Guides</strong>
                                {props.speciesList["common_name"] && (
                                <span>The {props.speciesList["common_name"]} requires </span>
                                )}

                                <strong style={{ display: 'block' }}>Watering</strong>
                                {props.speciesList["watering"] && (
                                <span>{props.speciesList["watering"].charAt(0).toLowerCase() + props.speciesList["watering"].slice(1)} watering. </span>
                                )}

                                <strong style={{ display: 'block' }}>Sunlight</strong>
                                {props.speciesList["sunlight"] && (
                                <span>The amount of sun the plant needs is {props.speciesList["sunlight"]}. </span>
                                )}

                                <strong style={{ display: 'block' }}>Pruning Month</strong>
                                {props.speciesList["pruning_month"] && (
                                <span>The best month to prune the plant is {props.speciesList["pruning_month"]} and </span>
                                )}

                                <strong style={{ display: 'block' }}>Maintenance</strong> 
                                {props.speciesList["maintenance"] && (
                                <span>the overall maintenance to care for this plant is {props.speciesList["maintenance"]}. </span>
                                )}

                                <strong style={{ display: 'block' }}>Drought Tolerance</strong> 
                                {props.speciesList["drought_tolerant"] !== null && (
                                <span>the plant {props.speciesList["drought_tolerant"] ? "is drought tolerant" : "is not drought tolerant"}. </span>
                                )}
                                
                                <strong style={{ display: 'block' }}>Salt Tolerance</strong> 
                                {props.speciesList["salt_tolerant"] !== null && (
                                <span>Additionally, the plant {props.speciesList["salt_tolerant"] ? "is salt tolerant" : "is not salt tolerant"}. </span>
                                )}

                                <strong style={{ display: 'block' }}>Fruits</strong> 
                                {props.speciesList["fruits"] !== null && (
                                <span>Furthermore, the plant {props.speciesList["fruits"] ? "grows fruits" : "does not grow fruits"}. </span>
                                )}

                                <strong style={{ display: 'block' }}>Indoor</strong> 
                                {props.speciesList["indoor"] !== null && (
                                <span>The plant {props.speciesList["indoor"] ? "is an indoor plant" : "is not an indoor plant"}. </span>
                                )}

                                <strong style={{ display: 'block' }}>Care Level</strong> 
                                {props.speciesList["care_level"] !== null && (
                                <span>The overall care level of the plant is said to be {props.speciesList["care_level"].charAt(0).toLowerCase() + props.speciesList["care_level"].slice(1)}. </span>
                                )}
                            </div>
                            )}
                            {optionValues.map((valueOption, index) => (
                            <div key={index}>
                                {valueOption !== "Care Guide" && (
                                props.speciesList[valueOption] !== undefined && props.speciesList[valueOption] !== null ? (
                                    typeof props.speciesList[valueOption] === "object"
                                    ? `${valueOption}: ${Object.values(props.speciesList[valueOption]).join(", ")}`
                                    : `${valueOption}: ${props.speciesList[valueOption]}`
                                ) : (
                                    "No data yet"
                                )
                                )}
                            </div>
                            ))}
                        </>
                        ) : (
                        <strong>Please use the filters to select the data you want.</strong>
                        )}
                    </div>
                    </div>
    


        </main>
        
    );
   
}

