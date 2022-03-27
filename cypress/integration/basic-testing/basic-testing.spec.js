// basic-testing.spec.js created with Cypress

const table = "1\t2013-01-01\t2013-01-31\tFAW\n" +
    "2\t2013-02-01\t2013-02-29\tPAED\n" +
    "3\t2013-03-04\t2013-03-05\tEFAW\n" +
    "4\t2013-04-05\t2013-06-29\tEFAW";
const tableSplit = table.split("\n").map(line => line.split("\t"));

const students = "1\tRich Newman-Flint\n" +
    "3\tBob Smith";
const studentsSplit = students.split("\n").map(line => line.split("\t"));

describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('http://localhost')
    });

    it('displays table with correct data', () => {
        cy.get('tr').should('have.length', 5);
        cy.get('tr').each(($rowEl, rowIndex, $list) => {
            if (rowIndex > 0) {
                const tdElements = cy.wrap($rowEl).find('td');
                tdElements.should('have.length', 5);
                tdElements.each(($colEl, columnIndex, $list) => {
                    if (columnIndex > 0) {
                        const colElements = cy.wrap($colEl);
                        colElements.should('have.text', tableSplit[rowIndex - 1][columnIndex - 1]);
                    }
                });
            }
        });
    });

    it('displays students table with correct data', () => {
        cy.get('[data-testid="parent-table-cell-expand-collapse"]').should('have.length', 4);
        cy.get('[data-testid="parent-table-cell-expand-collapse"] button').first().click();
        cy.get('[data-testid="sub-table-row"]').should('have.length', 2);
        cy.get('[data-testid="sub-table-row"]').each(($rowEl, rowIndex, $list) => {
            const tdElements = cy.wrap($rowEl).find('td');
            tdElements.should('have.length', 2);
            tdElements.each(($colEl, columnIndex, $list) => {
                const colElements = cy.wrap($colEl);
                colElements.should('have.text', studentsSplit[rowIndex][columnIndex]);
            });
        });
    });
});
