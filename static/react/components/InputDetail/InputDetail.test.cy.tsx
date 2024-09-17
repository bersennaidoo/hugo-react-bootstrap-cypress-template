import React from "react";
import { BrowserRouter } from "react-router-dom";
import { mount } from "@cypress/react18";
import InputDetail from "./input-detail";

describe("InputDetail", () => {
  it("should allow the input field to be modified", () => {
    const placeholder = "Aslaug";
    const name = "name";
    const value = "some value";
    const readOnly = false;
    const newValue = "42";
    cy.mount(
      <InputDetail
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={cy.stub().as("onChange")}
        readOnly={readOnly}
      />
    );

    cy.contains("label", name);
    cy.findByPlaceholderText(placeholder).clear().type(newValue)
    cy.findByDisplayValue(newValue)
    cy.get("@onChange")
      .its("callCount")
      .should("eq", newValue.length + 1)
  });

  it("should not allow the input field to be modified when readonly", () => {
    const placeholder = "Aslaug";
    const name = "name";
    const value = "some value";
    const readOnly = true;
    cy.mount(
      <InputDetail
        name={name}
        value={value}
        placeholder={placeholder}
        readOnly={readOnly}
      />
    );

    cy.contains(name);
    cy.findByPlaceholderText(placeholder).should("have.attr", "readOnly");
  });
});
