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
})

// u can run the tests using this command: npm test -- --testPathPattern="filtering/__tests__" 

