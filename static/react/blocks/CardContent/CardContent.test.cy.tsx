import React from "react";
import { mount } from "@cypress/react18";
import CardContent from "./card-content"

describe("CardContent", () => {
    it("should render the card content block", () => {
        const name = "Bjorn Ironside"
        const description = "king of 9th century Sweden"

        mount(<CardContent name={name} description={description} />)

        cy.contains(name)
        cy.contains(description)
    })
})
