"use strict";
describe('Shop page', () => {
    it('should show entry point react', () => {
        cy.visit('http://localhost:1313/shop');
        cy.get("div").contains("Entry point react");
    });
});
