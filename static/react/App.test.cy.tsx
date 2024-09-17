import React from "react";
import { mount } from "@cypress/react18"
import App from "./App"

describe("Entry Point", () => {

    it("should render the app page", () => {
        mount(<App />)
        cy.get("div").contains("Entry point react")
    })
})
