import React from "react";
import { BrowserRouter } from "react-router-dom";
import { mount } from "@cypress/react18";
import HeaderBarBrand from "./header-bar-brand";

describe("HeaderBarBrand", () => {
  beforeEach(() => {
    mount(
      <BrowserRouter>
        <HeaderBarBrand />
      </BrowserRouter>
    );
  });

  it("should verify external link attributes", () => {
    cy.get("a")
      .should("have.attr", "href", "https://reactjs.org/")
      .and("have.attr", "target", "_blank")
      .and("have.attr", "rel", "noopener noreferrer");

    cy.get(`[data-cy="header-bar-brand"]`).within(() => cy.get("svg"));
  });

  it("should verify internal link spans and navgation", () => {

    cy.get(`[data-cy="navLink"]`).within(() =>
      ["TOUR", "OF", "HEROES"].forEach((part: string) =>
        cy.contains("span", part)
      )
    );
    cy.get(`[data-cy="navLink"]`).click();
    cy.url().should("contain", "/shop");
  });
});
