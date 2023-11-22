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







/*
describe("Options shows in display div", () => {
  const mockSpeciesList = {
    common_name: 'Test Plant',
    watering: 'Regularly',
    sunlight: 'Full Sun',
    pruning_month: '',
    maintenance: 'Low',
    drought_tolerant: true,
    salt_tolerant: false,
    fruits: true,
    indoor: true,
    care_level: 'Easy',
  };
    
    it("When the check is clicked for an option, the key and value pair should be displayed for the user in the div container called information.", () => {
        const speciesList = {
            common_name: 'Yellow Flower'
        }

        render(<Filter speciesList={speciesList} />);

        const checkBox = screen.getByTestId('checkbox-option1-common_name');
        fireEvent.click(checkBox);

        const informationContainer = screen.getByTestId('scroll-object1');
        expect(within(informationContainer).getByText(/common_name:\s*Yellow Flower/i)).toBeInTheDocument();
    })

    
    it('displays Care Reqs information when "Care Guide" is selected', () => {
    
        render(<Filter speciesList={mockSpeciesList} />);
    
        const checkBox = screen.getByTestId('checkbox-option0-Care Guide');
        fireEvent.click(checkBox);

        const informationContainer = screen.getByTestId('scroll-object1');
    
        const careGuidesElements = within(informationContainer).getAllByText(/Care Guides/i);
        expect(careGuidesElements.length).toBeGreaterThan(0);

        expect(within(informationContainer).getByText(/regularly watering\./i)).toBeInTheDocument();
        expect(within(informationContainer).getByText(/full sun\./i)).toBeInTheDocument();
        expect(within(informationContainer).getByText(/low\./i)).toBeInTheDocument();
        expect(within(informationContainer).getByText(/is drought tolerant\./i)).toBeInTheDocument();
        expect(within(informationContainer).getByText(/is not salt tolerant\./i)).toBeInTheDocument();
        expect(within(informationContainer).getByText(/grows fruits\./i)).toBeInTheDocument();
        expect(within(informationContainer).getByText(/is an indoor plant\./i)).toBeInTheDocument();
        expect(within(informationContainer).getByText(/care level of the plant is said to be easy\./i)).toBeInTheDocument();
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





    });

// u can run the tests using this command: npm test -- --testPathPattern="filtering/__tests__" 

*/