import React from "react";
import { mount } from "@cypress/react18";
import ButtonFooter from "./button-footer";
import { FaEdit, FaRegSave } from "react-icons/fa";

describe("ButtonFooter", () => {
  const doAssertions = (label: "Cancel" | "Save" | "Edit" | "Delete") => {
    cy.contains(label);
    cy.get(".btn").click();

    cy.get("@click").should("be.called");
    cy.get("svg").should("be.visible");
  };

  it("should render a button with the label Edit and trigger a onClick", () => {
    // Arrange
    const label = "Edit";
    const classBtn = "btn-primary btn-lg"
    mount(
      <ButtonFooter
        label={label}
        classBtn={classBtn}
        IconClass={FaEdit}
        onClick={cy.stub().as("click")}
      />
    );

    doAssertions(label)
  });

  it("should render a button with the label Save and trigger a onClick", () => {
    // Arrange
    const label = "Save";
    const classBtn = "btn-warning btn-lg"
    mount(
      <ButtonFooter
        label={label}
        classBtn={classBtn}
        IconClass={FaRegSave}
        onClick={cy.stub().as("click")}
      />
    );

    doAssertions(label)
  });
});
