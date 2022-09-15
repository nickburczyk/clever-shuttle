import React from "react";
import {create, act} from 'react-test-renderer'
import { Router } from 'react-router-dom'
import {createMemoryHistory} from 'history'

import SearchBox from "./SearchBox";

describe("Search Box", () => {
    const history = createMemoryHistory({ initialEntries: ['/'] });
    
    const tree = create(
        <Router navigator={history} location={history.location}>
            <SearchBox/>
        </Router>
    )

    it ("should render", () => {
        expect(tree.toJSON()).toMatchSnapshot()
    }) 
})