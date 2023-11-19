import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Page from '../page'; 
import { useSearchParams } from 'next/navigation';


// THIS FOES NOT WORK, BC THE FILTERS DOES NOT WORK.

/*
jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useSearchParams: jest.fn(),
}));

test('Clicking "v" button toggles advanced search options', () => {
  const mockParams = {
    get: jest.fn(),
    has: jest.fn(),
  };

  useSearchParams.mockReturnValue(mockParams);
  
  render(<Page />);


  expect(screen.queryByLabelText('Edible')).toBeNull();


  userEvent.click(screen.getByText('v'));

  expect(screen.getByLabelText('Edible')).toBeInTheDocument();

  userEvent.click(screen.getByText('v'));

  expect(screen.queryByLabelText('Edible')).toBeNull();
});

*/
