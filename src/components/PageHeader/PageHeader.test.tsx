import { create } from 'react-test-renderer'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import PageHeader from "./PageHeader";

describe("Search Box", () => {
    const history = createMemoryHistory({ initialEntries: ['/'] });

    it ("should render with title `Hello World`", () => {
        const tree = create(
            <Router navigator={history} location={history.location}>
                <PageHeader title={"Hello World!"}/>
            </Router>
        )
        expect(tree.toJSON()).toMatchSnapshot()
    })
    
    it ("should render with title `Welcome to the thunderdome!`", () => {
        const tree = create(
            <Router navigator={history} location={history.location}>
                <PageHeader title={"Welcome to the thunderdome"}/>
            </Router>
        )
        expect(tree.toJSON()).toMatchSnapshot()
    })
})