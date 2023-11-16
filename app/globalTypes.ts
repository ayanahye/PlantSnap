//type or data structure of returned json from apis
export type perenual_search = {
    data: {
        id: number,
        common_name: string,
        scientific_name: string[],
        other_name: string[],
        cycle: string | null,
        watering: string | null,
        sunlight: string[],
        default_image: {
            "license": number,
            "license_name": string,
            "license_url"?: string,
            "original_url"?: string,
            "regular_url"?: string,
            "medium_url"?: string,
            "small_url"?: string,
            "thumbnail"?: string
        } | null
    }[],
    to: number,
    per_page: number,
    current_page: number,
    from: number,
    last_page: number,
    total: number
}

export type perenual_detail = {
    "id": number,
    "common_name": string | null,
    "scientific_name": string[],
    "other_name": string[],
    "family": string | null,
    "origin": string[],
    "type": string | null,
    "dimension": string | null,
    "dimensions": {
        "type": string | null,
        "min_value": number,
        "max_value": number,
        "unit": string | null
    },
    "cycle": string | null,
    "attracts": string[],
    "propagation": string[],
    "hardiness": {
        "min": string | null,
        "max": string | null
    },
    "hardiness_location": {
        "full_url": string | null,
        "full_iframe": string | null
    },
    "watering": string | null,
    "depth_water_requirement": {
        "unit": string | null,
        "value": string | null
    }[],
    "volume_water_requirement": string[],
    "watering_period": string | null,
    "watering_general_benchmark": {
        "value": string | null,
        "unit": string | null
    },
    "plant_anatomy":
        {
            "part": string | null,
            "color": string[],
        }[],
    "sunlight": string[],
    "pruning_month": string[],
    "pruning_count": string[],
    "seeds": number,
    "maintenance": string | null,
    "care-guides": string | null,
    "soil": string[],
    "growth_rate": string | null,
    "drought_tolerant": boolean,
    "salt_tolerant": boolean,
    "thorny": boolean,
    "invasive": boolean,
    "tropical": boolean,
    "indoor": boolean,
    "care_level": string | null,
    "pest_susceptibility": string[],
    "pest_susceptibility_api": string | null,
    "flowers": boolean,
    "flowering_season": string | null,
    "flower_color": string | null,
    "cones": boolean,
    "fruits": boolean,
    "edible_fruit": boolean,
    "edible_fruit_taste_profile": string | null,
    "fruit_nutritional_value": string | null,
    "fruit_color": string[],
    "harvest_season": string | null,
    "leaf": boolean,
    "leaf_color": string[],
    "edible_leaf": boolean,
    "cuisine": boolean,
    "medicinal": boolean,
    "poisonous_to_humans": number,
    "poisonous_to_pets": number,
    "description": string | null,
    "default_image": {
        "license": number,
        "license_name": string,
        "license_url": string,
        "original_url": string,
        "regular_url": string,
        "medium_url": string,
        "small_url": string,
        "thumbnail": string
    },
    "other_images": string | null
}

export type trefle_search = {
    "data": {
        "id": number,
        "common_name": string,
        "slug": string,
        "scientific_name": string,
        "year": number,
        "bibliography": string,
        "author": string,
        "status": string,
        "rank": string,
        "family_common_name": string | null,
        "genus_id": number,
        "image_url": string,
        "synonyms": string[],
        "genus": string,
        "family": string,
        "links": {
            "self": string,
            "plant": string,
            "genus": string
        }
    }[],
    "links": {
        "self": string,
        "first": string,
        "last": string
    },
    "meta": {
        "total": number
    }
}

export type trefle_img = {
    "id": number,
    "image_url": string,
    "copyright": string | null
}

export type trefle_detail = {
    "data": {
        "id": number,
        "common_name": string,
        "slug": string | null,
        "scientific_name": string | null,
        "main_species_id": number,
        "image_url": string | null,
        "year": number,
        "bibliography": string | null,
        "author": string | null,
        "family_common_name": string | null,
        "genus_id": number,
        "observations": string | null,
        "vegetable": false,
        "links": {
            "self": string | null,
            "species": string | null,
            "genus": string | null
        },
        "main_species": {
            "id": number,
            "common_name": string | null,
            "slug": string | null,
            "scientific_name": string | null,
            "year": number,
            "bibliography": string | null,
            "author": string | null,
            "status": string | null,
            "rank": string | null,
            "family_common_name": string | null,
            "genus_id": number,
            "observations": string | null,
            "vegetable": false,
            "image_url": string | null,
            "genus": string | null,
            "family": string | null,
            "duration": string | null,
            "edible_part": string | null,
            "edible": false,
            "images": {
                "fruit"?: trefle_img[],
                "leaf"?: trefle_img[],
                "bark"?: trefle_img[],
                "flower"?: trefle_img[],
                "habit"?: trefle_img[],
                "other"?: trefle_img[],
                ""?: trefle_img[],
            },
            "common_names": {
                "deu": string[],
                "eng": string[],
                "por": string[],
                "fra": string[],
                "spa": string[],
                "swe": string[],
                "en": string[],
                "ar": string[],
                "hy": string[],
                "as": string[],
                "bn": string[],
                "bg": string[],
                "my": string[],
                "ch": string[],
                "zh": string[],
                "cs": string[],
                "da": string[],
                "dv": string[],
                "nl": string[],
                "eo": string[],
                "et": string[],
                "fi": string[],
                "fr": string[],
                "de": string[],
                "ht": string[],
                "he": string[],
                "hi": string[],
                "hu": string[],
                "id": string[],
                "jv": string[],
                "kn": string[],
                "kv": string[],
                "ko": string[],
                "lv": string[],
                "ln": string[],
                "lb": string[],
                "ms": string[],
                "ml": string[],
                "mr": string[],
                "ne": string[],
                "no": string[],
                "or": string[],
                "pa": string[],
                "fa": string[],
                "pl": string[],
                "pt": string[],
                "ru": string[],
                "sr": string[],
                "sd": string[],
                "si": string[],
                "sk": string[],
                "es": string[],
                "su": string[],
                "sv": string[],
                "tl": string[],
                "ty": string[],
                "zh-tw": string[],
                "te": string[],
                "th": string[],
                "to": string[],
                "zh-hant": string[],
                "uk": string[],
                "vi": string[]
            },
            "distribution": {
                "native": string[],
                "introduced": string[]
            },
            "distributions": {
                "native": {
                    "id": number,
                    "name": string | null,
                    "slug": string | null,
                    "tdwg_code": string | null,
                    "tdwg_level": number,
                    "species_count": number,
                    "links": {
                        "self": string | null,
                        "plants": string | null,
                        "species": string | null
                    }
                }[]

                "introduced":
                    {
                        "id": number,
                        "name": string | null,
                        "slug": string | null,
                        "tdwg_code": string | null,
                        "tdwg_level": number,
                        "species_count": number,
                        "links": {
                            "self": string | null,
                            "plants": string | null,
                            "species": string | null
                        }
                    }[]
            },
            "flower": {
                "color": string | null,
                "conspicuous": string | null
            },
            "foliage": {
                "texture": string | null,
                "color": string | null,
                "leaf_retention": string | null
            },
            "fruit_or_seed": {
                "conspicuous": string | null,
                "color": string | null,
                "shape": string | null,
                "seed_persistence": string | null
            },
            "sources":
                {
                    "last_update": string | null,
                    "id": string | null,
                    "name": string | null,
                    "url": string | null,
                    "citation": string | null
                }[],
            "specifications": {
                "ligneous_type": string | null,
                "growth_form": string | null,
                "growth_habit": string | null,
                "growth_rate": string | null,
                "average_height": {
                    "cm": string | null
                },
                "maximum_height": {
                    "cm": string | null
                },
                "nitrogen_fixation": string | null,
                "shape_and_orientation": string | null,
                "toxicity": string | null
            },
            "synonyms": {
                "id": number,
                "name": string | null,
                "author": string | null,
                "sources": [
                    {
                        "last_update": string | null,
                        "id": string | null,
                        "name": string | null,
                        "url": string | null,
                        "citation": string | null
                    }
                ]
            }[],

            "growth": {
                "description": string | null,
                "sowing": string | null,
                "days_to_harvest": string | null,
                "row_spacing": {
                    "cm": number
                },
                "spread": {
                    "cm": number
                },
                "ph_maximum": string | null,
                "ph_minimum": string | null,
                "light": string | null,
                "atmospheric_humidity": string | null,
                "growth_months": string | null,
                "bloom_months": string | null,
                "fruit_months": string | null,
                "minimum_precipitation": {
                    "mm": string | null
                },
                "maximum_precipitation": {
                    "mm": string | null
                },
                "minimum_root_depth": {
                    "cm": string | null
                },
                "minimum_temperature": {
                    "deg_f": string | null,
                    "deg_c": string | null
                },
                "maximum_temperature": {
                    "deg_f": string | null,
                    "deg_c": string | null
                },
                "soil_nutriments": string | null,
                "soil_salinity": string | null,
                "soil_texture": string | null,
                "soil_humidity": string | null
            },
            "links": {
                "self": string | null,
                "plant": string | null,
                "genus": string | null
            }
        },
        "genus": {
            "id": number,
            "name": string | null,
            "slug": string | null,
            "links": {
                "self": string | null,
                "plants": string | null,
                "species": string | null,
                "family": string | null
            }
        },
        "family": {
            "id": number,
            "name": string | null,
            "common_name": string | null,
            "slug": string | null,
            "links": {
                "self": string | null,
                "division_order": string | null,
                "genus": string | null
            }
        },
        "species":
            {
                "id": number,
                "common_name": string | null,
                "slug": string | null,
                "scientific_name": string | null,
                "year": number,
                "bibliography": string | null,
                "author": string | null,
                "status": string | null,
                "rank": string | null,
                "family_common_name": string | null,
                "genus_id": number,
                "image_url": string | null,
                "synonyms": string[],
                "genus": string | null,
                "family": string | null,
                "links": {
                    "self": string | null,
                    "plant": string | null,
                    "genus": string | null
                }
            }[]

        "subspecies": string[],
        "varieties": string[],
        "hybrids": string[],
        "forms": string[],
        "subvarieties": string[],
        "sources":
            {
                "last_update": string | null,
                "id": string | null,
                "name": string | null,
                "url": string | null,
                "citation": string | null
            }[]
    },
    "meta": {
        "last_modified": string
    }
}

export type plantnet = {
    "query": {
        "project": string | null,
        "images": string[],
        "organs": string[],
        "includeRelatedImages": boolean
    },
    "language": string | null,
    "preferedReferential": string | null,
    "bestMatch": string | null,
    "results": {
        "score": number,
        "species": {
            "scientificNameWithoutAuthor": string,
            "scientificNameAuthorship": string | null,
            "genus": {
                "scientificNameWithoutAuthor": string | null,
                "scientificNameAuthorship": string | null,
                "scientificName": string | null
            },
            "family": {
                "scientificNameWithoutAuthor": string | null,
                "scientificNameAuthorship": string | null,
                "scientificName": string | null
            },
            "commonNames": string[],
            "scientificName": string | null
        },
        "images": {
            "organ": string | null,
            "author": string | null,
            "license": string | null,
            "date": {
                "timestamp": number,
                "string": string | null
            },
            "url": {
                "o": string,
                "m": string,
                "s": string
            },
            "citation": string | null
        }[]

        "gbif"?: {
            "id": string | null
        } | null,
        "powo"?: {
            "id": string | null
        } | null,
        "iucn"?: {
            "id": string | null,
            "category": string | null
        }
    }[]
    "version": string | null,
    "remainingIdentificationRequests": number
}

//some test data
export const plantnet_test_value: plantnet = {
    query: {
        "project": "all",
        "images": [
            "eb616e74618ae5f080748d090748c319"
        ],
        "organs": [
            "auto"
        ],
        "includeRelatedImages": true
    },
    "language": "en",
    "preferedReferential": "k-world-flora",
    "bestMatch": "Zea mays L.",
    "results": [
        {
            "score": 0.90408,
            "species": {
                "scientificNameWithoutAuthor": "Zea mays",
                "scientificNameAuthorship": "L.",
                "genus": {
                    "scientificNameWithoutAuthor": "Zea",
                    "scientificNameAuthorship": "",
                    "scientificName": "Zea"
                },
                "family": {
                    "scientificNameWithoutAuthor": "Poaceae",
                    "scientificNameAuthorship": "",
                    "scientificName": "Poaceae"
                },
                "commonNames": [
                    "Corn",
                    "Sweet Corn",
                    "Maize"
                ],
                "scientificName": "Zea mays L."
            },
            "images": [
                {
                    "organ": "fruit",
                    "author": "#MaryKingfishers",
                    "license": "cc-by-sa",
                    "date": {
                        "timestamp": 1655459830138,
                        "string": "June 17, 2022"
                    },
                    "url": {
                        "o": "https://bs.plantnet.org/image/o/285c8b2fdc87e93d4e6411e690b50283257540c3",
                        "m": "https://bs.plantnet.org/image/m/285c8b2fdc87e93d4e6411e690b50283257540c3",
                        "s": "https://bs.plantnet.org/image/s/285c8b2fdc87e93d4e6411e690b50283257540c3"
                    },
                    "citation": "#MaryKingfishers / Pl@ntNet, cc-by-sa"
                },
                {
                    "organ": "fruit",
                    "author": "BadBõyHalo TRÂŠHGÄNG GotRōRoGøTLIT20743",
                    "license": "cc-by-sa",
                    "date": {
                        "timestamp": 1612471462872,
                        "string": "February 4, 2021"
                    },
                    "url": {
                        "o": "https://bs.plantnet.org/image/o/20d119b53f1229df37bb317b7f4d456df96d3c9f",
                        "m": "https://bs.plantnet.org/image/m/20d119b53f1229df37bb317b7f4d456df96d3c9f",
                        "s": "https://bs.plantnet.org/image/s/20d119b53f1229df37bb317b7f4d456df96d3c9f"
                    },
                    "citation": "BadBõyHalo TRÂŠHGÄNG GotRōRoGøTLIT20743 / Pl@ntNet, cc-by-sa"
                },
                {
                    "organ": "fruit",
                    "author": "Sambin",
                    "license": "cc-by-sa",
                    "date": {
                        "timestamp": 1586103460816,
                        "string": "April 5, 2020"
                    },
                    "url": {
                        "o": "https://bs.plantnet.org/image/o/52019f45189455f923c603862a701e1babe8cd59",
                        "m": "https://bs.plantnet.org/image/m/52019f45189455f923c603862a701e1babe8cd59",
                        "s": "https://bs.plantnet.org/image/s/52019f45189455f923c603862a701e1babe8cd59"
                    },
                    "citation": "Sambin / Pl@ntNet, cc-by-sa"
                },
                {
                    "organ": "fruit",
                    "author": "HUMBERTO N.D.SANTOS FILHO",
                    "license": "cc-by-sa",
                    "date": {
                        "timestamp": 1627835911919,
                        "string": "August 1, 2021"
                    },
                    "url": {
                        "o": "https://bs.plantnet.org/image/o/6bc396a72801605d9596b703194de766d15cf9e8",
                        "m": "https://bs.plantnet.org/image/m/6bc396a72801605d9596b703194de766d15cf9e8",
                        "s": "https://bs.plantnet.org/image/s/6bc396a72801605d9596b703194de766d15cf9e8"
                    },
                    "citation": "HUMBERTO N.D.SANTOS FILHO / Pl@ntNet, cc-by-sa"
                },
                {
                    "organ": "fruit",
                    "author": "Martinho Stopeira Andres Luis...",
                    "license": "cc-by-sa",
                    "date": {
                        "timestamp": 1561248179011,
                        "string": "June 23, 2019"
                    },
                    "url": {
                        "o": "https://bs.plantnet.org/image/o/1c53159087352bbb88dfee9d7061c83ea34823e3",
                        "m": "https://bs.plantnet.org/image/m/1c53159087352bbb88dfee9d7061c83ea34823e3",
                        "s": "https://bs.plantnet.org/image/s/1c53159087352bbb88dfee9d7061c83ea34823e3"
                    },
                    "citation": "Martinho Stopeira Andres Luis... / Pl@ntNet, cc-by-sa"
                },
                {
                    "organ": "fruit",
                    "author": "Tela Botanica − Coimbra JOAO",
                    "license": "cc-by-sa",
                    "date": {
                        "timestamp": 1363114525000,
                        "string": "March 12, 2013"
                    },
                    "url": {
                        "o": "https://bs.plantnet.org/image/o/661f1a76593f8919d182af558eee20dcb7369ea6",
                        "m": "https://bs.plantnet.org/image/m/661f1a76593f8919d182af558eee20dcb7369ea6",
                        "s": "https://bs.plantnet.org/image/s/661f1a76593f8919d182af558eee20dcb7369ea6"
                    },
                    "citation": "Tela Botanica − Coimbra JOAO / Pl@ntNet, cc-by-sa"
                }
            ],
            "gbif": {
                "id": "5290052"
            },
            "powo": {
                "id": "426810-1"
            },
            "iucn": {
                "id": "77726273",
                "category": "LC"
            }
        },
        {
            "score": 0.01349,
            "species": {
                "scientificNameWithoutAuthor": "Zea mexicana",
                "scientificNameAuthorship": "(Schrad.) Kuntze",
                "genus": {
                    "scientificNameWithoutAuthor": "Zea",
                    "scientificNameAuthorship": "",
                    "scientificName": "Zea"
                },
                "family": {
                    "scientificNameWithoutAuthor": "Poaceae",
                    "scientificNameAuthorship": "",
                    "scientificName": "Poaceae"
                },
                "commonNames": [
                    "Mexican teosinte",
                    "Corn"
                ],
                "scientificName": "Zea mexicana (Schrad.) Kuntze"
            },
            "images": [
                {
                    "organ": "fruit",
                    "author": "alfa oscar",
                    "license": "cc-by-sa",
                    "date": {
                        "timestamp": 1567059173721,
                        "string": "August 29, 2019"
                    },
                    "url": {
                        "o": "https://bs.plantnet.org/image/o/e93afd3c3b4d48c2f5d054ce87aba23ec9e49abe",
                        "m": "https://bs.plantnet.org/image/m/e93afd3c3b4d48c2f5d054ce87aba23ec9e49abe",
                        "s": "https://bs.plantnet.org/image/s/e93afd3c3b4d48c2f5d054ce87aba23ec9e49abe"
                    },
                    "citation": "alfa oscar / Pl@ntNet, cc-by-sa"
                }
            ],
            "gbif": {
                "id": "5290049"
            },
            "powo": {
                "id": "270868-2"
            }
        }
    ],
    "version": "2023-09-12 (7.1)",
    "remainingIdentificationRequests": 496
}

export const perenual_detail_test_value: perenual_detail = {
    "id": 1,
    "common_name": "European Silver Fir",
    "scientific_name": [
        "Abies alba"
    ],
    "other_name": [
        "Common Silver Fir"
    ],
    "family": null,
    "origin": [
        "Austria",
        "Germany",
        "Switzerland",
        "France",
        "Italy",
        "Slovenia",
        "Croatia",
        "Bosnia and Herzegovina",
        "Serbia",
        "Montenegro",
        "Albania",
        "Bulgaria",
        "Romania",
        "Ukraine",
        "Poland",
        "Czech Republic",
        "Slovakia",
        "Hungary"
    ],
    "type": "tree",
    "dimension": "Height: 60 feet",
    "dimensions": {
        "type": "Height",
        "min_value": 60,
        "max_value": 60,
        "unit": "feet"
    },
    "cycle": "Perennial",
    "attracts": [],
    "propagation": [
        "Cutting",
        "Grafting Propagation",
        "Layering Propagation",
        "Seed Propagation",
        "Air Layering Propagation",
        "Tissue Culture"
    ],
    "hardiness": {
        "min": "7",
        "max": "7"
    },
    "hardiness_location": {
        "full_url": "https://perenual.com/api/hardiness-map?species_id=1&size=og&key=sk-sZxb6546cce0783d62824",
        "full_iframe": "<iframe frameborder=0 scrolling=yes seamless=seamless width=1000 height=550 style='margin:auto;' src='https://perenual.com/api/hardiness-map?species_id=1&size=og&key=sk-sZxb6546cce0783d62824'></iframe>"
    },
    "watering": "Frequent",
    "depth_water_requirement": [],
    "volume_water_requirement": [],
    "watering_period": null,
    "watering_general_benchmark": {
        "value": "7-10",
        "unit": "days"
    },
    "plant_anatomy": [],
    "sunlight": [
        "full sun"
    ],
    "pruning_month": [
        "February",
        "March",
        "April"
    ],
    "pruning_count": [],
    "seeds": 0,
    "maintenance": null,
    "care-guides": "http://perenual.com/api/species-care-guide-list?species_id=1&key=sk-sZxb6546cce0783d62824",
    "soil": [],
    "growth_rate": "High",
    "drought_tolerant": false,
    "salt_tolerant": false,
    "thorny": false,
    "invasive": false,
    "tropical": false,
    "indoor": false,
    "care_level": "Medium",
    "pest_susceptibility": [],
    "pest_susceptibility_api": "Coming Soon",
    "flowers": false,
    "flowering_season": null,
    "flower_color": "",
    "cones": true,
    "fruits": false,
    "edible_fruit": false,
    "edible_fruit_taste_profile": "Coming Soon",
    "fruit_nutritional_value": "Coming Soon",
    "fruit_color": [],
    "harvest_season": null,
    "leaf": true,
    "leaf_color": [
        "green"
    ],
    "edible_leaf": false,
    "cuisine": false,
    "medicinal": true,
    "poisonous_to_humans": 0,
    "poisonous_to_pets": 0,
    "description": "European Silver Fir (Abies alba) is an amazing coniferous species native to mountainous regions of central Europe and the Balkans. It is an evergreen tree with a narrow, pyramidal shape and long, soft needles. Its bark is scaly grey-brown and its branches are highly ornamental due to its conical-shaped silver-tinged needles. It is pruned for use as an ornamental evergreen hedging and screening plant, and is also popular for use as a Christmas tree. Young trees grow quickly and have strong, flexible branches which makes them perfect for use as windbreaks. The European Silver Fir is an impressive species, making it ideal for gardens and public spaces.",
    "default_image": {
        "license": 45,
        "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
        "license_url": "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
        "original_url": "https://perenual.com/storage/species_image/1_abies_alba/og/1536px-Abies_alba_SkalitC3A9.jpg",
        "regular_url": "https://perenual.com/storage/species_image/1_abies_alba/regular/1536px-Abies_alba_SkalitC3A9.jpg",
        "medium_url": "https://perenual.com/storage/species_image/1_abies_alba/medium/1536px-Abies_alba_SkalitC3A9.jpg",
        "small_url": "https://perenual.com/storage/species_image/1_abies_alba/small/1536px-Abies_alba_SkalitC3A9.jpg",
        "thumbnail": "https://perenual.com/storage/species_image/1_abies_alba/thumbnail/1536px-Abies_alba_SkalitC3A9.jpg"
    },
    "other_images": "Upgrade Plan To Supreme For Access https://perenual.com/subscription-api-pricing. Im sorry"
}

export const perenual_search_test_value: perenual_search = {
    "data": [
        {
            "id": 24,
            "common_name": "Mocha Rose Big Leaf Maple",
            "scientific_name": [
                "Acer macrophyllum 'Mocha Rose'"
            ],
            "other_name": [
                "Oregon Maple"
            ],
            "cycle": "Perennial",
            "watering": "Average",
            "sunlight": [
                "full sun",
                "part shade"
            ],
            "default_image": {
                "license": 5,
                "license_name": "Attribution-ShareAlike License",
                "license_url": "https://creativecommons.org/licenses/by-sa/2.0/",
                "original_url": "https://perenual.com/storage/species_image/24_acer_macrophyllum_mocha_rose/og/4715169892_220a9d39f6_b.jpg",
                "regular_url": "https://perenual.com/storage/species_image/24_acer_macrophyllum_mocha_rose/regular/4715169892_220a9d39f6_b.jpg",
                "medium_url": "https://perenual.com/storage/species_image/24_acer_macrophyllum_mocha_rose/medium/4715169892_220a9d39f6_b.jpg",
                "small_url": "https://perenual.com/storage/species_image/24_acer_macrophyllum_mocha_rose/small/4715169892_220a9d39f6_b.jpg",
                "thumbnail": "https://perenual.com/storage/species_image/24_acer_macrophyllum_mocha_rose/thumbnail/4715169892_220a9d39f6_b.jpg"
            }
        },
        {
            "id": 58,
            "common_name": "Shirazz Japanese Maple",
            "scientific_name": [
                "Acer palmatum 'Gwen's Rose Delight'"
            ],
            "other_name": [],
            "cycle": "Perennial",
            "watering": "Average",
            "sunlight": [
                "full sun",
                "part shade"
            ],
            "default_image": null
        },
        {
            "id": 334,
            "common_name": "Rose Marie Magnolia",
            "scientific_name": [
                "Magnolia 'Rose Marie'"
            ],
            "other_name": [
                "Rosemarie Magnolia"
            ],
            "cycle": "Perennial",
            "watering": "Minimum",
            "sunlight": [
                "full sun",
                "part shade"
            ],
            "default_image": {
                "license": 45,
                "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
                "license_url": "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
                "original_url": "https://perenual.com/storage/species_image/334_magnolia_rose_marie/og/Magnolia_C397_soulangeana_BW_1.jpg",
                "regular_url": "https://perenual.com/storage/species_image/334_magnolia_rose_marie/regular/Magnolia_C397_soulangeana_BW_1.jpg",
                "medium_url": "https://perenual.com/storage/species_image/334_magnolia_rose_marie/medium/Magnolia_C397_soulangeana_BW_1.jpg",
                "small_url": "https://perenual.com/storage/species_image/334_magnolia_rose_marie/small/Magnolia_C397_soulangeana_BW_1.jpg",
                "thumbnail": "https://perenual.com/storage/species_image/334_magnolia_rose_marie/thumbnail/Magnolia_C397_soulangeana_BW_1.jpg"
            }
        },
        {
            "id": 355,
            "common_name": "Candied Apple Flowering Crab",
            "scientific_name": [
                "Malus 'Candied Apple'"
            ],
            "other_name": [
                "Roseybloom",
                "Crabapple"
            ],
            "cycle": "Perennial",
            "watering": "Average",
            "sunlight": [
                "full sun",
                "part shade"
            ],
            "default_image": {
                "license": 45,
                "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
                "license_url": "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
                "original_url": "https://perenual.com/storage/species_image/355_malus_candied_apple/og/663px-Apples_on_tree_2021_G1.jpg",
                "regular_url": "https://perenual.com/storage/species_image/355_malus_candied_apple/regular/663px-Apples_on_tree_2021_G1.jpg",
                "medium_url": "https://perenual.com/storage/species_image/355_malus_candied_apple/medium/663px-Apples_on_tree_2021_G1.jpg",
                "small_url": "https://perenual.com/storage/species_image/355_malus_candied_apple/small/663px-Apples_on_tree_2021_G1.jpg",
                "thumbnail": "https://perenual.com/storage/species_image/355_malus_candied_apple/thumbnail/663px-Apples_on_tree_2021_G1.jpg"
            }
        },
        {
            "id": 359,
            "common_name": "Dolgo Apple",
            "scientific_name": [
                "Malus 'Dolgo'"
            ],
            "other_name": [
                "Roseybloom",
                "Crabapple"
            ],
            "cycle": "Perennial",
            "watering": "Average",
            "sunlight": [
                "full sun"
            ],
            "default_image": {
                "license": 451,
                "license_name": "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
                "license_url": "https://creativecommons.org/publicdomain/zero/1.0/",
                "original_url": "https://perenual.com/storage/species_image/359_malus_dolgo/og/apple-zieraepfel-wild-apple-tree-branch.jpg",
                "regular_url": "https://perenual.com/storage/species_image/359_malus_dolgo/regular/apple-zieraepfel-wild-apple-tree-branch.jpg",
                "medium_url": "https://perenual.com/storage/species_image/359_malus_dolgo/medium/apple-zieraepfel-wild-apple-tree-branch.jpg",
                "small_url": "https://perenual.com/storage/species_image/359_malus_dolgo/small/apple-zieraepfel-wild-apple-tree-branch.jpg",
                "thumbnail": "https://perenual.com/storage/species_image/359_malus_dolgo/thumbnail/apple-zieraepfel-wild-apple-tree-branch.jpg"
            }
        },
        {
            "id": 360,
            "common_name": "Donald Wyman Flowering Crab",
            "scientific_name": [
                "Malus 'Donald Wyman'"
            ],
            "other_name": [
                "Roseybloom",
                "Crabapple"
            ],
            "cycle": "Perennial",
            "watering": "Average",
            "sunlight": [
                "full sun"
            ],
            "default_image": {
                "license": 451,
                "license_name": "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
                "license_url": "https://creativecommons.org/publicdomain/zero/1.0/",
                "original_url": "https://perenual.com/storage/species_image/360_malus_donald_wyman/og/frembellishment_apple_small_694055-image-kybdt6db.jpg",
                "regular_url": "https://perenual.com/storage/species_image/360_malus_donald_wyman/regular/frembellishment_apple_small_694055-image-kybdt6db.jpg",
                "medium_url": "https://perenual.com/storage/species_image/360_malus_donald_wyman/medium/frembellishment_apple_small_694055-image-kybdt6db.jpg",
                "small_url": "https://perenual.com/storage/species_image/360_malus_donald_wyman/small/frembellishment_apple_small_694055-image-kybdt6db.jpg",
                "thumbnail": "https://perenual.com/storage/species_image/360_malus_donald_wyman/thumbnail/frembellishment_apple_small_694055-image-kybdt6db.jpg"
            }
        },
        {
            "id": 372,
            "common_name": "Louisa Flowering Crab",
            "scientific_name": [
                "Malus 'Louisa'"
            ],
            "other_name": [
                "Roseybloom",
                "Crabapple"
            ],
            "cycle": "Perennial",
            "watering": "Average",
            "sunlight": [
                "full sun"
            ],
            "default_image": {
                "license": 4,
                "license_name": "Attribution License",
                "license_url": "https://creativecommons.org/licenses/by/2.0/",
                "original_url": "https://perenual.com/storage/species_image/372_malus_louisa/og/10362143644_d44b00de9e_b.jpg",
                "regular_url": "https://perenual.com/storage/species_image/372_malus_louisa/regular/10362143644_d44b00de9e_b.jpg",
                "medium_url": "https://perenual.com/storage/species_image/372_malus_louisa/medium/10362143644_d44b00de9e_b.jpg",
                "small_url": "https://perenual.com/storage/species_image/372_malus_louisa/small/10362143644_d44b00de9e_b.jpg",
                "thumbnail": "https://perenual.com/storage/species_image/372_malus_louisa/thumbnail/10362143644_d44b00de9e_b.jpg"
            }
        },
        {
            "id": 374,
            "common_name": "Melrose Apple",
            "scientific_name": [
                "Malus 'Melrose'"
            ],
            "other_name": [],
            "cycle": "Perennial",
            "watering": "Average",
            "sunlight": [
                "full sun"
            ],
            "default_image": {
                "license": 4,
                "license_name": "Attribution License",
                "license_url": "https://creativecommons.org/licenses/by/2.0/",
                "original_url": "https://perenual.com/storage/species_image/374_malus_melrose/og/50860213661_1b84b33396_b.jpg",
                "regular_url": "https://perenual.com/storage/species_image/374_malus_melrose/regular/50860213661_1b84b33396_b.jpg",
                "medium_url": "https://perenual.com/storage/species_image/374_malus_melrose/medium/50860213661_1b84b33396_b.jpg",
                "small_url": "https://perenual.com/storage/species_image/374_malus_melrose/small/50860213661_1b84b33396_b.jpg",
                "thumbnail": "https://perenual.com/storage/species_image/374_malus_melrose/thumbnail/50860213661_1b84b33396_b.jpg"
            }
        },
        {
            "id": 379,
            "common_name": "Red Jewel Flowering Crab",
            "scientific_name": [
                "Malus 'Red Jewel'"
            ],
            "other_name": [
                "Roseybloom",
                "Crabapple"
            ],
            "cycle": "Perennial",
            "watering": "Average",
            "sunlight": [
                "full sun",
                "part shade"
            ],
            "default_image": {
                "license": 451,
                "license_name": "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
                "license_url": "https://creativecommons.org/publicdomain/zero/1.0/",
                "original_url": "https://perenual.com/storage/species_image/379_malus_red_jewel/og/embellishment_apple_small_ornamental_tree_ornamental_fruit_malus_rose_greenhouse_fruits-745555.jpg",
                "regular_url": "https://perenual.com/storage/species_image/379_malus_red_jewel/regular/embellishment_apple_small_ornamental_tree_ornamental_fruit_malus_rose_greenhouse_fruits-745555.jpg",
                "medium_url": "https://perenual.com/storage/species_image/379_malus_red_jewel/medium/embellishment_apple_small_ornamental_tree_ornamental_fruit_malus_rose_greenhouse_fruits-745555.jpg",
                "small_url": "https://perenual.com/storage/species_image/379_malus_red_jewel/small/embellishment_apple_small_ornamental_tree_ornamental_fruit_malus_rose_greenhouse_fruits-745555.jpg",
                "thumbnail": "https://perenual.com/storage/species_image/379_malus_red_jewel/thumbnail/embellishment_apple_small_ornamental_tree_ornamental_fruit_malus_rose_greenhouse_fruits-745555.jpg"
            }
        },
        {
            "id": 381,
            "common_name": "Sentinel Flowering Crab",
            "scientific_name": [
                "Malus 'Sentinel'"
            ],
            "other_name": [
                "Roseybloom",
                "Crabapple"
            ],
            "cycle": "Perennial",
            "watering": "Average",
            "sunlight": [
                "full sun"
            ],
            "default_image": {
                "license": 5,
                "license_name": "Attribution-ShareAlike License",
                "license_url": "https://creativecommons.org/licenses/by-sa/2.0/",
                "original_url": "https://perenual.com/storage/species_image/381_malus_sentinel/og/49409253573_b0a8bd2496_b.jpg",
                "regular_url": "https://perenual.com/storage/species_image/381_malus_sentinel/regular/49409253573_b0a8bd2496_b.jpg",
                "medium_url": "https://perenual.com/storage/species_image/381_malus_sentinel/medium/49409253573_b0a8bd2496_b.jpg",
                "small_url": "https://perenual.com/storage/species_image/381_malus_sentinel/small/49409253573_b0a8bd2496_b.jpg",
                "thumbnail": "https://perenual.com/storage/species_image/381_malus_sentinel/thumbnail/49409253573_b0a8bd2496_b.jpg"
            }
        },
        {
            "id": 382,
            "common_name": "Snowdrift Flowering Crab",
            "scientific_name": [
                "Malus 'Snowdrift'"
            ],
            "other_name": [
                "Roseybloom",
                "Crabapple"
            ],
            "cycle": "Perennial",
            "watering": "Average",
            "sunlight": [
                "full sun"
            ],
            "default_image": {
                "license": 6,
                "license_name": "Attribution-NoDerivs License",
                "license_url": "https://creativecommons.org/licenses/by-nd/2.0/",
                "original_url": "https://perenual.com/storage/species_image/382_malus_snowdrift/og/47982893248_8ef3d25b9a_b.jpg"
            }
        },
        {
            "id": 408,
            "common_name": "abelia",
            "scientific_name": [
                "Abelia 'Rose Creek'"
            ],
            "other_name": [],
            "cycle": "Perennial",
            "watering": "Average",
            "sunlight": [
                "full sun",
                "part shade"
            ],
            "default_image": {
                "license": 4,
                "license_name": "Attribution License",
                "license_url": "https://creativecommons.org/licenses/by/2.0/",
                "original_url": "https://perenual.com/storage/species_image/408_abelia_rose_creek/og/21931595768_e94f9b5c49_b.jpg",
                "regular_url": "https://perenual.com/storage/species_image/408_abelia_rose_creek/regular/21931595768_e94f9b5c49_b.jpg",
                "medium_url": "https://perenual.com/storage/species_image/408_abelia_rose_creek/medium/21931595768_e94f9b5c49_b.jpg",
                "small_url": "https://perenual.com/storage/species_image/408_abelia_rose_creek/small/21931595768_e94f9b5c49_b.jpg",
                "thumbnail": "https://perenual.com/storage/species_image/408_abelia_rose_creek/thumbnail/21931595768_e94f9b5c49_b.jpg"
            }
        },
        {
            "id": 482,
            "common_name": "yarrow",
            "scientific_name": [
                "Achillea millefolium f. rosea"
            ],
            "other_name": [],
            "cycle": "Herbaceous Perennial",
            "watering": "Average",
            "sunlight": [
                "full sun"
            ],
            "default_image": {
                "license": 45,
                "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
                "license_url": "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
                "original_url": "https://perenual.com/storage/species_image/482_achillea_millefolium_f_rosea/og/2560px-Achillea_27Rosea27_01.jpg",
                "regular_url": "https://perenual.com/storage/species_image/482_achillea_millefolium_f_rosea/regular/2560px-Achillea_27Rosea27_01.jpg",
                "medium_url": "https://perenual.com/storage/species_image/482_achillea_millefolium_f_rosea/medium/2560px-Achillea_27Rosea27_01.jpg",
                "small_url": "https://perenual.com/storage/species_image/482_achillea_millefolium_f_rosea/small/2560px-Achillea_27Rosea27_01.jpg",
                "thumbnail": "https://perenual.com/storage/species_image/482_achillea_millefolium_f_rosea/thumbnail/2560px-Achillea_27Rosea27_01.jpg"
            }
        },
        {
            "id": 483,
            "common_name": "yarrow",
            "scientific_name": [
                "Achillea millefolium 'Montrose Rose'"
            ],
            "other_name": [],
            "cycle": "Herbaceous Perennial",
            "watering": "Average",
            "sunlight": [
                "full sun"
            ],
            "default_image": null
        },
        {
            "id": 540,
            "common_name": "desert rose",
            "scientific_name": [
                "Adenium obesum"
            ],
            "other_name": [],
            "cycle": "Perennial",
            "watering": "Minimum",
            "sunlight": [
                "full sun"
            ],
            "default_image": {
                "license": 5,
                "license_name": "Attribution-ShareAlike License",
                "license_url": "https://creativecommons.org/licenses/by-sa/2.0/",
                "original_url": "https://perenual.com/storage/species_image/540_adenium_obesum/og/9244335137_6d662ed77c_b.jpg",
                "regular_url": "https://perenual.com/storage/species_image/540_adenium_obesum/regular/9244335137_6d662ed77c_b.jpg",
                "medium_url": "https://perenual.com/storage/species_image/540_adenium_obesum/medium/9244335137_6d662ed77c_b.jpg",
                "small_url": "https://perenual.com/storage/species_image/540_adenium_obesum/small/9244335137_6d662ed77c_b.jpg",
                "thumbnail": "https://perenual.com/storage/species_image/540_adenium_obesum/thumbnail/9244335137_6d662ed77c_b.jpg"
            }
        },
        {
            "id": 653,
            "common_name": "hollyhock",
            "scientific_name": [
                "Alcea rosea"
            ],
            "other_name": [],
            "cycle": "Herbaceous Perennial",
            "watering": "Average",
            "sunlight": [
                "full sun",
                "part shade"
            ],
            "default_image": {
                "license": 5,
                "license_name": "Attribution-ShareAlike License",
                "license_url": "https://creativecommons.org/licenses/by-sa/2.0/",
                "original_url": "https://perenual.com/storage/species_image/653_alcea_rosea/og/52177324906_3e75a503f7_b.jpg",
                "regular_url": "https://perenual.com/storage/species_image/653_alcea_rosea/regular/52177324906_3e75a503f7_b.jpg",
                "medium_url": "https://perenual.com/storage/species_image/653_alcea_rosea/medium/52177324906_3e75a503f7_b.jpg",
                "small_url": "https://perenual.com/storage/species_image/653_alcea_rosea/small/52177324906_3e75a503f7_b.jpg",
                "thumbnail": "https://perenual.com/storage/species_image/653_alcea_rosea/thumbnail/52177324906_3e75a503f7_b.jpg"
            }
        },
        {
            "id": 654,
            "common_name": "hollyhock",
            "scientific_name": [
                "Alcea rosea 'Nigra'"
            ],
            "other_name": [],
            "cycle": "Herbaceous Perennial",
            "watering": "Average",
            "sunlight": [
                "full sun",
                "part shade"
            ],
            "default_image": {
                "license": 5,
                "license_name": "Attribution-ShareAlike License",
                "license_url": "https://creativecommons.org/licenses/by-sa/2.0/",
                "original_url": "https://perenual.com/storage/species_image/654_alcea_rosea_nigra/og/7972146336_7430b09f99_b.jpg",
                "regular_url": "https://perenual.com/storage/species_image/654_alcea_rosea_nigra/regular/7972146336_7430b09f99_b.jpg",
                "medium_url": "https://perenual.com/storage/species_image/654_alcea_rosea_nigra/medium/7972146336_7430b09f99_b.jpg",
                "small_url": "https://perenual.com/storage/species_image/654_alcea_rosea_nigra/small/7972146336_7430b09f99_b.jpg",
                "thumbnail": "https://perenual.com/storage/species_image/654_alcea_rosea_nigra/thumbnail/7972146336_7430b09f99_b.jpg"
            }
        },
        {
            "id": 655,
            "common_name": "hollyhock",
            "scientific_name": [
                "Alcea rosea (single)"
            ],
            "other_name": [],
            "cycle": "Herbaceous Perennial",
            "watering": "Average",
            "sunlight": [
                "full sun",
                "part shade"
            ],
            "default_image": {
                "license": 5,
                "license_name": "Attribution-ShareAlike License",
                "license_url": "https://creativecommons.org/licenses/by-sa/2.0/",
                "original_url": "https://perenual.com/storage/species_image/655_alcea_rosea_single/og/51265082640_c6f378dbd5_b.jpg",
                "regular_url": "https://perenual.com/storage/species_image/655_alcea_rosea_single/regular/51265082640_c6f378dbd5_b.jpg",
                "medium_url": "https://perenual.com/storage/species_image/655_alcea_rosea_single/medium/51265082640_c6f378dbd5_b.jpg",
                "small_url": "https://perenual.com/storage/species_image/655_alcea_rosea_single/small/51265082640_c6f378dbd5_b.jpg",
                "thumbnail": "https://perenual.com/storage/species_image/655_alcea_rosea_single/thumbnail/51265082640_c6f378dbd5_b.jpg"
            }
        },
        {
            "id": 881,
            "common_name": "columbine",
            "scientific_name": [
                "Aquilegia flabellata var. pumila 'Rosea'"
            ],
            "other_name": [],
            "cycle": "Herbaceous Perennial",
            "watering": "Average",
            "sunlight": [
                "Full sun",
                "part shade"
            ],
            "default_image": null
        },
        {
            "id": 1009,
            "common_name": "swamp milkweed",
            "scientific_name": [
                "Asclepias incarnata"
            ],
            "other_name": [
                "Rose Milkweed",
                "Pink Milkweed",
                "Pink Milkweed"
            ],
            "cycle": "Herbaceous Perennial",
            "watering": "Frequent",
            "sunlight": [
                "Sun"
            ],
            "default_image": {
                "license": 4,
                "license_name": "Attribution License",
                "license_url": "https://creativecommons.org/licenses/by/2.0/",
                "original_url": "https://perenual.com/storage/species_image/1009_asclepias_incarnata/og/51803934774_8983de9bea_b.jpg",
                "regular_url": "https://perenual.com/storage/species_image/1009_asclepias_incarnata/regular/51803934774_8983de9bea_b.jpg",
                "medium_url": "https://perenual.com/storage/species_image/1009_asclepias_incarnata/medium/51803934774_8983de9bea_b.jpg",
                "small_url": "https://perenual.com/storage/species_image/1009_asclepias_incarnata/small/51803934774_8983de9bea_b.jpg",
                "thumbnail": "https://perenual.com/storage/species_image/1009_asclepias_incarnata/thumbnail/51803934774_8983de9bea_b.jpg"
            }
        },
        {
            "id": 1010,
            "common_name": "swamp milkweed",
            "scientific_name": [
                "Asclepias incarnata 'Cinderella'"
            ],
            "other_name": [
                "Rose Milkweed",
                "Pink Milkweed",
                "Pink Milkweed"
            ],
            "cycle": "Herbaceous Perennial",
            "watering": "Frequent",
            "sunlight": [
                "Sun"
            ],
            "default_image": {
                "license": 5,
                "license_name": "Attribution-ShareAlike License",
                "license_url": "https://creativecommons.org/licenses/by-sa/2.0/",
                "original_url": "https://perenual.com/storage/species_image/1010_asclepias_incarnata_cinderella/og/7634473196_8f5a237db9_b.jpg",
                "regular_url": "https://perenual.com/storage/species_image/1010_asclepias_incarnata_cinderella/regular/7634473196_8f5a237db9_b.jpg",
                "medium_url": "https://perenual.com/storage/species_image/1010_asclepias_incarnata_cinderella/medium/7634473196_8f5a237db9_b.jpg",
                "small_url": "https://perenual.com/storage/species_image/1010_asclepias_incarnata_cinderella/small/7634473196_8f5a237db9_b.jpg",
                "thumbnail": "https://perenual.com/storage/species_image/1010_asclepias_incarnata_cinderella/thumbnail/7634473196_8f5a237db9_b.jpg"
            }
        },
        {
            "id": 1011,
            "common_name": "swamp milkweed",
            "scientific_name": [
                "Asclepias incarnata 'Ice Ballet'"
            ],
            "other_name": [
                "Rose Milkweed",
                "Pink Milkweed",
                "Pink Milkweed"
            ],
            "cycle": "Herbaceous Perennial",
            "watering": "Frequent",
            "sunlight": [
                "Sun"
            ],
            "default_image": {
                "license": 4,
                "license_name": "Attribution License",
                "license_url": "https://creativecommons.org/licenses/by/2.0/",
                "original_url": "https://perenual.com/storage/species_image/1011_asclepias_incarnata_ice_ballet/og/50075697802_cdd4df63b9_b.jpg",
                "regular_url": "https://perenual.com/storage/species_image/1011_asclepias_incarnata_ice_ballet/regular/50075697802_cdd4df63b9_b.jpg",
                "medium_url": "https://perenual.com/storage/species_image/1011_asclepias_incarnata_ice_ballet/medium/50075697802_cdd4df63b9_b.jpg",
                "small_url": "https://perenual.com/storage/species_image/1011_asclepias_incarnata_ice_ballet/small/50075697802_cdd4df63b9_b.jpg",
                "thumbnail": "https://perenual.com/storage/species_image/1011_asclepias_incarnata_ice_ballet/thumbnail/50075697802_cdd4df63b9_b.jpg"
            }
        },
        {
            "id": 1012,
            "common_name": "swamp milkweed",
            "scientific_name": [
                "Asclepias incarnata 'Soulmate'"
            ],
            "other_name": [
                "Rose Milkweed",
                "Pink Milkweed",
                "Pink Milkweed"
            ],
            "cycle": "Herbaceous Perennial",
            "watering": "Frequent",
            "sunlight": [
                "Sun"
            ],
            "default_image": {
                "license": 4,
                "license_name": "Attribution License",
                "license_url": "https://creativecommons.org/licenses/by/2.0/",
                "original_url": "https://perenual.com/storage/species_image/1012_asclepias_incarnata_soulmate/og/51803934774_8983de9bea_b.jpg",
                "regular_url": "https://perenual.com/storage/species_image/1012_asclepias_incarnata_soulmate/regular/51803934774_8983de9bea_b.jpg",
                "medium_url": "https://perenual.com/storage/species_image/1012_asclepias_incarnata_soulmate/medium/51803934774_8983de9bea_b.jpg",
                "small_url": "https://perenual.com/storage/species_image/1012_asclepias_incarnata_soulmate/small/51803934774_8983de9bea_b.jpg",
                "thumbnail": "https://perenual.com/storage/species_image/1012_asclepias_incarnata_soulmate/thumbnail/51803934774_8983de9bea_b.jpg"
            }
        },
        {
            "id": 1089,
            "common_name": "astilbe",
            "scientific_name": [
                "Astilbe rosea 'Peach Blossom'"
            ],
            "other_name": [],
            "cycle": "Herbaceous Perennial",
            "watering": "Average",
            "sunlight": [
                "Part shade",
                "full shade"
            ],
            "default_image": {
                "license": 45,
                "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
                "license_url": "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
                "original_url": "https://perenual.com/storage/species_image/1089_astilbe_rosea_peach_blossom/og/2560px-Astilbe_japonica_Peach_Blossom_0zz.jpg",
                "regular_url": "https://perenual.com/storage/species_image/1089_astilbe_rosea_peach_blossom/regular/2560px-Astilbe_japonica_Peach_Blossom_0zz.jpg",
                "medium_url": "https://perenual.com/storage/species_image/1089_astilbe_rosea_peach_blossom/medium/2560px-Astilbe_japonica_Peach_Blossom_0zz.jpg",
                "small_url": "https://perenual.com/storage/species_image/1089_astilbe_rosea_peach_blossom/small/2560px-Astilbe_japonica_Peach_Blossom_0zz.jpg",
                "thumbnail": "https://perenual.com/storage/species_image/1089_astilbe_rosea_peach_blossom/thumbnail/2560px-Astilbe_japonica_Peach_Blossom_0zz.jpg"
            }
        },
        {
            "id": 1218,
            "common_name": "begonia",
            "scientific_name": [
                "Begonia semperflorens 'Senator Deep Rose'"
            ],
            "other_name": [],
            "cycle": "Herbaceous Perennial",
            "watering": "Average",
            "sunlight": [
                "part shade",
                "part sun/part shade"
            ],
            "default_image": {
                "license": 4,
                "license_name": "Attribution License",
                "license_url": "https://creativecommons.org/licenses/by/2.0/",
                "original_url": "https://perenual.com/storage/species_image/1218_begonia_semperflorens_senator_deep_rose/og/8884235929_8f2eaa2082_b.jpg",
                "regular_url": "https://perenual.com/storage/species_image/1218_begonia_semperflorens_senator_deep_rose/regular/8884235929_8f2eaa2082_b.jpg",
                "medium_url": "https://perenual.com/storage/species_image/1218_begonia_semperflorens_senator_deep_rose/medium/8884235929_8f2eaa2082_b.jpg",
                "small_url": "https://perenual.com/storage/species_image/1218_begonia_semperflorens_senator_deep_rose/small/8884235929_8f2eaa2082_b.jpg",
                "thumbnail": "https://perenual.com/storage/species_image/1218_begonia_semperflorens_senator_deep_rose/thumbnail/8884235929_8f2eaa2082_b.jpg"
            }
        },
        {
            "id": 1234,
            "common_name": "barberry",
            "scientific_name": [
                "Berberis 'Cally Rose'"
            ],
            "other_name": [],
            "cycle": "Perennial",
            "watering": "Average",
            "sunlight": [
                "Full sun",
                "part shade"
            ],
            "default_image": {
                "license": 4,
                "license_name": "Attribution License",
                "license_url": "https://creativecommons.org/licenses/by/2.0/",
                "original_url": "https://perenual.com/storage/species_image/1234_berberis_cally_rose/og/28742921498_35f288d6e2_b.jpg",
                "regular_url": "https://perenual.com/storage/species_image/1234_berberis_cally_rose/regular/28742921498_35f288d6e2_b.jpg",
                "medium_url": "https://perenual.com/storage/species_image/1234_berberis_cally_rose/medium/28742921498_35f288d6e2_b.jpg",
                "small_url": "https://perenual.com/storage/species_image/1234_berberis_cally_rose/small/28742921498_35f288d6e2_b.jpg",
                "thumbnail": "https://perenual.com/storage/species_image/1234_berberis_cally_rose/thumbnail/28742921498_35f288d6e2_b.jpg"
            }
        },
        {
            "id": 1250,
            "common_name": "Japanese barberry",
            "scientific_name": [
                "Berberis thunbergii f. atropurpurea 'Rose Glow'"
            ],
            "other_name": [],
            "cycle": "Perennial",
            "watering": "Average",
            "sunlight": [
                "full sun",
                "part shade"
            ],
            "default_image": {
                "license": 5,
                "license_name": "Attribution-ShareAlike License",
                "license_url": "https://creativecommons.org/licenses/by-sa/2.0/",
                "original_url": "https://perenual.com/storage/species_image/1250_berberis_thunbergii_f_atropurpurea_rose_glow/og/27304940200_4c499f2841_b.jpg",
                "regular_url": "https://perenual.com/storage/species_image/1250_berberis_thunbergii_f_atropurpurea_rose_glow/regular/27304940200_4c499f2841_b.jpg",
                "medium_url": "https://perenual.com/storage/species_image/1250_berberis_thunbergii_f_atropurpurea_rose_glow/medium/27304940200_4c499f2841_b.jpg",
                "small_url": "https://perenual.com/storage/species_image/1250_berberis_thunbergii_f_atropurpurea_rose_glow/small/27304940200_4c499f2841_b.jpg",
                "thumbnail": "https://perenual.com/storage/species_image/1250_berberis_thunbergii_f_atropurpurea_rose_glow/thumbnail/27304940200_4c499f2841_b.jpg"
            }
        },
        {
            "id": 1465,
            "common_name": "calamint",
            "scientific_name": [
                "Calamintha nepeta 'Montrose White'"
            ],
            "other_name": [],
            "cycle": "Herbaceous Perennial",
            "watering": "Minimum",
            "sunlight": [
                "Full sun"
            ],
            "default_image": {
                "license": 45,
                "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
                "license_url": "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
                "original_url": "https://perenual.com/storage/species_image/1465_calamintha_nepeta_montrose_white/og/1456px-Calamintha_nepeta_kz4.jpg",
                "regular_url": "https://perenual.com/storage/species_image/1465_calamintha_nepeta_montrose_white/regular/1456px-Calamintha_nepeta_kz4.jpg",
                "medium_url": "https://perenual.com/storage/species_image/1465_calamintha_nepeta_montrose_white/medium/1456px-Calamintha_nepeta_kz4.jpg",
                "small_url": "https://perenual.com/storage/species_image/1465_calamintha_nepeta_montrose_white/small/1456px-Calamintha_nepeta_kz4.jpg",
                "thumbnail": "https://perenual.com/storage/species_image/1465_calamintha_nepeta_montrose_white/thumbnail/1456px-Calamintha_nepeta_kz4.jpg"
            }
        },
        {
            "id": 1519,
            "common_name": "shrubby evening primrose",
            "scientific_name": [
                "Calylophus serrulatus"
            ],
            "other_name": [],
            "cycle": "Herbaceous Perennial",
            "watering": "Minimum",
            "sunlight": [
                "Full sun"
            ],
            "default_image": {
                "license": 45,
                "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
                "license_url": "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
                "original_url": "https://perenual.com/storage/species_image/1519_calylophus_serrulatus/og/D096D0BED0B2D182D0B5D186D18C_D196D0BBD196D180D196D0B9D181D18CD0BAD0B8D0B9_D0BDD0B0_D181D182D0B5D0BFD0BED0B2D0BED0BCD183_D181D185D0B8D0BBD196_D0B4D0BED0BBD0B8D0BDD0B8_D180D196D187D0BAD0B8_D0AFD182D180D0B0D0BDD18C.jpg",
                "regular_url": "https://perenual.com/storage/species_image/1519_calylophus_serrulatus/regular/D096D0BED0B2D182D0B5D186D18C_D196D0BBD196D180D196D0B9D181D18CD0BAD0B8D0B9_D0BDD0B0_D181D182D0B5D0BFD0BED0B2D0BED0BCD183_D181D185D0B8D0BBD196_D0B4D0BED0BBD0B8D0BDD0B8_D180D196D187D0BAD0B8_D0AFD182D180D0B0D0BDD18C.jpg",
                "medium_url": "https://perenual.com/storage/species_image/1519_calylophus_serrulatus/medium/D096D0BED0B2D182D0B5D186D18C_D196D0BBD196D180D196D0B9D181D18CD0BAD0B8D0B9_D0BDD0B0_D181D182D0B5D0BFD0BED0B2D0BED0BCD183_D181D185D0B8D0BBD196_D0B4D0BED0BBD0B8D0BDD0B8_D180D196D187D0BAD0B8_D0AFD182D180D0B0D0BDD18C.jpg",
                "small_url": "https://perenual.com/storage/species_image/1519_calylophus_serrulatus/small/D096D0BED0B2D182D0B5D186D18C_D196D0BBD196D180D196D0B9D181D18CD0BAD0B8D0B9_D0BDD0B0_D181D182D0B5D0BFD0BED0B2D0BED0BCD183_D181D185D0B8D0BBD196_D0B4D0BED0BBD0B8D0BDD0B8_D180D196D187D0BAD0B8_D0AFD182D180D0B0D0BDD18C.jpg",
                "thumbnail": "https://perenual.com/storage/species_image/1519_calylophus_serrulatus/thumbnail/D096D0BED0B2D182D0B5D186D18C_D196D0BBD196D180D196D0B9D181D18CD0BAD0B8D0B9_D0BDD0B0_D181D182D0B5D0BFD0BED0B2D0BED0BCD183_D181D185D0B8D0BBD196_D0B4D0BED0BBD0B8D0BDD0B8_D180D196D187D0BAD0B8_D0AFD182D180D0B0D0BDD18C.jpg"
            }
        },
        {
            "id": 1530,
            "common_name": "camellia",
            "scientific_name": [
                "Camellia japonica 'April Rose'"
            ],
            "other_name": [],
            "cycle": "Perennial",
            "watering": "Average",
            "sunlight": [
                "Part shade"
            ],
            "default_image": {
                "license": 5,
                "license_name": "Attribution-ShareAlike License",
                "license_url": "https://creativecommons.org/licenses/by-sa/2.0/",
                "original_url": "https://perenual.com/storage/species_image/1530_camellia_japonica_april_rose/og/52456500562_32f0b718f8_b.jpg",
                "regular_url": "https://perenual.com/storage/species_image/1530_camellia_japonica_april_rose/regular/52456500562_32f0b718f8_b.jpg",
                "medium_url": "https://perenual.com/storage/species_image/1530_camellia_japonica_april_rose/medium/52456500562_32f0b718f8_b.jpg",
                "small_url": "https://perenual.com/storage/species_image/1530_camellia_japonica_april_rose/small/52456500562_32f0b718f8_b.jpg",
                "thumbnail": "https://perenual.com/storage/species_image/1530_camellia_japonica_april_rose/thumbnail/52456500562_32f0b718f8_b.jpg"
            }
        }
    ],
    "to": 30,
    "per_page": 30,
    "current_page": 1,
    "from": 1,
    "last_page": 13,
    "total": 374
}

