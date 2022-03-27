// basic-testing.spec.js created with Cypress

const table = "1\t2013-01-01\t2013-01-31\tFAW\n" +
    "2\t2013-02-01\t2013-02-29\tPAED\n" +
    "3\t2013-03-04\t2013-03-05\tEFAW\n" +
    "4\t2013-04-05\t2013-06-29\tEFAW".split("\n").map(line => line.split("\t"));

describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('http://localhost')
    });

    it('displays two todo items by default', () => {
        cy.get('tr').should('have.length', 5);
        cy.get('tr').each(($el, index, $list) => {
            if (index > 0) {
                const tdElements = cy.wrap($el).find('td');
                tdElements.should('have.length', 5);
                tdElements.eq(1).should('contain', table[index][0]);
                tdElements.eq(2).should('contain', table[index][1]);
                tdElements.eq(3).should('contain', table[index][2]);
                tdElements.eq(4).should('contain', table[index][3]);
            }
        });
    });
});
