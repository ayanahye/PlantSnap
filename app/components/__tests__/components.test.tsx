import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import Dropdown from '../dropdown';
import PlantIcons from '../plantIcons';

describe('Dropdown Component', () => {
    it('The isChecked property should be updated when the checkbox is clicked', () => {
        const mockHandleCheckboxChange = jest.fn();

        const { getByLabelText } = render (
            <Dropdown 
                data={['origin', 'type', 'dimension']}
                name="Names"
                onOptionChange={mockHandleCheckboxChange}
                id="option1"
            />
        );

        const checkbox = screen.getByLabelText('origin');

        expect(checkbox).not.toBeChecked();

        fireEvent.click(checkbox);

        expect(checkbox).toBeChecked();

        expect(mockHandleCheckboxChange).toHaveBeenCalledWith('checkbox-option1-origin', "origin", true);
    });
});

describe('Planticons display', () => {
    it("should display the correct icons", () => {
        const plantDetail = {
            drought_tolerant: true,
            indoor: false,
            flowers: true,
            leaf: false,
            edible_fruit: true,
            edible_leaf: false,
            medicinal: true,
        };

        const { getByAltText } = render(<PlantIcons plantDetail={plantDetail} />);

        expect(getByAltText('drought_tolerant')).toBeInTheDocument();
        expect(getByAltText('flowers')).toBeInTheDocument();
        expect(getByAltText('edible')).toBeInTheDocument();
        expect(getByAltText('medicinal')).toBeInTheDocument();
    })
});

// run test using npm test -- --testPathPattern="components/__tests__" 