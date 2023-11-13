import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Dropdown from '../dropdown';

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

        const checkbox = getByLabelText('origin');

        expect(checkbox).not.toBeChecked();

        fireEvent.click(checkbox);

        expect(checkbox).toBeChecked();

        expect(mockHandleCheckboxChange).toHaveBeenCalledWith('checkbox-option1-origin', "origin", true);
    });
})

// run test using npm test -- --testPathPattern="components/__tests__" ?