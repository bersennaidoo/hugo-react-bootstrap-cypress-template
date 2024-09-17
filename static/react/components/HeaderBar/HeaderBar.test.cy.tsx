import React from "react"
import { BrowserRouter } from "react-router-dom"
import { mount } from "@cypress/react18"
import HeaderBar from "./header-bar"

describe("HeaderBar", () => {

    beforeEach(() => {
        mount(
            <BrowserRouter>
              <HeaderBar />
            </BrowserRouter>
        )
    })

    it("should render", () => {

        cy.get(`[data-cy="header-bar-brand"]`)
    })
})
