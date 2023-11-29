import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Page from '../page';
import {http, HttpResponse} from 'msw'
import {setupServer} from "msw/node";
import {perenual_search_test_value} from "../../globalTypes";


jest.mock('next/navigation', () => ({
    useSearchParams: () => ({
        get: () => "",
        has: () => false
    }),
}));
jest.mock("react", () => ({
    ...jest.requireActual('react'),
    useOptimistic: () => [false, (b) => {
    }]
}))
const server = setupServer(
    http.post('/.netlify/functions/search', async ({request}) => {
        return HttpResponse.json(perenual_search_test_value)
    })
)
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

// integration test - advanced search works after fetching api from the netlify function
describe("test search page", () => {
    test('Clicking "v" button toggles advanced search options', async () => {
        render(<Page/>);

        expect(screen.getByTestId('input')).toHaveClass("false");

        await userEvent.click(screen.getByText('v'));

        expect(screen.getByTestId('input')).not.toHaveClass("false");

        await userEvent.click(screen.getByText('v'));

        expect(screen.getByTestId('input')).toHaveClass("false");
    });
})




