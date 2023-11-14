import { render, screen } from '@testing-library/react';
import Home from '@/app/search/page'
// to write more tests wrap in describe

describe('Home', () => {
    it('should have "aaaa" in the Home page component displayed', () => {
        render(<Home />) // ARRANGE 
    
        const myElem = screen.getByText('aaaa') // ACT - ACTION WERE TAKING
    
        expect(myElem).toBeInTheDocument() // ASSERT - assertion to check its as expected
    })

    it('should have a Link tag', () => {
        render(<Home />) // ARRANGE 
    
        const myElem = screen.getByRole('link', {
            name: "tmp link to test detail:Averrhoa carambola"
        }) // ACT - ACTION WERE TAKING
    
        expect(myElem).toBeInTheDocument() // ASSERT - assertion to check its as expected
    })
})

// use npm test to run all tests

