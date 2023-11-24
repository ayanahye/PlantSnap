import {render, screen} from '@testing-library/react';
import Page from "../page";


global.fetch = jest.fn(() => {
        let tmp = {
            drought_tolerant: false,
            edible_fruit: false,
            edible_leaf: false,
            flowers: false,
            indoor: false,
            leaf: false,
            medicinal: false,
            poisonous_to_humans: 0,
            tropical: false,
            common_name: "test",
            cycle: "test",
            description: "test",
            dimension: "loading",
            family: "test",
            id: 0,
            default_image: {regular_url: "/images/no_image.jpg"},
            scientific_name: ["test"],
            sunlight: ["test"],
            type: "test",
            watering: "test"
        }
        return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(tmp),
        })
    }
);
let p = {
    name: "test"
}
it('renders', async () => {
    render(<Page params={p}/>);
    setTimeout(test1,10)//wait for fetch
});

function test1() {
    expect(screen.getByText('test')).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledTimes(2);
}
