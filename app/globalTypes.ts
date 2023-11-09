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

