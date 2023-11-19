import React from 'react';
import {render, fireEvent, screen, queryByText, within} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import Filter from '../filter'; 



describe("Options shows in display div", () => {

    
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
      
})

// u can run the tests using this command: npm test -- --testPathPattern="filtering/__tests__" 

