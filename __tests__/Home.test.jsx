import { render, screen } from '@testing-library/react';
import ListResult from '../app/components/listResult'; 

describe('ListResult Component', () => {
  it('renders Link to detail page with data-testid', () => {

    const testData = [
      { image: { url: '', alt: 'Alt 1' }, name: 'Plant 1', score: 0.9, sciName: 'plant1', anchor: '1'},
      { image: { url: '', alt: 'Alt 2' }, name: 'Plant 2', score: 0.8, sciName: 'plant2', anchor: '2'},
    ];

    render(<ListResult data={testData} />);
    testData.forEach((result, index) => {
      const linkElements = screen.getAllByTestId('example-plant');
      expect(linkElements[index]).toBeInTheDocument();
      expect(linkElements[index]).toHaveAttribute('href', `/detail/${result.anchor}`);
    });
  });
});
