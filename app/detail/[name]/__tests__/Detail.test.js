/*

import { render, screen } from '@testing-library/react';
import MyPage from '../page';


global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ data: [{ id: 'fakeId' }] }),
  })
);

it('renders', async () => {
  render(<MyPage params={{ name: 'test' }} />);
  

  await screen.findByText('test');

  expect(screen.getByText('test')).toBeTruthy();
  expect(global.fetch).toHaveBeenCalledTimes(2); 
});

*/

