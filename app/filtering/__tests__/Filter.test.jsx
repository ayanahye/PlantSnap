import React from 'react';
import {render, fireEvent, screen, queryByText, within} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import Filter from '../filter'; 

import userEvent from '@testing-library/user-event';
import Page from '../page';
import {http, HttpResponse} from 'msw'
import {setupServer} from "msw/node";
import {perenual_detail_test_value} from "../../globalTypes";


// integration test for filter page that it correctly integrates with netlify functions
const server = setupServer(
    http.get('/.netlify/functions/filter', async ({request}) => {
        return HttpResponse.json(perenual_detail_test_value)
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe("filter page integrates with API", () => {
    test('Clicking dropdown option displays correct information', async () => {
      render(<Filter speciesList={perenual_detail_test_value} />);


      const navigationFilterBox = screen.getByTestId('navigationfilterbox');
  
      const checkBox = screen.getByTestId('checkbox-option1-common_name');
      fireEvent.click(checkBox);

        const informationDiv = screen.getByTestId('scroll-object1');
  
        const expectedInformation = 'common_name: European Silver Fir';
        expect(informationDiv).toHaveTextContent(expectedInformation);
      
    });
})

describe("Options shows in display div", () => {
  const mockSpeciesList = {
    "id": 1,
    "common_name": "European Silver Fir",
    "scientific_name": ["Abies alba"],
    "other_name": ["Common Silver Fir"],
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
    "sunlight": ["full sun"],
    "pruning_month": ["February", "March", "April"],
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
    "leaf_color": ["green"],
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
    "other_images": "Upgrade Plan To Supreme For Access https://perenual.com/subscription-api-pricing. I'm sorry"
  };
    
    it("When the check is clicked for an option, the key and value pair should be displayed for the user in the div container called information.", () => {

        render(<Filter speciesList={mockSpeciesList} />);

        const checkBox = screen.getByTestId('checkbox-option1-common_name');
        fireEvent.click(checkBox);

        const informationContainer = screen.getByTestId('scroll-object1');
        expect(within(informationContainer).getByText(/common_name:\s*European Silver Fir/i)).toBeInTheDocument();
    })

    
    it('displays Care Reqs information when "Care Guide" is selected', () => {
    
        render(<Filter speciesList={mockSpeciesList} />);
    
        const checkBox = screen.getByTestId('checkbox-option0-Care Guide');
        fireEvent.click(checkBox);

        const informationContainer = screen.getByTestId('scroll-object1');
    
        const careGuidesElements = within(informationContainer).getAllByText(/Care Guides/i);
        expect(careGuidesElements.length).toBeGreaterThan(0);

        expect(within(informationContainer).getByText(/frequent watering\./i)).toBeInTheDocument();
        expect(within(informationContainer).getByText(/full sun\./i)).toBeInTheDocument();
        expect(within(informationContainer).getByText(/is not drought tolerant\./i)).toBeInTheDocument();
        expect(within(informationContainer).getByText(/is not salt tolerant\./i)).toBeInTheDocument();
        expect(within(informationContainer).getByText(/does not grow fruits\./i)).toBeInTheDocument();
        expect(within(informationContainer).getByText(/is not an indoor plant\./i)).toBeInTheDocument();
        expect(within(informationContainer).getByText(/care level of the plant is said to be medium\./i)).toBeInTheDocument();
      });
      
      // integration test
      it('will render the Care Guides at the top and all other options below.', () => {
        render(<Filter speciesList={mockSpeciesList} />);
    
        const names = screen.getByTestId('checkbox-option1-common_name');
        fireEvent.click(names);
    
        const sizes = screen.getByTestId('checkbox-option2-dimension');
        fireEvent.click(sizes);
    
        const careGuideCheck = screen.getByTestId('checkbox-option0-Care Guide');
        fireEvent.click(careGuideCheck);
    
        const html = document.body.innerHTML;
    
        const careGuidesIndex = html.search("Care Guides");
        const namesIndex = html.search("Names");
        const sizesIndex = html.search("Sizes");
    
        // check that index of careGuides is less than names and names index is less than sizes
        expect(careGuidesIndex).toBeLessThan(namesIndex);
        expect(namesIndex).toBeLessThan(sizesIndex);

        //expect(screen.getByText(/Care Guides/i)).toBeInTheDocument();
      });

      it('will render "Current plant = No name yet" and filters are empty on render when speciesList is empty or null.', () => {
        render(<Filter />);

        const currentPlantName = screen.getByText(/Current plant = No name yet/i);
        expect(currentPlantName).toBeInTheDocument();

      })
      /*

      it('will show you the next image on the click', () => {
        render(<Filter speciesList={mockSpeciesList} />);
    
        const names = screen.getByTestId('photos');
       fireEvent.click(photos);
    
        const html = document.body.innerHTML;
    
        const careGuidesIndex = html.search("image slides");
  
    
        // check that index of careGuides is less than names and names index is less than sizes
        expect(careGuidesIndex).toBeLessThan(namesIndex);
        expect(namesIndex).toBeLessThan(sizesIndex);

        //expect(screen.getByText(/Care Guides/i)).toBeInTheDocument();
      });

      */



    });

// u can run the tests using this command: npm test -- --testPathPattern="filtering/__tests__" 
