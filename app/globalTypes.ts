//type of returned json from apis
export type perenual_search = {
    data: {
        id: number,
        common_name: string | null,
        scientific_name: string[],
        other_name: string[],
        cycle: string | null,
        watering: string | null,
        sunlight: string[],
        default_image: {
            "license": number,
            "license_name": string | null,
            "license_url": string | null,
            "original_url": string | null,
            "regular_url": string | null,
            "medium_url": string | null,
            "small_url": string | null,
            "thumbnail": string | null
        }
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
    },
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
                "fruit": trefle_img[],
                "leaf": trefle_img[],
                "bark": trefle_img[],
                "flower": trefle_img[],
                "habit": trefle_img[],
                "other": trefle_img[],
                "": trefle_img[],
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
            "scientificNameWithoutAuthor": string | null,
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

